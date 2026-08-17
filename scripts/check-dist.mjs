// Refuses to package or deploy a dist/ that was never prerendered.
//
// This exists because the same regression has now happened twice: someone runs
// `vite build` (or `npm run build:nossg`), which produces a dist/ containing
// exactly one HTML file and no sitemap.xml, then zips and uploads it. The build
// succeeds, every existing gate passes, and production silently reverts to
// serving one byte-identical SPA shell for every URL — each declaring
// canonical → "/", which deduplicates the entire site into the home page.
//
// On 2026-08-17 that was live: all 133 US service/industry/state URLs returned
// the same 7,508-byte empty shell. Nothing in the build failed.
//
// Only `npm run build` chains scripts/prerender.mjs, and only prerender writes
// the per-page HTML and dist/sitemap.xml. So those two artefacts are exactly
// what distinguishes a deployable dist/ from a broken one.
//
//   node scripts/check-dist.mjs
//
// Exit code is non-zero on failure so it can gate `npm run package`.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');

// A prerendered build writes one file per route. The exact count drifts as
// routes are added, so assert a floor well below the real number (~240) but far
// above the 1 that a prerender-less build produces.
const MIN_HTML_FILES = 100;

const problems = [];

function countHtml(dir) {
  let n = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) n += countHtml(p);
    else if (e.name.endsWith('.html')) n++;
  }
  return n;
}

if (!fs.existsSync(DIST)) {
  problems.push('dist/ does not exist — run `npm run build`.');
} else {
  const sitemap = path.join(DIST, 'sitemap.xml');
  if (!fs.existsSync(sitemap)) {
    problems.push(
      'dist/sitemap.xml is missing. Only scripts/prerender.mjs writes it, so this\n' +
        '  dist/ came from `vite build` / `npm run build:nossg`, not `npm run build`.',
    );
  } else {
    const locs = [...fs.readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].length;
    if (locs < MIN_HTML_FILES) {
      problems.push(`dist/sitemap.xml lists only ${locs} URLs — expected at least ${MIN_HTML_FILES}.`);
    }
  }

  const html = countHtml(DIST);
  if (html < MIN_HTML_FILES) {
    problems.push(
      `dist/ contains only ${html} HTML file(s) — expected at least ${MIN_HTML_FILES}.\n` +
        '  A prerender-less build produces exactly 1 (index.html), and uploading it\n' +
        '  makes every URL serve the empty SPA shell with canonical → "/".',
    );
  }
}

if (problems.length) {
  console.error('\ncheck-dist: dist/ is NOT deployable\n');
  for (const p of problems) console.error('  ✗ ' + p);
  console.error('\n  Fix: npm run build   (NOT `vite build` / `npm run build:nossg`)\n');
  process.exit(1);
}

console.log('check-dist: dist/ looks prerendered and deployable.');

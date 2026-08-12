// Validates the hreflang pair table against what the build actually produced.
//
// An hreflang cluster is only valid when every URL it names is the canonical URL
// of the page it names. Two things break that, and both have happened here:
//
//   1. A pair whose UK side is a stub. The stub calls no SEO hook, so the
//      index.html shell values survive and it canonicalises to the US home page.
//      The US page then advertises a counterpart that disclaims itself.
//      (Eight such pairs were live until 2026-08-11.)
//   2. A trailing-slash drift. hreflang hrefs are written verbatim, so
//      ".../uk/foo" in the table against ".../uk/foo/" in the page is a
//      mismatch even though both resolve to the same document.
//
// Semrush reports either as "hreflang conflicts within page source code"
// (32 of them in the 2026-08-10 audit). Run this after `npm run build`:
//
//     node scripts/check-hreflang.mjs
//
// Exits non-zero on any mismatch, so it can gate a deploy.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAIRS } from '../src/utils/hreflang.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const ORIGIN = 'https://www.miltafs.com';

// Mirrors the layout prerender.mjs writes: a trailing-slash route becomes a
// directory with index.html, everything else becomes <name>.html — and a route
// that is both a page and a parent is written as both.
function fileFor(url) {
  const p = url.slice(ORIGIN.length);
  if (p === '/') return path.join(DIST, 'index.html');
  const bare = p.replace(/\/+$/, '').replace(/^\//, '');
  for (const c of [path.join(DIST, `${bare}.html`), path.join(DIST, bare, 'index.html')]) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

const canonicalOf = (file) =>
  (fs.readFileSync(file, 'utf8').match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || null;

if (!fs.existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const problems = [];
for (const [us, uk] of PAIRS) {
  for (const [side, url] of [
    ['US', us],
    ['UK', uk],
  ]) {
    const file = fileFor(url);
    if (!file) {
      problems.push(`${side} ${url}\n     no prerendered file — the route did not build`);
      continue;
    }
    const canonical = canonicalOf(file);
    if (canonical !== url) {
      problems.push(
        `${side} ${url}\n     page canonical is ${canonical || '(none)'}` +
          `\n     (${path.relative(DIST, file)})`,
      );
    }
  }
}

// A page must never be named by a cluster it is not itself part of, and every
// cluster must contain its own page. Both hold by construction in hreflang.js —
// this only re-checks the half that depends on the built output.
console.log(`hreflang pair table: ${PAIRS.length} pairs, ${PAIRS.length * 2} pages`);
if (problems.length) {
  console.error(`\n${problems.length} conflict(s) — these URLs are not self-canonical:\n`);
  problems.forEach((p) => console.error(`  ${p}\n`));
  console.error('Remove the pair from src/utils/hreflang.js, or give the page a');
  console.error('self-referencing canonical. Do not ship hreflang pointing at either.');
  process.exit(1);
}
console.log('All pair URLs are self-canonical. No hreflang conflicts.');

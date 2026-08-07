// Post-deploy check: does the live site actually serve each page, or is the SPA
// fallback answering for everything?
//
// This exists because of what production looked like on 2026-08-07: only part of
// dist/ had been uploaded and the .htaccess rewrite was missing, so every URL
// returned a byte-identical copy of the home page with canonical → "/". Google
// deduplicated the whole site into one page. Nothing in the build catches that —
// the build was fine. Only the live server can be asked.
//
//   node scripts/verify-deploy.mjs                 # every URL in dist/sitemap.xml
//   node scripts/verify-deploy.mjs /about /contact # just these paths
//
// Exit code is non-zero if any URL fails, so it can gate a deploy.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ORIGIN = 'https://www.miltafs.com';

// The live host rate-limits a fast sequential sweep: a 49-URL run on 2026-08-07
// came back with empty bodies partway through, which reads exactly like a broken
// deploy. Keep this gentle so a throttle is never mistaken for a finding.
const CONCURRENCY = 2;
const DELAY_MS = 250;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const normalise = (u) => (u.replace(/\/+$/, '') || '/').toLowerCase();

function urlsFromSitemap() {
  const file = path.join(ROOT, 'dist', 'sitemap.xml');
  if (!fs.existsSync(file)) {
    throw new Error('dist/sitemap.xml not found — run `npm run build` first.');
  }
  return [...fs.readFileSync(file, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2).filter((a) => a.startsWith('/'));
const urls = args.length ? args.map((p) => `${ORIGIN}${p}`) : urlsFromSitemap();

// The home page is the fallback body. Any other URL that returns the same byte
// count is being served the home page rather than its own document.
let homeSize = null;

async function check(url) {
  try {
    const res = await fetch(url, { redirect: 'manual' });
    const body = res.status >= 200 && res.status < 300 ? await res.text() : '';
    const size = body.length;
    const canonical = body.match(/<link rel="canonical" href="([^"]+)"/)?.[1] || null;
    const title = body.match(/<title>([^<]*)<\/title>/)?.[1] || null;

    if (res.status >= 300 && res.status < 400) {
      return { url, ok: false, why: `${res.status} → ${res.headers.get('location')}` };
    }
    if (res.status !== 200) return { url, ok: false, why: `HTTP ${res.status}` };
    if (!canonical) return { url, ok: false, why: 'no canonical in served HTML' };
    if (normalise(canonical) !== normalise(url)) {
      return { url, ok: false, why: `canonical → ${canonical}` };
    }
    if (homeSize !== null && size === homeSize && normalise(url) !== normalise(`${ORIGIN}/`)) {
      return { url, ok: false, why: `identical to home page (${size}b) — fallback served` };
    }
    return { url, ok: true, size, title };
  } catch (err) {
    return { url, ok: false, why: err.message };
  }
}

async function main() {
  // Measure the fallback body first so every later comparison has a baseline.
  const home = await fetch(`${ORIGIN}/`).then((r) => r.text());
  homeSize = home.length;
  console.log(`Home page is ${homeSize}b — any other URL of that exact size is the fallback.\n`);
  console.log(`Checking ${urls.length} URLs…\n`);

  const queue = [...urls];
  const failures = [];
  let done = 0;

  async function worker() {
    while (queue.length) {
      const url = queue.shift();
      if (!url) break;
      const r = await check(url);
      done += 1;
      if (r.ok) {
        process.stdout.write(`  ok   ${url}  (${r.size}b)\n`);
      } else {
        failures.push(r);
        process.stdout.write(`  FAIL ${url}  ${r.why}\n`);
      }
      await sleep(DELAY_MS);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  console.log(`\n${'─'.repeat(70)}`);
  console.log(`Checked : ${done}`);
  console.log(`Passing : ${done - failures.length}`);
  console.log(`Failing : ${failures.length}`);
  if (failures.length) {
    console.log('\nFAILURES');
    failures.forEach((f) => console.log(`  ${f.url}\n    ${f.why}`));
    console.log(
      '\nIf most failures say "identical to home page", dist/ is not fully uploaded\n' +
        'or the .htaccess rewrite in deploy/htaccess-patch.txt is not applied.',
    );
  }
  console.log('─'.repeat(70));
  if (failures.length) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

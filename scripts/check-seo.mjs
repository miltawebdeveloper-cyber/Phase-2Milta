// Build-time audit of dist/, checking the issue classes Semrush reported on
// 2026-08-10. Every check here corresponds to a line in that report, so a clean
// run means the build is not reintroducing anything that was fixed on
// 2026-08-11. Run after `npm run build`:
//
//     node scripts/check-seo.mjs
//
// Exit code is non-zero if any check fails. This looks only at what the build
// produced — whether the server actually serves it is a different question, and
// scripts/verify-deploy.mjs is the one that asks it.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const ORIGIN = 'https://www.miltafs.com';

if (!fs.existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const htmlFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.html')) htmlFiles.push(p);
  }
})(DIST);

const rel = (f) => path.relative(DIST, f).replace(/\\/g, '/');
const failures = [];
const record = (check, lines) => {
  if (lines.length) failures.push({ check, lines });
  const mark = lines.length ? 'FAIL' : 'ok  ';
  console.log(`${mark} ${check}${lines.length ? ` — ${lines.length} problem(s)` : ''}`);
  lines.slice(0, 12).forEach((l) => console.log(`       ${l}`));
  if (lines.length > 12) console.log(`       … and ${lines.length - 12} more`);
};

// ── "8 incorrect pages found in sitemap.xml" ─────────────────────────────────
// A sitemap may only contain URLs that are canonical and return 200. Here that
// reduces to: the page at this URL must declare THIS URL as its canonical.
{
  const sitemap = path.join(DIST, 'sitemap.xml');
  const problems = [];
  if (!fs.existsSync(sitemap)) {
    problems.push('dist/sitemap.xml was not generated');
  } else {
    const urls = [...fs.readFileSync(sitemap, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      (m) => m[1],
    );
    const seen = new Set();
    for (const u of urls) {
      if (seen.has(u)) problems.push(`duplicate entry: ${u}`);
      seen.add(u);
      if (!u.startsWith(`${ORIGIN}/`) && u !== ORIGIN) {
        problems.push(`wrong host: ${u}`);
        continue;
      }
      // The trailing slash is not cosmetic — it decides which file Apache
      // serves. A slash URL is answered by DirectoryIndex (<path>/index.html);
      // a slash-less URL is answered by the block-3 rewrite (<path>.html).
      // So the URL's form must match the file the build actually wrote, or the
      // canonical names a URL that falls through to the SPA shell. The
      // normalise() used elsewhere ignores trailing slashes by design, which is
      // exactly why this drift went unnoticed across 27 pages until 2026-08-11.
      const raw = u.slice(ORIGIN.length);
      const p = raw.replace(/\/+$/, '').replace(/^\//, '');
      const wantsDir = raw === '/' || raw.endsWith('/');
      const dirFile = path.join(DIST, p, 'index.html');
      const flatFile = p === '' ? path.join(DIST, 'index.html') : path.join(DIST, `${p}.html`);
      const file = wantsDir
        ? fs.existsSync(dirFile) && dirFile
        : fs.existsSync(flatFile) && flatFile;
      if (!file) {
        const other = wantsDir ? flatFile : dirFile;
        problems.push(
          fs.existsSync(other)
            ? `wrong URL form: ${u} — built as ${rel(other)}, so that URL will not serve it`
            : `no file built for: ${u}`,
        );
        continue;
      }
      const canonical = (fs.readFileSync(file, 'utf8').match(
        /<link rel="canonical" href="([^"]*)"/,
      ) || [])[1];
      if (canonical !== u) problems.push(`not self-canonical: ${u} declares ${canonical}`);
    }
    console.log(`     (${urls.length} sitemap URLs)`);
  }
  record('sitemap contains only canonical, built URLs', problems);
}

// ── "18 images don't have alt attributes" ────────────────────────────────────
{
  const problems = [];
  for (const f of htmlFiles) {
    for (const m of fs.readFileSync(f, 'utf8').matchAll(/<img\b[^>]*>/gi)) {
      if (/\balt\s*=/.test(m[0])) continue;
      const src = (m[0].match(/\bsrc="([^"]*)"/) || [])[1] || '(no src)';
      problems.push(`${rel(f)}  ${src.slice(0, 90)}`);
    }
  }
  record('every <img> has an alt attribute', problems);
}

// ── "72 links have non-descriptive anchor text" ──────────────────────────────
// Only <a> elements count; a <button> with the same label is not a link and is
// not what this issue is about. Text is taken with markup stripped, so an
// off-screen <span> suffix (the pattern used in uk ServicesSection) counts —
// which is exactly why it is a valid fix.
{
  const GENERIC =
    /^(click here|read more|learn more|more|here|this|link|view more|see more|details|know more|continue reading|read|view|go|find out more|discover more|see details|submit)\.?$/i;
  const problems = [];
  const counts = new Map();
  for (const f of htmlFiles) {
    for (const m of fs.readFileSync(f, 'utf8').matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)) {
      const text = m[1]
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      // An anchor wrapping only an image takes its alt text as the label; that
      // is handled by the alt check above, not here.
      if (!text) continue;
      if (!GENERIC.test(text)) continue;
      counts.set(text, (counts.get(text) || 0) + 1);
    }
  }
  for (const [text, n] of counts) problems.push(`"${text}" × ${n}`);
  record('no generic anchor text', problems);
}

// ── "54 issues with unminified JavaScript and CSS files" ─────────────────────
// Vite minifies its own output; the risk is a stylesheet the build writes
// itself, which is how the 776 KB prerender sheet shipped unminified.
{
  const problems = [];
  const assets = path.join(DIST, 'assets');
  if (fs.existsSync(assets)) {
    for (const name of fs.readdirSync(assets)) {
      if (!/\.(css|js)$/.test(name)) continue;
      const text = fs.readFileSync(path.join(assets, name), 'utf8');
      const lines = text.split('\n').length;
      const bytes = Buffer.byteLength(text);
      // Minified output is a handful of very long lines. A file averaging under
      // ~200 bytes per line is pretty-printed.
      if (lines > 20 && bytes / lines < 200) {
        problems.push(`${name}: ${lines} lines, ${(bytes / 1024).toFixed(0)} KB — looks unminified`);
      }
    }
  }
  record('build assets are minified', problems);
}

// ── hreflang self-reference ("32 hreflang conflicts") ────────────────────────
// Cross-checked against the pair table by scripts/check-hreflang.mjs; here we
// assert the rendered result: if a page emits any alternate, one of them must
// name the page's own canonical.
{
  const problems = [];
  for (const f of htmlFiles) {
    const html = fs.readFileSync(f, 'utf8');
    const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
    if (!alts.length) continue;
    const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
    if (!alts.some(([, , href]) => href === canonical)) {
      problems.push(
        `${rel(f)} canonical=${canonical} but alternates are ` +
          alts.map(([, lang, href]) => `${lang}:${href}`).join(', '),
      );
    }
  }
  record('every page with hreflang self-references', problems);
}

console.log();
if (failures.length) {
  console.error(`${failures.length} check(s) failed.`);
  process.exit(1);
}
console.log('All SEO checks passed.');

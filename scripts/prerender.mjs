// Static prerender for the SPA.
//
// The site ships as a client-rendered React bundle, so the HTML every crawler
// receives is the empty shell in index.html: no <h1>, no body copy, and — the
// expensive part — no <a href> anywhere. A crawler that starts at / therefore
// finds exactly one page and stops. (Semrush's 2026-08-04 audit reached 5 URLs
// out of the 161 in the sitemap for precisely this reason.)
//
// This script runs after `vite build`. It serves dist/ locally, drives the real
// Chrome that is already installed on the machine over every route in App.jsx,
// waits for React and useFullSEO to finish, and writes the resulting DOM back
// into dist/ as static HTML. The page still boots React afterwards — the static
// markup is the pre-boot payload, not a replacement for the app.
//
// Output layout mirrors the URL exactly, because canonicals and hreflang in this
// codebase are written with deliberate trailing slashes (see utils/hreflang.js):
//
//   /                                  -> dist/index.html
//   /about                             -> dist/about.html
//   /us/software/xero-for-small-business/  -> dist/us/software/.../index.html
//
// The ".html" form needs one rewrite rule in .htaccess to be served at the
// extensionless URL; see deploy/htaccess-patch.txt. Without it those routes
// simply fall through to the old SPA shell — nothing breaks, they just stay
// unprerendered.

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const APP = path.join(ROOT, 'src', 'App.jsx');
const ORIGIN = 'https://www.miltafs.com';

// Runtime (emotion/MUI) CSS needs care. In a production build emotion runs in
// "speedy" mode: it calls CSSStyleSheet.insertRule directly, so the
// <style data-emotion> tags in <head> carry ZERO bytes of textContent and none
// of MUI's CSS survives outerHTML serialisation. An earlier version of this file
// assumed those tags held ~100 KB of markup and stripped them to save weight —
// they were always empty, so the strip saved nothing and the prerendered pages
// shipped with no component CSS at all.
//
// Measured consequence (2026-08-07, home page, JS disabled): the header logo
// painted 1280x622px instead of 140x68px and the document was 86,814px tall
// instead of 9,121px, because every emotion-styled Box lost its width. That is
// the "giant logo, then the page snaps into place" reload behaviour.
//
// The rules are therefore read out of the CSSOM (the only place they exist) and
// written to ONE shared stylesheet linked by every prerendered page, so the
// pre-boot paint is styled and the cost is paid once and cached, rather than
// inlined into all 181 files.
const PRERENDER_CSS_NAME = 'prerender';

// Authoring UI: no reason to prerender or list it.
const EXCLUDE = new Set(['/uk/addblog']);

const CONCURRENCY = 4;

// ── Routes ────────────────────────────────────────────────────────────────────

// Reads the route table straight out of App.jsx so this script cannot drift
// from the router. Every <Route> in that file is a single line, and nesting is
// tracked with a stack so /uk children resolve to /uk/<child>.
function extractRoutes(src) {
  const out = [];
  const stack = [];
  for (const line of src.split('\n')) {
    const open = line.match(/<Route\s+(index\b|path="([^"]*)")/);
    if (open) {
      const parent = stack.length ? stack[stack.length - 1] : '';
      const raw = open[2];
      let full;
      if (open[1] === 'index') full = parent || '/';
      else if (raw.startsWith('/')) full = raw;
      else full = `${parent.replace(/\/$/, '')}/${raw}`;
      out.push(full);
      // An opening (non self-closing) <Route> wraps children.
      if (!/\/>\s*$/.test(line)) stack.push(full);
    }
    if (/<\/Route>/.test(line)) stack.pop();
  }
  return out;
}

const allRoutes = extractRoutes(fs.readFileSync(APP, 'utf8'));
const dynamicRoutes = allRoutes.filter((r) => r.includes(':'));
// `node scripts/prerender.mjs /about /contact` renders just those routes, which
// is how you check one page without waiting for the whole site. Note that a
// partial run also writes a partial sitemap.xml, so it is a debugging aid only.
const only = process.argv.slice(2).filter((a) => a.startsWith('/'));
const staticRoutes = only.length
  ? only
  : [...new Set(allRoutes.filter((r) => !r.includes(':') && !EXCLUDE.has(r)))];

// ── Local server (mimics the production Apache lookup order) ─────────────────

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function resolveFile(urlPath) {
  const rel = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
  const base = path.join(DIST, rel);
  const candidates = [base, path.join(base, 'index.html'), `${base.replace(/\/$/, '')}.html`];
  for (const c of candidates) {
    if (c.startsWith(DIST) && fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }
  return path.join(DIST, 'index.html'); // SPA fallback, same as production
}

function startServer() {
  const server = http.createServer((req, res) => {
    const file = resolveFile(req.url);
    const body = fs.readFileSync(file);
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(body);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

// ── Chrome ───────────────────────────────────────────────────────────────────

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].filter(Boolean);
  const found = candidates.find((c) => fs.existsSync(c));
  if (!found) {
    throw new Error(
      'No Chrome or Edge binary found. Set CHROME_PATH to a Chromium-based browser executable.',
    );
  }
  return found;
}

// ── Render ───────────────────────────────────────────────────────────────────

// Serialises the DOM after React has rendered. Runs in page context.
function serialise() {
  // Tag manager injects its own <script> into <head> at runtime; that belongs to
  // the live page, not to the static payload (the inline GTM snippet is already
  // in the shell and re-runs for real visitors).
  document
    .querySelectorAll('script[src*="googletagmanager.com"], script[src*="google-analytics.com"]')
    .forEach((el) => el.remove());

  // Harvest the component CSS before touching anything: it lives only in the
  // CSSOM, so it has to be read as rules rather than as element text.
  const css = [];
  for (const sheet of document.styleSheets) {
    if (!sheet.ownerNode || !sheet.ownerNode.hasAttribute?.('data-emotion')) continue;
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue; // cross-origin sheet, not ours
    }
    for (const rule of rules) css.push(rule.cssText);
  }

  // The tags themselves are empty shells once the rules are captured; React
  // recreates and refills them on boot.
  document.querySelectorAll('style[data-emotion]').forEach((el) => el.remove());

  // framer-motion writes its entry animation into inline styles. Anything it
  // never got to reveal is left at opacity:0 — text a crawler is entitled to
  // treat as deliberately hidden. React re-applies the real animation styles the
  // moment it boots, so clearing them here only affects the pre-boot paint.
  document.querySelectorAll('[style]').forEach((el) => {
    const s = el.getAttribute('style');
    if (!s || !/opacity:\s*0|transform:\s*translate/.test(s)) return;
    const cleaned = s
      .replace(/opacity:\s*0(\.\d+)?\s*;?/g, '')
      .replace(/transform:\s*translate[^;]*;?/g, '')
      .trim();
    if (cleaned) el.setAttribute('style', cleaned);
    else el.removeAttribute('style');
  });

  // Build-time comments (the head-order notes in index.html) are pure weight in
  // the delivered payload.
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_COMMENT);
  const comments = [];
  while (walker.nextNode()) comments.push(walker.currentNode);
  comments.forEach((c) => {
    // Keep the GTM markers: they bracket code that has to stay recognisable.
    if (/Google Tag Manager/i.test(c.nodeValue)) return;
    c.remove();
  });

  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || null;
  const h1s = document.querySelectorAll('h1').length;
  const links = [...document.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href'));
  const text = (document.querySelector('#root')?.innerText || '').trim();

  return {
    html: `<!DOCTYPE html>\n${document.documentElement.outerHTML}`,
    canonical,
    title: document.title,
    h1s,
    links,
    words: text ? text.split(/\s+/).length : 0,
    text,
    css,
  };
}

async function renderRoute(page, port, route) {
  await page.goto(`http://127.0.0.1:${port}${route}`, {
    waitUntil: 'networkidle2',
    timeout: 60000,
  });

  // Wait out the Suspense fallback: every route is lazy-loaded, so the first
  // paint is a MUI spinner with no content behind it. The content threshold is
  // deliberately low — a page that renders almost nothing is a finding to
  // report, not a reason to fail the build.
  await page.waitForFunction(
    () => {
      const root = document.querySelector('#root');
      if (!root || root.querySelector('.MuiCircularProgress-root')) return false;
      return (root.innerText || '').trim().length > 0;
    },
    { timeout: 45000, polling: 250 },
  );

  // framer-motion holds whileInView content at opacity:0 until it scrolls into
  // view. Walk the page so that copy is materialised in the snapshot.
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.8);
    // scrollHeight grows as sections mount, so it is re-read every iteration
    // rather than captured once.
    for (let y = 0, guard = 0; y < document.body.scrollHeight && guard < 120; y += step, guard++) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 400));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });

  return page.evaluate(serialise);
}

// The stylesheet <link> goes immediately after the bundle's own stylesheets, so
// the head order this codebase maintains (…CSS, JS, JSON-LD last) still holds.
function injectStylesheet(html, href) {
  const tag = `<link rel="stylesheet" href="${href}">`;
  const last = html.lastIndexOf('<link rel="stylesheet"');
  if (last === -1) return html.replace('</head>', `${tag}</head>`);
  const end = html.indexOf('>', last) + 1;
  return `${html.slice(0, end)}${tag}${html.slice(end)}`;
}

// A route with no trailing slash normally becomes `<name>.html`. But when other
// routes live underneath it (/uk has /uk/about, /uk/contact, …) dist/ also ends
// up with a real `uk/` directory, and Apache's DirectorySlash then 301s /uk to
// /uk/ — which served a 403 in production on 2026-08-07, because nothing had
// put an index.html in that directory. Parent routes are therefore written
// twice, so the URL resolves whichever way Apache reaches it.
function outputPaths(route) {
  if (route === '/') return [path.join(DIST, 'index.html')];
  const clean = route.replace(/^\//, '');
  if (route.endsWith('/')) return [path.join(DIST, clean, 'index.html')];
  const paths = [path.join(DIST, `${clean}.html`)];
  if (allRoutes.some((r) => r.startsWith(`${route}/`))) {
    paths.push(path.join(DIST, clean, 'index.html'));
  }
  return paths;
}

const normalise = (p) => (p.replace(/\/+$/, '') || '/').toLowerCase();

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html not found — run `vite build` first.');
  }

  const { server, port } = await startServer();
  const browser = await puppeteer.launch({
    executablePath: findChrome(),
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });

  const results = [];
  const failures = [];
  const empty = [];
  // Rules are unioned in first-seen order across routes: a Set preserves
  // insertion order, so the cascade within any single page is unchanged and
  // later routes only ever append rules the earlier ones did not use.
  const cssUnion = new Set();
  const written = [];
  const queue = [...staticRoutes];
  const seen = new Set(queue.map(normalise));
  // Blog posts are Supabase rows, not routes. The rendered index pages know the
  // real slugs, so discovered links feed back into the queue.
  const discoverFrom = new Set(['/blogs', '/uk/blogs']);
  const slugPrefixes = dynamicRoutes.map((r) => r.slice(0, r.indexOf(':')));

  async function worker(id) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      // Analytics never needs to run during a build.
      if (/googletagmanager\.com|google-analytics\.com|doubleclick\.net/.test(url)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    while (queue.length) {
      const route = queue.shift();
      if (route === undefined) break;
      try {
        const r = await renderRoute(page, port, route);

        // A route that resolves to an empty or "not found" view is a dead link
        // somewhere in the site, not a page. Writing it as static HTML would
        // freeze that dead end into the build, so it is reported instead.
        if (r.words < 25 || /not found/i.test(r.text.slice(0, 120))) {
          empty.push({ route, words: r.words, text: r.text.slice(0, 60) });
          process.stdout.write(`  DEAD ${route}  renders "${r.text.slice(0, 40)}"\n`);
          continue;
        }

        const { css, ...rest } = r;
        css.forEach((rule) => cssUnion.add(rule));

        for (const out of outputPaths(route)) {
          fs.mkdirSync(path.dirname(out), { recursive: true });
          fs.writeFileSync(out, r.html, 'utf8');
          written.push(out);
        }
        results.push({ route, ...rest });
        process.stdout.write(
          `  ok  ${route}  (h1=${r.h1s} words=${r.words} links=${r.links.length})\n`,
        );

        if (discoverFrom.has(route)) {
          for (const href of r.links) {
            const clean = href.split('#')[0].split('?')[0];
            if (!slugPrefixes.some((p) => clean.startsWith(p) && clean.length > p.length)) continue;
            if (seen.has(normalise(clean)) || EXCLUDE.has(clean)) continue;
            seen.add(normalise(clean));
            queue.push(clean);
            process.stdout.write(`  +   discovered ${clean}\n`);
          }
        }
      } catch (err) {
        failures.push({ route, error: err.message });
        process.stdout.write(`  FAIL ${route}  ${err.message}\n`);
      }
    }
    await page.close();
  }

  console.log(`Prerendering ${staticRoutes.length} routes with ${CONCURRENCY} workers…\n`);
  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i)));

  // ── component stylesheet ───────────────────────────────────────────────────
  // One file for the whole site, content-hashed so it can be cached hard. Every
  // page that was just written gets a <link> to it, which is what makes the
  // pre-boot paint match the hydrated layout.
  let cssBytes = 0;
  if (cssUnion.size) {
    const cssText = [...cssUnion].join('\n');
    cssBytes = Buffer.byteLength(cssText);
    const hash = crypto.createHash('sha256').update(cssText).digest('hex').slice(0, 8);
    const cssHref = `/assets/${PRERENDER_CSS_NAME}-${hash}.css`;
    fs.mkdirSync(path.join(DIST, 'assets'), { recursive: true });
    fs.writeFileSync(path.join(DIST, cssHref.replace(/^\//, '')), cssText, 'utf8');

    for (const file of written) {
      fs.writeFileSync(file, injectStylesheet(fs.readFileSync(file, 'utf8'), cssHref), 'utf8');
    }
    console.log(
      `\nComponent CSS: ${cssUnion.size} rules, ${(cssBytes / 1024).toFixed(1)} KB ` +
        `-> ${cssHref}, linked from ${written.length} files`,
    );
  }

  // ── sitemap.xml ────────────────────────────────────────────────────────────
  // Built from what actually rendered, and only for pages whose own canonical
  // points at themselves. That drops the UK stub pages (they canonicalise to the
  // US homepage) without needing a hand-maintained exclusion list, and it makes
  // the "wrong host / wrong slug" entries in the old sitemap impossible.
  const indexable = [];
  const skipped = [];
  for (const r of results) {
    const self = `${ORIGIN}${r.route}`;
    if (r.canonical && normalise(r.canonical) === normalise(self)) indexable.push(self);
    else skipped.push({ route: r.route, canonical: r.canonical });
  }
  indexable.sort();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8');

  // ── Report ─────────────────────────────────────────────────────────────────
  const noH1 = results.filter((r) => r.h1s === 0).map((r) => r.route);
  const manyH1 = results.filter((r) => r.h1s > 1).map((r) => `${r.route} (${r.h1s})`);
  const thin = results.filter((r) => r.words < 200).map((r) => `${r.route} (${r.words}w)`);

  console.log(`\n${'─'.repeat(70)}`);
  console.log(`Prerendered      : ${results.length}`);
  console.log(`Failed           : ${failures.length}`);
  console.log(`Dead routes      : ${empty.length}  (linked, but render nothing)`);
  console.log(`In sitemap.xml   : ${indexable.length}`);
  console.log(`Not in sitemap   : ${skipped.length}  (canonical points elsewhere)`);
  if (failures.length) {
    console.log('\nFAILURES');
    failures.forEach((f) => console.log(`  ${f.route}\n    ${f.error}`));
  }
  if (empty.length) {
    console.log(`\nDEAD ROUTES — linked from the site but render no content (${empty.length})`);
    empty.forEach((e) => console.log(`  ${e.route}  ->  "${e.text}" (${e.words}w)`));
  }
  if (noH1.length) {
    console.log(`\nNo <h1> (${noH1.length})`);
    noH1.forEach((r) => console.log(`  ${r}`));
  }
  if (manyH1.length) {
    console.log(`\nMultiple <h1> (${manyH1.length})`);
    manyH1.forEach((r) => console.log(`  ${r}`));
  }
  if (thin.length) {
    console.log(`\nUnder 200 words (${thin.length})`);
    thin.forEach((r) => console.log(`  ${r}`));
  }
  if (skipped.length) {
    console.log(`\nExcluded from sitemap (${skipped.length})`);
    skipped.forEach((s) => console.log(`  ${s.route}  ->  canonical ${s.canonical || '(none)'}`));
  }
  console.log('─'.repeat(70));

  await browser.close();
  server.close();

  if (failures.length) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

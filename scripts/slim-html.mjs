// HTML payload slimming for the prerendered pages.
//
// Every transform here rewrites the STATIC markup only. That is safe for one
// specific reason: src/index.jsx calls createRoot().render(), NOT hydrateRoot().
// React throws the prerendered DOM away and rebuilds it on boot, so anything
// removed here comes straight back the moment the bundle runs, and no hydration
// mismatch is possible. IF THIS APP IS EVER SWITCHED TO hydrateRoot, DELETE
// THIS MODULE - under hydration the server and client markup must agree exactly.
//
// Why it exists: the prerendered pages are mostly not text. Measured on the
// 2026-08-18 build, the home page was 154.8 KB of HTML wrapped around 11.9 KB of
// copy (ratio 0.077) and /us/software/xero-for-small-business/ was 40.2 KB
// around 3.1 KB (0.077). Semrush and Screaming Frog both flag anything under
// 0.10; 36 of the 250 pages were under it. The weight sat in five places:
//
//   base64 data: URIs   61.3 KB (39%) of the home page      -> vite.config.js
//   inline MUI icons    24.7 KB (16%) home, 11.9 (30%) xero -> dedupeSvgIcons
//   emotion classes     21.1 KB (13%) home, 10.6 (27%) xero -> buildEmotionMap
//   <head> indentation   1.4 KB per page                    -> minifyHead
//   focusable="false"    1.6 KB home, 0.8 KB xero           -> stripDeadSvgAttrs
//
// The sixth, MUI's own bookkeeping classes, was already handled by
// stripDeadMuiClasses in prerender.mjs, which shares this module's safety
// argument and the same warning about hydrateRoot.
//
// None of this adds a single word of copy. Pages that are thin on text are
// still thin on text; see the "Under 200 words" section of the prerender report.

// Emotion names its generated classes "css-" plus a hash - "css-1yzdumr",
// "css-buwbop" - and puts several of them on most elements. The home page
// carries 777 such tokens (251 distinct) and xero 420 (115 distinct), ~10 bytes
// each, none of which means anything outside this build.
//
// Both sides of the pair are rewritten together: the shared prerender
// stylesheet, which is the ONLY consumer of these names in the static payload,
// and then every page that links it. A token the stylesheet never defines is
// left alone rather than guessed at.
const EMOTION_TOKEN = /\bcss-[a-z0-9]+\b/g;

// Base36 counter, so even the 1987th class is only three characters.
const shortName = (prefix, i) => prefix + i.toString(36);

// The short names have to be unique against every OTHER class token in the
// build, not just against each other - a collision would hand an element
// somebody else's styles. `reserved` is every class token the bundled CSS
// selects on; the prefix grows until nothing it can generate is in that set.
function pickPrefix(reserved, count) {
  for (const prefix of ['e', 'e_', 'e__', 'emo_']) {
    let clash = false;
    for (let i = 0; i < count && !clash; i++) clash = reserved.has(shortName(prefix, i));
    if (!clash) return prefix;
  }
  return null; // caller skips the rename rather than risking a wrong match
}

// Returns { css, map } - the stylesheet with its emotion selectors rewritten,
// and the mapping to apply to every page that links it. A null map means the
// rename was skipped and the CSS came back untouched.
export function buildEmotionMap(css, reserved = new Set()) {
  const tokens = [...new Set(css.match(EMOTION_TOKEN) || [])];
  if (!tokens.length) return { css, map: null };

  const prefix = pickPrefix(reserved, tokens.length);
  if (!prefix) return { css, map: null };

  const map = new Map(tokens.map((t, i) => [t, shortName(prefix, i)]));
  return { css: css.replace(EMOTION_TOKEN, (t) => map.get(t) ?? t), map };
}

export function renameEmotionClasses(html, map) {
  if (!map) return html;
  return html.replace(EMOTION_TOKEN, (t) => map.get(t) ?? t);
}

// Walks the document's <svg> elements, tracking nesting so an <svg> inside an
// <svg> cannot cut a match short and corrupt the file.
function* eachSvg(html) {
  const open = /<svg\b/gi;
  let m;
  while ((m = open.exec(html))) {
    const start = m.index;
    const scan = /<svg\b|<\/svg\s*>/gi;
    scan.lastIndex = start;
    let depth = 0;
    let end = -1;
    let hit;
    while ((hit = scan.exec(html))) {
      depth += hit[0][1] === '/' ? -1 : 1;
      if (depth === 0) {
        end = hit.index + hit[0].length;
        break;
      }
    }
    if (end === -1) return; // unterminated <svg>: leave the rest of the file alone
    yield { start, end, outer: html.slice(start, end) };
    open.lastIndex = end;
  }
}

// Every MUI icon renders its full path geometry inline, every time it appears.
// The home page draws 91 icons from 39 distinct shapes and xero draws 46 from
// 14 - one checkmark repeated 24 times at 171 bytes a copy.
//
// The repeats become a single <symbol> per shape in a hidden sprite, referenced
// by <use>. The sprite goes at the TOP of <body> so every reference points
// backwards and resolves during a progressive parse; it is positioned out of
// flow at zero size rather than display:none, which is the form browsers have
// always handled reliably. The <svg> wrapper of each icon keeps its own
// attributes - classes, sizing, aria-hidden - so nothing about layout moves.
const SPRITE_OPEN =
  '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" ' +
  'style="position:absolute;width:0;height:0;overflow:hidden">';

// Below this the <use> reference costs more than the geometry it replaces.
const MIN_GEOMETRY_BYTES = 60;

export function dedupeSvgIcons(html, idPrefix = 's') {
  const found = [];
  const groups = new Map();

  for (const { start, end, outer } of eachSvg(html)) {
    const tagEnd = outer.indexOf('>');
    const inner = outer.slice(tagEnd + 1, outer.lastIndexOf('</svg'));
    // A <title> is the icon's accessible name and belongs to the element that
    // carries it, not to a shared symbol.
    if (inner.length < MIN_GEOMETRY_BYTES || /<title[\s>]/i.test(inner)) continue;
    // <symbol> scales by its own viewBox, so shapes only share one if theirs match.
    const viewBox = (outer.slice(0, tagEnd + 1).match(/viewBox="([^"]*)"/i) || [])[1] || '';
    const key = `${viewBox} ${inner}`;
    const group = groups.get(key);
    if (group) group.count++;
    else groups.set(key, { count: 1, viewBox, inner, id: '' });
    found.push({ start, end, key });
  }

  const shared = [...groups.values()].filter((g) => g.count > 1);
  if (!shared.length) return html;
  shared.forEach((g, i) => {
    g.id = `${idPrefix}${i.toString(36)}`;
  });

  // Rebuilt back-to-front so the offsets collected above stay valid.
  let out = html;
  for (let i = found.length - 1; i >= 0; i--) {
    const { start, end, key } = found[i];
    const g = groups.get(key);
    if (!g.id) continue;
    const outer = out.slice(start, end);
    out =
      out.slice(0, start) +
      outer.slice(0, outer.indexOf('>') + 1) +
      `<use href="#${g.id}"/></svg>` +
      out.slice(end);
  }

  const sprite =
    SPRITE_OPEN +
    shared
      .map(
        (g) =>
          `<symbol id="${g.id}"${g.viewBox ? ` viewBox="${g.viewBox}"` : ''}>${g.inner}</symbol>`,
      )
      .join('') +
    '</svg>';

  // Straight after <body>, ahead of #root, so it precedes every <use>.
  const bodyTag = out.match(/<body\b[^>]*>/i);
  if (!bodyTag) return html; // no <body> to anchor to: change nothing
  const at = bodyTag.index + bodyTag[0].length;
  const result = out.slice(0, at) + sprite + out.slice(at);

  // A page with one small repeat pays more for the sprite wrapper than the
  // repeat ever cost it. Cheaper to measure the finished document than to
  // predict it.
  return result.length < html.length ? result : html;
}

// After the geometry is shared, what is left of an icon is its opening tag, and
// MUI puts focusable="false" on every one of them - 828 bytes across the 46
// icons on xero, 1.6 KB across the 91 on the home page. The attribute exists
// only to stop IE11 putting SVGs in the tab order; no browser that can run this
// bundle reads it. React puts it back on boot for anything that still cares.
export function stripDeadSvgAttrs(html) {
  return html.replace(/ focusable="false"/g, '');
}

// <head> arrives pretty-printed: index.html is indented source, and the JSON-LD
// blocks are authored one key per line. That is over 1 KB per page of
// indentation carried to every crawler, and none of it is content - <head> holds
// no text nodes, and JSON-LD is parsed as JSON, where whitespace has no meaning.
//
// Only the JSON-LD scripts are reformatted; the GTM snippet is left byte for
// byte, because it is code and the surrounding comments deliberately mark it.
export function minifyHead(html) {
  const head = html.match(/<head\b[^>]*>[\s\S]*?<\/head>/i);
  if (!head) return html;

  // JSON-LD first, so collapsing indentation afterwards cannot touch its strings.
  const compacted = head[0].replace(
    /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g,
    (whole, open, body, close) => {
      try {
        return open + JSON.stringify(JSON.parse(body)) + close;
      } catch {
        return whole; // hand-edited or templated: leave it exactly as it is
      }
    },
  );

  const end = head.index + head[0].length;
  return html.slice(0, head.index) + dropTextBetweenTags(compacted) + html.slice(end);
}

// Drops the whitespace that sits BETWEEN elements, and only that.
//
// The obvious />\s+</g does not work here: a meta description reading
// "revenue > costs" contains the same "> <" that separates two tags, and a blind
// replace silently rewrites the copy inside the attribute. So this walks the
// markup instead, tracking whether it is inside a tag and inside a quoted
// attribute value, and never touches anything it did not reach at the top level.
function dropTextBetweenTags(head) {
  const out = [];
  let i = 0;
  while (i < head.length) {
    if (head[i] !== '<') {
      // Text at the top level of <head> is whitespace and nothing else, but if a
      // stray non-space ever shows up it is kept rather than eaten.
      const next = head.indexOf('<', i);
      const stop = next === -1 ? head.length : next;
      const text = head.slice(i, stop);
      if (text.trim()) out.push(text);
      i = stop;
      continue;
    }
    // <script> and <style> hold code: copy them through byte for byte.
    const raw = /^<(script|style)\b/i.exec(head.slice(i, i + 8));
    if (raw) {
      const m = new RegExp(`</${raw[1]}\\s*>`, 'i').exec(head.slice(i));
      const stop = m ? i + m.index + m[0].length : head.length;
      out.push(head.slice(i, stop));
      i = stop;
      continue;
    }
    // A tag ends at the first '>' that is not inside a quoted attribute value.
    let j = i + 1;
    let quote = '';
    for (; j < head.length; j++) {
      const c = head[j];
      if (quote) {
        if (c === quote) quote = '';
      } else if (c === '"' || c === "'") quote = c;
      else if (c === '>') break;
    }
    out.push(head.slice(i, j + 1));
    i = j + 1;
  }
  return out.join('');
}

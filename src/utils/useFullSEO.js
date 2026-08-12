import { useEffect } from "react";
import getHreflangCluster from "./hreflang";

// Site-wide defaults for tags that are the same on every page. Any of these can
// be overridden per page by passing the matching key in the SEO config.
const SITE_URL = "https://www.miltafs.com/";
const SITE_NAME = "Milta Accounting";
const DEFAULT_AUTHOR = "Milta Accounting";
const DEFAULT_OG_IMAGE = "https://www.miltafs.com/images/miltafs-og.jpg";
const DEFAULT_TWITTER_CARD = "summary";
const DEFAULT_ROBOTS = "index, follow";

export default function useFullSEO(config = null) {
  useEffect(() => {
    if (!config) return;
    const head = document.head;

    // The head shell (index.html) already contains every one of these tags in
    // the correct order. We UPDATE them in place — never append — so the head
    // order stays fixed and no duplicates are ever created. (If a tag is somehow
    // missing it's created once, then reused on every subsequent navigation.)
    const setTag = (selector, tagName, attrs, text) => {
      let el = head.querySelector(selector);
      if (!el) {
        el = document.createElement(tagName);
        head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      if (text != null) el.textContent = text;
      return el;
    };

    // Per-page values fall back to the core fields so Open Graph / Twitter are
    // always populated even when a page only sets title/description/canonical.
    const ogTitle = config.ogTitle || config.title;
    const ogDescription = config.ogDescription || config.description;
    const ogUrl = config.ogUrl || config.canonical || SITE_URL;
    const ogImage = config.ogImage || DEFAULT_OG_IMAGE;

    // ── 1. Title ──
    if (config.title) document.title = config.title;

    // ── 2. Description ──
    if (config.description)
      setTag('meta[name="description"]', "meta", {
        name: "description",
        content: config.description,
      });

    // ── 3. Canonical ──
    if (config.canonical)
      setTag('link[rel="canonical"]', "link", {
        rel: "canonical",
        href: config.canonical,
      });

    // ── 3b. hreflang alternates ── driven by the US↔UK pair table. Every page
    // in a pair emits the WHOLE cluster (en-US, en-GB, x-default), which is what
    // makes each page self-referencing: the US page is named by its own en-US
    // tag, the UK page by its own en-GB tag. Pages with no counterpart emit
    // nothing.
    //
    // These are positioned relative to the canonical rather than via setTag's
    // append, because the set is variable-length: a page without a pair removes
    // them, and appending on the next navigation would break the head order.
    const cluster = getHreflangCluster(window.location.pathname);
    let anchor = head.querySelector('link[rel="canonical"]');
    const setAlternate = (hreflang) => {
      const href = cluster && cluster[hreflang];
      let el = head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!href) {
        if (el) el.remove();
        return;
      }
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "alternate");
      }
      el.setAttribute("hreflang", hreflang);
      el.setAttribute("href", href);
      // .after() moves the node when it is already in the document, so the
      // canonical → en-US → en-GB → x-default order is re-established every run.
      if (anchor) anchor.after(el);
      else head.appendChild(el);
      anchor = el;
    };
    setAlternate("en-US");
    setAlternate("en-GB");
    setAlternate("x-default");

    // ── 4. Robots ──
    setTag('meta[name="robots"]', "meta", {
      name: "robots",
      content: config.robots || DEFAULT_ROBOTS,
    });

    // keywords / author (kept adjacent, after robots)
    if (config.keywords)
      setTag('meta[name="keywords"]', "meta", {
        name: "keywords",
        content: config.keywords,
      });
    setTag('meta[name="author"]', "meta", {
      name: "author",
      content: config.author || DEFAULT_AUTHOR,
    });

    // ── 5. Open Graph ──
    setTag('meta[property="og:type"]', "meta", { property: "og:type", content: config.ogType || "website" });
    setTag('meta[property="og:url"]', "meta", { property: "og:url", content: ogUrl });
    setTag('meta[property="og:site_name"]', "meta", { property: "og:site_name", content: SITE_NAME });
    setTag('meta[property="og:image"]', "meta", { property: "og:image", content: ogImage });
    if (ogTitle)
      setTag('meta[property="og:title"]', "meta", { property: "og:title", content: ogTitle });
    if (ogDescription)
      setTag('meta[property="og:description"]', "meta", { property: "og:description", content: ogDescription });

    // ── 6. Twitter ──
    setTag('meta[name="twitter:card"]', "meta", { name: "twitter:card", content: config.twitterCard || DEFAULT_TWITTER_CARD });
    if (ogTitle)
      setTag('meta[name="twitter:title"]', "meta", { name: "twitter:title", content: config.twitterTitle || ogTitle });
    if (ogDescription)
      setTag('meta[name="twitter:description"]', "meta", { name: "twitter:description", content: config.twitterDescription || ogDescription });
    setTag('meta[name="twitter:image"]', "meta", { name: "twitter:image", content: config.twitterImage || ogImage });

    // ── 10. Structured data (JSON-LD) — page-level, kept last. Reuses one
    // dedicated <script id="page-schema"> so it never duplicates or clobbers the
    // site-wide schema in index.html.
    if (config.schema) {
      setTag(
        'script#page-schema',
        "script",
        { id: "page-schema", type: "application/ld+json" },
        JSON.stringify(config.schema),
      );
    } else {
      const existing = head.querySelector("script#page-schema");
      if (existing) existing.remove();
    }
  }, [config]);
}

// US ↔ UK hreflang pairs.
//
// hreflang is only emitted for pages that genuinely exist in both regions. An
// unpaired page (US state pages, /career, the UK-only service pages) gets no
// annotation at all — a "cluster" of one tells search engines nothing.
//
// Every paired page emits the WHOLE cluster — en-US, en-GB and x-default — so
// each page is named by one of its own annotations: the US page by en-US, the
// UK page by en-GB. That self-reference is what a cluster needs to be valid;
// without it Search Console reports "no return tag" and Semrush reports
// "hreflang conflicts within page source code" (32 of them on 2026-08-10, which
// is what prompted restoring the en-GB side on 2026-08-11).
//
// A pair may only be listed here once BOTH sides declare a canonical that
// points at themselves. Pairing a page whose canonical names some other URL
// produces the same conflict from the opposite direction: the annotation says
// "the UK version is here" and that page replies "no, the real version is the
// US home page". See the exclusion list below the table.
//
// Lookup is keyed by ROUTE PATHNAME, not by the page's canonical: several pages
// declare a wrong canonical or none at all (see notes below), and the hreflang
// cluster has to stay correct regardless. The href values, on the other hand,
// are the canonical URLs verbatim — Google requires hreflang to point at the
// canonical form, so trailing slashes here intentionally match each page's own
// canonical rather than being normalised to one style.

const ORIGIN = "https://www.miltafs.com";

// [ US url, UK url ] — both sides must be present for a pair to exist.
const PAIRS = [
  // Core pages
  // /uk keeps its trailing slash: it is a parent route, so DirectorySlash
  // 301s /uk -> /uk/ and the no-slash form would make this a redirect target.
  [`${ORIGIN}/`, `${ORIGIN}/uk/`],
  [`${ORIGIN}/about`, `${ORIGIN}/uk/about`],
  [`${ORIGIN}/services`, `${ORIGIN}/uk/services`],
  [`${ORIGIN}/contact`, `${ORIGIN}/uk/contact`],
  // /uk/blogs is a parent route too — same DirectorySlash reason as /uk above.
  [`${ORIGIN}/blogs`, `${ORIGIN}/uk/blogs/`],
  [`${ORIGIN}/privacy-policy`, `${ORIGIN}/uk/privacy-policy`],
  [`${ORIGIN}/terms-of-service`, `${ORIGIN}/uk/terms-of-service`],

  // Services
  [
    `${ORIGIN}/us/services/bookkeeping-company-in-the-usa/`,
    `${ORIGIN}/uk/bookkeeping-services-for-small-business`,
  ],
  [
    `${ORIGIN}/us/services/payroll-management-services-in-the-usa/`,
    `${ORIGIN}/uk/payroll-services-for-small-business`,
  ],
  [
    `${ORIGIN}/us/services/virtual-assistant-service-in-the-usa/`,
    `${ORIGIN}/uk/virtual-assistant-services-in-the-uk`,
  ],
  [
    `${ORIGIN}/us/services/outsourcing-accounting-data-entry-services-in-the-usa/`,
    `${ORIGIN}/uk/accounting-data-entry-services-uk`,
  ],
  [
    `${ORIGIN}/us/services/best-digital-marketing-agency-in-usa/`,
    `${ORIGIN}/uk/best-digital-marketing-service-in-uk`,
  ],
  [
    `${ORIGIN}/us/services/financial-controller-services-in-the-usa/`,
    `${ORIGIN}/uk/controller-services`,
  ],
  [
    `${ORIGIN}/us/services/tax-planning-and-preparation-services-usa/`,
    `${ORIGIN}/uk/tax-planning-services`,
  ],

  // Industries
  [
    `${ORIGIN}/us/industry/accounting-services-for-healthcare/`,
    `${ORIGIN}/uk/accounting-services-for-healthcare`,
  ],
  [
    `${ORIGIN}/us/industry/accounting-services-for-lawfirms/`,
    `${ORIGIN}/uk/law-firm-accounting-services`,
  ],
  [
    `${ORIGIN}/us/industry/bookkeeping-for-real-estate-companies/`,
    `${ORIGIN}/uk/accounting-services-for-real-estate`,
  ],
  [
    `${ORIGIN}/us/industry/bookkeeping-for-contractors-companies/`,
    `${ORIGIN}/uk/accounting-services-for-contractors`,
  ],
  [
    `${ORIGIN}/us/industry/accounting-services-for-manufacturing/`,
    `${ORIGIN}/uk/accounting-services-for-manufacturing`,
  ],
  [
    `${ORIGIN}/us/industry/accounting-services-for-nonprofit-organizations/`,
    `${ORIGIN}/uk/accounting-services-for-non-profit`,
  ],
  [
    `${ORIGIN}/us/industry/accounting-services-for-restaurant-businesses/`,
    `${ORIGIN}/uk/accounting-services-for-restaurants`,
  ],
  [
    `${ORIGIN}/us/industry/accounting-services-for-retail-businesses/`,
    `${ORIGIN}/uk/accounting-services-for-retail-business`,
  ],
];

// Deliberately NOT paired:
//   /blogs/:slug — post slugs differ per region, so there is no 1:1 mapping.
//   /uk/accounting-outsourcing-services — currently renders the same components
//   as /uk/accounts-payable-services-in-uk under payroll metadata; it needs its
//   own content before it can be anything's counterpart.
//
//   /uk/invoice-processing-services and /uk/financial-reporting-services — the
//   two remaining hero-only stubs. They set no metadata, so they still inherit
//   the index.html shell and canonicalise to the US home page. Pairing a page
//   in that state is what produced the 2026-08-10 audit's hreflang conflicts:
//   the US page advertises a UK counterpart, and that counterpart's own
//   canonical disclaims it.
//
// HISTORY, because this table has been wrong in both directions:
//   Until 2026-08-11 eight pairs pointed at UK stubs that canonicalised to the
//   US home page, while this very comment claimed they were unpaired. Restoring
//   the en-GB annotation exposed it. They were removed, then added back the
//   same day once each stub was given a self-referencing canonical (owner's
//   call — those pages are still thin, ~110 words, so they are worth revisiting
//   as content lands).
//
// The gate for adding any pair is one command:
//
//     node scripts/check-hreflang.mjs
//
// It fails if either side of a pair does not declare itself canonical.

// Trailing slashes and case must not decide whether a route matches, so keys are
// normalised; the stored href values are left untouched.
const normalise = (pathname) => {
  const trimmed = String(pathname || "/")
    .toLowerCase()
    .replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

const pathOf = (url) => normalise(url.slice(ORIGIN.length));

// pathname -> { "en-US", "en-GB", "x-default" }
// Both sides of the pair map to the SAME cluster object, which is what makes the
// annotations reciprocal: whichever page a crawler lands on, it sees the same
// three URLs, one of which is itself.
const CLUSTERS = new Map();
PAIRS.forEach(([us, uk]) => {
  // x-default sends unmatched locales to the US site: it is the root of the
  // domain and the primary market.
  const cluster = { "en-US": us, "en-GB": uk, "x-default": us };
  CLUSTERS.set(pathOf(us), cluster);
  CLUSTERS.set(pathOf(uk), cluster);
});

/**
 * The hreflang cluster for a route, or null when the page has no counterpart in
 * the other region. Every page in a pair returns the identical cluster, which is
 * what makes the annotations reciprocal.
 */
export default function getHreflangCluster(pathname) {
  return CLUSTERS.get(normalise(pathname)) || null;
}

export { PAIRS };

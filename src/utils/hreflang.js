// US ↔ UK hreflang pairs.
//
// hreflang is only emitted for pages that genuinely exist in both regions. An
// unpaired page (US state pages, /career, the UK-only service pages) gets no
// annotation at all — a "cluster" of one tells search engines nothing.
//
// AS OF 2026-08-07 the en-GB annotation is not emitted (removed by request);
// useFullSEO writes only en-US and x-default, both of which name the US URL. A
// paired UK page therefore carries annotations that never point back at itself,
// which is the shape Search Console reports as "no return tag". The pair table
// below is unchanged and still decides WHICH routes are annotated at all, so
// restoring the UK side is one `setAlternate("en-GB")` call in useFullSEO.js.
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
  [`${ORIGIN}/`, `${ORIGIN}/uk`],
  [`${ORIGIN}/about`, `${ORIGIN}/uk/about`],
  [`${ORIGIN}/services`, `${ORIGIN}/uk/services`],
  [`${ORIGIN}/contact`, `${ORIGIN}/uk/contact`],
  [`${ORIGIN}/blogs`, `${ORIGIN}/uk/blogs`],
  [`${ORIGIN}/privacy-policy`, `${ORIGIN}/uk/privacy-policy`],
  [`${ORIGIN}/terms-of-service`, `${ORIGIN}/uk/terms-of-service`],

  // Services
  [
    `${ORIGIN}/us/services/bookkeeping-company-in-the-usa/`,
    `${ORIGIN}/uk/bookkeeping-services-for-small-business/`,
  ],
  [
    `${ORIGIN}/us/services/payroll-management-services-in-the-usa/`,
    `${ORIGIN}/uk/payroll-services-for-small-business/`,
  ],
  [
    `${ORIGIN}/us/services/virtual-assistant-service-in-the-usa/`,
    `${ORIGIN}/uk/virtual-assistant-services-in-the-uk/`,
  ],
  [
    `${ORIGIN}/us/services/outsourcing-accounting-data-entry-services-in-the-usa/`,
    `${ORIGIN}/uk/accounting-data-entry-services-uk/`,
  ],
  [
    `${ORIGIN}/us/services/best-digital-marketing-agency-in-usa/`,
    `${ORIGIN}/uk/best-digital-marketing-service-in-uk/`,
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
    `${ORIGIN}/uk/accounting-services-for-healthcare/`,
  ],
  [
    `${ORIGIN}/us/industry/accounting-services-for-lawfirms/`,
    `${ORIGIN}/uk/law-firm-accounting-services/`,
  ],
  [
    `${ORIGIN}/us/industry/bookkeeping-for-real-estate-companies/`,
    `${ORIGIN}/uk/accounting-services-for-real-estate/`,
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
//   The UK stub pages (controller-services, tax-planning-services, the industry
//   pages, invoice-processing-services) — they render a hero and nothing else,
//   and set no metadata at all.

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
// The en-GB entry is currently unread — useFullSEO no longer asks for it (see
// the note at the top of this file). It is kept so the cluster still describes
// the whole pair, and so re-enabling the annotation needs no change here.
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

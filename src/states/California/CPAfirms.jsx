import React from "react";
import useFullSEO from "../../utils/useFullSEO";
import {
  StatePageShell,
  StateHero,
  Prose,
  HighlightStrip,
  FeatureCards,
  FAQBlock,
} from "../_shared/StatePageKit";

const SERVICES = [
  { title: "Accounting & Bookkeeping Services", desc: "Accurate financial records, reconciliations, payroll processing, and financial statement preparation." },
  { title: "Tax Planning & Preparation", desc: "Corporate, individual, payroll, and sales tax filings with proactive tax-saving strategies." },
  { title: "Catch-Up & Clean-Up Accounting", desc: "Correcting backlogs, reconciling discrepancies, and restoring financial order." },
  { title: "Accounting Software Setup & Conversion", desc: "QuickBooks and Xero setup, training, and seamless cloud migrations." },
  { title: "Financial Consulting & Advisory", desc: "Budgeting, forecasting, cash flow optimization, and strategic growth consulting." },
  { title: "Audit & Assurance Services", desc: "Audits, reviews, compilations, and risk assessments performed by US CPAs." },
];

const FAQS = [
  { q: "Why should I outsource CPA services?", a: "Outsourcing reduces operational costs, improves efficiency, and provides access to specialized CPA expertise." },
  { q: "Are you experienced with US tax regulations?", a: "Yes, our team is well-versed in US accounting standards, IRS regulations, and compliance requirements." },
  { q: "What accounting software do you support?", a: "We support QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and more." },
  { q: "Do you offer financial consulting services?", a: "Yes, we provide budgeting, forecasting, cash flow management, and business growth consulting." },
  { q: "Can you support CPA firms in California?", a: "Absolutely. We provide back-office support, tax prep assistance, reconciliations, and audit preparation." },
];

export default function CPAServicesCalifornia() {
  useFullSEO({
    title: "California CPA Services for Growing Small Businesses",
    description:
      "Professional CPA services in California helping small businesses manage accounting, compliance, and financial growth with confidence.",
    keywords:
      "cpa services in california, cpa firms near me, accounting services for small business, certified public accountant near me",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-california/",
  });

  return (
    <StatePageShell>
      <StateHero
        lead="California CPA Services for"
        highlight="Growing Small Businesses"
        subtitle="Professional CPA services in California helping small businesses manage accounting, tax compliance, and financial growth with confidence."
        breadcrumb="CPA Services in California"
        ctaText="Schedule a Free Consultation"
      />

      <Prose
        overline="TOP-RATED CPA FIRM"
        title="Top-Rated CPA Firm in California for Your Business"
        highlight="Needs"
        paragraphs={[
          "Milta is a trusted CPA firm in California delivering customized accounting and tax services for small businesses and CPA firms.",
          "Our certified public accountants focus on precision, compliance, and long-term financial growth.",
        ]}
      />

      <HighlightStrip
        overline="WHY PARTNER WITH MILTA"
        title="Why Partner with Milta for CPA"
        highlight="Services?"
        subtitle="Outsource your CPA services to reduce overhead, increase efficiency, and gain access to experienced professionals."
        items={[
          "Local California CPA Expertise",
          "Scalable & Cost-Efficient Services",
          "Tax Compliance & Accuracy",
          "Tech-Driven Financial Insights",
        ]}
      />

      <FeatureCards
        dark
        overline="WHAT WE OFFER"
        title="Our CPA Services in"
        highlight="California"
        items={SERVICES}
        columns={3}
      />

      <FAQBlock faqs={FAQS} />
    </StatePageShell>
  );
}

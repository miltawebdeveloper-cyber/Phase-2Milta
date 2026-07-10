import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Why outsource CPA services?", a: "It reduces costs, improves efficiency, and provides expert support." },
  { q: "Do you follow U.S. accounting regulations?", a: "Yes, our team strictly follows U.S. GAAP and IRS standards." },
  { q: "Which software do you support?", a: "QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and more." },
  { q: "Do you offer business consulting?", a: "Yes, including growth planning and profitability analysis." },
  { q: "Do you support international accounting?", a: "Yes, including cross-border tax and reporting needs." },
];

export default function CPAVirginia() {
  return (
    <ServiceLayout
      seo={{
        title: "Reliable CPA Services for Small Businesses in Virginia",
        description:
          "We provide top CPA services for small businesses in Virginia, ensuring accuracy and growth. Partner with a trusted CPA firm in Virginia today.",
        keywords:
          "cpa services in virginia, cpa firms near me, cpa firms in virginia, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in virginia, certified public accountant near me",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-virginia/",
      }}
      hero={{
        titleLead: "Reliable CPA Firm in Virginia for Your",
        highlight: "Business Success",
        subtitle:
          "Optimize Your Business Finances with Expert CPA Services in Virginia. Milta is a trusted provider of CPA services for small businesses in Virginia. As one of the leading CPA firms in Virginia, we deliver expert accounting, tax preparation, and financial advisory solutions to keep your business compliant, efficient, and growth-ready.",
        breadcrumb: "CPA Services in Virginia",
      }}
      intro={{
        overline: "CPA SERVICES",
        titleLead: "How Milta Supports Business Growth in",
        highlight: "Virginia",
        paragraphs: [
          "A reliable CPA firm in Virginia ensures accurate financial records and strategic insight. Milta simplifies bookkeeping, tax compliance, and financial analysis so businesses can focus on long-term growth.",
        ],
        ctaLabel: "Schedule a Free Consultation",
        imageAlt: "CPA services for small businesses in Virginia",
      }}
      cardGroups={[
        {
          overline: "GROWTH SUPPORT",
          titleLead: "Partnering for",
          highlight: "Business Growth",
          bg: "paper",
          columns: 2,
          items: [
            { title: "Efficiency Through Expertise", desc: "Outsourcing to Milta gives Virginia businesses access to experienced CPA professionals who improve accuracy while reducing operational costs." },
            { title: "Focus on Strategic Growth", desc: "We manage accounting complexities so you can focus on scaling your business with confidence." },
          ],
        },
        {
          overline: "WHY OUTSOURCE",
          titleLead: "Why Outsource CPA Services in",
          highlight: "Virginia?",
          columns: 2,
          items: [
            { title: "Write-Up Services", desc: "Monthly, quarterly, and annual bookkeeping." },
            { title: "Catch-Up & Clean-Up", desc: "Correcting and organizing financial records." },
            { title: "Software Conversions", desc: "QuickBooks Desktop to Online or Xero." },
            { title: "Accounting Reviews", desc: "Performed by U.S. CPAs and CMAs." },
            { title: "Tax Return Preparation", desc: "Forms 1120, 1120S, 1065, 1040, 1041, 990." },
          ],
        },
        {
          overline: "WHY MILTA",
          titleLead: "Why Partner With",
          highlight: "Milta?",
          bg: "paper",
          columns: 2,
          items: [
            { title: "Virginia Compliance", desc: "Accurate, compliant accounting aligned with Virginia and U.S. regulations." },
            { title: "Scalable Services", desc: "Flexible CPA services designed to grow with your business." },
            { title: "Cost Savings", desc: "Reduce overhead costs by up to 70% with outsourced CPA support." },
            { title: "Technology-Driven Accuracy", desc: "Advanced accounting tools ensure clean data and real-time insights." },
          ],
        },
        {
          overline: "OUR SERVICES",
          titleLead: "Our Core CPA Services in",
          highlight: "Virginia",
          columns: 3,
          items: [
            { title: "Accounting & Bookkeeping", desc: "Financial statements, reconciliations, AP/AR, payroll, and general ledger management." },
            { title: "Tax Planning & Preparation", desc: "Corporate, individual, sales, and payroll tax filings with full compliance." },
            { title: "Financial Advisory", desc: "Budgeting, forecasting, cash-flow management, and valuation services." },
            { title: "Catch-Up Accounting", desc: "Clean-up of backlogged and inaccurate financial records." },
            { title: "Software Setup & Conversion", desc: "QuickBooks, Xero, and cloud accounting migrations." },
            { title: "Audit & Assurance", desc: "Audits, reviews, compilations, and compliance reporting." },
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

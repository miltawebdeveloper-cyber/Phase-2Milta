import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "What is a Financial Controller?", a: "A financial controller oversees accounting operations, ensures compliance, and delivers accurate financial reporting and strategic insight." },
  { q: "Why should I outsource Financial Controller Services?", a: "Outsourcing offers expert leadership at a fraction of the cost of a full-time hire while maintaining accuracy and compliance." },
  { q: "What types of businesses benefit most?", a: "Startups, small businesses, and mid-sized enterprises seeking scalable financial expertise without full-time overhead." },
  { q: "What services does a Financial Controller provide?", a: "Budgeting, reporting, compliance oversight, internal controls, cash flow management, and audit support." },
  { q: "How does Miltafs customize services?", a: "We tailor solutions based on your industry, size, and financial goals." },
  { q: "What's the difference between a Controller and a CFO?", a: "Controllers manage accounting operations; CFOs focus on long-term strategy and investor relations." },
  { q: "Can you assist with audits?", a: "Yes, we prepare documentation and provide full audit support." },
  { q: "How often are reports delivered?", a: "Monthly, quarterly, or annually—based on your business needs." },
  { q: "Is outsourcing cost-effective?", a: "Absolutely. You gain elite expertise at a fraction of the cost of a full-time role." },
  { q: "Can Miltafs manage compliance?", a: "Yes, we ensure compliance with both federal and Texas state regulations." },
  { q: "How do I get started?", a: "Contact Miltafs today for a free consultation." },
];

const capabilityRows = [
  ["Accounting Function Oversight", true, true],
  ["Regulatory Compliance (GAAP, etc.)", true, true],
  ["ERP Implementation", true, true],
  ["Management Accounting", true, true],
  ["Accounting Internal Controls", true, true],
  ["Closing Entries (Financial Close)", true, true],
  ["Budgeting & Forecasting Support", true, true],
  ["Cash Flow Management", true, true],
  ["Financial Reporting & Analysis", true, true],
  ["Financial Statement Preparation/Review", true, true],
  ["Team Management, Hiring & Training", true, true],
  ["Long-Term Business & Financial Strategy", false, true],
  ["Fundraising & Investor Relations", false, true],
  ["Investment Advisory", false, true],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I outsource Financial Controller Services?",
      acceptedAnswer: { "@type": "Answer", text: "Outsourcing offers expert leadership without the cost of a full-time hire." },
    },
    {
      "@type": "Question",
      name: "What services does a Financial Controller provide?",
      acceptedAnswer: { "@type": "Answer", text: "Financial reporting, budgeting, compliance oversight, cash flow management, and audit support." },
    },
  ],
};

export default function FinancialTexas() {
  return (
    <ServiceLayout
      seo={{
        title: "Top Financial Controller Services in Texas | Milta",
        description:
          "Drive smarter financial strategy with Milta's certified financial controllers in Texas, delivering accuracy, compliance, and growth.",
        keywords:
          "financial controller services, outsourced financial controller, accounting controller, certified financial controller",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/financial-controller-services-in-texas/",
        schema: faqSchema,
      }}
      hero={{
        titleLead: "Elevate Your Financial Strategy with",
        highlight: "Expert Financial Controller Services in Texas",
        subtitle:
          "Drive smarter financial strategy with Milta's certified financial controllers in Texas, delivering accuracy, compliance, and scalable growth.",
        breadcrumb: "Financial Controller Services in Texas",
      }}
      intro={{
        overline: "FINANCIAL CONTROLLER",
        titleLead: "Certified Financial Controller Services in",
        highlight: "Texas",
        paragraphs: [
          "Enhance your financial management with our outsourced financial controller expertise, delivering precision, optimized processes, and strategic resource deployment.",
          "Whether ongoing oversight or project-based support, Miltafs empowers businesses to navigate complexity and achieve sustainable growth.",
        ],
        ctaLabel: "Schedule Your Free Consultation – Limited Time Offer!",
        imageAlt: "Financial controller services in Texas",
      }}
      whyEssential={{
        overline: "WHY MILTAFS",
        titleLead: "Why Choose Miltafs for Financial",
        highlight: "Controller Services",
        subtitle:
          "Affordable, scalable, and tailored financial leadership designed for growing Texas businesses.",
        items: [
          "Expert Financial Oversight",
          "Regulatory Compliance",
          "Data-Driven Decisions",
          "Scalable Controller Solutions",
        ],
      }}
      comparisonTable={{
        overline: "ROLE COMPARISON",
        titleLead: "Capabilities –",
        highlight: "Controller vs CFO",
        headers: ["Capabilities", "Controller", "CFO"],
        rows: capabilityRows.map(([label, ctrl, cfo]) => ({ label, marks: [ctrl, cfo] })),
      }}
      faqs={faqs}
    />
  );
}

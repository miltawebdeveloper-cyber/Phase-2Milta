import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "What is a Financial Controller?", a: "A financial controller is in charge of your accounting department, ensuring compliance, accurate reporting, and strategic financial management." },
  { q: "Why should I outsource Financial Controller Services?", a: "Outsourcing gives you access to experienced professionals without hiring full-time staff, saving costs while ensuring high-quality oversight." },
  { q: "What types of businesses benefit from Financial Controller Services?", a: "Startups, small and medium-sized businesses, and growing companies that need expert financial management without a full-time hire." },
  { q: "What services does a Financial Controller provide?", a: "Manages accounting operations, prepares budgets, analyzes reports, ensures compliance, oversees cash flow, and assists with audits." },
  { q: "How can outsourced Financial Controller Services help my business?", a: "Streamlines financial processes, enhances compliance, improves cash flow, and provides strategic insights." },
  { q: "How does Miltafs customize Financial Controller Services?", a: "Services are tailored to your business size, industry, and financial goals for a personalized solution." },
  { q: "What’s the difference between a Financial Controller and a CFO?", a: "A Controller focuses on accounting and operations, while a CFO oversees strategic financial planning and investor relations." },
  { q: "Can a Financial Controller help with audits?", a: "Yes, they assist with audit preparation, documentation, and compliance support." },
  { q: "How often will I receive financial reports?", a: "Reports can be provided monthly, quarterly, or annually depending on your business requirements." },
  { q: "Is outsourcing cost-effective?", a: "Yes, it offers top-tier expertise at a fraction of the cost of hiring a full-time employee." },
  { q: "Can Miltafs handle federal and state compliance?", a: "Yes, Miltafs ensures all financial reporting meets federal and state regulations." },
  { q: "How do I get started with Miltafs Financial Controller Services?", a: "Contact us today for a free consultation to discuss customized solutions for your business." },
];

const capabilities = [
  { label: "Accounting Function Oversight", marks: [true, true] },
  { label: "Regulatory Compliance (GAAP, etc.)", marks: [true, true] },
  { label: "ERP Implementation", marks: [true, true] },
  { label: "Management Accounting", marks: [true, true] },
  { label: "Accounting Internal Controls", marks: [true, true] },
  { label: "Closing Entries (Financial Close)", marks: [true, true] },
  { label: "Budgeting & Forecasting Support", marks: [true, true] },
  { label: "Cash Flow Management", marks: [true, true] },
  { label: "Financial Reporting & Analysis", marks: [true, true] },
  { label: "Financial Statement Preparation/Review", marks: [true, true] },
  { label: "Team Management, Hiring & Training", marks: [true, true] },
  { label: "Long-Term Business & Financial Strategy", marks: [false, true] },
  { label: "Fundraising & Investor Relations", marks: [false, true] },
  { label: "Investment Advisory", marks: [false, true] },
];

export default function FinancialControllerMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Trusted Financial Controller Services in Maryland | Milta",
        description:
          "Optimize finances with expert financial controller services in Maryland with our certified financial controller team.",
        keywords:
          "financial controller services, outsourced financial controller, accounting controller, certified financial controller",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/financial-controller-services-in-maryland/",
      }}
      hero={{
        titleLead: "Optimize Your Finances with Expert",
        highlight: "Financial Controller Services in Maryland",
        subtitle:
          "Ensure accuracy and compliance with our certified financial controller team, delivering top-tier services for Maryland businesses.",
        ctaLabel: "💼 Claim Your Free Consultation – Limited Time Offer!",
        breadcrumb: "Financial Controller Services in Maryland",
      }}
      intro={{
        overline: "FINANCIAL OVERSIGHT",
        titleLead: "Enhance Your Financial Operations",
        highlight: "with Miltafs",
        paragraphs: [
          "Ensure accuracy and compliance with our certified financial controller team in Maryland. Our outsourced solutions provide precise financial reporting, strategic planning, and seamless regulatory compliance.",
          "Whether you need continuous support or project-based solutions, our services help businesses navigate financial complexities with confidence.",
        ],
        ctaLabel: "💼 Claim Your Free Consultation – Limited Time Offer!",
        imageAlt: "Financial controller services in Maryland",
      }}
      whyEssential={{
        overline: "WHY BUSINESSES CHOOSE US",
        titleLead: "Why Businesses Choose Our",
        highlight: "Financial Controller Services",
        subtitle:
          "Miltafs empowers businesses of all sizes with expert financial management, streamlined operations, and actionable insights for sustainable growth.",
        columns: 4,
        items: [
          "Expert Financial Oversight",
          "Regulatory Compliance",
          "Data-Driven Decisions",
          "Scalable Controller Solutions",
        ],
      }}
      comparisonTable={{
        overline: "CAPABILITIES",
        titleLead: "Capabilities –",
        highlight: "Controller vs CFO",
        headers: ["Capabilities", "Controller", "CFO"],
        rows: capabilities,
      }}
      faqs={faqs}
    />
  );
}

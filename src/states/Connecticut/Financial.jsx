import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "What is a Financial Controller?", a: "A financial controller oversees accounting operations, ensures compliance, and provides accurate financial reporting." },
  { q: "Why outsource Financial Controller Services?", a: "Outsourcing provides expert professionals without the cost of a full-time hire." },
  { q: "Which businesses benefit most?", a: "Startups, SMBs, and growing companies across Connecticut." },
  { q: "Can a controller assist with audits?", a: "Yes, controllers assist with audit preparation and compliance." },
  { q: "How often will I receive reports?", a: "Monthly, quarterly, or annual reporting based on your needs." },
  { q: "How do I get started?", a: "Contact Miltafs today for a free consultation." },
];

const capabilities = [
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

export default function FinancialControllerConnecticut() {
  return (
    <ServiceLayout
      seo={{
        title: "Outsourced Financial Controller Services in Connecticut | Miltafs",
        description:
          "We provide expert financial controller services in Connecticut to enhance reporting, strengthen controls, and ensure full compliance.",
        keywords:
          "financial controller services, outsourced financial controller, accounting controller, certified financial controller",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/financial-controller-services-in-connecticut/",
      }}
      hero={{
        titleLead: "Outsourced",
        highlight: "Financial Controller Services in Connecticut",
        subtitle:
          "Gain financial clarity, compliance, and strategic control with certified financial controller experts in Connecticut.",
        breadcrumb: "Financial Controller in Connecticut",
      }}
      intro={{
        overline: "FINANCIAL CONTROLLER SERVICES",
        titleLead: "Optimize Your Finances with Expert",
        highlight: "Financial Controller Services in Connecticut",
        paragraphs: [
          "Gain unparalleled financial clarity and operational efficiency with our certified financial controller team. We provide customized accounting controller solutions tailored to Connecticut’s dynamic business landscape.",
          "From accurate reporting to strategic planning, our outsourced financial controller services empower businesses with compliance, insight, and sustainable growth.",
        ],
        ctaLabel: "💼 Book Your Free Consultation Today – Limited Time Only!",
      }}
      whyEssential={{
        overline: "WHY CHOOSE US",
        titleLead: "Why Choose Miltafs",
        highlight: "Financial Controller Services",
        subtitle:
          "Affordable, scalable, and customized financial controller solutions designed to help Connecticut businesses grow with confidence.",
        items: [
          "Expert Financial Oversight",
          "Regulatory Compliance",
          "Real-Time Financial Intelligence",
          "Scalable Controller Solutions",
        ],
      }}
      comparisonTable={{
        overline: "CONTROLLER VS CFO",
        titleLead: "Controller vs CFO –",
        highlight: "Roles & Capabilities",
        headers: ["Capabilities", "Controller", "CFO"],
        rows: capabilities.map((c) => ({ label: c[0], marks: [c[1], c[2]] })),
      }}
      faqs={faqs}
    />
  );
}

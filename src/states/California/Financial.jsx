import React from "react";
import useFullSEO from "../../utils/useFullSEO";
import {
  StatePageShell,
  StateHero,
  Prose,
  HighlightStrip,
  ComparisonTable,
  FAQBlock,
} from "../_shared/StatePageKit";

const CAPABILITIES = [
  ["Accounting Function Oversight", "✔️", "✔️"],
  ["Regulatory Compliance (GAAP, etc.)", "✔️", "✔️"],
  ["ERP Implementation", "✔️", "✔️"],
  ["Management Accounting", "✔️", "✔️"],
  ["Accounting Internal Controls", "✔️", "✔️"],
  ["Closing Entries (Financial Close)", "✔️", "✔️"],
  ["Budgeting & Forecasting Support", "✔️", "✔️"],
  ["Cash Flow Management", "✔️", "✔️"],
  ["Financial Reporting & Analysis", "✔️", "✔️"],
  ["Financial Statement Preparation/Review", "✔️", "✔️"],
  ["Team Management, Hiring & Training", "✔️", "✔️"],
  ["Long-Term Business & Financial Strategy", "", "✔️"],
  ["Fundraising & Investor Relations", "", "✔️"],
  ["Investment Advisory", "", "✔️"],
];

const FAQS = [
  { q: "What is a Financial Controller?", a: "A financial controller is in charge of your accounting department, ensuring compliance, accurate financial reporting, and strategic financial management." },
  { q: "Why should I outsource Financial Controller Services?", a: "Outsourcing provides access to experienced professionals without hiring full-time staff, saving money while maintaining high-quality oversight." },
  { q: "What types of businesses benefit from Financial Controller Services?", a: "Startups, SMBs, and growing companies that need expert financial management but are not ready for a full-time hire." },
  { q: "What services does a Financial Controller provide?", a: "Manages accounting operations, prepares budgets, analyzes reports, ensures compliance, oversees cash flow, and assists with audits." },
  { q: "How can outsourced Financial Controller Services help my business?", a: "Streamlines processes, enhances compliance, improves cash flow, and provides insights for strategic decision-making." },
  { q: "How does Miltafs customize services?", a: "Services are tailored to your business size, industry, and goals for personalized solutions." },
  { q: "What’s the difference between a Financial Controller and a CFO?", a: "A Controller focuses on accounting and operations, while a CFO oversees strategic planning and investor relations." },
  { q: "Can a Financial Controller help with audits?", a: "Yes, they assist with audit preparation, documentation, and compliance support." },
  { q: "How often will I receive financial reports?", a: "Monthly, quarterly, or annual reports based on your needs." },
  { q: "Is outsourcing cost-effective?", a: "Yes, it offers top-tier expertise at a fraction of the cost of hiring a full-time employee." },
  { q: "Can Miltafs handle federal and state compliance?", a: "Yes, ensuring all reporting meets regulations." },
  { q: "How do I get started?", a: "Contact Miltafs today for a free consultation." },
];

export default function FinancialControllerCalifornia() {
  useFullSEO({
    title: "Outsourced Financial Controller Services in California | Miltafs",
    description: "We provide expert financial controller services in California to enhance reporting, strengthen controls, and maintain full financial compliance.",
    keywords: "financial controller services, outsourced financial controller, accounting controller, certified financial controller",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/us/services/financial-controller-services-in-california/",
  });

  return (
    <StatePageShell>
      <StateHero
        lead="Outsourced Financial Controller Services in"
        highlight="California"
        subtitle="We provide expert financial controller services in California to enhance reporting, strengthen controls, and maintain full financial compliance."
        breadcrumb="Financial Controller in California"
        ctaText="Book Your Free Consultation Today"
      />

      <Prose
        overline="EXPERT FINANCIAL OVERSIGHT"
        title="Optimize Your Finances with Expert Financial Controller Services in"
        highlight="California"
        paragraphs={[
          "Gain unparalleled financial clarity and operational efficiency with our certified financial controller team. We offer customized accounting controller solutions designed to meet California’s dynamic business demands. From meticulous financial oversight to strategic planning, our outsourced financial controller services empower businesses with accurate reporting, regulatory compliance, and data-driven decision-making.",
          "With our financial controller services, you gain real-time financial intelligence, optimize cash flow, and maximize profitability. Whether you need ongoing financial leadership or project-based expertise, our skilled professionals provide the insights and structure necessary for long-term financial success.",
          "Stay ahead with cutting-edge financial controller services that drive efficiency and stability. Our expertise in accounting data entry ensures seamless financial record management, while our advanced data management solutions help you organize, process, and protect vital business information.",
        ]}
      />

      <HighlightStrip
        overline="WHY CHOOSE MILTAFS"
        title="Why Choose Miltafs Financial Controller"
        highlight="Services"
        subtitle="Our accounting controller experts provide strategic insights to help businesses in California and beyond drive profitability and sustainable growth."
        items={[
          "Expert Financial Oversight",
          "Regulatory Compliance",
          "Real-Time Financial Intelligence",
          "Scalable Controller Solutions",
        ]}
      />

      <ComparisonTable
        overline="ROLES & CAPABILITIES"
        title="Controller vs"
        highlight="CFO"
        subtitle="Understand exactly where a Controller and a CFO overlap — and where their responsibilities diverge."
        head={["Capabilities", "Controller", "CFO"]}
        rows={CAPABILITIES}
        bg="default"
      />

      <FAQBlock
        overline="FAQ"
        title="FAQs – Financial Controller Services in"
        highlight="California"
        faqs={FAQS}
      />
    </StatePageShell>
  );
}

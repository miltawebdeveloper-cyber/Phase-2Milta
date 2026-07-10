import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GavelIcon from "@mui/icons-material/Gavel";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PaymentsIcon from "@mui/icons-material/Payments";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import InsightsIcon from "@mui/icons-material/Insights";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "What is a Financial Controller?", a: "A financial controller leads your accounting department, ensuring compliance, accurate reporting, and strategic oversight of your day-to-day financial operations." },
  { q: "Why outsource Financial Controller Services instead of hiring in-house?", a: "Outsourcing gives you access to experienced professionals without the cost of a full-time hire, while still ensuring high-quality financial oversight." },
  { q: "What types of businesses benefit most from this service?", a: "Startups, small and medium-sized businesses, and growing companies that need expert financial management but aren't ready for a full-time controller." },
  { q: "What does a Financial Controller actually manage?", a: "Accounting operations, budget preparation, financial report analysis, compliance oversight, cash flow management, and audit support." },
  { q: "How does outsourcing improve my business's financial operations?", a: "It streamlines processes, strengthens compliance, improves cash flow visibility, and provides the strategic insight needed to make better decisions." },
  { q: "How does Milta customize its Financial Controller Services?", a: "Every engagement is tailored to your business size, industry, and financial goals, so you get a solution built around your operations, not a generic package." },
  { q: "What's the difference between a Financial Controller and a CFO?", a: "A Controller focuses on accounting operations and compliance, while a CFO leads strategic financial planning, fundraising, and investor relations." },
  { q: "Can a Financial Controller help prepare for audits?", a: "Yes — they assist with audit preparation, documentation, and ongoing compliance support to keep you audit-ready." },
  { q: "How often will I receive financial reports?", a: "Reports can be delivered monthly, quarterly, or annually, depending on what fits your business best." },
  { q: "Does Milta handle federal and Maryland state compliance?", a: "Yes, all financial reporting is prepared to meet both federal and Maryland state regulatory requirements." },
];

export default function FinancialControllerMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Trusted Financial Controller Services in Maryland | Milta",
        description:
          "Optimize your finances with expert financial controller services in Maryland, backed by our certified controller team.",
        keywords:
          "financial controller services, outsourced financial controller, accounting controller, certified financial controller",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/financial-controller-services-in-maryland/",
      }}
      hero={{
        titleLead: "Financial Controller Services in",
        highlight: "Maryland, USA",
        subtitle:
          "Keep your books accurate and your business compliant with Milta's certified financial controller team, delivering top-tier oversight for Maryland businesses at every stage of growth.",
        breadcrumb: "Financial Controller Services in Maryland",
      }}
      intro={{
        overline: "FINANCIAL OPERATIONS",
        titleLead: "Enhance Your Financial Operations",
        highlight: "with Milta",
        paragraphs: [
          "Accuracy and compliance start with the right oversight. Our certified financial controller team delivers precise reporting, strategic planning, and seamless regulatory compliance for businesses across Maryland.",
          "Whether you need continuous, ongoing support or project-based help, our services are designed to guide your business through financial complexity with confidence.",
        ],
        ctaLabel: "Claim Your Free Consultation",
        imageAlt: "Financial controller services in Maryland",
      }}
      whyEssential={{
        overline: "WHY IT MATTERS",
        titleLead: "Why Businesses Choose Our",
        highlight: "Controller Services",
        subtitle:
          "Milta empowers businesses of every size with expert financial management, streamlined operations, and insights that support sustainable growth.",
        items: [
          "Expert Financial Oversight",
          "Regulatory Compliance",
          "Data-Driven Decisions",
          "Scalable Controller Solutions",
        ],
      }}
      solutions={{
        overline: "WHAT WE MANAGE",
        titleLead: "Core Financial Controller",
        highlight: "Responsibilities",
        subtitle: "A dedicated controller keeps every part of your accounting function running smoothly.",
        items: [
          { icon: AccountBalanceIcon, title: "Accounting Operations Oversight", desc: "Day-to-day management of your accounting function, keeping records accurate and current." },
          { icon: RequestQuoteIcon, title: "Budgeting & Forecasting", desc: "Structured budgets and forecasts that give you a clear view of what's ahead." },
          { icon: AssessmentIcon, title: "Financial Reporting & Analysis", desc: "Regular reports that translate your numbers into actionable insight." },
          { icon: GavelIcon, title: "Regulatory Compliance", desc: "Oversight aligned with GAAP and federal and Maryland state requirements." },
          { icon: PaymentsIcon, title: "Cash Flow Management", desc: "Ongoing monitoring that keeps your business liquid and prepared for what's next." },
          { icon: FactCheckIcon, title: "Audit Preparation & Support", desc: "Documentation and support that keep you ready for audits at any time." },
        ],
      }}
      comparisonTable={{
        overline: "COMPARE THE ROLES",
        titleLead: "Controller vs.",
        highlight: "CFO",
        headers: ["Capabilities", "Controller", "CFO"],
        rows: [
          { label: "Accounting Function Oversight", marks: [true, true] },
          { label: "Regulatory Compliance (GAAP, etc.)", marks: [true, true] },
          { label: "ERP Implementation", marks: [true, true] },
          { label: "Management Accounting", marks: [true, true] },
          { label: "Accounting Internal Controls", marks: [true, true] },
          { label: "Financial Close & Closing Entries", marks: [true, true] },
          { label: "Budgeting & Forecasting Support", marks: [true, true] },
          { label: "Cash Flow Management", marks: [true, true] },
          { label: "Financial Reporting & Analysis", marks: [true, true] },
          { label: "Financial Statement Preparation/Review", marks: [true, true] },
          { label: "Team Management, Hiring & Training", marks: [true, true] },
          { label: "Long-Term Business & Financial Strategy", marks: [false, true] },
          { label: "Fundraising & Investor Relations", marks: [false, true] },
          { label: "Investment Advisory", marks: [false, true] },
        ],
      }}
      advantages={{
        titleLead: "How Outsourcing Improves Your",
        highlight: "Financial Operations",
        intro:
          "The right controller does more than keep the books balanced — they give you the visibility and structure to grow with confidence.",
        panelStats: [
          { num: "12+", label: "FAQs Answered" },
          { num: "10y+", label: "Experience" },
          { num: "100%", label: "Compliance Focus" },
          { num: "24/7", label: "Support" },
        ],
        items: [
          { icon: TrendingUpIcon, title: "Streamlined Financial Processes", desc: "Cleaner workflows that reduce errors and save time across your accounting function." },
          { icon: SecurityIcon, title: "Stronger Compliance", desc: "Ongoing oversight that keeps you aligned with federal and Maryland regulations." },
          { icon: InsightsIcon, title: "Improved Cash Flow Visibility", desc: "Clear, current insight into where your money is and where it's going." },
          { icon: HandshakeIcon, title: "Strategic Financial Guidance", desc: "Insight that supports smarter, better-informed business decisions." },
        ],
      }}
      industries={{
        overline: "WHO WE SERVE",
        titleLead: "Controller Services for",
        highlight: "Growing Businesses",
        items: ["Startups", "Small Businesses", "Mid-Sized Companies", "Nonprofits", "Professional Services", "Real Estate"],
      }}
      faqs={faqs}
    />
  );
}

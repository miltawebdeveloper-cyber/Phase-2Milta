import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GroupsIcon from "@mui/icons-material/Groups";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import BusinessIcon from "@mui/icons-material/Business";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import InsightsIcon from "@mui/icons-material/Insights";
import SavingsIcon from "@mui/icons-material/Savings";
import GavelIcon from "@mui/icons-material/Gavel";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  {
    q: "Can Miltafs prepare both personal and business tax returns?",
    a: "Yes. We handle individual, corporate, partnership, nonprofit, estate, and trust tax filings.",
  },
  {
    q: "What documents are required for tax preparation in Florida?",
    a: "You’ll need: W-2 and 1099 forms, prior year tax returns, business income statements, and rental and investment records.",
  },
  {
    q: "Do you handle Florida state and local taxes?",
    a: "Absolutely. We prepare federal, Florida state, and applicable local tax filings.",
  },
  {
    q: "Is Miltafs affordable?",
    a: "Yes. We provide competitive pricing with high-quality expert service.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Miltafs prepare both personal and company tax returns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and nonprofits.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with state and city taxes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide complete tax preparation services in Florida for federal, state, and city taxes, ensuring compliance at all levels.",
      },
    },
    {
      "@type": "Question",
      name: "Is Miltafs service affordable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client.",
      },
    },
  ],
};

export default function TaxServices() {
  return (
    <ServiceLayout
      seo={{
        title: "Tax Planning and Preparation in Florida | Federal, State & City",
        description:
          "Expert tax planning and preparation in Florida for Federal, State, and City taxes. Specializing in Forms 1040, 1041, 1065, 1120, 1120S, and 990.",
        keywords:
          "tax services near me, tax preparation services in florida, accounting firm near me, tax planning and preparation, fl tax preparation",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-florida/",
        schema: faqSchema,
      }}
      hero={{
        titleLead:
          "Graceful Your Tax Filing Process with Expert Federal, State, and City Tax Services Near You in",
        highlight: "Florida!",
        subtitle:
          "We handle complicated tax forms and filings, so you don’t have to. Get started today with a FREE consultation!",
        breadcrumb: "Tax Services in Florida",
      }}
      intro={{
        overline: "TAX PLANNING IN FLORIDA",
        titleLead: "We Specialize in Business & Individual Tax Preparation in",
        highlight: "Florida",
        paragraphs: [
          "At Miltafs, we help Florida individuals and businesses stay compliant, reduce tax burdens, and avoid penalties with proactive tax planning and preparation.",
          "As your trusted partner, we handle deadlines, filings, and complex regulations—so you can focus on growing your business with confidence.",
        ],
      }}
      solutions={{
        overline: "KEY FEDERAL TAX FORMS",
        titleLead: "Understanding Key",
        highlight: "Federal Tax Forms",
        subtitle:
          "From individuals to corporations and nonprofits, we prepare and file every key federal form with precision.",
        items: [
          { icon: PersonIcon, title: "Form 1040", desc: "Individual income tax returns with deductions and credits." },
          { icon: AccountBalanceIcon, title: "Form 1041", desc: "Estate and trust tax filings with fiduciary compliance." },
          { icon: GroupsIcon, title: "Form 1065", desc: "Partnership tax returns with Schedule K-1 reporting." },
          { icon: VolunteerActivismIcon, title: "Form 990", desc: "Nonprofit returns to maintain tax-exempt status." },
          { icon: BusinessIcon, title: "Form 1120", desc: "C Corporation tax filings with depreciation schedules." },
          { icon: CorporateFareIcon, title: "Form 1120S", desc: "S Corporation pass-through income reporting." },
          { icon: ReceiptLongIcon, title: "Form 1099", desc: "Contractor, freelancer, and miscellaneous income reporting." },
        ],
      }}
      whyEssential={{
        overline: "WHY PARTNER WITH US",
        titleLead: "Why Partner",
        highlight: "With Us?",
        items: [
          "Never Miss a Tax Deadline Again",
          "Florida-Specific Tax Expertise",
          "Avoid Penalties and IRS Issues",
          "Stress-Free Tax Compliance",
        ],
      }}
      advantages={{
        titleLead: "Why Choose Milta for",
        highlight: "Tax",
        titleTail: "Services",
        intro:
          "From proactive planning to multi-level compliance, we make tax season simple, accurate, and penalty-free for Florida individuals and businesses.",
        panelStats: [
          { num: "1040+", label: "Returns Filed" },
          { num: "10y+", label: "Experience" },
          { num: "100%", label: "Compliance" },
          { num: "24/7", label: "Support" },
        ],
        items: [
          { icon: InsightsIcon, title: "Proactive Tax Planning", desc: "Year-round strategy to reduce your tax burden and prevent surprises at filing time." },
          { icon: SavingsIcon, title: "Maximize Deductions & Credits", desc: "We uncover every eligible deduction and credit to keep more money in your business." },
          { icon: GavelIcon, title: "Multi-Level Compliance", desc: "Federal, Florida state, and local filings handled accurately and on time." },
          { icon: FactCheckIcon, title: "Audit-Ready Documentation", desc: "Organized, well-documented filings that stand up to scrutiny with confidence." },
          { icon: SupportAgentIcon, title: "Year-Round Support", desc: "Expert guidance whenever tax questions arise, not just during filing season." },
        ],
      }}
      faqs={faqs}
    />
  );
}

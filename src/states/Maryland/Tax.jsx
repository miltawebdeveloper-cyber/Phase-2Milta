import React from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GavelIcon from "@mui/icons-material/Gavel";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DescriptionIcon from "@mui/icons-material/Description";
import MapIcon from "@mui/icons-material/Map";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TimerIcon from "@mui/icons-material/Timer";
import PublicIcon from "@mui/icons-material/Public";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  {
    q: "Does Milta prepare both personal and business tax returns?",
    a: "Yes. Our team handles individual filings alongside more complex business returns, including partnerships, S-corps, C-corps, and nonprofit organizations, so every entity connected to your business is covered under one roof.",
  },
  {
    q: "What documents do I need to get started?",
    a: "To prepare an accurate return, we'll typically ask for:\n- Social Security numbers and dates of birth for you, your spouse, and any dependents\n- A copy of last year's return (helpful, though not required)\n- Bank details for direct deposit of any refund\n- W-2s, 1099s (MISC, INT, DIV, B, R, G, S, K-1), and SSA-1099s covering all income sources\n- Business or rental profit-and-loss statements, if applicable\n- Records of alimony, gambling winnings, scholarships, or other miscellaneous income\nWe'll walk you through exactly what applies to your situation during your consultation.",
  },
  {
    q: "Can you handle state and local Maryland filings as well as federal?",
    a: "Absolutely. We prepare and file federal, Maryland state, and applicable local returns together, so nothing falls through the cracks between jurisdictions.",
  },
  {
    q: "Is Milta's tax preparation pricing competitive for small businesses?",
    a: "Yes. We price our tax services to stay accessible for small and mid-sized businesses while still delivering CPA-level accuracy and year-round support.",
  },
];

export default function TaxPreparationMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Expert Tax Preparation Services in Maryland | Milta",
        description:
          "Stress-free tax preparation in Maryland. Milta's tax specialists handle Forms 1040, 1120, 1120S, 1065, 1041, and 990 for individuals and businesses.",
        keywords:
          "tax services near me, tax preparation services in maryland, accounting firm near me, tax planning and preparation, md tax preparation",
        author: "Milta Accounting",
        canonical:
          "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-maryland/",
      }}
      hero={{
        titleLead: "Tax Preparation Services in",
        highlight: "Maryland, USA",
        subtitle:
          "Skip the guesswork this filing season. Milta pairs Maryland business owners and individuals with experienced tax preparers who handle federal, state, and local filings accurately, on time, and with every eligible deduction accounted for.",
        breadcrumb: "Tax Preparation Services in Maryland",
      }}
      intro={{
        overline: "TAX PLANNING & PREPARATION",
        titleLead: "Business Tax Support That Goes Beyond",
        highlight: "Filing Season",
        paragraphs: [
          "As your business grows, tax obligations grow with it — new hires, estimated payments, shifting cash flow, and forms you may not have dealt with before. Milta's Maryland tax team keeps ahead of these changes so you're never caught off guard.",
          "We handle individual and business filings alike, combining proactive planning with precise preparation. Whether you're searching for tax services near me for the first time or replacing an accounting firm near me that's outgrown your needs, our team delivers year-round support, not just a rush job every April.",
        ],
        ctaLabel: "Schedule Your Free Consultation",
        imageAlt: "Tax preparation services in Maryland",
      }}
      whyEssential={{
        overline: "WHY PARTNER WITH US",
        titleLead: "What Sets Our",
        highlight: "Maryland Tax Team Apart",
        items: [
          "Year-round support, not just a scramble during tax season.",
          "Deep familiarity with Maryland-specific tax rules, credits, and incentives.",
          "Proactive monitoring of federal and state law changes that affect your filings.",
          "A stress-free experience — we manage the paperwork so you don't have to.",
        ],
      }}
      solutions={{
        overline: "OUR SERVICES",
        titleLead: "Comprehensive Tax Preparation",
        highlight: "Services in Maryland",
        subtitle:
          "From individual returns to multi-entity business filings, our Maryland tax specialists cover every scenario.",
        items: [
          { icon: ReceiptLongIcon, title: "Individual Tax Preparation", desc: "Personalized filings built to capture every deduction and credit you qualify for, with full IRS compliance." },
          { icon: AccountBalanceIcon, title: "Business Tax Services", desc: "Corporate tax planning and preparation designed to minimize liabilities and improve your bottom line." },
          { icon: GavelIcon, title: "Estate & Trust Taxation", desc: "Careful handling of fiduciary tax obligations for estates and trusts, prepared by experienced professionals." },
          { icon: VolunteerActivismIcon, title: "Nonprofit Tax Compliance", desc: "Accurate federal and state nonprofit filings that help protect your organization's tax-exempt status." },
          { icon: DescriptionIcon, title: "Federal Tax Filing", desc: "Expert preparation of Forms 1040, 1120, 1120S, 1041, and 1065, filed correctly the first time." },
          { icon: MapIcon, title: "Maryland State & Local Taxes", desc: "Income, sales, property, and municipal tax filings handled across Maryland jurisdictions." },
          { icon: FactCheckIcon, title: "Tax Review & Finalization", desc: "Thorough accuracy checks and compliance audits before anything is ever submitted." },
          { icon: CloudUploadIcon, title: "Secure E-Filing", desc: "IRS-authorized electronic filing for faster refunds, fewer errors, and complete peace of mind." },
          { icon: AssignmentIcon, title: "Specialized Tax Forms", desc: "Support for Form 990, the 1099 series, Schedule C, Form 8825, and other niche filings." },
        ],
      }}
      cardGroups={[
        {
          overline: "KNOW YOUR FORMS",
          titleLead: "Key Federal Tax Forms We",
          highlight: "Handle Every Year",
          bg: "paper",
          columns: 4,
          items: [
            { title: "Form 1040", desc: "Individual income tax returns, covering wages, investments, deductions, and credits." },
            { title: "Form 1041", desc: "Filed for estates and trusts, reporting income distributed to beneficiaries." },
            { title: "Form 1065", desc: "Partnership returns detailing profits, losses, and credits, with K-1s issued to each partner." },
            { title: "Form 990", desc: "Required nonprofit filing that keeps tax-exempt organizations transparent and compliant." },
            { title: "Form 1120", desc: "C-Corporation returns covering corporate income, expenses, and tax liabilities." },
            { title: "Form 1120S", desc: "S-Corporation returns reflecting income passed through to shareholders." },
            { title: "Form 1099", desc: "Reporting for contractor payments, freelance income, and other non-employee compensation." },
          ],
        },
      ]}
      advantages={{
        titleLead: "Why Businesses Trust Our",
        highlight: "Maryland Tax Preparers",
        intro:
          "Filing taxes correctly is about more than avoiding penalties — it's about keeping more of what you earn and staying ready for whatever comes next.",
        panelStats: [
          { num: "100+", label: "Clients" },
          { num: "10y+", label: "Experience" },
          { num: "100%", label: "IRS Compliant" },
          { num: "24/7", label: "Support" },
        ],
        items: [
          { icon: TimerIcon, title: "Save Time During Filing Season", desc: "Hand off the paperwork and deadlines to a team that lives and breathes tax law." },
          { icon: PublicIcon, title: "Federal, State & Local Coverage", desc: "One team manages every layer of your tax obligations across jurisdictions." },
          { icon: TrendingUpIcon, title: "Maximize Deductions & Credits", desc: "We look for every legitimate opportunity to reduce what you owe." },
          { icon: SupportAgentIcon, title: "Support All Year, Not Just April", desc: "Ongoing planning helps you avoid surprises and make smarter financial moves." },
        ],
      }}
      industries={{
        overline: "WHO WE HELP",
        titleLead: "Tax Preparation for",
        highlight: "Every Type of Filer",
        items: [
          "Individuals & Families",
          "Small Businesses",
          "S-Corporations",
          "C-Corporations",
          "Partnerships",
          "Nonprofits",
          "Estates & Trusts",
          "Self-Employed & Freelancers",
          "Real Estate Investors",
        ],
      }}
      faqs={faqs}
    />
  );
}

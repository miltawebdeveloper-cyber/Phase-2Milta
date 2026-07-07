import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DescriptionIcon from "@mui/icons-material/Description";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import SendIcon from "@mui/icons-material/Send";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Can Miltafs prepare both personal and company tax returns?", a: "Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and nonprofits." },
  {
    q: "What documents are required for tax preparation services in Georgia?",
    a: `To ensure accurate and complete tax preparation service in Georgia, USA, you’ll need the following:

Personal Information:
- Social Security numbers and dates of birth for you, your spouse, and dependents
- Copies of last year’s tax return (helpful but not required)
- Bank account and routing number for direct deposit

Income Information:
- W-2 forms
- 1099-C, 1099-G, 1099-MISC, 1099-R, 1099-S
- 1099-INT, DIV, B, or K-1
- SSA-1099 for Social Security benefits
- Business, rental, or farming income details
- Prior year installment sale information
- Miscellaneous income such as jury duty or gambling winnings`,
  },
  { q: "Can you help with state and city taxes?", a: "Yes, we provide complete tax preparation services in Georgia for federal, state, and city taxes, ensuring compliance at all levels." },
  { q: "Is Miltafs service affordable?", a: "Yes, we provide competitive pricing while maintaining high quality and exceptional value for our clients." },
];

export default function TaxServices() {
  return (
    <ServiceLayout
      seo={{
        title: "Tax Planning and Preparation in Georgia | Federal, State & City",
        description:
          "Skilled tax preparation services in Georgia for Federal, State, and City taxes. Specializing in Forms 1040, 1041, 1065, 1120, 1120S, and 990.",
        keywords:
          "tax services near me, tax preparation services in Georgia, accounting firm near me, tax planning and preparation, ga tax preparation",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-georgia/",
      }}
      hero={{
        titleLead: "Optimize Your Tax Filing with Expert",
        highlight: "Tax Services Near Me!",
        subtitle:
          "Accelerate your federal, state, and city tax filing with trusted tax services near me. Our experts handle complex tax forms and filings, so you don’t have to. Get Started Today with a Free Consultation!",
        breadcrumb: "Tax Services in Georgia",
      }}
      intro={{
        overline: "TAX PLANNING IN GEORGIA",
        titleLead: "We Specialize in Business &",
        highlight: "Individual Tax Preparation",
        paragraphs: [
          "We specialize in business and individual tax preparation services in Georgia, USA. As a business owner, your focus should be on growing your products, services, and operations—not on managing financial statements, balancing books, or keeping up with evolving tax regulations. While an accounting firm near me may have met your needs in the early stages, business growth brings new financial complexities.",
          "From hiring employees to managing estimated taxes and optimizing cash flow, expert guidance is essential year-round. At Milta, we provide professional tax preparation services in Georgia, offering proactive strategies to ensure compliance and maximize tax savings.",
          "Stay compliant with expert tax preparation services in Georgia. Missing tax deadlines or filing errors can lead to costly penalties, impacting your business’s profitability. At Milta, we ensure accurate and timely reporting so you can focus on growth while we handle the complexities.",
        ],
      }}
      solutions={{
        overline: "COMPREHENSIVE TAX SERVICES",
        titleLead: "Miltafs Comprehensive",
        highlight: "Tax Preparation Services",
        subtitle:
          "End-to-end tax preparation, review, and e-filing for individuals and businesses across Georgia.",
        items: [
          { icon: PersonIcon, title: "Individual GA Tax Preparation Service", desc: "Customized solutions to maximize deductions and credits, ensuring compliance with IRS and Georgia tax regulations." },
          { icon: BusinessIcon, title: "Business Tax Services Near Me", desc: "Expert corporate tax planning and preparation to minimize liabilities, manage estimated taxes, and optimize cash flow." },
          { icon: AccountBalanceIcon, title: "Estate and Trust Taxation", desc: "Specialized services to manage fiduciary tax filings, income distributions, and compliance for estates and trusts." },
          { icon: VolunteerActivismIcon, title: "Nonprofit Tax Compliance", desc: "Complete support to maintain tax-exempt status with accurate Form 990 filings and regulatory compliance." },
          { icon: DescriptionIcon, title: "Federal Tax Preparation", desc: "Preparation of Forms 1040, 1120, 1120S, 1041, and 1065 with optimized deductions and credits." },
          { icon: LocationCityIcon, title: "Georgia State & Local Tax Preparation", desc: "Income, sales, and property tax compliance for Georgia businesses and individuals." },
          { icon: FactCheckIcon, title: "Tax Review & Finalization", desc: "Two-step quality assurance including accuracy checks, compliance audits, and optimization scans." },
          { icon: SendIcon, title: "Tax E-Filing Service", desc: "Secure electronic filing with IRS, Georgia DRS, amendments, extensions, and payment plans." },
          { icon: ReceiptLongIcon, title: "Specialized Tax Forms", desc: "Form 990, 1099 series, Schedule C, Form 8825, and other niche filings for nonprofits, contractors, and real estate." },
        ],
      }}
      cardGroups={[
        {
          overline: "KEY FEDERAL TAX FORMS",
          titleLead: "Understanding Key",
          highlight: "Federal Tax Forms",
          bg: "paper",
          columns: 3,
          items: [
            { title: "Form 1040", desc: "Used by individuals to report income and claim deductions/credits. Includes detailed sections for wages, investments, and deductions." },
            { title: "Form 1041", desc: "Filed for estates and trusts, reporting income distributed to beneficiaries. Ensures compliance with fiduciary tax obligations." },
            { title: "Form 1065", desc: "Partnership tax returns, detailing profits, losses, and credits. Partners receive a Schedule K-1 for individual filings." },
            { title: "Form 990", desc: "Non-Profit Organization returns, required to maintain tax-exempt status. Transparency in reporting revenue, expenses, and program activities." },
            { title: "Form 1120", desc: "C Corporation returns, detailing corporate income, expenses, and tax liabilities." },
            { title: "Form 1120S", desc: "For S Corporations, reflecting income passed through to shareholders." },
            { title: "Form 1099", desc: "Used to report miscellaneous income for contractors, freelancers, and other non-employee payments." },
          ],
        },
      ]}
      whyEssential={{
        overline: "WHY PARTNER WITH US",
        titleLead: "Why Partner",
        highlight: "With Us?",
        items: [
          "Year-Round Support – beyond tax season",
          "Georgia-specific tax knowledge and incentives",
          "Proactive compliance with changing tax laws",
          "Stress-free experience while we handle deadlines and filings",
        ],
      }}
      faqs={faqs}
    />
  );
}

import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import GavelIcon from "@mui/icons-material/Gavel";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DescriptionIcon from "@mui/icons-material/Description";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Can Miltafs prepare both personal and company tax returns?", a: "Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and nonprofits." },
  {
    q: "What documents are required for tax preparation services in Connecticut?",
    a: `To ensure accurate and complete tax preparation service in Connecticut, USA, you’ll need to provide the following documents:

Personal Information:
- Social Security numbers and dates of birth for you, your spouse, and dependents
- Copies of last year’s tax return for you and your spouse (helpful, but not required)
- Bank account number and routing number, if you prefer direct deposit of your refund

Income Information:
- W-2 forms for you and your spouse
- 1099-C forms for cancellation of debt
- 1099-G forms for unemployment income, or state/local tax refunds
- 1099-MISC forms for independent contractor work
- 1099-R, Form 8606 for IRA or retirement plan distributions
- 1099-S forms for income from the sale of property
- 1099-INT, -DIV, -B, or K-1 forms for investment or interest income
- SSA-1099 for Social Security benefits received
- Alimony received
- Business or farming income (profit/loss statement, capital equipment information)
- Rental property income and expenses (profit/loss statement, suspended loss info)
- Prior year installment sale info (Forms 6252, principal and interest collected, SSN and address for payer)
- Miscellaneous income (jury duty, gambling winnings, Medical Savings Accounts, scholarships, etc.)`
  },
  { q: "Can you help with state and city taxes?", a: "Yes, we provide complete tax preparation services in Connecticut for federal, state, and city taxes, ensuring compliance at all levels." },
  { q: "Is Miltafs service affordable?", a: "Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client." },
];

export default function TaxServices() {
  return (
    <ServiceLayout
      seo={{
        title: "Expert Tax Preparation Services in Maryland, USA",
        description:
          "Worry-free tax preparation services in Maryland! Our experts handle Forms 1040, 1041, 1065, 1120, 1120S, and 990.",
        keywords:
          "tax services near me, tax preparation services in maryland, accounting firm near me, tax planning and preparation, md tax preparation",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-maryland/",
      }}
      hero={{
        titleLead: "Maximize Your Tax Savings with Expert",
        highlight: "MD Tax Preparation!",
        subtitle:
          "Simplify your tax filing with trusted tax services near me. Whether federal, state, or local taxes, our experts provide precise tax planning and preparation. Looking for an accounting firm near me? Get reliable tax preparation services in Maryland today!",
        ctaLabel: "Schedule Your Free Consultation",
        breadcrumb: "Tax Preparation Services in Maryland",
      }}
      intro={{
        overline: "TAX PLANNING & PREPARATION",
        titleLead: "We Specialize in Business &",
        highlight: "Individual Tax Preparation",
        paragraphs: [
          "Professional Tax Planning & Preparation for Your Business. As a business owner, your focus should be on growth—not complex tax filings or evolving regulations. While an accounting firm near me may have met your needs early on, business expansion brings new financial challenges.",
          "From hiring employees to managing estimated taxes and cash flow, expert support is crucial year-round. At Milta, we provide professional tax preparation services in Maryland, ensuring businesses stay compliant while maximizing tax savings.",
          "If you're searching for tax services near me, partner with us for proactive tax planning and preparation—delivering financial accuracy beyond tax season.",
        ],
        ctaLabel: "Schedule Your Free Consultation",
        imageAlt: "Tax preparation services in Maryland",
      }}
      solutions={{
        overline: "COMPREHENSIVE TAX SERVICES",
        titleLead: "Miltafs Comprehensive Tax",
        highlight: "Preparation Services",
        items: [
          { icon: PersonIcon, title: "Individual MD Tax Preparation Service", desc: "Customized solutions to maximize deductions and credits while ensuring full IRS compliance." },
          { icon: BusinessIcon, title: "Business Tax Services Near Me", desc: "Corporate tax planning and preparation to minimize liabilities and optimize financial outcomes." },
          { icon: GavelIcon, title: "Estate and Trust Taxation", desc: "Expert handling of fiduciary tax obligations for estates and trusts." },
          { icon: VolunteerActivismIcon, title: "Nonprofit Tax Compliance", desc: "Maintain tax-exempt status with accurate federal and state nonprofit filings." },
          { icon: AccountBalanceIcon, title: "Federal Tax Preparation", desc: "Expert filing of Forms 1040, 1120, 1120S, 1041, and 1065." },
          { icon: LocationCityIcon, title: "Maryland State & Local Tax Preparation", desc: "Income, sales, property, and municipal tax filings across Maryland." },
          { icon: FactCheckIcon, title: "Tax Review & Finalization", desc: "Accuracy checks, compliance audits, and optimization scans before submission." },
          { icon: CloudUploadIcon, title: "Tax E-Filing Service", desc: "Secure IRS-authorized electronic filing with faster refunds and fewer errors." },
          { icon: DescriptionIcon, title: "Specialized Tax Forms", desc: "Form 990, 1099 series, Schedule C, Form 8825, and other niche filings." },
        ],
      }}
      cardGroups={[
        {
          overline: "FEDERAL TAX FORMS",
          titleLead: "Understanding Key",
          highlight: "Federal Tax Forms",
          columns: 3,
          bg: "paper",
          items: [
            { icon: DescriptionIcon, title: "1. Form 1040", desc: "Used by individuals to report income and claim deductions/credits. Includes detailed sections for wages, investments, and deductions." },
            { icon: DescriptionIcon, title: "2. Form 1041", desc: "Filed for estates and trusts, reporting income distributed to beneficiaries. Ensures compliance with fiduciary tax obligations." },
            { icon: DescriptionIcon, title: "3. Form 1065", desc: "Partnership tax returns, detailing profits, losses, and credits. Partners receive a Schedule K-1 for individual filings." },
            { icon: DescriptionIcon, title: "4. Form 990", desc: "Non-Profit Organization returns, required to maintain tax-exempt status. Transparency in reporting revenue, expenses, and program activities." },
            { icon: DescriptionIcon, title: "5. Form 1120", desc: "C Corporation returns, detailing corporate income, expenses, and tax liabilities." },
            { icon: DescriptionIcon, title: "6. Form 1120S", desc: "For S Corporations, reflecting income passed through to shareholders." },
            { icon: DescriptionIcon, title: "7. Form 1099", desc: "Used to report miscellaneous income for contractors, freelancers, and other non-employee payments." },
          ],
        },
      ]}
      checklists={[
        {
          overline: "WHY PARTNER WITH US",
          titleLead: "Why Partner",
          highlight: "With Us?",
          columns: 4,
          items: [
            "Year-Round Support – Not just tax season",
            "Maryland-Specific Tax Knowledge & Incentives",
            "Proactive Compliance & Law Change Monitoring",
            "Stress-Free Experience – We Handle Everything",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

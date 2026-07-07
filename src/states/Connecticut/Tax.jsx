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
- Miscellaneous income (jury duty, gambling winnings, Medical Savings Accounts, scholarships, etc.)`,
  },
  { q: "Can you help with state and city taxes?", a: "Yes, we provide complete tax preparation services in Connecticut for federal, state, and city taxes, ensuring compliance at all levels." },
  { q: "Is Miltafs service affordable?", a: "Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client." },
];

export default function TaxServices() {
  return (
    <ServiceLayout
      seo={{
        title: "Tax Planning and Preparation in Connecticut | Federal, State, and City",
        description:
          "Tax Services in Connecticut for Federal, State, and City Tax Preparation, Review, and E-Filing. Specializing in Forms 1040, 1041, 1065, 1120, 1120S, and 990.",
        keywords:
          "tax services near me, tax preparation services in connecticut, accounting firm near me, tax planning and preparation, ct tax preparation",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-connecticut/",
      }}
      hero={{
        titleLead: "Graceful Your Tax Filing Process with Expert Federal, State, and City",
        highlight: "Tax Services Near Me!",
        subtitle:
          "We handle complicated tax forms and files, so you don't have to. Get Started Today with a Free Consultation!",
        breadcrumb: "Tax Services in Connecticut",
      }}
      intro={{
        overline: "TAX PLANNING IN CONNECTICUT",
        titleLead: "We Specialize in Business &",
        highlight: "Individual Tax Preparation",
        paragraphs: [
          "As a business owner, your focus is on growing your products, services, and operations—not on balancing your books, creating financial statements, or keeping up with ever-changing tax regulations. Partner with a trusted advisor year-round, not just during tax season.",
          "Never Miss a Tax Deadline Again. The IRS, along with state and local agencies, enforces strict deadlines for business tax filings, payroll, and sales tax compliance. Missing deadlines or errors in reporting can lead to costly penalties, hurting your profitability.",
          "As your dedicated partner, we ensure you meet all tax obligations on time, avoid fines, and protect your bottom line. Let Miltafs handle the hassles so you can focus on growing your business.",
        ],
      }}
      solutions={{
        overline: "COMPREHENSIVE TAX SERVICES",
        titleLead: "Miltafs Comprehensive",
        highlight: "Tax Preparation Services",
        subtitle:
          "End-to-end tax preparation, review, and e-filing for individuals and businesses across Connecticut.",
        items: [
          { icon: PersonIcon, title: "Individual CT Tax Preparation Service", desc: "Customized solutions to maximize deductions and credits, ensuring compliance with IRS regulations." },
          { icon: BusinessIcon, title: "Business Tax Services Near Me", desc: "Expertise in corporate tax planning and preparation, helping businesses minimize liabilities and optimize tax positions." },
          { icon: AccountBalanceIcon, title: "Estate and Trust Taxation", desc: "Specialized services to manage the complexities of estate and trust tax filings, ensuring fiduciary responsibilities are met." },
          { icon: VolunteerActivismIcon, title: "Nonprofit Tax Compliance", desc: "Assistance with maintaining tax-exempt status and compliance with federal and state reporting requirements." },
          { icon: DescriptionIcon, title: "Federal Tax Preparation", desc: "Form 1040, 1120, 1120S, 1041, 1065 preparation with deductions, credits, and accurate filing." },
          { icon: LocationCityIcon, title: "State & Local CT Tax Preparation", desc: "Income, sales, property taxes, and city-specific taxes handled for Connecticut businesses and individuals." },
          { icon: FactCheckIcon, title: "Tax Review & Finalization", desc: "Two-step quality assurance: accuracy checks, compliance audit, optimization scan, and secure final submission." },
          { icon: SendIcon, title: "Tax E-Filing Service", desc: "Secure electronic filing for IRS, Connecticut DRS, municipal portals, amendments, and extensions." },
          { icon: ReceiptLongIcon, title: "Specialized Tax Forms", desc: "Form 990, 1099 series, Schedule C, Form 8825, and other niche filings for non-profits, contractors, self-employed, and real estate." },
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
          "Never Miss a Tax Deadline Again",
          "IRS, state, and local compliance handled with precision",
          "Avoid penalties and fines, protect your bottom line",
          "Focus on growing your business, we handle the paperwork",
        ],
      }}
      faqs={faqs}
    />
  );
}

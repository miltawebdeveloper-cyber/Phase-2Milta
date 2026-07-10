import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Can Miltafs prepare both personal and company tax returns?", a: "Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and nonprofits." },
  {
    q: "What documents are required for tax preparation services in New York?",
    a: `To ensure accurate and complete tax preparation service in New York USA, you'll need to provide the following documents:

Personal Information:
- Social Security numbers and dates of birth for you, your spouse, and dependents
- Copies of last year's tax return for you and your spouse (helpful, but not required)
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
  { q: "Can you help with state and city taxes?", a: "Yes, we provide complete tax preparation services in New York for federal, state, and city taxes, ensuring compliance at all levels." },
  { q: "Is Miltafs service affordable?", a: "Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client." },
];

export default function TaxNewYork() {
  return (
    <ServiceLayout
      seo={{
        title: "Tax Planning and Preparation in New York | Federal, State & City",
        description:
          "Skilled tax preparation services in New York for Federal, State, and City taxes. Specializing in Forms 1040, 1041, 1065, 1120, 1120S, and 990.",
        keywords:
          "tax services near me, tax preparation services in new york, accounting firm near me, tax planning and preparation, ny tax preparation",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-newyork/",
      }}
      hero={{
        titleLead: "Optimize Your Tax Filing with Trusted",
        highlight: "Tax Preparation Services in New York!",
        subtitle:
          "Make your tax filing process seamless with reliable tax services near me. Whether you're filing federal, state, or city taxes, our expert team offers professional tax planning and preparation to ensure accuracy.",
        breadcrumb: "Tax Planning & Preparation in New York",
      }}
      intro={{
        overline: "TAX PLANNING & PREPARATION",
        titleLead: "Specializing in Business and Individual Tax Preparation Services in",
        highlight: "New York, USA",
        paragraphs: [
          "As a business owner, your focus should be on growing your products, services, and operations, not on managing financial statements, balancing books, or keeping up with evolving tax regulations. While an accounting firm near me may have met your needs in the early stages, business growth introduces new financial complexities. From hiring employees to managing estimated taxes and optimizing cash flow, expert guidance is essential year-round.",
          "At Milta, we provide professional tax preparation services in New York, offering proactive strategies to ensure compliance and maximize tax savings. If you're searching for tax services near me, partner with us for expert financial support not just during tax season, but throughout your business journey.",
        ],
        ctaLabel: "Get Started Today with a Free Consultation!",
        imageAlt: "Tax planning and preparation services in New York",
      }}
      cardGroups={[
        {
          overline: "FEDERAL TAX FORMS",
          titleLead: "Understanding Key",
          highlight: "Federal Tax Forms",
          bg: "paper",
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
        {
          overline: "TAX PREPARATION SERVICES",
          titleLead: "Miltafs Comprehensive",
          highlight: "Tax Preparation Services",
          items: [
            { title: "Individual NY Tax Preparation Service", desc: "Customized solutions to maximize deductions and credits, ensuring compliance with IRS regulations." },
            { title: "Business Tax Services Near Me", desc: "Expertise in corporate tax planning and preparation, helping businesses minimize liabilities and optimize tax positions." },
            { title: "Estate and Trust Taxation", desc: "Specialized services to manage the complexities of estate and trust tax filings, ensuring fiduciary responsibilities are met." },
            { title: "Nonprofit Tax Compliance", desc: "Assistance with maintaining tax-exempt status and compliance with federal and state reporting requirements." },
            { title: "Federal Tax Preparation", desc: "Form 1040, 1120, 1120S, 1041, 1065 preparation with deductions, credits, and accurate filing." },
            { title: "State & Local NY Tax Preparation", desc: "Income, sales, property taxes, and city-specific taxes handled for New York businesses and individuals." },
            { title: "Tax Review & Finalization", desc: "Two-step quality assurance: accuracy checks, compliance audit, optimization scan, and secure final submission." },
            { title: "Tax E-Filing Service", desc: "Secure electronic filing for IRS, New York DRS, municipal portals, amendments, and extensions." },
            { title: "Specialized Tax Forms", desc: "Form 990, 1099 series, Schedule C, Form 8825, and other niche filings for non-profits, contractors, self-employed, and real estate." },
          ],
        },
      ]}
      checklists={[
        {
          overline: "STAY COMPLIANT",
          titleLead: "Stay Compliant with Expert Tax Preparation Services in",
          highlight: "New York",
          items: [
            "Year-Round Support: Not just tax season we're here for quarterly estimated payments, IRS notices, or audit defense.",
            "New York-Specific Knowledge: Deep familiarity with state tax incentives (e.g., film production credits, green energy rebates).",
            "Proactive Compliance: We monitor law changes (e.g., NY Pass-Through Entity Tax updates) to keep you ahead.",
            "Stress-Free Experience: We handle the paperwork, deadlines, and jargon you focus on growing your business.",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

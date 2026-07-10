import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Can Miltafs prepare both personal and company tax returns?", a: "Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and nonprofits." },
  {
    q: "What documents are required for tax preparation services in North Carolina?",
    a: `To ensure accurate and complete tax preparation service in North Carolina, USA, you'll need to provide the following documents:

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
  { q: "Can you help with state and city taxes?", a: "Yes, we provide complete tax preparation services in North Carolina for federal, state, and city taxes, ensuring compliance at all levels." },
  { q: "Is Miltafs service affordable?", a: "Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client." },
];

export default function TaxNorthCarolina() {
  return (
    <ServiceLayout
      seo={{
        title: "Trusted Tax Planning and Preparation in North Carolina | Milta",
        description:
          "Our skilled tax preparation services in North Carolina cover Federal and State taxes. Specializing in Forms 1040, 1041, 1065, 1120, 1120S, and 990.",
        keywords:
          "tax services near me, tax preparation services in north carolina, accounting firm near me, tax planning and preparation, nc tax preparation",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-northcarolina/",
      }}
      hero={{
        titleLead: "Maximize Your Refunds with Expert",
        highlight: "NC Tax Preparation Services!",
        subtitle:
          "Simplify tax season using trusted tax preparation services in North Carolina and reliable tax services near me.",
        breadcrumb: "Tax Planning & Preparation in North Carolina",
      }}
      intro={{
        overline: "TAX PLANNING & PREPARATION",
        titleLead: "Specializing in Business & Individual Tax Planning and Preparation in",
        highlight: "North Carolina",
        paragraphs: [
          "As a business owner, your priority is scaling your products, services, and operations, not juggling financial statements, decoding tax codes, or tracking shifting regulations. While a local accounting firm near me might have sufficed initially, expansion demands advanced solutions. From payroll management and cash flow optimization to quarterly tax estimates, navigating these challenges requires year-round expertise.",
          "At Milta, we specialize in tax preparation services in North Carolina, blending proactive tax planning and preparation to secure compliance and amplify savings. Whether you're a startup or an established enterprise searching for dependable tax services near me, we provide end-to-end support that evolves with your business ensuring financial clarity beyond April 15.",
        ],
        ctaLabel: "Claim Your Free Consultation Today!",
        imageAlt: "Tax planning and preparation services in North Carolina",
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
            { title: "Individual NC Tax Preparation Service", desc: "Customized solutions to maximize deductions and credits, ensuring compliance with IRS regulations." },
            { title: "Business Tax Services Near me", desc: "Expertise in corporate tax planning and preparation, helping businesses minimize liabilities and optimize tax positions." },
            { title: "Estate and Trust Taxation", desc: "Specialized services to manage the complexities of estate and trust tax filings, ensuring fiduciary responsibilities are met." },
            { title: "Nonprofit Tax Compliance", desc: "Assistance with maintaining tax-exempt status and compliance with federal and state reporting requirements." },
            { title: "Federal Tax Preparation", desc: "Form 1040, 1120, 1120S, 1041, 1065 preparation with deductions, credits, and accurate filing." },
            { title: "State & Local NC Tax Preparation", desc: "Income, sales, property taxes, and city-specific taxes handled for North Carolina businesses and individuals." },
            { title: "Tax Review & Finalization", desc: "Two-step quality assurance: accuracy checks, compliance audit, optimization scan, and secure final submission." },
            { title: "Tax E-Filing Service", desc: "Secure electronic filing for IRS, North Carolina DRS, municipal portals, amendments, and extensions." },
            { title: "Specialized Tax Forms", desc: "Form 990, 1099 series, Schedule C, Form 8825, and other niche filings for non-profits, contractors, self-employed, and real estate." },
          ],
        },
      ]}
      checklists={[
        {
          overline: "WHY PARTNER WITH US",
          titleLead: "Why Partner",
          highlight: "With Us?",
          items: [
            "Year-Round Support: Not just tax season we're here for quarterly estimated payments, IRS notices, or audit defense.",
            "North Carolina-Specific Knowledge: Deep familiarity with state tax incentives (e.g., film production credits, green energy rebates).",
            "Proactive Compliance: We monitor law changes (e.g., NC Pass-Through Entity Tax updates) to keep you ahead.",
            "Stress-Free Experience: We handle the paperwork, deadlines, and jargon so you can focus on growing your business.",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

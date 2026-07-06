import React from "react";
import useFullSEO from "../../utils/useFullSEO";
import {
  StatePageShell,
  StateHero,
  Prose,
  HighlightStrip,
  FeatureCards,
  FAQBlock,
} from "../_shared/StatePageKit";

const FEDERAL_FORMS = [
  { title: "Form 1040", desc: "Used by individuals to report income and claim deductions/credits. Includes detailed sections for wages, investments, and deductions." },
  { title: "Form 1041", desc: "Filed for estates and trusts, reporting income distributed to beneficiaries. Ensures compliance with fiduciary tax obligations." },
  { title: "Form 1065", desc: "Partnership tax returns, detailing profits, losses, and credits. Partners receive a Schedule K-1 for individual filings." },
  { title: "Form 990", desc: "Non-Profit Organization returns, required to maintain tax-exempt status. Transparency in reporting revenue, expenses, and program activities." },
  { title: "Form 1120", desc: "C Corporation returns, detailing corporate income, expenses, and tax liabilities." },
  { title: "Form 1120S", desc: "For S Corporations, reflecting income passed through to shareholders." },
  { title: "Form 1099", desc: "Used to report miscellaneous income for contractors, freelancers, and other non-employee payments." },
];

const SOLUTIONS = [
  { title: "Individual SC Tax Preparation Service", desc: "Customized solutions to maximize deductions and credits, ensuring compliance with IRS regulations." },
  { title: "Business Tax Services Near me", desc: "Expert corporate tax planning and preparation to minimize liabilities and optimize tax positions." },
  { title: "Estate and Trust Taxation", desc: "Specialized services to manage the complexities of estate and trust tax filings, ensuring fiduciary responsibilities are met." },
  { title: "Nonprofit Tax Compliance", desc: "Assistance with maintaining tax-exempt status and compliance with federal and state reporting requirements." },
];

const HIGHLIGHTS = [
  "Year-Round Support – Not just tax season",
  "California-Specific Tax Knowledge & Incentives",
  "Proactive Compliance & Law Change Monitoring",
  "Stress-Free Experience – We Handle Everything",
];

const FAQS = [
  { q: "Can Miltafs prepare both personal and company tax returns?", a: "Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and nonprofits." },
  {
    q: "What documents are required for tax preparation services in California?",
    a: `Personal Information:
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
  { q: "Can you help with state and city taxes?", a: "Yes, we provide complete tax preparation services in California for federal, state, and city taxes, ensuring compliance at all levels." },
  { q: "Is Miltafs service affordable?", a: "Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client." },
];

export default function TaxServicesCalifornia() {
  useFullSEO({
    title: "Premier Tax Planning and Preparation Services in California",
    description:
      "Expert tax planning and preparation in California for federal and state returns, including Forms 1040, 1041, 1065, 1120, 1120S, and 990.",
    keywords:
      "tax services near me, tax preparation services in california, accounting firm near me, tax planning and preparation, sc tax preparation",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-california/",
  });

  return (
    <StatePageShell>
      <StateHero
        lead="Unlock the Full Potential of Your Refund with Premier"
        highlight="Tax Services Near Me"
        subtitle="Our esteemed accounting firm is dedicated to guiding you through all your tax planning and preparation requirements in California."
        breadcrumb="Tax Planning & Preparation in California"
        ctaText="Schedule Your Complimentary Consultation"
      />

      <Prose
        overline="TAX STRATEGY & PREPARATION"
        title="Business & Individual Tax Strategy and Preparation in"
        highlight="California"
        paragraphs={[
          "As a business owner, your attention should be directed toward expanding your products, services, and operations—not on managing financial reports, deciphering tax regulations, or keeping pace with shifting laws. While a local accounting firm may have initially fulfilled your needs, growth requires more refined solutions. From payroll oversight and cash flow enhancement to quarterly tax forecasts, tackling these challenges necessitates continuous expertise.",
          "At Milta, we specialize in tailored tax preparation services in California, blending proactive tax strategy and preparation to ensure compliance while maximizing your savings. Whether you're launching a startup or running a well-established enterprise in search of dependable tax services nearby, we offer all-encompassing support that adapts to your evolving business, providing financial clarity long after April 15.",
          "Late filings or inaccuracies can lead to IRS audits, significant fines, and cash flow issues. Milta’s tax preparation services in California mitigate compliance risks by ensuring precise and timely submissions. Searching for reliable tax services nearby? Our knowledgeable team manages IRS forms, deductions, and state-specific requirements, allowing you to avoid penalties and focus on expanding your business.",
        ]}
      />

      <FeatureCards
        dark
        overline="KEY FEDERAL FORMS"
        title="Understanding Key Federal Tax"
        highlight="Forms"
        items={FEDERAL_FORMS}
        columns={3}
      />

      <HighlightStrip
        overline="WHY MILTAFS"
        title="Why Partner"
        highlight="With Us?"
        items={HIGHLIGHTS}
      />

      <FeatureCards
        overline="COMPREHENSIVE TAX SERVICES"
        title="Expert Tax Preparation Services in"
        highlight="California"
        subtitle="Miltafs comprehensive tax services cover every filing need — for individuals, businesses, estates, and nonprofits."
        items={SOLUTIONS}
        columns={4}
      />

      <FAQBlock
        overline="FAQ"
        title="FAQs About Miltafs Tax Preparation Services in"
        highlight="California"
        faqs={FAQS}
      />
    </StatePageShell>
  );
}

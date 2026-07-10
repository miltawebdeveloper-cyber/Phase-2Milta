import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Can Miltafs prepare both personal and company tax returns?", a: "Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and nonprofits." },
  {
    q: "What documents are required for tax preparation services in Pennsylvania?",
    a: `To ensure accurate and complete tax preparation service in Pennsylvania, USA, you'll need to provide the following documents:

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
  { q: "Can you help with state and city taxes?", a: "Yes, we provide complete tax preparation services in Pennsylvania for federal, state, and city taxes, ensuring compliance at all levels." },
  { q: "Is Miltafs service affordable?", a: "Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client." },
];

export default function BookkeepingPennsylvania() {
  return (
    <ServiceLayout
      seo={{
        title: "Top Bookkeeping Services for Small Businesses in Pennsylvania",
        description:
          "Get accurate and organized records with a trusted bookkeeping company in Pennsylvania. Looking for bookkeeping services near me? Contact us today!",
        keywords:
          "bookkeeping services, bookkeeping services near me, bookkeeping services for small business, best bookkeeping for small business, bookkeeping company in Pennsylvania, bookkeeping services in pennsylvania",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-bookkeeping-services-in-pennsylvania/",
      }}
      hero={{
        titleLead: "Maximize Your Tax Savings with Expert",
        highlight: "PA Tax Preparation!",
        subtitle:
          "Simplify your tax filing with trusted tax services near me. Whether federal, state, or local taxes, our experts provide precise tax planning and preparation. Looking for an accounting firm near me? Get reliable tax preparation services in Pennsylvania today!",
        breadcrumb: "Bookkeeping Services in Pennsylvania",
      }}
      intro={{
        overline: "TAX PLANNING & PREPARATION",
        titleLead: "Specialized Business & Individual Tax Preparation Services in",
        highlight: "Pennsylvania, USA",
        paragraphs: [
          "Reliable Tax Planning & Preparation for Your Business",
          "As a business owner, your focus should be on growth—not complex tax filings or evolving regulations. While an accounting firm near me may have met your needs early on, business expansion brings new financial challenges. From hiring employees to managing estimated taxes and cash flow, expert support is crucial year-round.",
          "At Milta, we provide professional tax preparation services in Pennsylvania, ensuring businesses stay compliant while maximizing tax savings. If you're searching for tax services near me, partner with us for proactive tax planning and preparation, ensuring financial accuracy beyond tax season.",
          "Stay Compliant with PA Tax Preparation. Missed deadlines or tax filing errors can lead to costly penalties that impact profitability. Milta's trusted PA tax preparation services keep your business compliant, reducing risks of fines and ensuring smooth tax management. If you're looking for tax services near me, our expert team efficiently handles your tax obligations, so you can focus on business growth.",
        ],
        ctaLabel: "Get Started Today with a Free Consultation!",
        imageAlt: "Tax and bookkeeping services in Pennsylvania",
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
          overline: "OUR SERVICES",
          titleLead: "Our Services",
          highlight: "Include",
          columns: 2,
          items: [
            { title: "Individual PA Tax Preparation Service", desc: "Customized solutions to maximize deductions and credits, ensuring compliance with IRS regulations." },
            { title: "Business Tax Services Near me", desc: "Expertise in corporate tax planning and preparation, helping businesses minimize liabilities and optimize tax positions." },
            { title: "Estate and Trust Taxation", desc: "Specialized services to manage the complexities of estate and trust tax filings, ensuring fiduciary responsibilities are met." },
            { title: "Nonprofit Tax Compliance", desc: "Assistance with maintaining tax-exempt status and compliance with federal and state reporting requirements." },
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
            "Pennsylvania-Specific Knowledge: Deep familiarity with state tax incentives (e.g., film production credits, green energy rebates).",
            "Proactive Compliance: We monitor law changes (e.g., PA Pass-Through Entity Tax updates) to keep you ahead.",
            "Stress-Free Experience: We handle the paperwork, deadlines, and jargon you focus on growing your business.",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

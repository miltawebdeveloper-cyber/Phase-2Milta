import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Can Miltafs prepare both personal and company tax returns?", a: "Absolutely. We specialize in individual and business tax returns, including partnerships, corporations, nonprofits, trusts, and estates." },
  {
    q: "What documents are required for tax preparation services in Massachusetts?",
    a: `To ensure accurate and complete tax preparation service in Massachusetts, USA, you'll need to provide the following documents:

Personal Information:
- Social Security numbers and dates of birth for you, your spouse, and dependents
- Copies of last year's tax return (helpful, but not required)
- Bank account and routing number for direct deposit

Income Information:
- W-2 forms
- 1099-NEC, 1099-MISC
- 1099-G, 1099-C
- 1099-R, Form 8606
- 1099-S
- 1099-INT, DIV, B, or K-1
- SSA-1099
- Business, rental, farming, and miscellaneous income documentation`,
  },
  { q: "Can you help with state and city taxes?", a: "Yes, we provide complete tax preparation services across Massachusetts for federal, state, and municipal tax compliance." },
  { q: "Is Miltafs service affordable?", a: "Yes. We offer competitive pricing while delivering high-quality, precision-driven tax services." },
];

export default function TaxServices() {
  return (
    <ServiceLayout
      seo={{
        title: "Tax Planning and Preparation Services in MA | Milta",
        description:
          "As a trusted accounting firm near me, we specialize in tax planning and preparation services for federal and state filings.",
        keywords:
          "tax services near me, tax preparation services in massachusetts, accounting firm near me, tax planning and preparation, ma tax preparation",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-massachusetts/",
      }}
      hero={{
        titleLead: "Unlock the Full Potential of Your Refund with Premier",
        highlight: "Tax Services Near Me!",
        subtitle:
          "We specialize in tax planning and preparation for federal and state filings, including IRS Forms 1040, 1041, 1065, 1120, 1120S, and 990. Let's tackle your taxes the smarter way.",
        breadcrumb: "Tax Preparation Services in Massachusetts",
      }}
      intro={{
        overline: "TAX PREPARATION",
        titleLead: "We Specialize in Business & Individual",
        highlight: "Tax Preparation",
        paragraphs: [
          "Strategic Tax Planning & Precision-Driven Preparation Solutions in Massachusetts.",
          "As a business leader, your focus should remain on scaling operations and innovation—not untangling tax codes or deciphering financial reports. Growth demands proactive tax planning, payroll optimization, cash flow forecasting, and multi-state compliance expertise.",
          "At Milta, we deliver tailored tax preparation services in Massachusetts for businesses and individuals. Our strategic approach ensures compliance while unlocking every savings opportunity—long after tax season ends.",
          "Missed deadlines or filing errors can trigger audits, penalties, and cash flow disruptions. Our MA tax preparation experts handle complex IRS and state filings so you can focus on growth with confidence.",
        ],
        ctaLabel: "Schedule Your Free Consultation",
        imageAlt: "Tax preparation services in Massachusetts",
      }}
      cardGroups={[
        {
          overline: "FEDERAL TAX FORMS",
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
        {
          overline: "OUR SERVICES",
          titleLead: "Miltafs Comprehensive Tax",
          highlight: "Preparation Services",
          columns: 3,
          items: [
            { title: "Individual MA Tax Preparation Service", desc: "Customized solutions to maximize deductions and credits while ensuring IRS and Massachusetts compliance." },
            { title: "Business Tax Services Near Me", desc: "Corporate tax planning and preparation to minimize liabilities and optimize profitability." },
            { title: "Estate and Trust Taxation", desc: "Expert handling of fiduciary tax filings to protect beneficiaries and meet compliance standards." },
            { title: "Nonprofit Tax Compliance", desc: "Maintain tax-exempt status with accurate Form 990 filings and regulatory compliance." },
            { title: "Federal Tax Preparation", desc: "Expert filing of Forms 1040, 1120, 1120S, 1041, and 1065 with deductions and credits applied." },
            { title: "Massachusetts State & Local Tax Preparation", desc: "Income, sales, property, and municipal tax filings handled with MA-specific expertise." },
            { title: "Tax Review & Finalization", desc: "Accuracy checks, compliance audits, and optimization scans before submission." },
            { title: "Tax E-Filing Service", desc: "Secure electronic filing for IRS, MA DRS, municipal portals, amendments, and extensions." },
            { title: "Specialized Tax Forms", desc: "Form 990, 1099 series, Schedule C, Form 8825, and other niche filings handled expertly." },
          ],
        },
      ]}
      checklists={[
        {
          overline: "WHY PARTNER",
          titleLead: "Why Partner",
          highlight: "With Us?",
          items: [
            "Year-Round Tax Support — Not Just During Tax Season",
            "Massachusetts-Specific Tax Knowledge & Incentives",
            "Proactive Compliance to Prevent Penalties",
            "Stress-Free Tax Experience So You Can Focus on Growth",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

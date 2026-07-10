import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Can Miltafs prepare both personal and company tax returns?", a: "Absolutely. We specialize in individual and business tax returns, including partnerships, corporations, and nonprofits." },
  {
    q: "What documents are required for tax preparation services in Ohio?",
    a: `To ensure accurate tax preparation service in Ohio, please provide:

Personal Information:
- Social Security numbers and dates of birth
- Prior-year tax returns (if available)
- Bank details for direct deposit

Income Information:
- W-2 and 1099 forms
- Investment income (1099-INT, DIV, B, K-1)
- Business or rental income statements
- Retirement income (1099-R, SSA-1099)
- Miscellaneous income and deductions`,
  },
  { q: "Can you help with state and city taxes?", a: "Yes. We provide complete tax preparation services in Ohio for federal, state, and city taxes." },
  { q: "Is Miltaf's service affordable?", a: "Yes. We offer competitive pricing while maintaining high-quality service and personalized support." },
];

export default function TaxOhio() {
  return (
    <ServiceLayout
      seo={{
        title: "Ohio Tax Planning & Prep | Trusted Tax Services Near Me",
        description:
          "Hassle-free Ohio tax preparation! Expert tax planning and preparation for Federal, State, and City taxes. Find tax services near me today!",
        keywords:
          "tax services near me, tax preparation services in ohio, accounting firm near me, tax planning and preparation, oh tax preparation",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-ohio/",
      }}
      hero={{
        titleLead: "Graceful Your Tax Filing Process with Expert",
        highlight: "Federal, State, and City Tax Services Near Me!",
        subtitle:
          "We handle complicated tax forms and files, so you don't have to. Get Started Today with a Free Consultation!",
        breadcrumb: "Tax Planning & Preparation in Ohio",
      }}
      intro={{
        overline: "TAX PLANNING & PREPARATION",
        titleLead: "We Specialize in Business & Individual",
        highlight: "Tax Preparation",
        paragraphs: [
          "As a business owner, your focus is on growing your products, services, and operations—not on balancing your books, creating financial statements, or keeping up with ever-changing tax regulations. Partner with a trusted advisor year-round, not just during tax season.",
          "Never Miss a Tax Deadline Again. The IRS, along with state and local agencies, enforces strict deadlines for business tax filings, payroll, and sales tax compliance. Missing deadlines or errors in reporting can lead to costly penalties, hurting your profitability.",
          "As your dedicated partner, we ensure you meet all tax obligations on time, avoid fines, and protect your bottom line. Let Miltafs handle the hassles so you can focus on growing your business.",
        ],
        ctaLabel: "Schedule Your Free Consultation",
        imageAlt: "Tax planning and preparation services in Ohio",
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
            { title: "Individual OH Tax Preparation Service", desc: "Customized strategies to maximize deductions and credits while ensuring full IRS and Ohio compliance." },
            { title: "Business Tax Services Near Me", desc: "Advanced corporate tax planning and preparation to minimize liabilities and optimize cash flow." },
            { title: "Estate and Trust Taxation", desc: "Expert handling of fiduciary tax filings to protect beneficiary interests and ensure compliance." },
            { title: "Nonprofit Tax Compliance", desc: "Support for maintaining tax-exempt status with accurate Form 990 and state filings." },
            { title: "Federal & OH Tax Preparation", desc: "Preparation of Forms 1040, 1120, 1120S, 1041, and 1065 with optimized deductions and credits." },
            { title: "State & Local Ohio Tax Filing", desc: "Income, sales, and property tax compliance across Ohio municipalities." },
            { title: "Tax Review & Finalization", desc: "Two-step quality assurance process including compliance audits and optimization checks." },
            { title: "Tax E-Filing Service", desc: "Secure electronic filing with IRS, Ohio DRS, amendments, and extensions." },
            { title: "Specialized Tax Forms", desc: "Expert handling of Forms 990, 1099 series, Schedule C, and Form 8825." },
          ],
        },
      ]}
      checklists={[
        {
          overline: "WHY PARTNER WITH US",
          titleLead: "Why Partner",
          highlight: "With Us?",
          items: [
            "Expert Tax Preparation for Individuals and Businesses",
            "Maximized Deductions and Credits",
            "Accurate and Timely Filing",
            "Full Compliance with Federal, State, and Local Tax Laws",
            "Personalized Support and Guidance",
            "Secure and Confidential Service",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Can Miltafs prepare both personal and company tax returns?", a: "Absolutely. We specialize in individual and business tax returns, including partnerships, corporations, estates, trusts, and nonprofits." },
  {
    q: "What documents are required for tax preparation services in Texas?",
    a: `To ensure accurate tax preparation, you'll need:
- W-2 and 1099 forms
- Prior year tax returns
- Business or rental income statements
- Investment and retirement income records
- Bank details for direct deposit`,
  },
  { q: "Can you help with state and city taxes?", a: "Yes, we provide complete tax preparation services in Texas for federal, state, and local taxes." },
  { q: "Is Miltafs service affordable?", a: "Yes. We offer competitive pricing while delivering expert, high-quality tax services." },
];

export default function TaxTexas() {
  return (
    <ServiceLayout
      seo={{
        title: "Texas Tax Planning & Preparation Services | Trusted Experts",
        description:
          "Stress-free tax planning and preparation in Texas for federal, state, and local taxes. Work with trusted tax professionals near you.",
        keywords:
          "tax services near me, tax preparation services in texas accounting firm near me, tax planning and preparation, texas tax preparation",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-texas/",
      }}
      hero={{
        titleLead: "Boost Your Tax Savings with Expert",
        highlight: "Tax Preparation in Texas",
        subtitle:
          "Make tax season easier with dependable tax preparation services in Texas. From federal and state to local tax filings, our experienced accounting professionals deliver accurate tax planning and preparation you can trust—right in your area.",
        breadcrumb: "Tax Planning & Preparation in Texas",
      }}
      intro={{
        overline: "TAX PLANNING & PREPARATION",
        titleLead: "Specialized Business & Individual Tax Preparation Services in",
        highlight: "Texas",
        paragraphs: [
          "At Milta, we provide reliable tax planning and preparation services for individuals and businesses across Texas. From payroll and estimated taxes to cash flow and compliance, our experts handle it all.",
          "Our proactive approach ensures you remain compliant while maximizing tax savings—so you can focus on growth, not paperwork.",
        ],
        ctaLabel: "Get Started Today with a Free Consultation!",
        imageAlt: "Tax planning and preparation services in Texas",
      }}
      cardGroups={[
        {
          overline: "FEDERAL TAX FORMS",
          titleLead: "Understanding Key",
          highlight: "Federal Tax Forms",
          bg: "paper",
          items: [
            { title: "Form 1040", desc: "Used by individuals to report income and claim deductions and credits, including wages, investments, and itemized deductions." },
            { title: "Form 1041", desc: "Filed for estates and trusts, reporting income distributed to beneficiaries while meeting fiduciary obligations." },
            { title: "Form 1065", desc: "Partnership returns detailing profits, losses, and credits, with Schedule K-1 issued to partners." },
            { title: "Form 990", desc: "Nonprofit organization returns required to maintain tax-exempt status with transparent financial reporting." },
            { title: "Form 1120", desc: "C Corporation tax returns detailing income, expenses, depreciation, and corporate tax liabilities." },
            { title: "Form 1120S", desc: "S Corporation filings reflecting pass-through income allocated to shareholders." },
            { title: "Form 1099", desc: "Reporting miscellaneous income for contractors, freelancers, interest, dividends, and other non-employee payments." },
          ],
        },
      ]}
      checklists={[
        {
          overline: "WHY PARTNER WITH US",
          titleLead: "Why Partner",
          highlight: "With Us?",
          items: [
            "Year-Round Tax Support & Compliance",
            "Texas-Specific Tax Knowledge",
            "Proactive IRS & State Compliance",
            "Stress-Free Tax Experience",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

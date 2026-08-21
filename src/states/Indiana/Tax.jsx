import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  {
    q: "1. Can Miltafs prepare both personal and company tax returns?",
    a: "Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and nonprofits.",
  },
  {
    q: "2. What documents are required for tax preparation services in Indiana?",
    a: `To ensure accurate and complete tax preparation service in Indiana USA, you'll need to provide the following documents:

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
  {
    q: "3. Can you help with state and city taxes?",
    a: "Yes, we provide complete tax preparation services in Indiana for federal, state, and city taxes, ensuring compliance at all levels.",
  },
  {
    q: "4. Is Miltafs service affordable?",
    a: "Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function TaxIndiana() {
  return (
    <ServiceLayout
      seo={{
        title: "Tax planning & preparation services in Indiana | Milta",
        description: "Reliable tax preparation services in Indiana for federal, state & city filings — forms 1040, 1041, 1065, 1120, 1120s & 990. Contact us today.",
        keywords: "tax services near me, tax preparation services in Indiana, accounting firm near me, tax planning and preparation, ny tax preparation.",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-indiana/",
        schema: faqSchema,
      }}
      hero={{
        titleLead: "Optimize Your Tax Filing with Trusted",
        highlight: "Tax Preparation Services in Indiana!",
        subtitle: "Make your tax filing process seamless with reliable tax services near me. Whether you're filing federal, state, or city taxes, our expert team offers professional tax planning and preparation to ensure accuracy.",
        ctaLabel: "Get Started Today with a Free Consultation!",
        breadcrumb: "Tax Services in Indiana",
      }}
      intro={{
        overline: "TAX PLANNING IN INDIANA",
        titleLead: "Specializing in Business and Individual Tax Preparation Services in",
        highlight: "Indiana, USA",
        paragraphs: [
          "As a business owner, your focus should be on growing your products, services, and operations, not on managing financial statements, balancing books, or keeping up with evolving tax regulations. While an accounting firm near me may have met your needs in the early stages, business growth introduces new financial complexities. From hiring employees to managing estimated taxes and optimizing cash flow, expert guidance is essential year-round.",
          "At Milta, we provide professional tax preparation services in Indiana, offering proactive strategies to ensure compliance and maximize tax savings. If you're searching for tax services near me, partner with us for expert financial support not just during tax season, but throughout your business journey.",
        ],
        ctaLabel: "Get Started Today with a Free Consultation!",
        imageAlt: "Tax preparation services in Indiana",
      }}
      prose={{
        overline: "STAY COMPLIANT",
        titleLead: "Stay Compliant with Expert Tax Preparation Services in",
        highlight: "Indiana",
        bg: "paper",
        paragraphs: [
          "Missing tax deadlines or filing errors can lead to costly penalties, negatively affecting your business's profitability. With strict deadlines enforced by the IRS, state, and local agencies for business tax filings, payroll, and sales tax compliance, accurate and timely reporting is essential.",
          "At Milta, we provide reliable tax preparation services in Indiana, ensuring your business remains compliant and avoids unnecessary fines. If you're searching for tax services near me, our expert team handles all your tax obligations efficiently, so you can focus on growing your business while we take care of the complexities.",
        ],
      }}
      solutions={{
        overline: "COMPREHENSIVE TAX SERVICES",
        titleLead: "Miltafs Comprehensive Tax Services: Expert Tax Preparation Services in",
        highlight: "Indiana",
        subtitle: "The Milta accounting firm near me provides comprehensive tax preparation services in Indiana, serving individuals, businesses, estates, trusts, and nonprofits. Our team of experts ensures accurate tax preparation, thorough review, and seamless filing of tax returns at the federal, state, and city levels. Our Services Include:",
        items: [
          { icon: PersonIcon, title: "Individual NY Tax Preparation Service", desc: "Customized solutions to maximize deductions and credits, ensuring compliance with IRS regulations." },
          { icon: BusinessIcon, title: "Business Tax Services Near me", desc: "Expertise in corporate tax planning and preparation, helping businesses minimize liabilities and optimize tax positions." },
          { icon: AccountBalanceIcon, title: "Estate and Trust Taxation", desc: "Specialized services to manage the complexities of estate and trust tax filings, ensuring fiduciary responsibilities are met." },
          { icon: VolunteerActivismIcon, title: "Nonprofit Tax Compliance", desc: "Assistance with maintaining tax-exempt status and compliance with federal and state reporting requirements." },
        ],
        footnote: "At Milta, we are committed to providing personalized tax strategies that align with your financial goals. Our proactive approach ensures that you remain compliant with ever-changing tax laws while optimizing your tax outcomes.",
      }}
      cardGroups={[
        {
          overline: "SERVICE 1",
          titleLead: "1. Tax Preparation Service in",
          highlight: "Indiana",
          subtitle: "We handle every aspect of NY tax preparation, transforming complex financial data into accurate, compliant returns. Our goal is to minimize your tax liability and maximize refunds while ensuring full adherence to federal, state, and local regulations.",
          bg: "paper",
          columns: 2,
          items: [
            { title: "Federal Tax Preparation", desc: "Form 1040 (Individual Returns): We meticulously apply every eligible deduction (e.g., student loan interest, charitable contributions) and credit (e.g., Child Tax Credit, Earned Income Tax Credit) to reduce your taxable income and boost refunds." },
            { title: "Form 1120 & 1120S (Corporate Returns)", desc: "C Corporations (Form 1120): We navigate complex corporate income tax rules, including depreciation schedules and shareholder dividends. S Corporations (Form 1120S): We ensure proper allocation of profits/losses to shareholders and compliance with pass-through entity requirements." },
            { title: "Form 1041 (Estates & Trusts)", desc: "We manage fiduciary tax obligations, income distributions, and deductions to protect beneficiaries' interests." },
            { title: "Form 1065 (Partnerships)", desc: "We file returns for multi-owner businesses, including Form 8825 for rental real estate income, expenses, and depreciation." },
            { title: "State NY Tax Preparation (Indiana Focus)", desc: "Income Tax: Optimized filings for Indiana's progressive tax brackets, including credits like the Property Tax Credit. Sales Tax: Compliance with Indiana's 6.35% sales tax rate, exemptions, and quarterly reporting for retailers. Property Tax: Guidance on local assessments, appeals, and tax relief programs for homeowners and businesses." },
            { title: "Local Tax Expertise", desc: "We decode municipal tax codes for cities like Hartford, New Haven, and Stamford, addressing nuances such as business personal property taxes, and local surcharges or gross receipts taxes." },
          ],
        },
        {
          overline: "SERVICE 2",
          titleLead: "2. Tax Review &",
          highlight: "Finalization",
          subtitle: "Before filing, we conduct a rigorous two-step quality assurance process to safeguard against errors and audits: Tax Review Process",
          columns: 3,
          items: [
            { title: "Accuracy Check", desc: "Cross-verify income, deductions, and credits against W-2s, 1099s, and financial statements." },
            { title: "Compliance Audit", desc: "Ensure adherence to the latest IRS guidelines (e.g., R&D tax credit changes) and Indiana-specific rules." },
            { title: "Optimization Scan", desc: "Identify missed opportunities (e.g., home office deductions, retirement contributions)." },
            { title: "Finalization & Submission", desc: "Secure digital signatures and approvals via encrypted platforms. Compile audit-ready documentation (e.g., receipts, and mileage logs) for your records." },
            { title: "Guaranteed On-Time Filing", desc: "We meet deadlines to avoid late penalties (e.g., a 5% monthly penalty for late federal returns)." },
          ],
        },
        {
          overline: "SERVICE 3",
          titleLead: "3. Tax E-Filing",
          highlight: "Service",
          subtitle: "We streamline submissions with IRS-authorized e-filing software, ensuring speed, security, and accuracy: Benefits of E-Filing",
          bg: "paper",
          columns: 3,
          items: [
            { title: "24-Hour IRS Acknowledgement", desc: "Instant confirmation that your return was received." },
            { title: "Faster Refunds", desc: "Direct deposit refunds in as little as 10 days (vs. 6+ weeks for paper filing)." },
            { title: "Reduced Errors", desc: "Automated checks flag mismatched SSNs, math errors, or missing fields." },
            { title: "Military-Grade Encryption", desc: "Protect sensitive data (e.g., SSNs, bank details) during transmission." },
            { title: "We E-File All Returns", desc: "Federal (IRS), Indiana DRS, and municipal portals." },
            { title: "Specialized Filings", desc: "Amendments (Form 1040-X), extensions (Form 4868), and payment plans." },
          ],
        },
        {
          overline: "SERVICE 4",
          titleLead: "4. Tax Forms We",
          highlight: "Specialize In",
          subtitle: "Beyond basic returns, we expertly handle niche filings to cover all your needs:",
          columns: 2,
          items: [
            { title: "Form 990 (Non-Profits)", desc: "Maintain tax-exempt status with detailed reporting on revenue, grants, and executive compensation." },
            { title: "Form 1099 Series", desc: "1099-NEC: Contractor payments. 1099-INT/DIV: Interest, dividends, and stock transactions." },
            { title: "Schedule C (Self-Employed)", desc: "Deduct home office, utilities, and business mileage." },
            { title: "Form 8825 (Real Estate)", desc: "Report rental income, expenses, and depreciation for investment properties." },
          ],
        },
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
      checklists={[{
        overline: "WHY PARTNER WITH US",
        titleLead: "Why Partner",
        highlight: "With Us?",
        bg: "default",
        items: [
          "Year-Round Support: Not just tax season we're here for quarterly estimated payments, IRS notices, or audit defense.",
          "Indiana-Specific Knowledge: Deep familiarity with state tax incentives (e.g., film production credits, green energy rebates).",
          "Proactive Compliance: We monitor law changes (e.g., NY Pass-Through Entity Tax updates) to keep you ahead.",
          "Stress-Free Experience: We handle the paperwork, deadlines, and jargon you focus on growing your business.",
        ],
      }]}
      closing={{
        overline: "CALL TO ACTION",
        titleLead: "Ready to Simplify",
        highlight: "Your Taxes?",
        bg: "paper",
        paragraphs: [
          "If you're looking for tax services near me, our tax preparation services in Indiana ensure accuracy and compliance every step of the way.",
          "CTA: Contact Us Today for a Free Consultation!",
          "FAQs About Miltafs tax preparation services in Indiana",
        ],
      }}
      faqs={faqs}
    />
  );
}

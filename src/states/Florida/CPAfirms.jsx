import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import InsightsIcon from "@mui/icons-material/Insights";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import VerifiedIcon from "@mui/icons-material/Verified";
import SavingsIcon from "@mui/icons-material/Savings";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  {
    q: "Why should I outsource CPA services?",
    a: "Outsourcing helps reduce operational costs, enhances efficiency, and provides access to specialized expertise.",
  },
  {
    q: "Is Milta experienced in handling U.S.-based accounting regulations?",
    a: "Yes, our team is well-versed in U.S. tax laws, accounting standards, and regulatory compliance.",
  },
  {
    q: "What accounting software does Milta support?",
    a: "We support QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and other leading accounting platforms.",
  },
  {
    q: "Do you offer consulting for business growth?",
    a: "Yes, Milta provides financial consulting services including growth strategies, budgeting, and profitability analysis.",
  },
  {
    q: "Can Milta assist with international accounting needs?",
    a: "Yes, we support businesses with international operations, covering cross-border tax compliance and financial reporting.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CPAFlorida() {
  return (
    <ServiceLayout
      seo={{
        title: "Expert CPA Services for Small Businesses in Florida | Milta",
        description:
          "We offer top CPA services for small businesses in Florida, providing accurate accounting solutions to support long-term business growth.",
        keywords:
          "cpa services in florida, cpa firms near me, cpa firms in florida, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in florida, certified public accountant near me",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-florida/",
        schema: faqSchema,
      }}
      hero={{
        titleLead: "Topnotch CPA Firm in",
        highlight: "Florida",
        subtitle:
          "Change Your Financial Problems with Great CPA Accounting Services for Small Business.",
        breadcrumb: "CPA Services in Florida",
      }}
      intro={{
        overline: "CPA SERVICES IN FLORIDA",
        titleLead: "Welcome to Milta",
        highlight: "CPA Services in Florida",
        paragraphs: [
          "Welcome to Milta CPA Services in Florida, a top CPA firm in the United States, and a leading accounting services provider in Florida. We help people and businesses with accounting, tax preparation, and financial planning. To assist you confidently navigate financial issues, our team of certified public accountants near you offers a variety of options.",
        ],
      }}
      solutions={{
        overline: "OUR CORE SERVICES",
        titleLead: "Our Core",
        highlight: "CPA Services in Florida",
        subtitle:
          "A full suite of accounting, tax, advisory, and assurance services built around your firm’s needs.",
        items: [
          { icon: MenuBookIcon, title: "Accounting and Bookkeeping Services", desc: "Financial Statement Preparation, General Ledger Maintenance, Accounts Payable/Receivable Management, Bank and Credit Card Reconciliations, Payroll Processing and Compliance." },
          { icon: RequestQuoteIcon, title: "Tax Planning and Preparation", desc: "Corporate and Individual Tax Returns, Sales Tax and Payroll Tax Filings, Tax Compliance, Advisory Services, IRS Representation and Audit Support." },
          { icon: InsightsIcon, title: "Financial Consulting and Advisory Services", desc: "Budgeting, Financial Forecasting, Cash Flow Management, Business Valuation, Risk Management, M&A Advisory." },
          { icon: RestartAltIcon, title: "Catch-Up Services", desc: "Review and Correction of Historical Records, Reconciliation of Discrepancies, Updating Outdated Accounting Systems." },
          { icon: CloudSyncIcon, title: "Accounting Software Setup and Conversion", desc: "QuickBooks Setup and Training, Conversions to QuickBooks Online, Cloud-Based Platform Migrations, Ongoing Support and Troubleshooting." },
          { icon: FactCheckIcon, title: "Audit and Assurance Services", desc: "Internal Audits, Risk Assessments, Financial Statement Audits, Reviews, Compilations, Compliance Audits, and Regulatory Reporting." },
        ],
      }}
      cardGroups={[
        {
          overline: "HOW WE HELP",
          titleLead: "How Milta Empowers",
          highlight: "CPA Firms",
          subtitle:
            "At the core of any successful CPA firm in Florida is the ability to maintain accurate financial records and deliver actionable insights to clients. Often, this requires balancing organizing clean books and providing strategic analysis, which can consume significant time. Milta streamlines these tasks, giving your team more time to focus on high-value strategic work.",
          bg: "paper",
          columns: 2,
          items: [
            { title: "How Can We Help Your Firm?", desc: "At the core of any successful CPA firm in Florida is the ability to maintain accurate financial records and deliver actionable insights to clients. Often, this requires balancing organizing clean books and providing strategic analysis, which can consume significant time. Milta streamlines these tasks, giving your team more time to focus on high-value strategic work." },
            { title: "Operational Efficiency Through Outsourcing", desc: "Our team of experienced professionals serves as an extension of your firm, providing reliable support for your accounting needs. Through our combined expertise in accounting and technology, we offer innovative solutions that simplify processes, reduce costs, and free up valuable time. Outsourcing CPA services in Florida with Milta saves payroll and overhead costs while enhancing efficiency and accuracy." },
          ],
        },
        {
          overline: "WHY OUTSOURCE",
          titleLead: "Why Outsource Your",
          highlight: "CPA Services?",
          columns: 2,
          items: [
            { title: "Monthly, Quarterly, and Annual Write-Up Services", desc: "Data entry, account reconciliations, and a general ledger check to ensure accuracy." },
            { title: "Catch-Up and Clean-Up Services", desc: "Write-up, review, and correction of books and records." },
            { title: "Accounting Software Conversions", desc: "Transition from QuickBooks Desktop or other accounting software to QuickBooks Online or Xero." },
            { title: "Accounting Reviews and Compilations", desc: "Performed by our in-house US CPAs and US CMAs." },
            { title: "Tax Return Preparation", desc: "Preparation of Forms 1120, 1120S, 1065, and related 1040 and 1041, 990 using software like Lacerte, Drake, Tax Slayer, TurboTax, and more." },
          ],
        },
        {
          overline: "BUILT FOR SMALL BUSINESS",
          titleLead: "Specialized CPA Services for",
          highlight: "Small Businesses",
          bg: "paper",
          columns: 2,
          items: [
            { title: "Specialized CPA Services for Small Businesses", desc: "At Milta, we understand the unique challenges faced by CPA small businesses in Florida. Our specialized services are customized to support growth, enhance operational efficiency, and ensure regulatory compliance." },
            { title: "Startup Accounting Support", desc: "Assistance with setting up accounting systems, managing initial tax filings, and establishing financial workflows." },
            { title: "Financial Health Checkups", desc: "Regular reviews to identify financial risks and growth opportunities." },
            { title: "Customized Reporting", desc: "Providing detailed, customized reports to help you make data-driven decisions." },
          ],
        },
      ]}
      advantages={{
        titleLead: "Why Choose Milta for",
        highlight: "CPA",
        titleTail: "Services in Florida",
        intro:
          "When you outsource to Milta, you gain full-time experts, overnight delivery, and savings of 60-70% — with a client retention rate exceeding 95%.",
        panelStats: [
          { num: "95%+", label: "Retention" },
          { num: "60-70%", label: "Cost Saving" },
          { num: "10y+", label: "Experience" },
          { num: "24/7", label: "Support" },
        ],
        items: [
          { icon: AccessTimeFilledIcon, title: "Available Full-Time", desc: "When you outsource to Milta, you gain access to full-time professionals dedicated to your accounting needs. Depending on your service package, we can even provide backup support to ensure continuous operations." },
          { icon: NightsStayIcon, title: "Overnight Delivery", desc: "Operating in a different time zone allows us to work on your accounting tasks while you're offline, ensuring your deliverables are ready by the time you return to the office." },
          { icon: WorkOffIcon, title: "Offload Non-Core Functions", desc: "By outsourcing your accounting functions to us, you can focus on growing your business and nurturing client relationships while we handle the financial complexities." },
          { icon: VerifiedIcon, title: "High-Quality CPA Services in Florida", desc: "Our team of skilled accounting professionals is committed to excellence. With a client retention rate exceeding 95%, we ensure consistent, high-quality service customized to your business needs." },
          { icon: SavingsIcon, title: "Reduced Overheads", desc: "Outsourcing eliminates costs related to salaries, management, hiring, and training. You can achieve overall savings of 60-70%, significantly reducing operational expenses." },
          { icon: Diversity3Icon, title: "Diversify Your Customers", desc: "Our expertise spans various industries and accounting platforms, allowing you to expand your client base without additional research or training investments." },
        ],
      }}
      faqs={faqs}
    />
  );
}

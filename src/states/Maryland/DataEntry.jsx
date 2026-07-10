import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BarChartIcon from "@mui/icons-material/BarChart";
import TuneIcon from "@mui/icons-material/Tune";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "What does accounting data entry actually involve?", a: "It's the process of recording your business's financial transactions into an organized system, so your reporting and analysis are built on accurate, well-structured data." },
  { q: "Why should I outsource my accounting data entry?", a: "Outsourcing saves time, reduces costs, and puts trained professionals in charge of accuracy — freeing you to focus on running your business instead of managing spreadsheets." },
  { q: "Are your services designed for small businesses?", a: "Yes. Our data entry solutions are built specifically for small and mid-sized businesses across the U.S., including Maryland." },
  { q: "How do you keep our financial data secure?", a: "We use secure data transfer protocols, encryption, and confidentiality agreements to protect every piece of sensitive information you share with us." },
  { q: "Can you accommodate custom data entry requests?", a: "Absolutely — our workflows are built to flex around your specific requirements, not the other way around." },
  { q: "What software platforms do you work with?", a: "We support QuickBooks, Xero, and other accounting platforms based on your preference and existing setup." },
  { q: "How quickly can you turn around a data entry request?", a: "Turnaround depends on data volume, but timely, efficient service is central to how we operate." },
  { q: "Is your team familiar with U.S. accounting standards?", a: "Yes, our staff is well-versed in U.S. accounting rules and best practices, ensuring your records stay compliant." },
];

export default function DataEntryMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Top Accounting Data Entry Services in Maryland | Milta",
        description:
          "Partner with Milta for precise, secure accounting data entry services in Maryland built for small and mid-sized businesses.",
        keywords:
          "data entry companies, accounting data entry, data entry services, data management services, data management services in maryland",
        author: "Milta Accounting",
        canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-maryland/",
      }}
      hero={{
        titleLead: "Precision-Driven Data Entry Services in",
        highlight: "Maryland, USA",
        subtitle:
          "Milta delivers accurate accounting data entry and dependable data management services that keep Maryland businesses organized, compliant, and ready to grow.",
        breadcrumb: "Data Entry Services in Maryland",
      }}
      intro={{
        overline: "WHO WE ARE",
        titleLead: "Accurate Data Entry You Can",
        highlight: "Depend On",
        paragraphs: [
          "As a trusted name among data entry companies, we provide precise, efficient accounting data entry solutions for small and mid-sized businesses throughout Maryland and beyond.",
          "Our secure, systematic approach guarantees accuracy and professionalism at every step, so you can spend less time on data entry and more time growing your business.",
        ],
        ctaLabel: "Book a Free 30-Minute Zoom Consultation",
        imageAlt: "Accounting data entry services in Maryland",
      }}
      whyEssential={{
        overline: "HOW WE WORK",
        titleLead: "Our Efficient Data Entry",
        highlight: "Process",
        subtitle:
          "We follow a structured workflow trusted by leading data entry companies — from initial collection through to final reporting.",
        items: [
          "Accurate Data Management",
          "Efficient Accounting Data Entry",
          "Secure & Confidential Handling",
          "Custom Data Solutions",
        ],
      }}
      solutions={{
        overline: "OUR SERVICES",
        titleLead: "Data Entry Services",
        highlight: "in the USA",
        subtitle: "Comprehensive, accurate data entry covering every part of your financial records.",
        items: [
          { icon: MenuBookIcon, title: "General Ledger Entry", desc: "Meticulous, methodical documentation of all financial activity to keep your ledgers accurate." },
          { icon: ReceiptLongIcon, title: "Accounts Payable & Receivable Entry", desc: "Accurate billing and payment tracking that keeps cash flow clear and vendor relationships strong." },
          { icon: DescriptionIcon, title: "Invoice Data Entry", desc: "Efficient invoice processing for timely payments and organized, searchable records." },
          { icon: AccountBalanceIcon, title: "Bank Reconciliation", desc: "Matching bank statements against your books to catch discrepancies before they become problems." },
          { icon: PeopleIcon, title: "Payroll Data Entry", desc: "Precise, compliant payroll records covering salaries, deductions, and payment history." },
          { icon: AssessmentIcon, title: "Expense Report Management", desc: "Organized, reviewed business spending data that supports smarter planning and payment." },
          { icon: BarChartIcon, title: "Financial Statement Preparation", desc: "Balance sheets and profit & loss statements prepared for confident, strategic decisions." },
          { icon: TuneIcon, title: "Custom Data Entry Services", desc: "Flexible solutions shaped around your business's unique data needs." },
          { icon: CloudSyncIcon, title: "QuickBooks Data Entry", desc: "Efficient management of invoices, reports, and financial records inside QuickBooks." },
        ],
      }}
      advantages={{
        titleLead: "A Data Entry Process",
        highlight: "Built for Accuracy",
        intro:
          "Every engagement follows the same disciplined workflow, so your financial data stays accurate no matter how much volume comes through.",
        panelStats: [
          { num: "100+", label: "Clients" },
          { num: "9", label: "Core Services" },
          { num: "100%", label: "Accuracy Focus" },
          { num: "24/7", label: "Support" },
        ],
        items: [
          { icon: FactCheckIcon, title: "Data Collection & Verification", desc: "Every record is gathered and checked before it ever enters your books." },
          { icon: AccountTreeIcon, title: "Chart of Accounts Setup", desc: "A clear, organized structure that keeps every transaction properly categorized." },
          { icon: CompareArrowsIcon, title: "Double-Entry Accounting Checks", desc: "Built-in checks that catch errors before they compound." },
          { icon: SummarizeIcon, title: "Reconciliation & Reporting", desc: "Final reconciliation and reporting so your records are always audit-ready." },
        ],
      }}
      industries={{
        overline: "WHO WE SERVE",
        titleLead: "Data Entry Support Across",
        highlight: "Every Industry",
        items: [
          "Retail",
          "Healthcare",
          "Real Estate",
          "Professional Services",
          "E-commerce",
          "Construction",
          "Hospitality",
          "Nonprofits",
          "Small Business",
        ],
      }}
      faqs={faqs}
    />
  );
}

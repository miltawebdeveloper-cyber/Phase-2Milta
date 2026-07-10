
import React from "react";
import ServiceLayout from "../_ServiceLayout"; // adjust path as needed

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PaymentsIcon from "@mui/icons-material/Payments";
import BarChartIcon from "@mui/icons-material/BarChart";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HandshakeIcon from "@mui/icons-material/Handshake";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SecurityIcon from "@mui/icons-material/Security";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

/* ================= 11-13. SEO META / SLUG ================= */
const seo = {
  title: "Bookkeeping Services in Massachusetts | Small Business Bookkeeping – Milta",
  description:
    "Milta delivers accurate, reliable bookkeeping services for small businesses across Massachusetts — reconciliation, reporting, payroll support, and CPA-ready records.",
  keywords:
    "bookkeeping services massachusetts, bookkeeping services for small business, bookkeeping company in massachusetts, small business bookkeeping near me, best bookkeeping services",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/best-bookkeeping-services-in-massachusetts/",
  // Suggested URL slug (unchanged from current canonical — recommend keeping
  // to preserve existing SEO equity unless a broader site-wide slug
  // restructure is planned):
  // /us/services/best-bookkeeping-services-in-massachusetts/
};

/* ================= 2. HERO SECTION ================= */
const hero = {
  titleLead: "Professional Bookkeeping Services in",
  highlight: "Massachusetts",
  subtitle:
    "Clear, accurate, up-to-date books for Massachusetts small businesses — so you spend less time untangling spreadsheets and more time running your business.",
  breadcrumb: "Bookkeeping",
};

/* ================= 3. INTRODUCTION ================= */
const intro = {
  overline: "YOUR FINANCIAL PARTNER",
  titleLead: "Bookkeeping Built Around Your",
  highlight: "Massachusetts Business",
  paragraphs: [
    "Running a small business in Massachusetts means juggling a hundred things at once — bookkeeping shouldn't be the one keeping you up at night. Milta pairs experienced financial professionals with a process built specifically for small business owners, so every transaction is recorded, every account is reconciled, and every report is ready the moment you need it.",
    "We go beyond basic data entry. Our team manages the full financial picture — reconciliations, payroll, reporting, and CPA coordination — giving you a real-time read on where your business stands and the confidence to plan your next move.",
    "If you're comparing bookkeeping companies in Massachusetts, here's what sets us apart: precision, responsiveness, and a genuine stake in your business's financial health.",
  ],
  ctaLabel: "Schedule Your Free Consultation",
  imageAlt: "Bookkeeping services for Massachusetts small businesses",
};

/* ================= 4. SERVICES OVERVIEW ================= */
const solutions = {
  overline: "END-TO-END BOOKKEEPING",
  titleLead: "Comprehensive Financial Solutions,",
  highlight: "Customized to Your Business",
  subtitle:
    "From daily reconciliation to year-end tax handoff, we cover the full bookkeeping workload so nothing slips through the cracks.",
  items: [
    {
      title: "Bank & Credit Card Reconciliation",
      desc: "We match every transaction against your statements each month, catching errors, duplicate charges, or signs of fraud before they become bigger problems.",
      icon: AccountBalanceIcon,
    },
    {
      title: "Cash Flow, AR & AP Management",
      desc: "Track what's coming in and going out, with organized receivables and payables that keep clients current and vendors paid on time.",
      icon: BarChartIcon,
    },
    {
      title: "Invoice Generation & Payment Tracking",
      desc: "We create and send invoices, log payments as they arrive, and follow up on anything overdue — so your cash flow keeps moving.",
      icon: ReceiptLongIcon,
    },
    {
      title: "Chart of Accounts & System Setup",
      desc: "A properly structured chart of accounts, tailored to how your business actually operates, so every transaction lands where it should.",
      icon: AccountTreeIcon,
    },
    {
      title: "Payroll & Tax Compliance",
      desc: "Accurate payroll calculations, tax withholdings, and benefits administration, handled correctly and on time.",
      icon: PaymentsIcon,
    },
    {
      title: "Custom Financial Reporting",
      desc: "Weekly, monthly, or annual reports built around the metrics that actually matter to your decisions — not generic templates.",
      icon: BarChartIcon,
    },
    {
      title: "Small Business & Non-Profit Bookkeeping",
      desc: "Specialized support for small businesses and non-profits alike, including financial clean-up for books that need a fresh start.",
      icon: VolunteerActivismIcon,
    },
    {
      title: "CPA Collaboration for Tax Season",
      desc: "We prepare and organize your records so your CPA can move quickly and file accurately when tax season arrives.",
      icon: HandshakeIcon,
    },
  ],
};

/* ================= 5. KEY BENEFITS ================= */
const whyEssential = {
  overline: "WHY IT MATTERS",
  titleLead: "Why Every Massachusetts Business Needs",
  highlight: "Professional Bookkeeping",
  items: [
    "Gives you a clear, real-time picture of income, expenses, and overall financial performance.",
    "Keeps your records organized year-round, so tax season never turns into a scramble.",
    "Surfaces the insights you need to make smarter, more strategic business decisions.",
    "Keeps you compliant with financial and tax obligations, reducing the risk of penalties.",
  ],
};

/* ================= 6. PROCESS / WORKFLOW ================= */
const cardGroups = [
  {
    overline: "HOW WE WORK",
    titleLead: "A Simple Process, Built Around",
    highlight: "Your Business",
    subtitle: "No jargon, no guesswork — just a clear path from first call to clean books.",
    bg: "paper",
    items: [
      {
        title: "Free Consultation",
        desc: "We learn about your business, your current systems, and where things stand today.",
      },
      {
        title: "Setup or Clean-Up",
        desc: "We build or organize your chart of accounts and clean up existing records so your books start from solid ground.",
      },
      {
        title: "Ongoing Reconciliation",
        desc: "Every transaction is recorded and reconciled on a consistent schedule, so nothing falls through the cracks.",
      },
      {
        title: "Reporting & Review",
        desc: "You receive regular financial reports and have a direct line to your bookkeeping team whenever questions come up.",
      },
    ],
  },
];

/* ================= 7. INDUSTRIES SERVED ================= */
const industries = {
  overline: "WHO WE SERVE",
  titleLead: "Bookkeeping Experience Across",
  highlight: "Every Industry",
  items: [
    "Healthcare",
    "Education",
    "Travel & Tourism",
    "Transportation",
    "Telecommunication",
    "Food & Beverage",
    "Finance & Insurance",
    "Entertainment",
    "Hospitality",
    "Information Technology",
    "Ecommerce",
    "CPA Firms",
    "Marketing & Advertising",
  ],
};

/* ================= 8. WHY CHOOSE US ================= */
const advantages = {
  overline: "THE MILTA DIFFERENCE",
  titleLead: "Why Massachusetts Businesses Choose",
  highlight: "Milta",
  items: [
    {
      title: "Certified, Experienced Team",
      desc: "Our bookkeepers are trained in U.S. tax law, payroll compliance, and financial reporting — not generalists learning on the job.",
      icon: VerifiedUserIcon,
    },
    {
      title: "Built for Small Businesses",
      desc: "Our services are scaled and priced for small businesses and non-profits, so you get relevant expertise without paying for features you don't need.",
      icon: StorefrontIcon,
    },
    {
      title: "Bank-Level Data Security",
      desc: "Your financial information is handled through protected systems, with confidentiality treated as a non-negotiable.",
      icon: SecurityIcon,
    },
    {
      title: "Seamless CPA Coordination",
      desc: "When tax season arrives, your CPA gets clean, organized records instead of a scramble — making filing faster and more accurate.",
      icon: AssignmentTurnedInIcon,
    },
  ],
};

/* ================= 10. FAQs ================= */
const faqs = [
  {
    q: "What does a bookkeeper actually do for a small business?",
    a: "A bookkeeper records, organizes, and maintains your day-to-day financial transactions — bank activity, invoices, payroll, and more. That foundation is what makes accurate tax filing, cash flow planning, and informed decision-making possible.",
  },
  {
    q: "Should I handle bookkeeping myself, or bring in a professional?",
    a: "Some owners manage it themselves early on, but a professional bookkeeper saves time and reduces costly errors. Our team stays current on U.S. tax law, payroll rules, and reporting standards, so you can stay focused on running the business.",
  },
  {
    q: "What bookkeeping services does Milta offer in Massachusetts?",
    a: "Reconciliation, accounts receivable and payable management, payroll processing, invoicing, custom financial reporting, and tax-preparation support — all tailored to small businesses operating in Massachusetts.",
  },
  {
    q: "How will professional bookkeeping actually help my business?",
    a: "It streamlines your financial operations, catches errors before they compound, and gives you a clear view of your financial health — all of which supports better decisions and steadier long-term growth.",
  },
  {
    q: "Can you handle payroll alongside bookkeeping?",
    a: "Yes. We provide payroll and bookkeeping together, so your team is paid accurately and on time while your financial records stay organized and current.",
  },
  {
    q: "How do I know I'm choosing the right bookkeeping company in Massachusetts?",
    a: "Look for proven experience, industry familiarity, transparent pricing, and a track record with businesses your size. We built our process specifically around small businesses in Massachusetts for exactly this reason.",
  },
  {
    q: "Is my business too small for professional bookkeeping?",
    a: "No business is too small to benefit. In fact, accurate bookkeeping is especially valuable early on — it helps you monitor cash flow, prepare for taxes, and plan for growth from a solid foundation. Our services scale with you.",
  },
  {
    q: "Which industries do you work with?",
    a: "We support a wide range of industries, including retail, hospitality, healthcare, e-commerce, and professional services. Whatever your sector, our approach is customized to your specific financial needs.",
  },
  {
    q: "How is my financial data kept secure?",
    a: "We use protected systems and follow industry best practices to safeguard your information, handling every record with strict confidentiality.",
  },
  {
    q: "How do I get started?",
    a: "Reach out to schedule a free consultation. We'll learn about your current setup and outline the fastest path to organized, accurate books.",
  },
];

/* ================= PAGE ================= */
export default function Bookkeeping() {
  return (
    <ServiceLayout
      seo={seo}
      hero={hero}
      intro={intro}
      whyEssential={whyEssential}
      solutions={solutions}
      cardGroups={cardGroups}
      industries={industries}
      advantages={advantages}
      faqs={faqs}
    />
  );
}

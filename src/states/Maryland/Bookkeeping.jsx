import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import HandshakeIcon from "@mui/icons-material/Handshake";
import TimerIcon from "@mui/icons-material/Timer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "What is bookkeeping, and why do I need it for my small business?", a: "Bookkeeping involves recording, organizing, and managing your business's financial transactions. It helps you maintain accurate financial records, make informed decisions, and ensure compliance with U.S. tax laws and regulations. Proper bookkeeping is essential for tracking cash flow, preparing for tax season, and growing your business." },
  { q: "Can I handle bookkeeping myself, or should I hire a professional?", a: "While some small business owners manage their own bookkeeping, hiring a professional ensures accuracy and saves time. Professionals stay current on U.S. tax laws, payroll management, and financial reporting, giving you peace of mind and freeing you to focus on your business." },
  { q: "What types of bookkeeping services do you offer?", a: "We provide a wide range of services, including bank and credit card reconciliation, accounts receivable and payable management, payroll processing, invoice generation, financial reporting, and tax preparation support — all customized for small businesses in Maryland." },
  { q: "How do your bookkeeping services benefit my small business?", a: "Our services streamline your financial operations, prevent errors, and save you time. You'll gain clear insight into your financial health and stay compliant with legal requirements, which is crucial for strategic decisions and long-term growth." },
  { q: "Do you offer payroll and bookkeeping services together?", a: "Yes, we provide comprehensive payroll and bookkeeping services in Maryland, ensuring your employees are paid accurately and on time while keeping your financial records organized and up to date." },
  { q: "How do I find the best bookkeeping services for small businesses near me?", a: "Look for providers with experience, expertise, and a track record of serving small businesses in Maryland. Reviews, referrals, and transparent pricing are all good indicators of a reliable service — and we pride ourselves on offering personalized support to every client." },
  { q: "Is my business too small to hire a bookkeeping company in Maryland?", a: "No business is too small for bookkeeping services. Accurate financial management is especially important for small businesses to monitor cash flow, prepare for taxes, and plan for growth. Our services are designed to be affordable and scalable to meet your needs." },
  { q: "What industries do you work with?", a: "We work with a variety of industries, including retail, hospitality, professional services, e-commerce, and more. No matter your industry, our team customizes its bookkeeping solutions to fit your business." },
  { q: "How do you ensure data security?", a: "To keep your financial information safe, we use secure systems and follow industry best practices. Your information is always handled with maximum confidentiality and care." },
  { q: "How can I get started with your bookkeeping services in Maryland?", a: "Contact us today to schedule a consultation. Whether you're searching for bookkeeping services near me or need help managing your payroll, our team is ready to support your small business." },
];

export default function BookkeepingMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Best Bookkeeping Services for Small Business in Maryland",
        description:
          "Simplify your finances with the best bookkeeping services for small business. Get accurate, organized records from a trusted bookkeeping company in Maryland.",
        keywords:
          "bookkeeping services, bookkeeping services near me, bookkeeping services for small business, best bookkeeping for small business, bookkeeping company in maryland, bookkeeping services in maryland",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-bookkeeping-services-in-maryland/",
      }}
      hero={{
        titleLead: "Bookkeeping Services for Small Businesses in",
        highlight: "Maryland, USA",
        subtitle:
          "With 10+ years of experience, our bookkeeping company in Maryland offers accurate, reliable bookkeeping for small business owners. Searching for bookkeeping services near me? We're here to support businesses across Maryland with dependable financial help.",
        breadcrumb: "Bookkeeping Services in Maryland",
      }}
      intro={{
        overline: "BEST SOLUTION IN MARYLAND",
        titleLead: "Secure Bookkeeping Services for Small",
        highlight: "Businesses in Maryland",
        paragraphs: [
          "Milta, a trusted bookkeeping company in Maryland, keeps your financial records accurate and organized. We deliver the best bookkeeping for small business owners, giving you clear insights that support confident, informed decisions.",
          "From precise data entry to detailed financial reporting, our professionals handle every part of your accounting with care. If you're searching for bookkeeping services near me, we proudly serve small businesses across Maryland — simplifying your finances, improving accuracy, and supporting sustainable growth.",
        ],
        ctaLabel: "Contact Us Today for Expert Support",
        imageAlt: "Bookkeeping services in Maryland",
      }}
      whyEssential={{
        overline: "WHY IT MATTERS",
        titleLead: "Why Does Every Business Need",
        highlight: "Bookkeeping?",
        items: [
          "Tracks income and expenses effectively, giving you a clear picture of your financial performance.",
          "Prepares you for tax season without last-minute stress by keeping your records organized.",
          "Provides insights into financial performance for strategic planning and business growth.",
          "Ensures compliance with financial and tax obligations, reducing the risk of penalties or errors.",
        ],
      }}
      solutions={{
        overline: "END-TO-END SOLUTIONS",
        titleLead: "Comprehensive Bookkeeping and Financial Solutions",
        highlight: "Customized to Your Needs",
        subtitle:
          "From organizing financial records to year-end tax preparation, we have every aspect of your Maryland business finances covered.",
        items: [
          { icon: AccountBalanceIcon, title: "Bank & Credit Card Reconciliation", desc: "We ensure your financial records match your bank and credit card statements, eliminating discrepancies and safeguarding against errors or fraud." },
          { icon: CurrencyExchangeIcon, title: "Cash Flow, AR & AP Management", desc: "We track cash inflows and outflows, manage receivables to monitor outstanding payments, and handle payables so vendor bills are paid on time." },
          { icon: ReceiptLongIcon, title: "Invoice Generation & Payment Tracking", desc: "We handle invoice creation, timely payment recording, and follow-up on overdue payments, keeping your income tracked accurately." },
          { icon: AssignmentIcon, title: "Chart of Accounts & System Setup", desc: "We build a customized chart of accounts and maintain an organized accounting system, so everything is easy to find when you need it." },
          { icon: PeopleIcon, title: "Payroll & Employee Benefits Management", desc: "We manage payroll calculations, tax withholdings, and employee benefits, ensuring accurate, on-time, compliant payments." },
          { icon: BarChartIcon, title: "Customized Financial Reporting", desc: "Weekly, monthly, and yearly reports tailored to your needs, giving you clear insight into revenue, expenses, and profit." },
          { icon: CleaningServicesIcon, title: "Financial Clean-Up & Non-Profit Bookkeeping", desc: "We manage the unique needs of small businesses and non-profits alike, and clean up disorganized records to restore control." },
          { icon: HandshakeIcon, title: "CPA Collaboration for Tax Preparation", desc: "We work closely with your CPA to prepare and organize records, simplifying year-end tax filing so you can focus on your business." },
        ],
      }}
      advantages={{
        titleLead: "Why Professional",
        highlight: "Bookkeeping",
        titleTail: "Matters",
        intro:
          "Outsourcing your bookkeeping gives you expert accuracy, tax-readiness, and the freedom to focus entirely on growing your Maryland business.",
        panelStats: [
          { num: "100+", label: "Clients" },
          { num: "10y+", label: "Experience" },
          { num: "100%", label: "Accuracy" },
          { num: "24/7", label: "Support" },
        ],
        items: [
          { icon: TimerIcon, title: "Save Time & Reduce Stress", desc: "Free yourself from tedious recordkeeping and focus on growing your Maryland business." },
          { icon: CheckCircleIcon, title: "Improve Accuracy & Reduce Errors", desc: "Our certified team keeps your books accurate, avoiding costly mistakes and rework." },
          { icon: TrendingUpIcon, title: "Make Informed Decisions", desc: "Access up-to-date financial insights and expert guidance for strategic planning." },
          { icon: SecurityIcon, title: "Ensure Tax Readiness & Compliance", desc: "Stay compliant with Maryland and federal requirements, with records always tax-season ready." },
          { icon: CenterFocusStrongIcon, title: "Focus on Business Growth", desc: "Delegate the bookkeeping — we handle the numbers while you scale your business." },
        ],
      }}
      industries={{
        overline: "WHO WE SERVE",
        titleLead: "Industries We Serve for",
        highlight: "Bookkeeping Services",
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
          "CPA Industry",
          "Marketing & Advertising",
        ],
      }}
      faqs={faqs}
    />
  );
}

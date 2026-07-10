import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import InsightsIcon from "@mui/icons-material/Insights";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import VerifiedIcon from "@mui/icons-material/Verified";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DescriptionIcon from "@mui/icons-material/Description";
import TimerIcon from "@mui/icons-material/Timer";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import SavingsIcon from "@mui/icons-material/Savings";
import GroupsIcon from "@mui/icons-material/Groups";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Why should I outsource CPA services instead of hiring in-house?", a: "Outsourcing gives you access to specialized expertise on demand, without the overhead of a full-time hire — reducing costs while improving accuracy and turnaround time." },
  { q: "Does Milta stay current with U.S. tax regulations?", a: "Yes. Our team is fully versed in current U.S. accounting and tax standards, and we monitor regulatory changes so your filings stay compliant year after year." },
  { q: "What accounting software do you support?", a: "We work across QuickBooks, Xero, Lacerte, Drake, TaxSlayer, TurboTax, and other leading platforms, so we can plug into whatever system you already use." },
  { q: "Do you offer business consulting alongside CPA services?", a: "Yes, including budgeting, forecasting, and profitability analysis to support smarter decision-making as your business grows." },
  { q: "Can Milta support businesses with international operations?", a: "Yes. Our team handles cross-border tax considerations and financial reporting for businesses operating beyond Maryland's borders." },
];

export default function CPAServicesMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Superior CPA Services in Maryland | Milta Accounting Services",
        description:
          "We provide expert CPA services in Maryland for small businesses. Partner with a trusted Maryland CPA firm for accuracy, growth, and success.",
        keywords:
          "cpa services in maryland, cpa firms near me, cpa firms in maryland, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in maryland, certified public accountant near me",
        author: "Milta Accounting",
        canonical:
          "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-maryland/",
      }}
      hero={{
        titleLead: "Trusted CPA Firm Services in",
        highlight: "Maryland, USA",
        subtitle:
          "Milta delivers tailored CPA services for individuals and small businesses across Maryland — accounting, tax preparation, and financial planning built to keep your finances accurate, compliant, and ready to grow.",
        breadcrumb: "CPA Services in Maryland",
      }}
      intro={{
        overline: "STRATEGIC FINANCIAL PARTNERSHIP",
        titleLead: "CPA Support Built for",
        highlight: "Maryland Business Growth",
        paragraphs: [
          "A successful CPA practice depends on accurate records and strategic insight — but bookkeeping and financial analysis eat up hours that are better spent on clients. Milta takes those routine tasks off your plate so your firm can focus on high-value work.",
          "By combining advanced accounting technology with hands-on expertise, we streamline everyday workflows and reduce overhead, giving Maryland CPA firms and small businesses alike more room to operate efficiently and scale with confidence.",
        ],
        ctaLabel: "Schedule a Free Consultation",
        imageAlt: "CPA services in Maryland",
      }}
      whyEssential={{
        overline: "WHY CHOOSE MILTA",
        titleLead: "Built to Support Your",
        highlight: "Firm's Growth",
        columns: 3,
        items: [
          "Dedicated professionals available full-time on your account, with backup support always on hand.",
          "Work completed overnight, so deliverables are ready before your day even starts.",
          "Offload non-core accounting functions to focus on clients and high-value strategy.",
          "A 95%+ client retention rate reflecting consistent, dependable service quality.",
          "Cut overhead by 60–70% by eliminating hiring, training, and payroll costs.",
          "Serve a wider range of clients and industries without investing in extra staff or tools.",
        ],
      }}
      solutions={{
        overline: "CORE SERVICES",
        titleLead: "Our Core CPA Services",
        highlight: "in Maryland",
        subtitle: "A full range of accounting and advisory services tailored to Maryland businesses.",
        items: [
          { icon: AccountBalanceIcon, title: "Accounting & Bookkeeping", desc: "Financial statements, reconciliations, payroll, and ledger maintenance handled with precision." },
          { icon: ReceiptLongIcon, title: "Tax Planning & Preparation", desc: "Corporate, individual, sales, and payroll tax filings prepared with full compliance in mind." },
          { icon: InsightsIcon, title: "Financial Consulting", desc: "Forecasting, budgeting, valuation, and M&A advisory to support long-term decision-making." },
          { icon: CleaningServicesIcon, title: "Catch-Up Services", desc: "Clearing backlogs and restoring accurate, up-to-date financial records." },
          { icon: CloudSyncIcon, title: "Software Setup & Conversion", desc: "QuickBooks and Xero setup, cloud migrations, and hands-on training for your team." },
          { icon: VerifiedIcon, title: "Audit & Assurance", desc: "Audits, reviews, compilations, and regulatory compliance support you can rely on." },
        ],
      }}
      cardGroups={[
        {
          overline: "OUTSOURCED SUPPORT",
          titleLead: "CPA Services for Small",
          highlight: "Businesses Include",
          columns: 2,
          bg: "paper",
          items: [
            { icon: EditNoteIcon, title: "Monthly, Quarterly & Annual Write-Up Services", desc: "Accurate data entry and reconciliations delivered on the schedule your business needs." },
            { icon: CleaningServicesIcon, title: "Catch-Up & Clean-Up Services", desc: "Correcting errors and bringing outdated records fully up to date." },
            { icon: SyncAltIcon, title: "Accounting Software Conversions", desc: "Seamless migration from QuickBooks Desktop to Online, or over to Xero." },
            { icon: FactCheckIcon, title: "Accounting Reviews & Compilations", desc: "Prepared and reviewed by licensed U.S. CPAs and CMAs." },
            { icon: DescriptionIcon, title: "Tax Return Preparation", desc: "Forms 1120, 1120S, 1065, 1040, 1041, and 990, filed accurately and on time." },
          ],
        },
      ]}
      advantages={{
        titleLead: "Why Maryland Firms Choose",
        highlight: "Milta",
        intro:
          "Outsourcing your CPA workload means more time for the work that grows your practice, backed by a team that treats accuracy as non-negotiable.",
        panelStats: [
          { num: "95%+", label: "Client Retention" },
          { num: "60-70%", label: "Cost Savings" },
          { num: "10y+", label: "Experience" },
          { num: "24/7", label: "Support" },
        ],
        items: [
          { icon: TimerIcon, title: "Full-Time Dedicated Support", desc: "A team focused exclusively on your accounting needs, with backup always available." },
          { icon: NightsStayIcon, title: "Overnight Turnaround", desc: "Work completed while you sleep, so deliverables are ready when you log on." },
          { icon: SavingsIcon, title: "Reduced Overhead", desc: "Save significantly by eliminating hiring, training, and payroll expenses." },
          { icon: GroupsIcon, title: "Diversify Your Client Base", desc: "Take on new industries confidently, without investing in additional training." },
        ],
      }}
      industries={{
        overline: "WHO WE SERVE",
        titleLead: "CPA Services Across",
        highlight: "Every Industry",
        items: [
          "Small Businesses",
          "CPA Firms",
          "Nonprofits",
          "Real Estate",
          "Healthcare",
          "Professional Services",
          "E-commerce",
          "Construction",
          "Hospitality",
        ],
      }}
      faqs={faqs}
    />
  );
}

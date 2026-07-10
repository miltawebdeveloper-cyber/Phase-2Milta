import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import InsightsIcon from "@mui/icons-material/Insights";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import VerifiedIcon from "@mui/icons-material/Verified";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DescriptionIcon from "@mui/icons-material/Description";
import TimerIcon from "@mui/icons-material/Timer";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LayersIcon from "@mui/icons-material/Layers";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SavingsIcon from "@mui/icons-material/Savings";
import GroupsIcon from "@mui/icons-material/Groups";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Why should I outsource CPA services?", a: "It reduces costs, improves efficiency, and provides specialized expertise." },
  { q: "Does Milta handle U.S. tax regulations?", a: "Yes, our team is fully compliant with U.S. accounting and tax standards." },
  { q: "What software do you support?", a: "QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and more." },
  { q: "Do you offer business consulting?", a: "Yes, including budgeting, forecasting, and profitability analysis." },
  { q: "Can you support international businesses?", a: "Yes, including cross-border tax and financial reporting." },
];

export default function CPAMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Superior CPA Services in Maryland | Milta Accounting Services",
        description:
          "We provide expert CPA services in Maryland for small businesses. Partner with CPA firms in Maryland for accuracy, growth, and success!",
        keywords:
          "cpa services in maryland, cpa firms near me, cpa firms in maryland, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in maryland, certified public accountant near me",
        author: "Milta Accounting",
        canonical:
          "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-maryland/",
      }}
      hero={{
        titleLead: "Trusted CPA Firm in Maryland for",
        highlight: "Business Success",
        subtitle:
          "Optimize Your Business Finances with Expert CPA Services in Maryland",
        ctaLabel: "Schedule a Free Consultation",
        breadcrumb: "CPA Services in Maryland",
      }}
      intro={{
        overline: "EXPERT CPA SERVICES IN MARYLAND",
        titleLead: "Tailored Financial Solutions for Individuals and",
        highlight: "Small Businesses",
        paragraphs: [
          "Milta provides expert CPA services in Maryland, offering tailored financial solutions for individuals and small businesses. As one of the top CPA firms in Maryland, we specialize in accounting, tax preparation, and financial planning to keep your finances accurate, compliant, and growth-ready.",
        ],
        ctaLabel: "Schedule a Free Consultation",
        imageAlt: "CPA services in Maryland",
      }}
      solutions={{
        overline: "CORE SERVICES",
        titleLead: "Our Core CPA Services",
        highlight: "in Maryland",
        items: [
          { icon: AccountBalanceIcon, title: "Accounting & Bookkeeping", desc: "Financial statements, reconciliations, payroll, and ledger maintenance." },
          { icon: ReceiptLongIcon, title: "Tax Planning & Preparation", desc: "Corporate, individual, sales, and payroll tax filings with compliance." },
          { icon: InsightsIcon, title: "Financial Consulting", desc: "Forecasting, budgeting, valuation, and M&A advisory." },
          { icon: CleaningServicesIcon, title: "Catch-Up Services", desc: "Fixing backlogs and restoring accurate financial records." },
          { icon: CloudSyncIcon, title: "Software Setup & Conversion", desc: "QuickBooks, Xero, cloud migrations, and training." },
          { icon: VerifiedIcon, title: "Audit & Assurance", desc: "Audits, reviews, compilations, and regulatory compliance." },
        ],
      }}
      cardGroups={[
        {
          overline: "BUSINESS GROWTH",
          titleLead: "How Milta Supports Your",
          highlight: "Business Growth",
          subtitle:
            "A successful CPA firm in Maryland depends on accurate financial records and strategic insights. Managing bookkeeping and financial analysis can be time-consuming. Milta simplifies these tasks so CPA firms near you can focus on high-value financial strategies instead of routine accounting.",
          columns: 2,
          bg: "paper",
          items: [
            { icon: RocketLaunchIcon, title: "Strategic Business Enablement", desc: "Outsourcing to Milta provides access to expert CPA services in Maryland, improving efficiency while reducing operational costs." },
            { icon: PrecisionManufacturingIcon, title: "Operational Excellence", desc: "We leverage advanced accounting technology and deep expertise to streamline workflows and minimize overhead." },
          ],
        },
        {
          overline: "OUTSOURCED SUPPORT",
          titleLead: "Our CPA Services for Small",
          highlight: "Business Include",
          columns: 2,
          items: [
            { icon: EditNoteIcon, title: "Monthly, Quarterly & Annual Write-Up Services", desc: "Accurate data entry and reconciliations." },
            { icon: CleaningServicesIcon, title: "Catch-Up & Clean-Up Services", desc: "Fixing errors and updating records." },
            { icon: SyncAltIcon, title: "Accounting Software Conversions", desc: "QuickBooks Desktop to Online or Xero." },
            { icon: FactCheckIcon, title: "Accounting Reviews & Compilations", desc: "Performed by US CPAs and CMAs." },
            { icon: DescriptionIcon, title: "Tax Return Preparation", desc: "Forms 1120, 1120S, 1065, 1040, 1041, 990." },
          ],
        },
        {
          overline: "WHY MILTA",
          titleLead: "Why Choose Milta for CPA",
          highlight: "Services in Maryland",
          columns: 3,
          bg: "paper",
          items: [
            { icon: TimerIcon, title: "Available Full-Time", desc: "Dedicated professionals working exclusively on your accounting needs with backup support available." },
            { icon: NightsStayIcon, title: "Overnight Delivery", desc: "Work completed while you sleep so deliverables are ready when you start your day." },
            { icon: LayersIcon, title: "Offload Non-Core Functions", desc: "Focus on growth and client relationships while we manage accounting operations." },
            { icon: WorkspacePremiumIcon, title: "High-Quality CPA Services in Maryland", desc: "95%+ retention rate delivering consistent, customized accounting excellence." },
            { icon: SavingsIcon, title: "Reduced Overheads", desc: "Save 60–70% by eliminating hiring, training, and payroll expenses." },
            { icon: GroupsIcon, title: "Diversify Your Customers", desc: "Serve multiple industries without investing in additional training or tools." },
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

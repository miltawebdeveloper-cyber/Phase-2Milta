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
  { q: "Why outsource CPA services?", a: "It reduces costs and improves efficiency." },
  { q: "Do you follow U.S. regulations?", a: "Yes, we fully comply with U.S. accounting standards." },
  { q: "What software do you support?", a: "QuickBooks, Xero, Drake, Lacerte, TurboTax, and more." },
  { q: "Do you help with growth?", a: "Yes, through advisory and financial consulting." },
  { q: "Do you support international businesses?", a: "Yes, including cross-border compliance." },
];

export default function CPAMassachusetts() {
  return (
    <ServiceLayout
      seo={{
        title: "Premier CPA Services in Massachusetts for Small Businesses | Milta",
        description:
          "Whether you need strategic tax planning or financial advisory support, our team provides the best CPA service for small businesses in Massachusetts.",
        keywords:
          "cpa services in massachusetts, cpa firms near me, cpa firms in massachusetts, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in massachusetts, certified public accountant near me",
        author: "Milta Accounting",
        canonical:
          "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-massachusetts/",
      }}
      hero={{
        titleLead: "Top-Rated CPA Firm in Massachusetts",
        highlight: "For Your Business Needs",
        subtitle:
          "As a trusted certified public accountant near you, we blend local expertise with tailored solutions to empower your enterprise.",
        ctaLabel: "Schedule a Free Consultation",
        breadcrumb: "CPA Services in Massachusetts",
      }}
      intro={{
        titleLead: "Your Dedicated Accounting Partner",
        highlight: "in Massachusetts",
        paragraphs: [
          "Searching for top-rated CPA firms near me? Your search ends here. Milta is your dedicated accounting partner in Massachusetts, delivering customized tax planning, compliance management, and financial advisory services for small businesses and individuals. Recognized as the best CPA service for small businesses in Massachusetts, our certified public accountants focus on accuracy, strategic foresight, and long-term growth.",
        ],
        ctaLabel: "Schedule a Free Consultation",
        imageAlt: "CPA services in Massachusetts",
      }}
      solutions={{
        titleLead: "Our Core CPA Services",
        highlight: "in Massachusetts",
        items: [
          { icon: AccountBalanceIcon, title: "Accounting & Bookkeeping", desc: "Financial statements, reconciliations, payroll, and compliance." },
          { icon: ReceiptLongIcon, title: "Tax Planning & Preparation", desc: "Corporate, individual, payroll, and sales tax filings." },
          { icon: InsightsIcon, title: "Financial Advisory", desc: "Forecasting, cash flow management, valuations, and M&A support." },
          { icon: CleaningServicesIcon, title: "Catch-Up & Clean-Up", desc: "Restore accuracy to disorganized or outdated records." },
          { icon: CloudSyncIcon, title: "Software Setup & Conversion", desc: "QuickBooks, Xero, and cloud-based accounting solutions." },
          { icon: VerifiedIcon, title: "Audit & Assurance", desc: "Internal audits, compliance audits, and reporting." },
        ],
      }}
      cardGroups={[
        {
          titleLead: "How Can Milta Empower",
          highlight: "Your CPA Firm?",
          subtitle:
            "Every thriving CPA firm in Massachusetts recognizes that accurate financial records and strategic insights are essential for growth. Managing bookkeeping, tax preparation, and financial analysis can strain internal resources. Milta handles these complexities so your team can focus on delivering high-value advisory services.",
          columns: 2,
          bg: "paper",
          items: [
            { icon: RocketLaunchIcon, title: "Strategic Support for CPA Firms", desc: "Milta acts as an extension of your firm, providing dependable bookkeeping, tax preparation, and compliance support." },
            { icon: PrecisionManufacturingIcon, title: "Operational Efficiency Through Outsourcing", desc: "Reduce payroll costs, improve accuracy, and streamline workflows with Milta’s expert accounting team." },
          ],
        },
        {
          titleLead: "Why Outsource Your",
          highlight: "CPA Services?",
          columns: 2,
          items: [
            { icon: EditNoteIcon, title: "Write-Up Services", desc: "Monthly, quarterly, and annual accounting." },
            { icon: CleaningServicesIcon, title: "Catch-Up Services", desc: "Correcting and reconciling books." },
            { icon: SyncAltIcon, title: "Software Conversions", desc: "QuickBooks and Xero transitions." },
            { icon: FactCheckIcon, title: "Accounting Reviews", desc: "Performed by US CPAs and CMAs." },
            { icon: DescriptionIcon, title: "Tax Preparation", desc: "Forms 1120, 1120S, 1065, 1040, 1041, 990." },
          ],
        },
        {
          titleLead: "Why Choose Milta for CPA",
          highlight: "Services in Massachusetts",
          columns: 3,
          bg: "paper",
          items: [
            { icon: TimerIcon, title: "Available Full-Time", desc: "Dedicated accounting professionals aligned with your firm’s workflow." },
            { icon: NightsStayIcon, title: "Overnight Delivery", desc: "Time-zone advantage ensures deliverables are ready when you start your day." },
            { icon: LayersIcon, title: "Offload Non-Core Work", desc: "Focus on clients while we manage accounting complexities." },
            { icon: WorkspacePremiumIcon, title: "High-Quality CPA Services", desc: "95%+ retention rate delivering consistent, compliant results." },
            { icon: SavingsIcon, title: "Reduced Overheads", desc: "Save 60–70% on staffing, hiring, and training costs." },
            { icon: GroupsIcon, title: "Diversified Expertise", desc: "Serve multiple industries without expanding internal teams." },
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

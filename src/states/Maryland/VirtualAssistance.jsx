import React from "react";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import EventIcon from "@mui/icons-material/Event";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CallIcon from "@mui/icons-material/Call";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TableChartIcon from "@mui/icons-material/TableChart";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SavingsIcon from "@mui/icons-material/Savings";
import LockIcon from "@mui/icons-material/Lock";
import TuneIcon from "@mui/icons-material/Tune";
import ForumIcon from "@mui/icons-material/Forum";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "What distinguishes a virtual assistant from a typical employee?", a: "A virtual assistant works remotely and provides flexible or part-time support, giving you the help you need without the commitment of a traditional full-time hire." },
  { q: "Can virtual assistants handle confidential business data?", a: "Yes. Strict security measures are in place to protect the confidentiality of your business information at every stage of the engagement." },
  { q: "Are virtual assistant services affordable for small businesses?", a: "Yes — you pay only for the support you actually use, without the overhead costs that come with a full-time employee." },
  { q: "How do I stay in touch with my virtual assistant?", a: "We offer email, video calls, and project management tools, so communication stays seamless no matter where you're working from." },
  { q: "Can I customize the tasks assigned to my virtual assistant?", a: "Absolutely. Our services are fully customizable to match your business's priorities, whether that's admin work, bookkeeping, or specialized support." },
];

export default function VirtualAssistantMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Top Virtual Assistants Service in Maryland for Small Business",
        description:
          "Milta's virtual assistant services in Maryland provide expert support, including virtual bookkeeping, for small businesses.",
        keywords:
          "virtual assistants service in maryland, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant md",
        author: "Milta Accounting",
        canonical: "https://www.milta.com/us/services/virtual-assistant-service-in-maryland/",
      }}
      hero={{
        titleLead: "Enhance Productivity with Expert Virtual Assistant Services in",
        highlight: "Maryland",
        subtitle:
          "Looking for the best virtual assistant companies? Milta's virtual assistant services in Maryland offer cost-effective support that helps small businesses streamline operations and grow — including reliable virtual bookkeeping.",
        breadcrumb: "Virtual Assistant Services in Maryland",
      }}
      intro={{
        overline: "GROW WITH SUPPORT",
        titleLead: "Unlock New Opportunities with Virtual",
        highlight: "Assistant Services in Maryland",
        paragraphs: [
          "As businesses increasingly rely on remote support to improve efficiency, a great virtual assistant becomes one of the most flexible resources on your team.",
          "At Milta, we handle admin tasks, finances, and daily operations, helping Maryland startups and growing businesses streamline their workflows. From virtual bookkeeping to specialized administrative support, our solutions are built around your priorities.",
        ],
        ctaLabel: "Schedule a Free Consultation",
        imageAlt: "Virtual assistant services in Maryland",
      }}
      whyEssential={{
        overline: "WHY CHOOSE A VA",
        titleLead: "Why Choose Virtual Assistant",
        highlight: "Services in Maryland",
        items: [
          "Cost Savings",
          "Enhanced Productivity",
          "Flexibility & Scalability",
          "Expert Support in Key Areas",
        ],
      }}
      solutions={{
        overline: "OUR SERVICES",
        titleLead: "Our Virtual Assistant",
        highlight: "Services in Maryland",
        subtitle: "Flexible, skilled support across the tasks that keep your business running.",
        items: [
          { icon: HomeWorkIcon, title: "Real Estate Virtual Assistant", desc: "Manage property listings, client databases, virtual tours, and market research reports." },
          { icon: KeyboardIcon, title: "Data Entry", desc: "Accurate, organized data entry that keeps your records clean and business operations smooth." },
          { icon: EventIcon, title: "Event Planning", desc: "Coordinate RSVPs, vendors, scheduling, and logistics for seamless events." },
          { icon: TravelExploreIcon, title: "Internet Research", desc: "Market research and competitor analysis that turn into actionable insight." },
          { icon: ContactMailIcon, title: "Business Card Scanning", desc: "Digitize and organize your contacts for faster, more effective outreach." },
          { icon: CalendarMonthIcon, title: "Appointment Scheduling", desc: "Manage calendars, reminders, and rescheduling so nothing slips through the cracks." },
          { icon: AccountBalanceWalletIcon, title: "Virtual Bookkeeping", desc: "Accurate financial records, reconciliations, and tax-ready statements handled remotely." },
          { icon: CallIcon, title: "Call Answering", desc: "Professional call handling and inquiry management on your behalf." },
          { icon: MarkEmailReadIcon, title: "Correspondence Management", desc: "Emails and communications managed promptly and professionally." },
          { icon: DesignServicesIcon, title: "Desktop Publishing", desc: "Brochures, flyers, newsletters, and professional documents created to your specs." },
          { icon: TableChartIcon, title: "Presentations & Spreadsheets", desc: "Clear, professional presentations and spreadsheets built for impact." },
          { icon: FlightTakeoffIcon, title: "Travel & Hotel Reservations", desc: "Flights, hotels, and itineraries planned seamlessly from start to finish." },
        ],
      }}
      advantages={{
        titleLead: "What Makes Our Virtual Assistants",
        highlight: "Different",
        intro:
          "A great virtual assistant should feel like part of your team — responsive, secure, and genuinely useful, not just another vendor.",
        panelStats: [
          { num: "12", label: "Core Services" },
          { num: "10y+", label: "Experience" },
          { num: "100%", label: "Confidential" },
          { num: "24/7", label: "Communication" },
        ],
        items: [
          { icon: SavingsIcon, title: "Pay Only for What You Need", desc: "No full-time overhead — just flexible support scaled to your workload." },
          { icon: LockIcon, title: "Strict Data Confidentiality", desc: "Security measures that protect your business information at every step." },
          { icon: TuneIcon, title: "Fully Customizable Tasking", desc: "Assign exactly the tasks your business needs, and nothing you don't." },
          { icon: ForumIcon, title: "Seamless Communication", desc: "Stay connected through email, video calls, and project management tools." },
        ],
      }}
      industries={{
        overline: "WHO WE SERVE",
        titleLead: "Virtual Assistant Support Across",
        highlight: "Every Industry",
        items: ["Real Estate", "Small Business", "Professional Services", "E-commerce", "Healthcare", "Legal", "Startups"],
      }}
      faqs={faqs}
    />
  );
}

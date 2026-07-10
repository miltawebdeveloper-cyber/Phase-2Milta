import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BuildIcon from "@mui/icons-material/Build";
import LinkIcon from "@mui/icons-material/Link";
import WebIcon from "@mui/icons-material/Web";
import ShareIcon from "@mui/icons-material/Share";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TimelineIcon from "@mui/icons-material/Timeline";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "What digital marketing services does Milta offer in Maryland?", a: "We offer SEO, technical SEO, link building, web design and development, social media marketing, PPC management, content marketing, and email marketing — all tailored to Maryland businesses." },
  { q: "How long does it take to see results from SEO?", a: "Most Maryland businesses start seeing measurable improvements in rankings and traffic within 3-6 months, though timelines vary based on competition and starting point." },
  { q: "Do you create custom strategies or use templates?", a: "Every strategy is built around your specific goals, audience, and competitive landscape — we don't run one-size-fits-all campaigns." },
  { q: "Can you manage both SEO and paid advertising together?", a: "Yes, combining organic SEO with PPC campaigns often delivers faster, more sustainable results than either approach alone." },
  { q: "How do you measure and report on campaign performance?", a: "We provide transparent, data-driven reporting so you can see exactly how your traffic, leads, and conversions are trending over time." },
];

export default function DigitalMarketingMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Leading Digital Marketing Agency in Maryland | Milta",
        description:
          "Grow your brand with a top digital marketing agency in Maryland. Expert SEO, PPC, and internet marketing services from Milta.",
        keywords:
          "digital marketing agency, digital marketing services, digital marketing agency in maryland, Maryland internet marketing, digital marketing services in Maryland",
        author: "Milta Accounting",
        canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-maryland/",
      }}
      hero={{
        titleLead: "Expand Your Brand with a Top Digital Marketing Agency in",
        highlight: "Maryland",
        subtitle:
          "Achieve measurable growth with expert digital marketing services in Maryland. Get a tailored internet marketing strategy built around your goals.",
        breadcrumb: "Digital Marketing Agency in Maryland",
      }}
      intro={{
        overline: "AI-DRIVEN MARKETING",
        titleLead: "Digital Marketing Built for",
        highlight: "Business Growth",
        paragraphs: [
          "Thrive in Maryland's competitive market with AI-powered digital marketing services. Milta specializes in SEO, PPC, website development, and social media marketing to elevate visibility and drive real results.",
          "Our Maryland digital marketing solutions help businesses expand their reach, scale efficiently, and connect with the right audience through data-driven strategies rather than guesswork.",
        ],
        ctaLabel: "Get Started Today",
        imageAlt: "Digital marketing agency in Maryland",
      }}
      whyEssential={{
        overline: "WHAT MAKES US DIFFERENT",
        titleLead: "Marketing Powered by",
        highlight: "Strategy & Data",
        columns: 3,
        items: [
          "AI-powered Maryland internet marketing that adapts as your market changes.",
          "Local expertise paired with strategies customized to your business and audience.",
          "Maximized ROI through campaigns built for high-quality conversions, not just clicks.",
        ],
      }}
      solutions={{
        overline: "OUR SERVICES",
        titleLead: "Milta Digital Marketing",
        highlight: "Services in Maryland",
        subtitle: "A full-funnel approach to growing your visibility, traffic, and revenue.",
        items: [
          { icon: SearchIcon, title: "Search Engine Optimization (SEO)", desc: "Higher organic rankings through in-depth keyword research, ethical on-page and off-page optimization, and ongoing performance tracking." },
          { icon: BuildIcon, title: "Technical SEO", desc: "Crawl audits, site speed optimization, structured data, and migration support that improve crawlability and indexability." },
          { icon: LinkIcon, title: "Link Building", desc: "Strategic guest blogging, sponsored placements, and high-quality backlinks that build authority and trust." },
          { icon: WebIcon, title: "Web Design & Development", desc: "Custom, mobile-responsive, SEO-optimized websites with conversion-focused layouts and clear calls to action." },
          { icon: ShareIcon, title: "Social Media Marketing", desc: "Goal-driven campaigns, competitor benchmarking, and audience analysis that grow real engagement." },
          { icon: AdsClickIcon, title: "Pay-Per-Click (PPC) Management", desc: "Precision campaigns from certified specialists, with optimized bidding and continuous ROI monitoring." },
          { icon: ArticleIcon, title: "Content Marketing", desc: "High-quality, search-friendly content with compelling headlines and easy-to-read formatting." },
          { icon: EmailIcon, title: "Email Marketing", desc: "Personalized campaigns built to build your list, avoid spam filters, and drive customer action." },
        ],
      }}
      advantages={{
        titleLead: "Why Choose Milta as Your Maryland",
        highlight: "Marketing Partner",
        intro:
          "We combine local market knowledge with measurable, performance-driven strategy to help Maryland businesses scale with confidence.",
        panelStats: [
          { num: "8", label: "Core Services" },
          { num: "10y+", label: "Experience" },
          { num: "100%", label: "Custom Strategy" },
          { num: "24/7", label: "Reporting Access" },
        ],
        items: [
          { icon: AutoAwesomeIcon, title: "Comprehensive & Tailored", desc: "Full-service digital marketing built specifically for Maryland businesses and their audiences." },
          { icon: LocationOnIcon, title: "Local Market Expertise", desc: "Experienced Maryland internet marketing professionals who understand the local landscape." },
          { icon: QueryStatsIcon, title: "Data-Driven Decisions", desc: "Transparent performance tracking that guides every strategic move we make." },
          { icon: TimelineIcon, title: "Proven, Measurable Growth", desc: "A track record of helping brands scale traffic, leads, and revenue over time." },
        ],
      }}
      industries={{
        overline: "WHO WE SERVE",
        titleLead: "Digital Marketing for",
        highlight: "Every Industry",
        items: [
          "Small Business",
          "E-commerce",
          "Healthcare",
          "Real Estate",
          "Professional Services",
          "Hospitality",
          "Legal",
          "Home Services",
        ],
      }}
      faqs={faqs}
    />
  );
}

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BuildIcon from "@mui/icons-material/Build";
import LinkIcon from "@mui/icons-material/Link";
import WebIcon from "@mui/icons-material/Web";
import ShareIcon from "@mui/icons-material/Share";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "How can AI-powered marketing help my business?", a: "AI-driven solutions help optimize campaigns, target the right audience, and maximize ROI with data-driven insights." },
  { q: "What digital marketing services do you offer?", a: "We offer SEO, Technical SEO, Link Building, Web Design, Social Media Marketing, PPC, Content Marketing, and Email Marketing." },
  { q: "Can your services increase my revenue?", a: "Yes. Our strategies are tailored to your business goals and focus on driving measurable growth." },
  { q: "Do you work with small businesses?", a: "Absolutely. We support businesses of all sizes, from startups to multi-location companies." },
  { q: "How do I get started with Milta?", a: "Request a proposal or contact us for a consultation to discuss your business goals and needs." },
];

export default function DigitalMarketingConnecticut() {
  return (
    <ServiceLayout
      seo={{
        title: "AI-Driven Digital Marketing Agency in Connecticut | PPC & SEO Experts",
        description:
          "Partner with an AI-driven digital marketing agency in Connecticut for expert PPC & SEO solutions. Maximize growth with data-driven strategies!",
        keywords:
          "digital marketing agency, digital marketing services, digital marketing agency in connecticut, connecticut internet marketing, digital marketing services in connecticut",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-connecticut",
      }}
      hero={{
        titleLead: "Connecticut Leading",
        highlight: "AI-Powered Digital Marketing Agency",
        subtitle:
          "Boost Your Revenue This Year with a Leading Digital Marketing Company in Connecticut!",
        breadcrumb: "Digital Marketing in Connecticut",
      }}
      intro={{
        overline: "DIGITAL MARKETING IN CONNECTICUT",
        titleLead: "AI-Driven Marketing & Advertising to",
        highlight: "Accelerate Your Business Growth",
        paragraphs: [
          "Connecting with your audience can be challenging, but with the right marketing partner, success is within reach. Milta specializes in website development, search engine marketing (SEM), social media management, and paid advertising to drive impactful results.",
          "Whether you're expanding into new markets, scaling your business, or increasing revenue, our expert team understands your unique needs and crafts customized strategies that communicate your message effectively.",
        ],
        ctaLabel: "Request a Proposal",
      }}
      whyEssential={{
        overline: "WHY IT WORKS",
        titleLead: "Maximize Your Reach with",
        highlight: "AI-Driven Digital Marketing Solutions",
        items: [
          "Comprehensive Services",
          "Expert Team",
          "Best Strategies",
          "Data-Driven Approach",
          "Proven Track Record",
          "Commitment to Results",
        ],
      }}
      solutions={{
        overline: "OUR SERVICES",
        titleLead: "Milta Digital Marketing",
        highlight: "Services in Connecticut",
        subtitle:
          "A complete, AI-powered marketing stack — from SEO and PPC to content, social, and email.",
        items: [
          { icon: SearchIcon, title: "Search Engine Optimization (SEO)", desc: "Achieve higher organic ranks with keyword research, on-page & off-page optimization, and Google Search Console tracking to attract quality leads." },
          { icon: BuildIcon, title: "Technical SEO", desc: "Crawl error reports, HTTPS checks, site speed optimization, redirects, duplicate content elimination, structured data, and site migration support." },
          { icon: LinkIcon, title: "Link Building", desc: "Build high-quality backlinks via partnerships, sponsored ads, guest blogging, infographics, and social media engagement to drive traffic." },
          { icon: WebIcon, title: "Web Design & Development", desc: "Custom, mobile-ready, SEO-optimized websites with visual hierarchy, CTAs, simplified forms, and audience-targeted content." },
          { icon: ShareIcon, title: "Social Media Marketing", desc: "Engage and expand audiences with campaigns, competitor analysis, and data-driven social media strategies for brand management and paid ads." },
          { icon: AdsClickIcon, title: "Pay-Per-Click (PPC) Management", desc: "Target customers with precision using data-driven campaigns, customized ad copy, bidding tactics, device targeting, and ROI tracking." },
          { icon: ArticleIcon, title: "Content Marketing", desc: "Compelling content creation with high-performing keywords, relevant imagery, and structured posts to boost SEO and conversions." },
          { icon: EmailIcon, title: "Email Marketing", desc: "Personalized campaigns that avoid spam, engage subscribers, and drive action with tested designs, impactful language, and curiosity gaps." },
        ],
      }}
      faqs={faqs}
    />
  );
}

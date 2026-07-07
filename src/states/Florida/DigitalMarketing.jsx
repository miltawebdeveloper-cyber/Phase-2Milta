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
  { q: "What digital marketing services does Milta offer?", a: "We provide SEO, PPC, social media marketing, content marketing, email marketing, and web development services." },
  { q: "Is digital marketing suitable for small businesses?", a: "Yes. Digital marketing is scalable and cost-effective for startups and growing businesses." },
  { q: "How do you measure campaign success?", a: "We use analytics, conversion tracking, and performance metrics to measure ROI." },
  { q: "Do you customize strategies?", a: "Absolutely. Every strategy is tailored to your business goals and target audience." },
  { q: "Why choose Milta?", a: "We combine AI-powered tools, expert strategy, and proven results to drive growth." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function DigitalMarketingFlorida() {
  return (
    <ServiceLayout
      seo={{
        title: "AI-Powered Digital Marketing Agency in Florida | SEO & PPC Experts",
        description:
          "Grow your business with an AI-powered digital marketing agency in Florida specializing in SEO & PPC. Drive results with data-driven strategies!",
        keywords:
          "digital marketing agency, digital marketing services, digital marketing agency in florida, florida internet marketing, digital marketing services in florida",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-florida",
        schema: faqSchema,
      }}
      hero={{
        titleLead: "Florida Leading",
        highlight: "AI-Powered Digital Marketing Agency",
        subtitle:
          "Boost Your Revenue This Year with a Leading Digital Marketing Company in Florida!",
        breadcrumb: "Digital Marketing in Florida",
      }}
      intro={{
        overline: "DIGITAL MARKETING IN FLORIDA",
        titleLead: "AI-Driven Marketing & Advertising to",
        highlight: "Accelerate Your Business Growth",
        paragraphs: [
          "Reaching your audience can be challenging, but with the right partner, success is within reach. Milta specializes in AI-powered digital marketing solutions that deliver measurable results.",
          "Whether expanding into new markets or scaling your business, our team creates tailored strategies that maximize reach, engagement, and ROI.",
        ],
        ctaLabel: "Request a Proposal!",
      }}
      whyEssential={{
        overline: "WHY IT WORKS",
        titleLead: "Maximize Your Reach with",
        highlight: "AI-Driven Digital Marketing Solutions",
        items: ["AI-Driven Strategies", "Cost-Effective Marketing", "24/7 Online Growth", "Measurable ROI"],
      }}
      solutions={{
        overline: "OUR SERVICES",
        titleLead: "Milta Digital Marketing",
        highlight: "Services in Florida",
        subtitle:
          "A complete, AI-powered marketing stack — from SEO and PPC to content, social, and email.",
        items: [
          { icon: SearchIcon, title: "Search Engine Optimization (SEO)", desc: "Achieve higher rankings and greater visibility through keyword research, ethical SEO practices, on-page and off-page optimization, and performance tracking." },
          { icon: BuildIcon, title: "Technical SEO Service", desc: "Improve crawlability and site performance with speed optimization, HTTPS audits, redirect fixes, structured data, and technical enhancements." },
          { icon: LinkIcon, title: "Link Building Service", desc: "Build authority and trust with strategic backlinks through guest blogging, partnerships, infographics, and high-quality content distribution." },
          { icon: WebIcon, title: "Web Design & Development", desc: "Create custom, mobile-ready, SEO-optimized websites with strong CTAs, simplified forms, and conversion-focused design." },
          { icon: ShareIcon, title: "Social Media Marketing", desc: "Grow your audience with data-driven social media strategies, competitor analysis, brand management, and paid advertising." },
          { icon: AdsClickIcon, title: "Pay-Per-Click (PPC) Management", desc: "Drive high-quality leads with expertly managed PPC campaigns, optimized bidding strategies, and ROI-focused advertising." },
          { icon: ArticleIcon, title: "Content Marketing Service", desc: "Engage audiences with compelling, SEO-friendly content crafted using high-performing keywords, visuals, and structured formats." },
          { icon: EmailIcon, title: "Email Marketing Service", desc: "Boost engagement with personalized email campaigns, optimized subject lines, A/B testing, and curiosity-driven messaging." },
        ],
      }}
      faqs={faqs}
    />
  );
}

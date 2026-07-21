import React from "react";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BuildIcon from "@mui/icons-material/Build";
import LinkIcon from "@mui/icons-material/Link";
import WebIcon from "@mui/icons-material/Web";
import ShareIcon from "@mui/icons-material/Share";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import ServiceLayout from "../_ServiceLayout";

export default function DigitalMarketingMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Leading Digital Marketing Agency in Maryland | Milta",
        description:
          "Boost your brand with a top digital marketing agency in Maryland. We offer expert digital marketing services, SEO, PPC, and internet marketing.",
        keywords:
          "digital marketing agency, digital marketing services, digital marketing agency in maryland, Maryland internet marketing, digital marketing services in Maryland",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-maryland/",
      }}
      hero={{
        titleLead: "Expand Your Brand with a Top",
        highlight: "Digital Marketing Agency in Maryland!",
        subtitle:
          "Achieve success with expert digital marketing services in Maryland. Get a tailored strategy with Maryland Internet marketing today!",
        ctaLabel: "Get Started Today",
        breadcrumb: "Digital Marketing in Maryland",
      }}
      intro={{
        overline: "AI-POWERED GROWTH",
        titleLead: "AI-Driven Digital Marketing for",
        highlight: "Business Growth",
        paragraphs: [
          "Thrive in Maryland’s competitive market with AI-powered digital marketing services. Milta specializes in SEO, PPC, website development, and social media marketing to elevate visibility and drive results.",
          "Our Maryland digital marketing solutions help businesses expand reach, scale efficiently, and engage the right audience through data-driven strategies.",
        ],
        ctaLabel: "Get Started Today",
        imageAlt: "Digital marketing agency in Maryland",
      }}
      whyEssential={{
        overline: "WHAT SETS US APART",
        titleLead: "AI-Powered Marketing Built for",
        highlight: "Maryland Businesses",
        columns: 3,
        items: [
          "AI-Powered Maryland Internet Marketing",
          "Local Expertise & Customized Strategies",
          "Maximized ROI & High Conversions",
        ],
      }}
      solutions={{
        overline: "FULL-SERVICE DIGITAL MARKETING",
        titleLead: "Milta Digital Marketing",
        highlight: "Services in Maryland",
        items: [
          { icon: TravelExploreIcon, title: "Search Engine Optimization (SEO)", desc: "Achieve higher organic rankings through in-depth keyword research, ethical SEO practices, on-page and off-page optimization, and Google Search Console tracking to attract high-quality traffic and boost conversions." },
          { icon: BuildIcon, title: "Technical SEO Services", desc: "Improve crawlability and indexability through crawl audits, HTTPS checks, site speed optimization, redirect audits, duplicate content fixes, structured data implementation, and site migration support." },
          { icon: LinkIcon, title: "Link Building Services", desc: "Increase authority and consumer trust with strategic guest blogging, sponsored placements, high-quality backlinks, infographics, and social amplification that drive consistent traffic and sales." },
          { icon: WebIcon, title: "Web Design & Development", desc: "Custom, mobile-responsive, SEO-optimized websites with clear CTAs, simplified forms, and conversion-focused layouts designed to support your marketing goals." },
          { icon: ShareIcon, title: "Social Media Marketing", desc: "Grow and engage your audience through goal-driven campaigns, competitor benchmarking, audience analysis, social brand management, and paid advertising strategies." },
          { icon: AdsClickIcon, title: "Pay-Per-Click (PPC) Management", desc: "Precision PPC campaigns managed by AdWords-certified specialists using optimized bidding, ad copy testing, device targeting, and ROI monitoring for maximum lead quality." },
          { icon: ArticleIcon, title: "Content Marketing", desc: "High-quality, Google-compliant content creation with compelling headlines, strategic keywords, relevant imagery, and easy-to-read formatting." },
          { icon: EmailIcon, title: "Email Marketing", desc: "Personalized email campaigns that avoid spam filters, build subscriber lists, create curiosity, test performance, and drive customer action." },
        ],
      }}
      checklists={[
        {
          overline: "WHY MILTA",
          titleLead: "Why Choose Milta as Your Digital Marketing",
          highlight: "Service in Maryland",
          columns: 2,
          items: [
            "Comprehensive digital marketing services tailored for Maryland businesses.",
            "Experienced Maryland internet marketing professionals.",
            "Customized strategies aligned with your goals and audience.",
            "Data-driven decision-making with transparent performance tracking.",
            "Proven success helping brands scale traffic, leads, and revenue.",
            "Strong commitment to measurable results and long-term growth.",
          ],
        },
      ]}
    />
  );
}

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

export default function DigitalMarketingGeorgia() {
  return (
    <ServiceLayout
      seo={{
        title: "Leading Digital Marketing Agency in Georgia | SEO & PPC Experts",
        description:
          "Elevate your brand with expert digital marketing services in Georgia. We specialize in SEO, PPC, and Georgia internet marketing to drive success.",
        keywords:
          "digital marketing agency, digital marketing services, digital marketing agency in georgia, georgia internet marketing, digital marketing services in georgia",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-georgia",
      }}
      hero={{
        titleLead: "Transform Your Business with Georgia’s Premier",
        highlight: "AI-Powered Digital Marketing Agency",
        subtitle:
          "Unlock growth and drive revenue with the best digital marketing services in Georgia.",
        breadcrumb: "Digital Marketing in Georgia",
      }}
      intro={{
        overline: "DIGITAL MARKETING IN GEORGIA",
        titleLead: "AI-Driven Marketing & Advertising to",
        highlight: "Accelerate Your Business Growth",
        paragraphs: [
          "Milta specializes in website development, SEM, social media management, and paid advertising to drive impactful results across Georgia.",
          "Our AI-powered digital marketing services help businesses scale faster, reach the right audience, and maximize ROI.",
        ],
        ctaLabel: "Request a Proposal Today!",
      }}
      whyEssential={{
        overline: "WHY IT WORKS",
        titleLead: "Maximize Your Reach with",
        highlight: "AI-Driven Digital Marketing Solutions",
        subtitle:
          "We help businesses strengthen their online presence and convert audiences into loyal customers.",
        items: ["AI-Driven Strategies", "Higher ROI & Revenue Growth", "Cost-Effective Marketing", "Data-Backed Decisions"],
      }}
      solutions={{
        overline: "OUR SERVICES",
        titleLead: "Milta Digital Marketing",
        highlight: "Services in Georgia",
        subtitle:
          "A complete, AI-powered marketing stack — from SEO and PPC to content, social, and email.",
        items: [
          { icon: SearchIcon, title: "Search Engine Optimization (SEO)", desc: "Boost organic rankings and visibility through ethical SEO and performance tracking." },
          { icon: BuildIcon, title: "Technical SEO Services", desc: "Improve crawlability, speed, structured data, and indexability." },
          { icon: LinkIcon, title: "Link Building Services", desc: "Build authority through high-quality backlinks and outreach." },
          { icon: WebIcon, title: "Web Design & Development", desc: "Custom, SEO-friendly websites designed to convert visitors." },
          { icon: ShareIcon, title: "Social Media Marketing", desc: "Grow and engage your audience with data-backed strategies." },
          { icon: AdsClickIcon, title: "PPC Management", desc: "High-performing campaigns to maximize ROI and lead quality." },
          { icon: ArticleIcon, title: "Content Marketing", desc: "SEO-driven content that educates and converts." },
          { icon: EmailIcon, title: "Email Marketing", desc: "Personalized campaigns that drive engagement and action." },
        ],
      }}
      cardGroups={[
        {
          overline: "WHY CHOOSE MILTA",
          titleLead: "Why Choose Milta as Your",
          highlight: "Digital Marketing Partner",
          bg: "paper",
          columns: 2,
          items: [
            { title: "Comprehensive Digital Marketing Services", desc: "From SEO and PPC to content and email marketing, Milta delivers end-to-end digital solutions." },
            { title: "Expert Georgia Marketing Team", desc: "Our specialists stay ahead of trends to ensure your campaigns perform at their best." },
            { title: "Customized Growth Strategies", desc: "We tailor every strategy to your business goals, audience, and industry." },
            { title: "Data-Driven Optimization", desc: "We continuously analyze and refine campaigns for measurable, transparent results." },
            { title: "Proven Track Record", desc: "We help startups and enterprises increase traffic, leads, and revenue consistently." },
          ],
        },
      ]}
    />
  );
}

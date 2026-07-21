import React from "react";
import ServiceLayout from "../_ServiceLayout";

export default function DigitalMarketingPennsylvania() {
  return (
    <ServiceLayout
      seo={{
        title: "Top Digital Marketing Agency | SEO & PPC Experts in Pennsylvania",
        description:
          "Supercharge your brand with expert digital marketing services in Pennsylvania. Our digital marketing agency specializes in SEO, PPC, and internet marketing.",
        keywords:
          "digital marketing agency, digital marketing services, digital marketing agency in pennsylvania, pennsylvania internet marketing, digital marketing services in pennsylvania",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-pennsylvania/",
      }}
      hero={{
        titleLead: "Grow Your Brand with a Leading Digital Marketing Agency in",
        highlight: "Pennsylvania",
        subtitle: "Unlock success with expert digital marketing services in Pennsylvania.",
        breadcrumb: "Digital Marketing Services in Pennsylvania",
      }}
      intro={{
        overline: "DIGITAL MARKETING",
        titleLead: "AI-Driven Digital Marketing for",
        highlight: "Business Growth",
        paragraphs: [
          "Succeed in Pennsylvania's competitive market with expert strategies. Milta uses AI-powered digital marketing services and Pennsylvania internet marketing to boost your brand.",
          "Our services in Pennsylvania help businesses expand reach, scale operations, and increase revenue with targeted strategies.",
        ],
        ctaLabel: "Get a Customized Strategy Today!",
        imageAlt: "Digital marketing services in Pennsylvania",
      }}
      whyEssential={{
        overline: "WHY MILTA",
        titleLead: "Why Choose",
        highlight: "Milta?",
        subtitle:
          "Partner with a trusted agency that enhances your brand, accelerates growth, and keeps you ahead of the competition.",
        items: [
          "AI-Powered Strategies",
          "Local Pennsylvania Expertise",
          "Higher ROI & Conversions",
          "Data-Driven Decisions",
        ],
      }}
      cardGroups={[
        {
          overline: "OUR SERVICES",
          titleLead: "Milta Digital Marketing Services in",
          highlight: "Pennsylvania",
          bg: "paper",
          columns: 3,
          items: [
            { title: "Search Engine Optimization (SEO)", desc: "Boost organic rankings and exposure through keyword research and ethical SEO." },
            { title: "Technical SEO Service", desc: "Improve crawlability, site speed, HTTPS, structured data, and perform site migrations." },
            { title: "Link Building Service", desc: "Build authority with guest blogging, sponsored content, and quality backlinks." },
            { title: "Web Design & Development Services", desc: "Custom, mobile-friendly, SEO-optimized websites designed to convert visitors." },
            { title: "Social Media Marketing", desc: "Engage audiences with tailored campaigns, analytics, and paid social ads." },
            { title: "Pay-Per-Click (PPC) Management", desc: "Data-driven PPC campaigns to maximize ROI and generate high-quality leads." },
            { title: "Content Marketing Service", desc: "SEO-focused content creation including headlines, keywords, imagery, and structured posts." },
            { title: "Email Marketing Service", desc: "Personalized campaigns that avoid spam, build engagement, and drive action." },
          ],
        },
        {
          overline: "WHY MILTA",
          titleLead: "Why Choose Milta as Your",
          highlight: "Digital Marketing Partner",
          columns: 2,
          items: [
            { title: "AI-Powered Pennsylvania Internet Marketing", desc: "Data-driven insights for precise targeting to maximize your ROI." },
            { title: "Local Expertise", desc: "Tailored strategies specifically for Pennsylvania businesses." },
            { title: "Maximized ROI", desc: "Performance-based campaigns that drive better conversions." },
            { title: "Comprehensive Services", desc: "End-to-end digital solutions including SEO, PPC, social media, and content marketing." },
            { title: "Proven Track Record", desc: "Helping Pennsylvania businesses grow traffic, leads, and revenue consistently." },
          ],
        },
      ]}
    />
  );
}

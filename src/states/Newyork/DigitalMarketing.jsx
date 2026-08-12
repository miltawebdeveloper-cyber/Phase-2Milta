import React from "react";
import ServiceLayout from "../_ServiceLayout";

export default function DigitalMarketingNewYork() {
  return (
    <ServiceLayout
      seo={{
        title: "SEO & PPC Experts | Digital Marketing Agency in New York",
        description:
          "Drive your brand to the best results with expert digital marketing services in New York. Specializing in SEO, PPC, email, and internet marketing for success.",
        keywords:
          "digital marketing agency, digital marketing services, digital marketing agency in new york, new york internet marketing, digital marketing services in new york",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-newyork/",
      }}
      hero={{
        titleLead: "Elevate Your Success with New York's Leading",
        highlight: "Digital Marketing Agency",
        subtitle:
          "Unlock Explosive Growth Using Cutting-Edge Digital Marketing Services in New York",
        breadcrumb: "Digital Marketing Services in New York",
      }}
      intro={{
        overline: "DIGITAL MARKETING",
        titleLead: "AI-Driven Marketing & Advertising to Accelerate Your",
        highlight: "Business Growth",
        paragraphs: [
          "Reaching your audience in New York's competitive market is achievable with the right partner. Milta combines AI technology with proven New York digital marketing strategies to drive measurable growth.",
          "From hyper-local SEO to data-driven ad campaigns, we help your brand connect, convert, and scale across New York.",
        ],
        ctaLabel: "Request a Proposal Today!",
        imageAlt: "Digital marketing services in New York",
      }}
      whyEssential={{
        overline: "PRECISION MARKETING",
        titleLead: "Engage Your Audience with Precision",
        highlight: "Right Time, Right Platform",
        subtitle:
          "Milta empowers businesses of all sizes to elevate their online presence, attract high-quality leads, and drive scalable growth while optimizing costs.",
        items: [
          "AI-Driven New York Internet Marketing",
          "Hyper-Local Market Expertise",
          "Maximized ROI & Cost Efficiency",
          "Trackable & Measurable Growth",
        ],
      }}
      cardGroups={[
        {
          overline: "OUR SERVICES",
          titleLead: "Milta Digital Marketing Services in",
          highlight: "New York",
          bg: "paper",
          columns: 3,
          items: [
            { title: "Search Engine Optimization (SEO)", desc: "Achieve higher organic rankings and increased visibility through in-depth keyword research, ethical SEO practices, on-page and off-page optimization, and performance tracking using Google Search Console to drive quality leads and conversions." },
            { title: "Technical SEO Services", desc: "Strengthen your digital foundation with crawl error audits, HTTPS checks, site speed optimization, structured data implementation, redirect audits, duplicate content removal, and seamless site migrations." },
            { title: "Link Building Services", desc: "Build authority and trust through high-quality backlinks using guest blogging, sponsorships, strategic partnerships, data-driven infographics, and engaging content distribution." },
            { title: "Web Design & Development", desc: "Custom, mobile-ready, and SEO-optimized websites designed with clear CTAs, optimized user journeys, simplified forms, and conversion-focused layouts tailored to your audience." },
            { title: "Social Media Marketing", desc: "Engage and grow your audience with data-backed social media strategies, competitor analysis, audience behavior insights, and paid social advertising campaigns." },
            { title: "Pay-Per-Click (PPC) Management", desc: "Data-driven PPC campaigns managed by AdWords-certified specialists with optimized bidding strategies, keyword targeting, ad copy creation, and ROI tracking." },
            { title: "Content Marketing", desc: "SEO-focused content creation with compelling headlines, high-performing keywords, engaging visuals, and reader-friendly formatting aligned with Google standards." },
            { title: "Email Marketing", desc: "Personalized email campaigns that avoid spam filters, build subscriber lists, spark curiosity, and drive customer engagement and conversions." },
          ],
        },
        {
          overline: "WHY MILTA",
          titleLead: "Why Choose Milta as Your Digital Marketing Service in",
          highlight: "New York",
          columns: 2,
          items: [
            { title: "Comprehensive Digital Marketing Services", desc: "Full-service digital marketing solutions including SEO, PPC, social media, email marketing, and content creation to achieve your business goals." },
            { title: "Expert New York Marketing Team", desc: "Experienced New York internet marketing professionals who stay ahead of trends and tools to deliver optimized campaigns." },
            { title: "Customized Strategies", desc: "Personalized digital marketing strategies aligned with your business objectives, industry, and target audience." },
            { title: "Data-Driven Approach", desc: "Performance-driven campaigns powered by analytics, real-time monitoring, and transparent reporting." },
            { title: "Proven Track Record", desc: "Helping businesses of all sizes enhance visibility, attract customers, and achieve sustainable growth." },
          ],
        },
      ]}
    />
  );
}

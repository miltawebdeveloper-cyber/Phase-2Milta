import React from "react";
import ServiceLayout from "../_ServiceLayout";

export default function DigitalMarketingNewJersey() {
  return (
    <ServiceLayout
      seo={{
        title: "Top Rated Digital Marketing Agency in New Jersey | Milta",
        description:
          "We are a leading digital marketing agency in New Jersey, specializing in SEO, PPC, email marketing, and helping businesses grow.",
        keywords:
          "digital marketing agency, digital marketing services, digital marketing agency in new jersey, new jersey internet marketing, digital marketing services in new jersey",
        author: "Milta Accounting",
        canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-newjersey/",
      }}
      hero={{
        titleLead: "Full Digital Marketing Solutions Provider in",
        highlight: "New Jersey",
        subtitle:
          "Dominate New Jersey's competitive market with expert digital marketing services. Partner with us today and take your brand to the next level.",
        breadcrumb: "Digital Marketing Services in New Jersey",
      }}
      intro={{
        overline: "DIGITAL MARKETING",
        titleLead: "Drive Your Brand to Success with Expert Digital Marketing Services in",
        highlight: "New Jersey",
        paragraphs: [
          "At Milta, we deliver results-driven digital marketing services tailored to businesses across New Jersey. Our expertise in SEO, PPC, email marketing, and content strategy helps brands increase visibility, generate leads, and achieve sustainable growth.",
          "We leverage data-driven insights and cutting-edge tools to ensure your brand connects with the right audience at the right time on the right platform.",
        ],
        ctaLabel: "Get Started Today",
        imageAlt: "Digital marketing services in New Jersey",
      }}
      whyEssential={{
        overline: "PRECISION MARKETING",
        titleLead: "Engage Your Audience with Precision –",
        highlight: "Right Time, Right Platform",
        subtitle:
          "Whether you're a startup, growing company, or enterprise, Milta helps you break geographic barriers, optimize costs, and scale your digital marketing success.",
        items: [
          "Reach the Right Audience",
          "Cost-Effective Growth",
          "Higher Search Rankings",
          "Measurable Results",
        ],
      }}
      cardGroups={[
        {
          overline: "OUR SERVICES",
          titleLead: "Milta Digital Marketing Services in",
          highlight: "New Jersey",
          bg: "paper",
          columns: 3,
          items: [
            { title: "Search Engine Optimization (SEO)", desc: "Achieve higher organic rankings and improved visibility with ethical SEO practices. We conduct keyword research, optimize on-page and off-page elements, and track performance using Google Search Console to drive qualified traffic and conversions." },
            { title: "Technical SEO Services", desc: "Strengthen your website's foundation with crawl audits, HTTPS checks, speed optimization, structured data implementation, redirect audits, and seamless site migrations to improve crawlability and indexability." },
            { title: "Link Building Services", desc: "Increase trust and authority with high-quality backlinks through strategic guest blogging, sponsorships, partnerships, data-driven infographics, and content distribution." },
            { title: "Web Design & Development", desc: "Custom-built, mobile-ready, SEO-optimized websites designed to drive engagement and conversions with clear CTAs, simplified forms, and targeted content strategies." },
            { title: "Social Media Marketing", desc: "Grow and engage your audience through strategic social media campaigns, competitor analysis, customer behavior insights, and paid advertising tailored to your brand goals." },
            { title: "Pay-Per-Click (PPC) Management", desc: "Reach customers with precision using expertly managed PPC campaigns. Our certified specialists optimize ad copy, bidding strategies, device targeting, and ROI to maximize lead quality." },
            { title: "Content Marketing Services", desc: "High-impact content creation that supports SEO and engagement. We craft compelling headlines, use high-performing keywords, structure content for readability, and ensure Google compliance." },
            { title: "Email Marketing Services", desc: "Stand out in crowded inboxes with personalized email campaigns. We build subscriber lists, test campaigns, optimize messaging, and create curiosity-driven emails that convert." },
          ],
        },
        {
          overline: "WHY MILTA",
          titleLead: "Why Choose Milta as Your Digital Marketing Agency in",
          highlight: "New Jersey",
          columns: 2,
          items: [
            { title: "Comprehensive Digital Marketing Services", desc: "From SEO and PPC to social media, email marketing, and content creation, Milta delivers a complete digital marketing solution." },
            { title: "Experienced New Jersey Marketing Experts", desc: "Our seasoned professionals stay updated with the latest trends, tools, and strategies to keep your campaigns competitive." },
            { title: "Customized Strategies", desc: "We tailor each campaign to your business goals, industry, and audience for higher engagement and ROI." },
            { title: "Data-Driven Approach", desc: "We track performance metrics, analyze insights, and continuously optimize campaigns for measurable results." },
            { title: "Proven Results & Commitment", desc: "Our proven track record spans startups to enterprises, delivering increased traffic, leads, and sustainable growth." },
          ],
        },
      ]}
    />
  );
}

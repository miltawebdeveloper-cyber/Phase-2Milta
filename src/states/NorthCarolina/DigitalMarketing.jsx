import React from "react";
import ServiceLayout from "../_ServiceLayout";

export default function DigitalMarketingNorthCarolina() {
  return (
    <ServiceLayout
      seo={{
        title: "SEO & PPC | Digital Marketing Agency in North Carolina",
        description:
          "As a leading digital marketing agency in North Carolina, we specialize in SEO, PPC, email marketing, and helping businesses grow.",
        keywords:
          "digital marketing agency, digital marketing services, digital marketing agency in north carolina, north carolina internet marketing, digital marketing services in north carolina",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-northcarolina/",
      }}
      hero={{
        titleLead: "Elevate Your Success with North Carolina's Leading",
        highlight: "Digital Marketing Agency",
        subtitle:
          "Dominate North Carolina's competitive market with expert digital marketing services that deliver real results.",
        breadcrumb: "Digital Marketing Services in North Carolina",
      }}
      intro={{
        overline: "DIGITAL MARKETING",
        titleLead: "Drive Your Brand to Success with Expert Digital Marketing Services in",
        highlight: "North Carolina",
        paragraphs: [
          "Reaching your audience in North Carolina's fast-paced market is crucial. Milta leverages AI-powered strategies and proven internet marketing techniques to drive measurable results.",
          "Whether you're expanding your reach, scaling operations, or increasing revenue, our customized digital marketing services help your business connect with the right audience at the right time.",
        ],
        ctaLabel: "Partner With Us Today",
        imageAlt: "Digital marketing services in North Carolina",
      }}
      whyEssential={{
        overline: "PRECISION MARKETING",
        titleLead: "Engage Your Audience with Precision –",
        highlight: "Right Time, Right Platform",
        subtitle:
          "We empower startups, growing brands, and enterprises to strengthen their online presence, attract high-quality leads, and optimize costs across channels.",
        items: [
          "AI-Driven Marketing",
          "Hyper-Local Expertise",
          "Maximized ROI",
          "Measurable Growth",
        ],
      }}
      cardGroups={[
        {
          overline: "OUR SERVICES",
          titleLead: "Milta Digital Marketing Services in",
          highlight: "North Carolina",
          bg: "paper",
          columns: 3,
          items: [
            { title: "Search Engine Optimization (SEO)", desc: "Achieve higher organic rankings and greater visibility with ethical SEO practices, in-depth keyword research, on-page and off-page optimization, and performance tracking." },
            { title: "Technical SEO Services", desc: "Strengthen your website foundation with crawl audits, HTTPS checks, speed optimization, structured data, redirect audits, and seamless site migrations." },
            { title: "Link Building Services", desc: "Build authority and trust through guest blogging, partnerships, sponsored placements, and high-quality backlink strategies." },
            { title: "Web Design & Development", desc: "Custom, mobile-ready, SEO-optimized websites designed with clear CTAs, simplified forms, and conversion-focused layouts." },
            { title: "Social Media Marketing", desc: "Engage, grow, and convert audiences with data-backed social media strategies and paid advertising campaigns." },
            { title: "Pay-Per-Click (PPC) Management", desc: "Data-driven PPC campaigns managed by certified specialists to maximize ROI, traffic quality, and conversions." },
            { title: "Content Marketing", desc: "SEO-focused content creation with compelling headlines, high-performing keywords, and reader-friendly structures." },
            { title: "Email Marketing", desc: "Personalized email campaigns that avoid spam filters, build trust, and drive customer action." },
          ],
        },
        {
          overline: "WHY MILTA",
          titleLead: "Why Choose Milta as Your",
          highlight: "Digital Marketing Partner",
          columns: 3,
          items: [
            { title: "Comprehensive Digital Marketing Services", desc: "From SEO and PPC to social media, content, and email marketing, Milta delivers complete digital solutions." },
            { title: "Expert North Carolina Marketing Team", desc: "Our specialists stay ahead of trends and tools to ensure your campaigns perform at their best." },
            { title: "Customized Growth Strategies", desc: "Every strategy is tailored to your business goals, industry, and target audience." },
            { title: "Data-Driven Optimization", desc: "We track performance metrics, refine campaigns, and ensure measurable, transparent results." },
            { title: "Proven Track Record", desc: "From startups to enterprises, we help brands grow traffic, leads, and revenue consistently." },
            { title: "Commitment to Results", desc: "Your success is our priority. We focus on growth, conversions, and long-term ROI." },
          ],
        },
      ]}
    />
  );
}

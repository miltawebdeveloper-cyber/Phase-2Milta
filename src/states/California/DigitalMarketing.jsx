import React from "react";
import useFullSEO from "../../utils/useFullSEO";
import {
  StatePageShell,
  StateHero,
  Prose,
  HighlightStrip,
  FeatureCards,
  FAQBlock,
} from "../_shared/StatePageKit";

const SERVICES = [
  { title: "Search Engine Optimization (SEO)", desc: "Achieve higher organic rankings and visibility through ethical SEO practices, keyword research, on-page and off-page optimization, and Google Search Console tracking." },
  { title: "Technical SEO Service", desc: "Improve crawlability and indexability with site audits, speed optimization, HTTPS checks, redirect audits, duplicate content removal, structured data, and site migration support." },
  { title: "Link Building Service", desc: "Generate consistent referral traffic and consumer trust using high-authority backlinks through guest blogging, sponsorships, partnerships, infographics, and social engagement." },
  { title: "Web Design & Development Services", desc: "Custom, mobile-ready, SEO-optimized websites with strong visual hierarchy, simplified forms, clear CTAs, and audience-focused content." },
  { title: "Social Media Marketing", desc: "Grow and engage your audience with data-driven campaigns, competitor benchmarking, customer behavior analysis, and paid social advertising." },
  { title: "Pay-Per-Click (PPC) Management", desc: "Precision-driven PPC campaigns managed by certified specialists with optimized bidding, custom ad copy, device targeting, seasonal trends, and ROI tracking." },
  { title: "Content Marketing Service", desc: "High-quality content creation that strengthens SEO with compelling headlines, keyword optimization, relevant visuals, and structured formatting." },
  { title: "Email Marketing Service", desc: "Personalized email campaigns that avoid spam filters, engage subscribers, build trust, and drive conversions using tested messaging strategies." },
];

const FAQS = [
  { q: "How can digital marketing help my California business?", a: "Digital marketing helps increase visibility, attract quality leads, improve conversions, and drive sustainable business growth using data-driven strategies." },
  { q: "What digital marketing services does Milta offer?", a: "We offer SEO, Technical SEO, Link Building, Web Design, PPC, Social Media Marketing, Content Marketing, and Email Marketing services." },
  { q: "Do you work with small and large businesses?", a: "Yes. We support startups, growing businesses, and enterprise-level companies across California." },
  { q: "How do you measure campaign success?", a: "We track performance using analytics, conversion data, ROI metrics, and continuous optimization to ensure measurable results." },
  { q: "How can I get started with Milta?", a: "Simply request a proposal or contact our team for a consultation to discuss your business goals." },
];

export default function DigitalMarketingCalifornia() {
  useFullSEO({
    title: "Results-Driven Digital Marketing Agency in California",
    description:
      "Milta’s California digital marketing experts to boost online visibility, generate quality leads, and drive sustainable business growth.",
    keywords:
      "digital marketing agency, digital marketing services, digital marketing agency in california, california internet marketing, digital marketing services in california",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-california/",
  });

  return (
    <StatePageShell>
      <StateHero
        lead="Premier Digital Marketing Agency in"
        highlight="California"
        subtitle="Outshine the competition with cutting-edge digital marketing services in California."
        breadcrumb="Digital Marketing in California"
        ctaText="Request a Proposal"
      />

      <Prose
        overline="DIGITAL MARKETING"
        title="Accelerate Your Brand’s Success with Premier Digital Marketing Services in"
        highlight="California"
        paragraphs={[
          "At our leading digital marketing agency in California, we deliver high-impact digital marketing services tailored to businesses of all sizes. Our expertise spans SEO, PPC advertising, and strategic email marketing to ensure your brand gains maximum visibility.",
          "With a deep understanding of California internet marketing, our team leverages data-driven insights and cutting-edge strategies to attract quality traffic, drive conversions, and fuel long-term business growth.",
        ]}
      />

      <HighlightStrip
        overline="RIGHT TIME, RIGHT PLATFORM"
        title="Connect with Your Audience at the Perfect"
        highlight="Moment"
        items={[
          "Comprehensive Services",
          "Expert California Marketing Team",
          "Customized Digital Strategies",
          "Data-Driven Decision Making",
          "Proven Track Record",
          "Commitment to Measurable Results",
        ]}
      />

      <FeatureCards
        dark
        overline="OUR SERVICES"
        title="Milta Digital Marketing Services in"
        highlight="California"
        items={SERVICES}
        columns={4}
      />

      <FAQBlock faqs={FAQS} />
    </StatePageShell>
  );
}

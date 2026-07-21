import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/WhyMilta/Hero";
import UkServicesOverviewSection from "../uk-components/WhyMilta/UkServicesOverviewSection";
import IntroSection from "../uk-components/WhyMilta/IntroSection";
import FeatureHighlightSection from "../uk-components/WhyMilta/FeatureHighlightSection";
import FinalCTASection from "../uk-components/WhyMilta/FinalCTASection";
import useFullSEO from "../utils/useFullSEO";
import Faq from "../uk-components/WhyMilta/Faq";
import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {

  useFullSEO({
    // MAIN SEO
    title: "Why UK Businesses Choose Milta for Accounting & Outsourcing Services",
    description:
      "Milta is a trusted UK-focused outsourcing partner supporting small and medium-sized businesses with reliable, affordable, and scalable accounting and business outsourcing services.",
    keywords:
      "business outsourcing services, accounting services for small business, outsource accounting services, UK accounting outsourcing, small business outsourcing UK",
    author: "Milta Accounting Services",
    canonical: "https://www.miltafs.com/uk/why-choose-milta/",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogTitle: "Why UK Businesses Choose Milta for Accounting & Outsourcing Services",
    ogDescription: "Milta is a trusted UK-focused outsourcing partner supporting small and medium-sized businesses with reliable, affordable, and scalable accounting and business outsourcing services.",
    ogUrl: "https://www.miltafs.com/uk/why-choose-milta/",
  });

  return (
    <main>
      <Hero />
      <IntroSection />
      <FeatureHighlightSection />
      <UkServicesOverviewSection />
      <FinalCTASection />
      <Faq />
    </main>

  );
}

export default App;

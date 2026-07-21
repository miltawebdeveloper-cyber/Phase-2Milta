import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/about/AbHero1";
import AbAcc from "../uk-components/about/AbAcc";
import Running from "../uk-components/about/RunningLine";
import About from "../uk-components/homeComp/About";
import SupportBusinessSection from "../uk-components/about/SupportBusinessSection";
import HowWeWorkSection from "../uk-components/about/HowWeWorkSection";
import WhyChooseMiltaSection from "../uk-components/about/WhyChooseMiltaSection";
import MoreThanAccounting from "../uk-components/about/MoreThanAccounting";
import AboutFaq, { faqs } from "../uk-components/about/Faq";
import useFullSEO from "../utils/useFullSEO";
import { faqSchema } from "../utils/faqSchema";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {
useFullSEO({
    // MAIN SEO
    title: "About Us - Milta",
    description:
      "Our expertise encompasses everything from routine bookkeeping and cash flow management to tax planning and regulatory compliance, and we support your growth.",
    keywords:
      "accounts payable solutions, accounts payable services, payroll services for small business, payroll outsourcing, bookkeeping services near me, bookkeeping services for small business",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk/about",
    ogTitle: "About Us - Milta",
    ogDescription: "Our expertise encompasses everything from routine bookkeeping and cash flow management to tax planning and regulatory compliance, and we support your growth.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/about",
    // FAQPage built from the FAQs this page actually renders.
    schema: faqSchema(faqs),
  });

  return (
      <main>
        <Hero />
        <About />
        <AbAcc />
        <SupportBusinessSection />
        <HowWeWorkSection />
         <MoreThanAccounting />
        <WhyChooseMiltaSection />
        <AboutFaq />
      </main>

  );
}

export default App;

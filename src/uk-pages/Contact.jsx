import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/contact/Hero";
import ContactInfoSection from "../uk-components/contact/ContactInfoSection";
import Map from "../uk-components/contact/Map";
import CTA from "../uk-components/contact/CTA";
import useFullSEO from "../utils/useFullSEO";
import Faq, { faqs } from "../uk-components/contact/Faq";
import { faqSchema } from "../utils/faqSchema";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {
 useFullSEO({
    // MAIN SEO
    title: "Contact Us - Outsourcing and Accounting Services",
    description:
      "Do you need professional accounting assistance? For individuals, startups, and small businesses, Milta provides dependable, customized solutions.",
    keywords:
      "accounts payable solutions, accounts payable services, payroll services for small business, payroll outsourcing, bookkeeping services near me, bookkeeping services for small business",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk/contact",
     ogTitle: "Contact Us - Outsourcing and Accounting Services",
    ogDescription: "Do you need professional accounting assistance? For individuals, startups, and small businesses, Milta provides dependable, customized solutions.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/contact/",
    // FAQPage built from the FAQs this page actually renders.
    schema: faqSchema(faqs),
  });
  return (
      <main>
        <Hero />
        <ContactInfoSection />
        {/* Form sits with the contact details; the map follows, then the FAQ. */}
        <CTA />
        <Map />
        <Faq />
      </main>

  );
}

export default App;

import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/Hero";
import ServiceSec from "../uk-components/homeComp/ServicesSection";
import WhyChooseUs from "../uk-components/Services/WhyChooseUs";
import useFullSEO from "../utils/useFullSEO";

import CTA from "../uk-components/Services/CTA";
import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {

  useFullSEO({
    // MAIN SEO
    title: "Outsourcing and Accounting Services for Small Businesses",
    description:
      "Our customized outsourcing and accounting services for small businesses in the UK simplify your finances, improve efficiency, and support sustainable business growth with expert-led solutions.",
    keywords:
      "outsourcing and accounting services, accounting services for small businesses uk, accounting outsourcing services uk, finance and accounting outsourcing, outsourced accounting services, small business accounting uk",
    author: "Milta Accounting Services",
    canonical: "https://www.miltafs.com/services/uk",
      ogTitle: "Outsourcing and Accounting Services for Small Businesses",
    ogDescription: "Our customized outsourcing and accounting services for small businesses in the UK simplify your finances, improve efficiency, and support sustainable business growth with expert-led solutions.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/services/",
  });


  return (
    <main>
      <Hero />
      <ServiceSec />

      <CTA />
    </main>

  );
}

export default App;

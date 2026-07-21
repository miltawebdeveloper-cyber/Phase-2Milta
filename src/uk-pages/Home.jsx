import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/homeComp/Hero";
import About from "../uk-components/homeComp/About";
import Services from "../uk-components/homeComp/ServicesSection";
import Cta from "../uk-components/homeComp/Cta";
import TeamSection from "../uk-components/homeComp/TeamSection";
import ConsultationSection from "../uk-components/homeComp/ConsultationSection";
import FAQ from "../uk-components/homeComp/FAQ";
import Testimonials from "../uk-components/homeComp/WhyChooseMilta";
import SecCta from "../uk-components/homeComp/SecCta";
import useFullSEO from "../utils/useFullSEO";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {

  useFullSEO({
    title: "We are Trusted Outsourced Accounting Services in the UK",
    description:
      "Milta is not just a service provider—we work alongside you as a long-term partner, delivering consistent guidance, reliable support.",
    keywords:
      "accounts payable solutions, accounts payable services, payroll services for small business, payroll outsourcing, bookkeeping services near me, bookkeeping services for small business",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk",
    ogTitle: "We are Trusted Outsourced Accounting Services in the UK",
    ogDescription: "Milta is not just a service provider—we work alongside you as a long-term partner, delivering consistent guidance, reliable support,",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk",
  });

  return (
      <main>
        <Hero />
        <Services />
        <About />
         <Cta />
        <TeamSection />
        
        <ConsultationSection />
        <SecCta />
       
        <FAQ />
      </main>

  );
}

export default App;

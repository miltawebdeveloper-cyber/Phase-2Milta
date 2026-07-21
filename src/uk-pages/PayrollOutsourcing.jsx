import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/PayrollOutsourcing/Hero";
import Faq from "../uk-components/Services/PayrollOutsourcing/Faq";
import ServicesSection from "../uk-components/Services/PayrollOutsourcing/ServicesSection";
import WhyChoose from "../uk-components/Services/PayrollOutsourcing/WhyChoose";
import IntroSection from "../uk-components/Services/PayrollOutsourcing/IntroSection";
import Offer from "../uk-components/Services/PayrollOutsourcing/offer";
import useFullSEO from "../utils/useFullSEO";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {

  useFullSEO({
    // MAIN SEO
    title: "Best Payroll Service For Small Business in the UK",
    description:
      "We provide fully managed payroll services for small business, SMEs, and growing organisations across the UK.",
    keywords:
      "payroll services for small business, payroll outsourcing, best payroll service for small business, global payroll service, best payroll service, payroll services for small business near me, payroll service providers, affordable payroll services for small business, payroll outsourcing companies, payroll service companies, business payroll services, payroll processing services, international payroll services",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk/payroll-services-for-small-business/",
    ogTitle: "Best Payroll Service For Small Business in the UK",
    ogDescription: "We provide fully managed payroll services for small business, SMEs, and growing organisations across the UK.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/payroll-services-for-small-business/",

  });

  return (
    <main>
      <Hero />
      <IntroSection />
      <Offer />
      <WhyChoose />
      <ServicesSection />
      <Faq />



    </main>

  );
}

export default App;

import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/AccountingPayable/Hero";
import WhyChoose from "../uk-components/Services/AccountingPayable/WhyChoose";
import InfoSection from "../uk-components/Services/AccountingPayable/InfoSection";
import Offer from "../uk-components/Services/AccountingPayable/offer";
import UkBookkeepingServicesSection from "../uk-components/Services/AccountingPayable/UkBookkeepingServicesSection";
import Faq from "../uk-components/Services/AccountingPayable/Faq";
import BookkeepingIntroSection from "../uk-components/Services/AccountingPayable/IntroSection";
import useFullSEO from "../utils/useFullSEO";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {
  useFullSEO({
    // MAIN SEO
    title: "Best Payroll Service for Small Business in the UK",
    description:
      "We provide fully managed payroll services for small businesses, SMEs, and growing organisations across the UK, ensuring compliance, accuracy, and timely processing.",
    keywords:
      "payroll services for small business, payroll outsourcing, best payroll service for small business, global payroll service, best payroll service, payroll services for small business near me, payroll service providers, affordable payroll services for small business, payroll outsourcing companies, payroll service companies, business payroll services, payroll processing services, international payroll services",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk/payroll-services-for-small-business/",
    ogTitle: "Best Payroll Service for Small Business in the UK",
    ogDescription: "We provide fully managed payroll services for small businesses, SMEs, and growing organisations across the UK, ensuring compliance, accuracy, and timely processing.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/payroll-services-for-small-business/",
  });

  return (
    <main>
      <Hero />
      <BookkeepingIntroSection />
      <Offer />
      <InfoSection />

      <WhyChoose />
      <UkBookkeepingServicesSection />
      <Faq />




    </main>

  );
}

export default App;

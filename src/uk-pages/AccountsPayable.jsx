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
    title: "Stress-free Accounts Payable Services for UK Businesses",
    description:
      "We provide comprehensive outsourced accounts payable services to simplify financial operations for UK businesses. Our experts handle invoices, reconciliations, and payments efficiently to save you time and reduce errors.",
    keywords:
      "accounts payable solutions, accounts payable services, outsource accounts payable, accounts payable process, quickbooks accounts payable, accounts payable outsourcing companies",
    author: "Milta Accounting Services",
    canonical: "https://www.miltafs.com/uk/accounts-payable-services-in-uk/",

    ogTitle: "Stress-free Accounts Payable Services for UK Businesses",
    ogDescription: "We provide comprehensive outsourced accounts payable services to simplify financial operations for UK businesses. Our experts handle invoices, reconciliations, and payments efficiently to save you time and reduce errors.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/accounts-payable-services-in-uk/",
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

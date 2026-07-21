import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/BookKeep/Hero";
import WhyChoose from "../uk-components/Services/BookKeep/WhyChoose";
import InfoSection from "../uk-components/Services/BookKeep/InfoSection";
import Offer from "../uk-components/Services/BookKeep/offer";
import UkBookkeepingServicesSection from "../uk-components/Services/BookKeep/UkBookkeepingServicesSection";
import Faq from "../uk-components/Services/BookKeep/Faq";
import BookkeepingIntroSection from "../uk-components/Services/BookKeep/BookkeepingIntroSection";
import useFullSEO from "../utils/useFullSEO";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {
  useFullSEO({
    // MAIN SEO
    title: "Advanced Bookkeeping Services in the UK",
    description:
      "We create customized bookkeeping solutions for small and growing businesses in the UK. Speak with our bookkeeping professionals and get a free consultation today.",
    keywords:
      "bookkeeping services near me, bookkeeping services for small business, best bookkeeping for small business, payroll and bookkeeping services, bookkeeping company in the UK, bookkeeping services in UK",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk/bookkeeping-services-for-small-business/",
     ogTitle: "Advanced Bookkeeping Services in the UK",
    ogDescription: "We create customized bookkeeping solutions for small and growing businesses in the UK. Speak with our bookkeeping professionals and get a free consultation today.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/bookkeeping-services-for-small-business/",
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

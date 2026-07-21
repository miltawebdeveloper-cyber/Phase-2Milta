import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/Virtual/Hero";
import WhyChoose from "../uk-components/Services/Virtual/WhyChoose";
import InfoSection from "../uk-components/Services/Virtual/InfoSection";
import Offer from "../uk-components/Services/Virtual/offer";
import ServicesSection from "../uk-components/Services/Virtual/ServicesSection";
import Faq from "../uk-components/Services/Virtual/Faq";
import BookkeepingIntroSection from "../uk-components/Services/Virtual/IntroSection";
import useFullSEO from "../utils/useFullSEO";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {

  useFullSEO({
    // MAIN SEO
    title: "Accounting Virtual Service in the UK",
    description:
      "Get dependable virtual accounting services in the UK. Our experienced online accountants provide efficient financial management and tailored solutions for small businesses.",
    keywords:
      "virtual assistant service, virtual assistant services for small business, virtual bookkeeping service, accounting virtual service, virtual assistant services in the uk, accounting virtual service in the uk",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk/virtual-assistant-services-in-the-uk/",
    ogTitle: "Accounting Virtual Service in the UK",
    ogDescription: "Get dependable virtual accounting services in the UK. Our experienced online accountants provide efficient financial management and tailored solutions for small businesses.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/virtual-assistant-services-in-the-uk/",
  });


  return (
    <main>
      <Hero />
      <BookkeepingIntroSection />
      <Offer />
      <InfoSection />

      <WhyChoose />
      <ServicesSection />
      <Faq />




    </main>

  );
}

export default App;

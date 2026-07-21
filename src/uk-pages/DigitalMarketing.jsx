import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/DigitalMarketing/Hero";
import IntroSection from "../uk-components/Services/DigitalMarketing/IntroSection";
import ServicesSection from "../uk-components/Services/DigitalMarketing/ServicesSection";
import WhyChoose from "../uk-components/Services/DigitalMarketing/WhyChoose";
import Offer from "../uk-components/Services/DigitalMarketing/offer";
import Faq from "../uk-components/Services/DigitalMarketing/Faq";
import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";
import useFullSEO from "../utils/useFullSEO";


function App() {
  useFullSEO({
    // MAIN SEO
    title: "Digital Marketing Agency in the UK | PPC, SEO, and More",
    description:
      "Best digital marketing agency in the UK. Boost your online presence, drive traffic, and increase sales with our expert PPC, SEO, social media, and content marketing services.",
    keywords:
      "digital marketing agency, digital marketing services in the uk, digital marketing services uk, digital marketing agency in the uk, PPC services UK, SEO services UK, social media marketing UK",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk/best-digital-marketing-service-in-uk/",
     ogTitle: "Digital Marketing Agency in the UK | PPC, SEO, and More",
    ogDescription: "Best digital marketing agency in the UK. Boost your online presence, drive traffic, and increase sales with our expert PPC, SEO, social media, and content marketing services.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/best-digital-marketing-service-in-uk/",
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

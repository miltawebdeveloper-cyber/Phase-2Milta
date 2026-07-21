import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/DataEntry/Hero";
import Faq from "../uk-components/Services/DataEntry/Faq";
import InfoSection from "../uk-components/Services/DataEntry/InfoSection";
import Offer from "../uk-components/Services/DataEntry/offer";
import UkServicesSection from "../uk-components/Services/DataEntry/ServicesSection";
import WhyChoose from "../uk-components/Services/DataEntry/WhyChoose";
import IntroSection from "../uk-components/Services/DataEntry/IntroSection";
import useFullSEO from "../utils/useFullSEO";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {

  useFullSEO({
      // MAIN SEO
      title: "Accounting Data Entry Services in the UK",
      description:
        "A trusted provider of reliable and accurate accounting data entry services for small and medium-sized businesses across the UK.",
      keywords:
        "data entry services in the uk, accounting data entry services, data entry companies, bookkeeping data entry, outsourcing accounting data entry.",
      author: "Milta Accounting",
      canonical: "https://www.miltafs.com/uk/accounting-data-entry-services-uk/",
       ogTitle: "Accounting Data Entry Services in the UK",
      ogDescription: "A trusted provider of reliable and accurate accounting data entry services for small and medium-sized businesses across the UK.",
      ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
      ogUrl: "https://www.miltafs.com/uk/accounting-data-entry-services-uk/",
    });

  return (
      <main>
        <Hero />
        <IntroSection />
        <Offer />
        <InfoSection />
        
        <UkServicesSection />
        <WhyChoose />
         <Faq />
      </main>

  );
}

export default App;

import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/TaxPlanning/Hero";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";
import useFullSEO from "../utils/useFullSEO";

function App() {

  useFullSEO({
    title: "Tax Planning Services for UK Businesses | Milta Financial Services",
    description:
      "Corporation tax and self assessment planning for UK businesses, prepared to HMRC deadlines and structured to keep your tax liability predictable.",
    keywords:
      "tax planning services uk, corporation tax planning, self assessment uk, hmrc tax planning",
    author: "Milta Accounting Services",
    canonical: "https://www.miltafs.com/uk/tax-planning-services",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogTitle: "Tax Planning Services for UK Businesses | Milta Financial Services",
    ogDescription: "Corporation tax and self assessment planning for UK businesses, prepared to HMRC deadlines and structured to keep your tax liability predictable.",
    ogUrl: "https://www.miltafs.com/uk/tax-planning-services",
  });


  return (
      <main>
        <Hero />
       
        
      </main>

  );
}

export default App;

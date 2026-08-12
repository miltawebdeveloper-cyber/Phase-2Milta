import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Industries/RetailBusiness/Hero";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";
import useFullSEO from "../utils/useFullSEO";

function App() {

  useFullSEO({
    title: "Accounting Services for Retail Businesses in the UK | Milta Financial Services",
    description:
      "Accounting for UK retailers: multi-channel sales reconciliation, stock control and VAT across online and in-store trade.",
    keywords:
      "retail accounting uk, ecommerce accounting, stock control, retail vat uk",
    author: "Milta Accounting Services",
    canonical: "https://www.miltafs.com/uk/accounting-services-for-retail-business",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogTitle: "Accounting Services for Retail Businesses in the UK | Milta Financial Services",
    ogDescription: "Accounting for UK retailers: multi-channel sales reconciliation, stock control and VAT across online and in-store trade.",
    ogUrl: "https://www.miltafs.com/uk/accounting-services-for-retail-business",
  });


  return (
      <main>
        <Hero />
      
        
      </main>

  );
}

export default App;

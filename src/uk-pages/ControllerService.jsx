import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/ControllerService/Hero";


import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";
import useFullSEO from "../utils/useFullSEO";

function App() {

  useFullSEO({
    title: "Financial Controller Services for UK Businesses | Milta Financial Services",
    description:
      "Outsourced financial controller support for UK businesses: management accounts, cash flow oversight and board-ready reporting without hiring in-house.",
    keywords:
      "financial controller services uk, outsourced financial controller, management accounts uk, virtual finance director",
    author: "Milta Accounting Services",
    canonical: "https://www.miltafs.com/uk/controller-services",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogTitle: "Financial Controller Services for UK Businesses | Milta Financial Services",
    ogDescription: "Outsourced financial controller support for UK businesses: management accounts, cash flow oversight and board-ready reporting without hiring in-house.",
    ogUrl: "https://www.miltafs.com/uk/controller-services",
  });


  return (
      <main>
        <Hero />
      
        
      </main>

  );
}

export default App;

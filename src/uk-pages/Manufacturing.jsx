import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Industries/Manufacturing/Hero";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";
import useFullSEO from "../utils/useFullSEO";

function App() {

  useFullSEO({
    title: "Accounting Services for Manufacturing in the UK | Milta Financial Services",
    description:
      "Accounting for UK manufacturers: job costing, stock valuation and margin reporting across production runs.",
    keywords:
      "manufacturing accounting uk, job costing, stock valuation, manufacturing bookkeeping uk",
    author: "Milta Accounting Services",
    canonical: "https://www.miltafs.com/uk/accounting-services-for-manufacturing",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogTitle: "Accounting Services for Manufacturing in the UK | Milta Financial Services",
    ogDescription: "Accounting for UK manufacturers: job costing, stock valuation and margin reporting across production runs.",
    ogUrl: "https://www.miltafs.com/uk/accounting-services-for-manufacturing",
  });


  return (
      <main>
        <Hero />
      
        
      </main>

  );
}

export default App;

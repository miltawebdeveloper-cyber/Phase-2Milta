import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Industries/Non-Profit/Hero";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";
import useFullSEO from "../utils/useFullSEO";

function App() {

  useFullSEO({
    title: "Accounting Services for Non-Profits in the UK | Milta Financial Services",
    description:
      "Accounting for UK charities and non-profits: fund accounting, restricted income tracking and Charity Commission reporting.",
    keywords:
      "charity accounting uk, non profit accounting, fund accounting, charity commission reporting",
    author: "Milta Accounting Services",
    canonical: "https://www.miltafs.com/uk/accounting-services-for-non-profit",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogTitle: "Accounting Services for Non-Profits in the UK | Milta Financial Services",
    ogDescription: "Accounting for UK charities and non-profits: fund accounting, restricted income tracking and Charity Commission reporting.",
    ogUrl: "https://www.miltafs.com/uk/accounting-services-for-non-profit",
  });


  return (
      <main>
        <Hero />
      
        
      </main>

  );
}

export default App;

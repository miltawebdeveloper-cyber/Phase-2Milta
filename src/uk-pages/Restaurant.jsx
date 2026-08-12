import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Industries/Restaurant/Hero";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";
import useFullSEO from "../utils/useFullSEO";

function App() {

  useFullSEO({
    title: "Accounting Services for Restaurants in the UK | Milta Financial Services",
    description:
      "Accounting for UK restaurants and hospitality: daily takings reconciliation, payroll for shift staff and gross margin control.",
    keywords:
      "restaurant accounting uk, hospitality accounting, takings reconciliation, restaurant payroll uk",
    author: "Milta Accounting Services",
    canonical: "https://www.miltafs.com/uk/accounting-services-for-restaurants",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogTitle: "Accounting Services for Restaurants in the UK | Milta Financial Services",
    ogDescription: "Accounting for UK restaurants and hospitality: daily takings reconciliation, payroll for shift staff and gross margin control.",
    ogUrl: "https://www.miltafs.com/uk/accounting-services-for-restaurants",
  });


  return (
      <main>
        <Hero />
      
        
      </main>

  );
}

export default App;

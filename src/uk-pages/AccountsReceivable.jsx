import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import Hero from "../uk-components/Services/AccountsReceivable/Hero";
import IntroSection from "../uk-components/Services/AccountsReceivable/IntroSection";
import WhyChoose from "../uk-components/Services/AccountsReceivable/WhyChoose";
import Offer from "../uk-components/Services/AccountsReceivable/offer";
import ReceivablesProcessSection from "../uk-components/Services/AccountsReceivable/ReceivablesProcessSection";
import ServicesSection from "../uk-components/Services/AccountsReceivable/ServicesSection";
import useFullSEO from "../utils/useFullSEO";
import ReceivablesProcessSteps from "../uk-components/Services/AccountsReceivable/ReceivablesProcessSteps";



import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function App() {

  useFullSEO({
    // MAIN SEO
    title: "Best Accounts Receivable Services in the UK",
    description:
      "Our accounts receivable services optimise the entire cash collection cycle, improve the customer payment experience, and prevent revenue leakage before it impacts cash flow.",
    keywords:
      "accounts receivable, accounts receivable financing, accounts receivable services, accounts receivable companies, accounts receivable solutions, outsourcing accounts receivable, quickbooks accounts receivable, accounts receivable management services, outsourcing accounts payable and receivable",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk/accounts-receivable-services-in-uk/",
    ogTitle: "Best Accounts Receivable Services in the UK",
    ogDescription: "Our accounts receivable services optimise the entire cash collection cycle, improve the customer payment experience, and prevent revenue leakage before it impacts cash flow.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/accounts-receivable-services-in-uk/",
  });


  return (
    <main>
      <Hero />
      <IntroSection />
      <Offer />
      <WhyChoose />
      <ReceivablesProcessSteps />
      <ReceivablesProcessSection />
      <ServicesSection />
    </main>

  );
}

export default App;

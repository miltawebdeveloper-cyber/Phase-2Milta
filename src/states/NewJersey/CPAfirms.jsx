import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "Why outsource CPA services?", a: "To reduce costs, increase efficiency, and access expert talent." },
  { q: "Is Milta experienced with U.S. regulations?", a: "Yes, our team follows all U.S. accounting and tax standards." },
  { q: "What software do you support?", a: "QuickBooks, Xero, Lacerte, Drake, TurboTax, and more." },
];

export default function CPANewJersey() {
  return (
    <ServiceLayout
      seo={{
        title: "Expert CPA Services for New Jersey Small Businesses | Milta",
        description:
          "Top-notch CPA services in New Jersey, specializing in accounting services for small businesses. Trusted as one of the best CPA firms in New Jersey.",
        keywords:
          "cpa services in new jersey, cpa firms near me, cpa firms in new jersey, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in new jersey, certified public accountant near me",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-newjersey/",
      }}
      hero={{
        titleLead: "Top-Rated CPA Firm in New Jersey",
        highlight: "for Your Business Needs",
        subtitle:
          "Elevate Your Financial Health with Premier CPA Services for Small Businesses in New Jersey. Are you searching for CPA services near me? Look no further! Milta is your trusted accounting firm in New Jersey, specializing in personalized tax planning and preparation for small businesses and individuals. Our certified public accountants ensure accuracy, compliance, and strategic growth tailored to your unique needs.",
        breadcrumb: "CPA Services in New Jersey",
      }}
      intro={{
        overline: "CPA SERVICES",
        titleLead: "How Milta Empowers",
        highlight: "CPA Firms",
        paragraphs: [
          "Every successful CPA firm in New Jersey understands that precise financial records and strategic insights are essential for growth. Managing bookkeeping, tax preparation, and financial analysis can stretch resources thin. Milta takes care of these complexities so your team can focus on advisory services.",
        ],
        ctaLabel: "Schedule a Free Consultation",
        imageAlt: "CPA services for small businesses in New Jersey",
      }}
      cardGroups={[
        {
          overline: "CPA FIRM SUPPORT",
          titleLead: "How Milta Empowers Your",
          highlight: "CPA Firm",
          bg: "paper",
          columns: 2,
          items: [
            { title: "How Can Milta Empower Your CPA Firm?", desc: "Milta supports CPA firms in New Jersey by managing bookkeeping, tax preparation, and compliance, freeing your team to focus on advisory services." },
            { title: "Operational Efficiency Through Outsourcing", desc: "Reduce payroll costs, improve accuracy, and scale effortlessly with Milta's outsourcing solutions." },
          ],
        },
        {
          overline: "WHY OUTSOURCE",
          titleLead: "Why Outsource Your",
          highlight: "CPA Services?",
          columns: 2,
          items: [
            { title: "Monthly, Quarterly, and Annual Write-Up Services", desc: "Accurate data entry and reconciliations." },
            { title: "Catch-Up and Clean-Up Services", desc: "Correcting and organizing financial records." },
            { title: "Accounting Software Conversions", desc: "QuickBooks Online and Xero migrations." },
            { title: "Accounting Reviews and Compilations", desc: "Performed by US CPAs and CMAs." },
            { title: "Tax Return Preparation", desc: "Forms 1120, 1120S, 1065, 1040, 1041, and 990." },
          ],
        },
        {
          overline: "WHY MILTA",
          titleLead: "Why Choose Milta for",
          highlight: "CPA Services in New Jersey",
          bg: "paper",
          columns: 3,
          items: [
            { title: "Available Full-Time", desc: "Access dedicated accounting professionals with optional backup support." },
            { title: "Overnight Delivery", desc: "Work completed while you're offline—ready by morning." },
            { title: "Offload Non-Core Functions", desc: "Focus on growth while we manage accounting operations." },
            { title: "High-Quality CPA Services in New Jersey", desc: "95%+ retention rate with consistent, high-quality results." },
            { title: "Reduced Overheads", desc: "Save 60–70% on staffing and infrastructure costs." },
            { title: "Diversify Your Customers", desc: "Expand into new industries without added training costs." },
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

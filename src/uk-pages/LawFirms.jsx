// src/App.jsx
import React from "react";
import { Box, Container } from "@mui/material";

import Hero from "../uk-components/Industries/LawFirms/Hero";
import IntroSection from "../uk-components/Industries/LawFirms/IntroSection";
import ServicesSection from "../uk-components/Industries/LawFirms/ServicesSection";
import WhyChoose from "../uk-components/Industries/LawFirms/WhyChoose";
import Offer from "../uk-components/Industries/LawFirms/WhoWeServe";

import ContractorsSidebar from "../uk-components/Industries/Ecommerce/Sidebar"; // reuse sidebar or create LawFirms sidebar
import ContactForm from "../components/contactComp/ContactForm";

import useFullSEO from "../utils/useFullSEO";

function App() {

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "1. Do you work with UK law firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialise in supporting UK law firms, solicitors, and legal professionals with accounting, compliance, and bookkeeping services."
      }
    },
    {
      "@type": "Question",
      name: "2. Do you offer a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide a no-cost 5-hour free trial task so you can experience our service before making any commitment."
      }
    },
    {
      "@type": "Question",
      name: "3. Why Choose Our Law Firm Bookkeeping Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Legal Expertise That Matters, Accurate & Reliable Support, Dedicated Team, Cost-Effective Outsourcing, Flexible & Scalable Services."
      }
    }
  ]
};


  useFullSEO({
    title: "Best Law Firm Accounting Services in the UK",
    description:
      "We deliver specialist law firm accounting services designed to provide complete financial clarity and compliance.",
    keywords:
      "law firm accounting services, law firm accounting, law firm bookkeeping, legal accounting, local bookkeeping services near me, bookkeeping for lawyers, law firm bookkeeping services, legal bookkeeping services, bookkeeping for attorneys, bookkeeping services for law firms",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk/law-firm-accounting-services/",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
     ogTitle: "Best Law Firm Accounting Services in the UK",
    ogDescription: "We deliver specialist law firm accounting services designed to provide complete financial clarity and compliance.",
    ogUrl: "https://www.miltafs.com/uk/law-firm-accounting-services/",
        schema: faqSchema,

  });


  return (
    <main>
      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== 3 COLUMN LAYOUT ===== */}
      <Box component="section" sx={{ py: { xs: 3, md: 5 }, bgcolor: "#fff" }}>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            alignItems: "flex-start",
            gap: { xs: 2, sm: 2.5, lg: 3 },
            px: { xs: 2, sm: 3, lg: 4 },
            width: "100%",
            maxWidth: "1900px",
            mx: "auto",
          }}
        >
          {/* ===== LEFT SIDEBAR (Desktop Only) ===== */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              flex: "0 0 20%",
              maxWidth: "20%",
              bgcolor: "#f9fafb",
              borderRadius: 2,
              p: 2.5,
              border: "1px solid #e6e6e6",
              boxShadow: "0 0 8px rgba(0,0,0,0.04)",
              position: "sticky",
              top: 32,
              minHeight: "400px",
            }}
          >
            <ContractorsSidebar />
          </Box>

          {/* ===== CENTER CONTENT ===== */}
          <Box
            sx={{
              flex: "1 1 100%",
              width: "100%",
              maxWidth: { lg: "60%" },
              minWidth: 0,
            }}
          >
            <Box id="overview"><IntroSection /></Box>
            <Box id="services"><ServicesSection /></Box>
            <Box id="offer"><Offer /></Box>
            <Box id="why"><WhyChoose /></Box>

          </Box>

          {/* ===== RIGHT CONTACT FORM (Desktop Only) ===== */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              flex: "0 0 20%",
              maxWidth: "20%",
              bgcolor: "#f9fafb",
              borderRadius: 2,
              p: 2.5,
              border: "1px solid #e6e6e6",
              boxShadow: "0 0 8px rgba(0,0,0,0.04)",
              position: "sticky",
              top: 32,
              textAlign: "center",
              minHeight: "400px",
            }}
          >
            <Box
              sx={{
                color: "#1d4230",
                fontWeight: 700,
                fontSize: { xs: "1rem", md: "1.5rem" },
                mb: 2,
                pt: 4,
              }}
            >
              Reach Out Us
            </Box>

            <ContactForm />
          </Box>
        </Container>
      </Box>
    </main>
  );
}

export default App;
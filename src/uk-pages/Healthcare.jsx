// src/App.jsx
import React from "react";
import { Box, Container } from "@mui/material";

import Hero from "../uk-components/Industries/Healthcare/Hero";
import IntroSection from "../uk-components/Industries/Healthcare/IntroSection";
import ServicesSection from "../uk-components/Industries/Healthcare/ServicesSection";
import WhyChoose from "../uk-components/Industries/Healthcare/WhyChoose";
import WhoWe from "../uk-components/Industries/Healthcare/WhoWeServe";
import Faq from "../uk-components/Industries/Healthcare/Faq";
import Strategies from "../uk-components/Industries/Healthcare/Strategies";

import ContractorsSidebar from "../uk-components/Industries/Healthcare/Sidebar"; // create or reuse
import ContactForm from "../components/contactComp/ContactForm";

import useFullSEO from "../utils/useFullSEO";

function App() {

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "1. What do healthcare accounting services include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Healthcare accounting services cover bookkeeping, payroll, VAT support, financial reporting, HMRC compliance, and specialist support for NHS and private healthcare income."
      }
    },
    {
      "@type": "Question",
      name: "2. Why do healthcare organisations need specialised accounting services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Healthcare businesses face unique regulations, VAT exemptions, payroll complexities, and NHS reporting requirements, making specialist healthcare accounting essential for compliance and accuracy."
      }
    },
    {
      "@type": "Question",
      name: "3. Do you support payroll and pensions for healthcare staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we manage healthcare payroll, RTI submissions, auto-enrolment duties, and NHS pension contributions."
      }
    },
    {
      "@type": "Question",
      name: "4. What software do you use for healthcare accounting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with Xero, QuickBooks, MS Dynamics, and other secure cloud-based platforms commonly used by healthcare accounting firms."
      }
    }
  ]
};

  useFullSEO({
    title: "Healthcare Accounting Services for UK Businesses",
    description:
      "We provide specialised healthcare accounting services customized to the unique financial needs of the UK medical sector. As one of the trusted healthcare accounting firms.",
    keywords:
      "healthcare accounting services, accounting services for healthcare, healthcare accounting, healthcare bookkeeping, healthcare accounting firms, accountant for medical practice, accounting for healthcare professionals, healthcare bookkeeping services, accounting for healthcare services",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/uk/accounting-services-for-healthcare/",
    ogTitle: "Healthcare Accounting Services for UK Businesses",
    ogDescription: "We provide specialised healthcare accounting services customized to the unique financial needs of the UK medical sector.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/uk/accounting-services-for-healthcare/",
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
              maxWidth: { lg: "70%" },
              minWidth: 0,
            }}
          >
            <Box id="overview"><IntroSection /></Box>
            <Box id="services"><ServicesSection /></Box>
            <Box id="why"><WhyChoose /></Box>
            <Box id="strategies"><Strategies /></Box>


            <Box id="faq"><Faq /></Box>
          </Box>

          {/* ===== RIGHT CONTACT FORM (Desktop Only) ===== */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              flex: "0 0 15%",
              maxWidth: "15%",
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
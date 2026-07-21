// src/uk-pages/Contractors.jsx
import React from "react";
import { Box, Container } from "@mui/material";
import Hero from "../uk-components/Industries/Contractors/Hero";
import Sidebar from "../uk-components/Industries/Contractors/Sidebar";
import ContactForm from "../components/contactComp/ContactForm";
import Overview from "../uk-components/Industries/Contractors/Overview";
import Services from "../uk-components/homeComp/ServicesSection";
import Advantages from "../uk-components/Industries/Contractors/Advantages";
import Benefits from "../uk-components/Industries/Contractors/Benefits";
import useFullSEO from "../utils/useFullSEO";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/variables.css";

function ContractorsUK() {
  return (
    <main>
      <Hero />

      {/* ===== PAGE LAYOUT ===== */}
      <Box component="section" sx={{ py: { xs: 2, md: 2 }, bgcolor: "#fff" }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 3,
            mt: 4,
            position: "relative",
          }}
        >
          {/* ===== LEFT COLUMN: Sidebar ===== */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              flex: "0 0 20%",
              maxWidth: "20%",
              minHeight: "400px",
            }}
          >
            <Sidebar />
          </Box>

          {/* ===== CENTER COLUMN: Main Content ===== */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", lg: "1 1 60%" },
              maxWidth: { xs: "100%", lg: "60%" },
              px: { xs: 2, md: 1 },
            }}
          >
            {/* Main content goes here */}

            <Overview />
            <Services />
            <Advantages />
          </Box>

          {/* ===== RIGHT COLUMN: Reach Out Contact Form ===== */}
          {/* ===== RIGHT COLUMN: Reach Out Contact Form ===== */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              flex: "0 0 20%",
              maxWidth: "25%",
              minHeight: "600px",
            }}
          >
            {/* Inner card-style box */}
            <Box
              sx={{
                p: 3,
                bgcolor: "#fff",                  // white background
                borderRadius: 3,                  // rounded corners
                boxShadow: "0 24px 60px rgba(0,0,0,0.08)",  // shadow like sidebar
                border: "1px solid #e6e6e6",     // border like sidebar
                fontFamily: "'Syne', sans-serif",
                height: "520px",                    // fill parent column
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {/* Dot + Heading */}
              <Box sx={{ mb: 1.5, textAlign: "center" }}>

                <Box
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1rem", md: "1.5rem" },
                    color: "#1d4230",
                  }}
                >
                  Reach Out to Us
                </Box>
              </Box>

              {/* Contact Form */}
              <ContactForm />
            </Box>
          </Box>

        </Container>
      </Box>
    </main>
  );
}

export default ContractorsUK;

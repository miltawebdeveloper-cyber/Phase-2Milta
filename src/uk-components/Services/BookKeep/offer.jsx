// src/components/BenefitsSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  "Track income and expenses accurately",
  "Maintain clear cash-flow visibility",
  "Prepare for VAT returns and tax filings without last-minute stress",
  "Generate financial reports for planning and growth",
  "Stay compliant with UK financial and payroll regulations",
];

const BenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 6 },
        backgroundColor: "#2b6d2a", // Primary color background
      }}
    >
      <Container maxWidth="lg">
        {/* ✅ CONTENT WIDTH CONSTRAINED TO 1200px */}
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            textAlign: "center", // Center all text
            color: "#fff", // Make text white for contrast
          }}
        >



          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: 34, md: 46 },
              fontWeight: 700,
              lineHeight: 1.18,
              mb: 3,
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            What Is a Bookkeeping Service
            <br />
            and Why Does Every Business Need It?
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.75,
              maxWidth: 620,
              mx: "auto",
              mb: 5,
              color: "#f0f0f0", // slightly lighter for readability
            }}
          >
            Accurate bookkeeping ensures your financial data reflects your true
            business position and supports better decision-making, tax readiness,
            and full compliance with HMRC regulations. Every business, regardless
            of size, needs reliable bookkeeping to stay organised and in control.
          </Typography>

          {/* Benefits List — centered flex so the trailing odd item centers */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 3,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            {benefits.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 380px" },
                  maxWidth: { xs: "100%", sm: 420 },
                  display: "flex",
                  alignItems: "flex-start",
                  textAlign: "left",
                  gap: 2,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "rgba(255,255,255,0.1)", // light overlay for contrast
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CheckCircleIcon
                  sx={{
                    fontSize: 24,
                    color: "#97ba3a",
                    mt: 0.25,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: "#fff",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;

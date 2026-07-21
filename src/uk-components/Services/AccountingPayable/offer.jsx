// src/components/BenefitsSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  "Monitor outstanding liabilities in real time",
  "Optimise payable cycles and payment timing",
  "Identify unnecessary expenses and duplicate invoices",
  "Maintain audit-ready accounts payable documentation",
  "Ensure full compliance with HMRC and VAT requirements",
];

const BenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 6 },
        backgroundColor: "#2b6d2a", // ✅ Same theme background
      }}
    >
      <Container maxWidth="lg">
        {/* ✅ CONTENT WIDTH CONSTRAINED TO 1200px */}
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {/* ✅ Heading (Same Style) */}
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
            Comprehensive Accounts Payable Services
            <br />
            Designed for Efficiency
          </Typography>

          {/* ✅ Description Block (Same Layout + Color) */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 5,
              justifyContent: "center",
            }}
          >
            {/* Accent Line Placeholder (Same as Above Section) */}
            <Box
              sx={{
                width: 4,
                borderRadius: 2,
              }}
            />

            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.75,
                maxWidth: 650,
                color: "#f0f0f0",
              }}
            >
              An inefficient accounts payable function can restrict cash flow,
              increase financial risk, and lead to supplier disputes. Our
              structured and technology-driven accounts payable services are
              designed to strengthen working capital management while improving
              control and transparency.
              <br />
              <br />
              By leveraging automation and experienced professionals, our
              accounts payable solutions transform AP from an administrative
              task into a strategic financial function.
            </Typography>
          </Box>

          {/* ✅ Benefits List (Same Card Styling + Hover Effect) */}
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
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,

                    backgroundColor: "rgba(255,255,255,0.1)",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.15)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {/* Icon */}
                  <CheckCircleIcon
                    sx={{
                      fontSize: 24,
                      color: "#97ba3a",
                      mt: 0.25,
                    }}
                  />

                  {/* Benefit Text */}
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
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;

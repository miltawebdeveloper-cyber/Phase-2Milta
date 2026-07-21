// src/components/BenefitsSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  "Reduced Days Sales Outstanding (DSO)",
  "Lower bad debt exposure",
  "Stronger credit control processes",
  "Professional and consistent collections",
  "Accurate, real-time receivable reporting",
];

const BenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: "50px", md: "60px" }, // section padding
        backgroundColor: "#2b6d2a", // --uk-primary
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "52px" }, // responsive h1 size
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3,
              fontFamily: "'Poppins', sans-serif", // extracted font
              color: "#fff",
            }}
          >
            Accounts Receivable Services
            <br />
            by Milta Accounting
          </Typography>

          {/* Description Block */}
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              mb: "40px",
              justifyContent: "center",
            }}
          >
            {/* Accent Line */}
            <Box
              sx={{
                width: "4px",
                borderRadius: "16px",
                backgroundColor: "#97ba3a", // --uk-secondary
              }}
            />

            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "650px",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Choosing the right accounts receivable outsourcing company is about
              trust, visibility, and long-term results. Milta Accounting delivers
              scalable, global accounts receivable services that operate as an
              extension of your finance team.
            </Typography>
          </Box>

          {/* Benefits List */}
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
                    gap: "16px",
                    p: "16px",
                    borderRadius: "16px", // --uk-radius

                    backgroundColor: "rgba(255,255,255,0.10)",
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
                      fontSize: "24px",
                      color: "#97ba3a", // --uk-secondary
                      mt: "2px",
                    }}
                  />

                  {/* Text */}
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: "#ffffff",
                      fontFamily: "'Poppins', sans-serif",
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

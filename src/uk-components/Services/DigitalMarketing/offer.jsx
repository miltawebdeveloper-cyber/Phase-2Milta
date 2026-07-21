// src/components/BenefitsSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Updated benefits for digital marketing
const benefits = [
  "Wider Reach: Target audiences globally through SEO, PPC, and social media",
  "Cost-Effective: Better ROI compared to traditional marketing methods",
  "Stronger Engagement: Build relationships through direct, personalised communication",
  "Higher Search Visibility: Rank higher on Google and increase brand credibility",
  "Measurable Results: Track performance in real time and optimise continuously",
];

const BenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 12 },
        backgroundColor: "#2b6d2a", // Primary color background
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Centered content */}
        <Box
          sx={{
            maxWidth: 1100,
            mx: "auto",
            textAlign: "center",
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3,
              fontFamily: "var(--uk-font-primary)",
              color: "#fff",
            }}
          >
            Why Digital Marketing Is Essential for Modern Businesses
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: "#f0f0f0",
              lineHeight: 1.75,
              mb: 5,
              fontSize: 16,
            }}
          >
            Digital marketing services offer businesses a powerful way to grow and stay competitive. Here’s what makes them so effective:
          </Typography>

          {/* Benefits List */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 3,
              maxWidth: 1000,
              mx: "auto",
            }}
          >
            {benefits.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transition: "all 0.3s ease",
                    width: 300, // fixed width
                    flexDirection: "column",
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
                      alignSelf: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: "#fff",
                      textAlign: "center",
                      mt: 1,
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

// src/components/HeroSection.jsx

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

import Accounting from "../../assets/accouting-professional.webp";

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: { xs: "60vh", md: "70vh" },
        display: "flex",
        alignItems: "center",
        position: "relative",

        /* ✅ Background Image */
        backgroundImage: `url(${Accounting})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        /* ✅ Movable Background Animation */
        backgroundPosition: "center",
        animation: "bgMove s ease-in-out infinite alternate",

        "@keyframes bgMove": {
          "0%": {
            backgroundPosition: "center top",
          },
          "100%": {
            backgroundPosition: "center bottom",
          },
        },

        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ✅ Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              180deg,
              rgba(25,59,30,0.85)
            )
          `,
          zIndex: 1,
        }}
      />

      {/* ================= CONTENT ================= */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
            textAlign: { xs: "center", md: "left" },

            /* ✅ Bottom-to-Top Animation */
            animation: "fadeUp 1.2s ease-out forwards",

            "@keyframes fadeUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(40px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {/* Tagline */}
          <Typography
            sx={{
              color: "#97ba3a",
              mb: 2,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              fontSize: { xs: "13px", md: "15px" },
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Your Trusted Accounting Partner
          </Typography>

          {/* Heading */}
          <Typography
            variant="h1"
            sx={{ wordSpacing: "0.1em",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              lineHeight: 1.15,
              mb: 3,
              fontSize: { xs: "34px", md: "52px" },
              color: "#fff",
            }}
          >
            Outsourced Accounting & Bookkeeping Services in the UK

          </Typography>

          {/* Subheading */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.85)",
              mb: 5,
              fontSize: { xs: "14px", md: "17px" },
              maxWidth: 580,
              mx: { xs: "auto", md: 0 },
              lineHeight: 1.8,
            }}
          >
            Trusted by 100+ clients across 12 countries
            Supporting small businesses, growing companies, and global organisations.

          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
              flexWrap: "wrap",
            }}
          >
            {/* Primary Button */}
            <Button
              component="a"
              href="/uk/contact"
              sx={{
                bgcolor: "#97ba3a",
                color: "#ffff",
                fontWeight: 700,
                borderRadius: "50px",
                px: 4,
                py: 1.4,
                textTransform: "none",
                fontSize: "15px",
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#97ba3a",
                },
              }}
            >
              Let’s Talk →
            </Button>

            {/* Outline Button */}
            <Button
              component="a"
              href="/uk/contact"
              variant="outlined"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                fontWeight: 700,
                borderRadius: "50px",
                px: 4,
                py: 1.4,
                textTransform: "none",
                fontSize: "15px",
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#2b6d2a",
                },
              }}
            >
              Explore Our Services →
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;

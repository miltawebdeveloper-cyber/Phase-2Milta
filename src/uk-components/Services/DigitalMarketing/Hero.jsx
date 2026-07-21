// src/pages/AboutUs.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const heroImage =
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

const AboutUs = () => {
  return (
    <Box component="main">
      {/* ================= HERO SECTION ================= */}
      <Box
        component="section"
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "45vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          overflow: "hidden",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5) blur(1px)",
            zIndex: -2,
          }}
        />

        {/* Animated Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(120deg, rgba(21, 255, 0, 0.24), rgba(5, 107, 13, 0.3))",
            animation: "gradientShift 10s ease infinite",
            zIndex: -1,
          }}
        />

        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ zIndex: 1, px: 2 }}>
          {/* ✅ Updated Banner Title */}
          <Typography
            variant="h1"
            sx={{ letterSpacing: "0.25px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 2,
              textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Data-Driven Digital Marketing Services to Grow Your Business
          </Typography>

          {/* ✅ Updated Description */}
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "17px" },
              maxWidth: 750,
              mx: "auto",
              mb: 4,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.9)",
              textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
            }}
          >
            Boost online visibility, generate qualified leads, and increase
            conversions with our SEO, PPC, social media, and email marketing
            solutions tailored for business growth.
          </Typography>

          {/* ✅ Updated Button */}
          <Button
            href="/uk/contact"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 30,
              bgcolor: "#97ba3a",
              color: "#fff",
              fontWeight: 700,
              boxShadow: "0 5px 15px rgba(50, 141, 38, 0.4)",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 25px rgba(100, 145, 70, 0.5)",
              },
            }}
          >
            Grow Your Online Presence
          </Button>
        </Container>

        {/* Gradient Animation Keyframes */}
        <Box
          component="style"
          children={`
            @keyframes gradientShift {
              0% {background-position: 0% 50%;}
              50% {background-position: 100% 50%;}
              100% {background-position: 0% 50%;}
            }
          `}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;

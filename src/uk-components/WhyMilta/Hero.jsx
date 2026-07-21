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
          height: { xs: "70vh", md: "45vh" },
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
          {/* Updated Banner Title */}
          <Typography
            variant="h1"
            sx={{ letterSpacing: "0.25px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              mb: 2,
              textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Why Milta?
          </Typography>

          {/* Updated Subtitle */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "1.6rem" },
              mb: 2,
              textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
              color: "#97ba3a",
            }}
          >
            Smart Support. Real Results.
          </Typography>

          {/* Updated Description */}
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "17px", md: "18px" },
              maxWidth: 850,
              mx: "auto",
              mb: 4,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.95)",
              textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
            }}
          >
            At Milta, we work as an extension of your team — not just another outsourcing company. 
            We deliver accurate, reliable, and cost-effective solutions that help you save time, 
            reduce stress, and focus on growing your business.
          </Typography>

          {/* Updated Closing Line */}
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "22px" },
              fontWeight: 600,
              maxWidth: 750,
              mx: "auto",
              mb: 4,
              lineHeight: 1.7,
              color: "#ffffff",
              textShadow: "1px 1px 8px rgba(0,0,0,0.5)",
              
            }}
          >
            Let's grow your business — together.
          </Typography>

    
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
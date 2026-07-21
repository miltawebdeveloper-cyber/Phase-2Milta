// src/components/HeroSection.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import heroImage from "../../assets/business-man.webp";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        pt: { xs: 6, md: 0 }, pb: { xs: 6, md: 10 },
        px: 2,
        display: "flex",
        justifyContent: "center",
        background: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* MAIN HERO CARD */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1250px",
          borderRadius: "22px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          background: "linear-gradient(90deg, #0B3D1E 0%, #2E7D32 100%)",
          minHeight: { xs: "auto", md: "340px" },
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 5, md: 7 },
        }}
      >
        {/* ================= LEFT CONTENT ================= */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }} // 📱 Fade-up on mobile
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          sx={{
            maxWidth: { xs: "100%", md: "620px" },
            zIndex: 2,
            textAlign: { xs: "center", md: "left" },
          }}
        >

          {/* Updated Heading */}
          <Typography
            sx={{
              fontWeight: 700,
              lineHeight: 1.15,
              mb: 3,
              fontSize: { xs: "26px", sm: "34px", md: "48px" },
              color: "#fff",
            }}
          >
            Focus on Your Business. <br />
            We’ll Handle the Rest.
          </Typography>

          {/* Updated Description */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.85)",
              mb: 4,
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              maxWidth: 520,
              mx: { xs: "auto", md: 0 },
              lineHeight: 1.8,
            }}
          >
            Milta helps UK business owners reduce administrative stress,
            stay compliant, and operate with confidence. When you partner
            with Milta, you gain time, clarity, and peace of mind.
          </Typography>

          {/* Updated Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              onClick={() => navigate("/uk/contact")}
              sx={{
                bgcolor: "#97ba3a",
                color: "#fff",
                fontWeight: 700,
                borderRadius: "50px",
                px: 5,
                py: 1.5,
                textTransform: "none",
                fontSize: "15px",
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#2b6d2a",
                },
              }}
            >
              Book a Consultation →
            </Button>
          </Box>
        </Box>

        {/* ================= RIGHT IMAGE ================= */}
        <Box
          component={motion.img}
          src={heroImage}
          alt="CTA Visual"
          initial={{ opacity: 0, y: 40 }} // 📱 Fade-up on mobile
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          sx={{
            position: { xs: "relative", md: "absolute" },
            right: { md: "40px" },
            bottom: { md: "0px" },
            mt: { xs: 4, md: 0 },
            height: { xs: "220px", sm: "280px", md: "380px" },
            width: "auto",
            objectFit: "contain",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
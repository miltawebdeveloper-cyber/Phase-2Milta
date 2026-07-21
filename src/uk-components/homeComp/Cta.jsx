// src/components/CTASection.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ctaImg from "../../assets/ctaImg.webp";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",

        /* ✅ Responsive Vertical Padding */
        py: { xs: 6, sm: 8, md: 12 },

        /* ✅ Background Image */
        backgroundImage: `url(${ctaImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(25,59,30,0.88) 0%, rgba(25,59,30,0.92) 100%)",
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 800,
            mx: "auto",

            /* ✅ Better mobile spacing */
            px: { xs: 2, sm: 3, md: 0 },
          }}
        >
          {/* ================= HEADING ================= */}
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              lineHeight: { xs: 1.35, md: 1.2 },

              /* ✅ Fixed Responsive Font Sizes */
              fontSize: {
                xs: "22px",
                sm: "32px",
                md: "52px",
              },

              mb: { xs: 2.5, md: 3 },
              color: "#fff",
            }}
          >
            Think fresh, work faster, grow smarter, save money.
          </Typography>

          {/* ================= DESCRIPTION ================= */}
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "16px",
              },
              lineHeight: { xs: 1.7, md: 1.8 },
              color: "rgba(255,255,255,0.9)",
              mb: { xs: 4, md: 5 },
              maxWidth: 620,
              mx: "auto",
            }}
          >
            Milta is not just a service provider—we work alongside you as a
            long-term partner, delivering consistent guidance, reliable support,
            and practical financial insight throughout every stage of your
            business journey.
          </Typography>

          {/* ================= BUTTON ================= */}
          <Button
            variant="contained"
            fullWidth={{ xs: true, sm: false }}
            onClick={() => navigate("/uk/services")}
            sx={{
              bgcolor: "#2b6d2a",
              color: "#fff",
              borderRadius: "999px",

              /* ✅ Responsive Button Size */
              px: { xs: 4, sm: 6 },
              py: { xs: 1.4, sm: 1.6 },

              fontWeight: 700,
              fontSize: { xs: 14, sm: 14 },
              textTransform: "none",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",

              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: 260, sm: "none" },

              "&:hover": {
                bgcolor: "#97ba3a",
                color: "#fff",
              },
            }}
          >
            Get Started →
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const HealthcareIntroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 3 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth={false}>
        {/* CONTENT WIDTH CONSTRAINED */}
        <Box
          sx={{
            maxWidth: 900,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Section Label */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 3,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#97ba3a",
              }}
            />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Healthcare Accounting Services
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: 28, sm: 34, md: 48 },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 4,
              fontFamily: "'Poppins', sans-serif",
              color: "#2b6d2a",
            }}
          >
            Healthcare Accounting Services
            <br />
            for UK Firms
          </Typography>

          {/* Description */}
          <Box sx={{ display: "flex", gap: 2, mb: 4, justifyContent: "center" }}>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              At Milta, we provide specialised healthcare accounting services
              customized to the unique financial needs of the UK medical sector.
              As one of the trusted healthcare accounting firms, we bring over
              10 years of experience and a dedicated team of 150+ healthcare
              accountants supporting healthcare businesses across the UK.
              <br />
              <br />
              Whether you operate a private medical practice, manage an urgent
              care centre, or oversee a large healthcare organisation, our
              accounting services for healthcare ensure your financial records
              remain accurate, compliant, and up to date so you can focus on
              delivering outstanding patient care.
            </Typography>
          </Box>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              href="/uk/contact"
              variant="contained"
              sx={{
                px: 4,
                py: 1.6,
                fontWeight: 600,
                borderRadius: 2,
                backgroundColor: "#2b6d2a",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#2b6d2a",
                  opacity: 0.9,
                },
              }}
            >
              Get Started
            </Button>

            <Button
              href="tel:+919600103723"
              variant="outlined"
              sx={{
                px: 4,
                py: 1.6,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                borderColor: "#2b6d2a",
                color: "#2b6d2a",
                "&:hover": {
                  borderColor: "#2b6d2a",
                  backgroundColor: "rgba(0,0,0,0.03)",
                },
              }}
            >
              Book a Call
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HealthcareIntroSection;

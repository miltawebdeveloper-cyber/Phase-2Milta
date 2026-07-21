import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const RealEstateIntroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 4 },
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
              Real Estate Accounting Services
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
            Expert Outsourced Real Estate
            <br />
            Accounting Services
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
              Keep your property business financially organised and growth-focused
              with our specialised real estate accounting services. With over 10
              years of experience and a team of 150+ qualified professionals, we
              deliver reliable accounting services for real estate businesses
              across the US, UK, and Australia.
              From day-to-day real estate bookkeeping to strategic tax planning
              and compliance, we understand the complexities of property
              transactions, rental income tracking, and portfolio management.
              Whether you are managing multiple properties or overseeing large
              developments, our expert team ensures your real estate accounting
              remains accurate, compliant, and scalable.
              We have successfully supported over 500 businesses worldwide in
              streamlining their property management accounting processes.
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

export default RealEstateIntroSection;

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
              Hospitality Accounting Services
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
            Hospitality Accounting Services
            <br />
            for UK Firms: Accurate & Reliable Financial Management
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
              Since 2015, we have been supporting UK businesses with dependable
              and customised financial management. Our specialized accounting
              services for the hospitality industry cater to restaurant owners,
              hotel managers, café operators, and resort directors who need
              accurate reporting and efficient financial processes.
              From structured bookkeeping for hospitality to payroll management,
              supplier payments, debtor tracking, inventory control, and detailed
              financial reporting, we deliver complete hospitality accounting
              solutions customized to your operations.

              With a team of over 150 experienced virtual accountants, we provide
              specialised accounting for hospitality businesses across the UK,
              ensuring compliance, organisation, and financial clarity at every
              stage.
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
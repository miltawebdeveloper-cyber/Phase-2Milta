// src/uk-components/Services/Receivables/ReceivablesProcessSteps.jsx

import React from "react";
import { Box, Container, Typography } from "@mui/material";

const processSteps = [
  {
    step: "01",
    title: "Business Review",
    desc: "We assess your current invoicing process, payment cycles, and cash flow gaps to understand where improvements are needed.",
  },
  {
    step: "02",
    title: "Process Setup",
    desc: "Structured workflows are implemented and integrated seamlessly with your existing accounting and billing systems.",
  },
  {
    step: "03",
    title: "Daily Management",
    desc: "Invoices, payment follow-ups, reconciliations, and dispute handling are managed daily with professional oversight.",
  },
  {
    step: "04",
    title: "Reporting & Support",
    desc: "You receive clear reports, actionable insights, and ongoing financial guidance to maintain steady cash flow.",
  },
];

const ReceivablesProcessSteps = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 14 }, background: "#f9faf9" }}>
      <Container maxWidth="lg">
        
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 48 },
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#2b6d2a",
            }}
          >
            How Our Receivables Process Works
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: 16,
              color: "#666",
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            A structured, hands-on approach designed to improve cash flow and reduce financial risk.
          </Typography>
        </Box>

        {/* Timeline Wrapper */}
        <Box
          sx={{
            position: "relative",
          }}
        >
          {/* Horizontal Line (Desktop Only) */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 40,
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: "#e0e6e0",
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 6, md: 4 },
              justifyContent: "space-between",
              position: "relative",
              zIndex: 1,
            }}
          >
            {processSteps.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  textAlign: { xs: "left", md: "center" },
                }}
              >
                {/* Step Circle */}
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    border: "3px solid #97ba3a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#97ba3a",
                    fontSize: 18,
                    mx: { xs: 0, md: "auto" },
                    mb: 3,
                    position: "relative",
                  }}
                >
                  {item.step}
                </Box>

                {/* Card */}
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    backgroundColor: "#fff",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                    height: "250px",
                  }}
                >
                  <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}>
                    {item.desc}
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

export default ReceivablesProcessSteps;
// src/components/BookkeepingIntroSection.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const BookkeepingIntroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth={false}>
        {/* CONTENT WIDTH CONSTRAINED */}
        <Box
          sx={{
            maxWidth: 900, // limit max width for better center alignment
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // center horizontally
            textAlign: "center",  // text centered
          }}
        >
          {/* Section Label */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 3,
              justifyContent: "center", // center label
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
              Bookkeeping Services
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontSize: { xs: 28, sm: 34, md: 48 },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 4,
              fontFamily: "var(--uk-font-primary)",
            }}
          >
            Top-Notch Bookkeeping Services
            <br />
            for Small Businesses in the UK
          </Typography>

          {/* Description */}
          <Box sx={{ display: "flex", gap: 2, mb: 4, justifyContent: "center" }}>
            <Box
              sx={{
                width: 4,
                borderRadius: 2,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              Running a small business in the UK means balancing daily operations,
              client demands, payroll deadlines, and tax compliance all at once.
              At Miltafs, we understand how challenging it can be to manage accurate
              financial records while growing your business.
              <br /><br />
              As a trusted bookkeeping company in the UK, we support businesses with
              everything from bank reconciliation and invoicing to payroll and
              bookkeeping services, financial reporting, and year-end preparation.
              Whether you’re searching for bookkeeping services near you or need
              remote support, our UK-focused team delivers dependable, compliant
              solutions wherever your business operates.
              <br /><br />
              Our goal is simple: help you focus on running and scaling your business
              while we take care of the numbers.
            </Typography>
          </Box>

          {/* CTA Buttons */}
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.6,
                fontWeight: 600,
                borderRadius: 2,
                backgroundColor: "#97ba3a",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#97ba3a",
                  opacity: 0.9,
                },
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              sx={{
                px: 4,
                py: 1.6,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                borderColor: "#97ba3a",
                color: "#97ba3a",
                "&:hover": {
                  borderColor: "#97ba3a",
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

export default BookkeepingIntroSection;

// src/components/BenefitsSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  "End-to-end payroll processing with complete accuracy",
  "PAYE, HMRC & pension compliance management",
  "Employee onboarding, exit payroll & statutory deductions",
  "Time & attendance integration for accurate payroll runs",
  "Global payroll services across the UK, USA, Canada, Australia & India",
  "Custom payroll reporting and secure data handling",
  "Payroll software integration with QuickBooks, Xero & Wave",
];

const BenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 6 },
        backgroundColor: "#2b6d2a", // ✅ Same Primary Background
      }}
    >
      <Container maxWidth="lg">
        {/* ✅ CONTENT WIDTH SAME */}
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {/* ✅ Heading (Same Style) */}
          <Typography
            sx={{
              fontSize: { xs: 34, md: 46 },
              fontWeight: 700,
              lineHeight: 1.18,
              mb: 3,
              color: "#fff",
              fontFamily: "var(--uk-font-primary)",
            }}
          >
            Payroll Management Services
            <br />
            by Milta Accounting
          </Typography>

          {/* ✅ Description Block with Accent Bar */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 5,
              justifyContent: "center",
            }}
          >
        

            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.75,
                maxWidth: 650,
                color: "#f0f0f0",
              }}
            >
              Milta Accounting is a trusted provider of UK payroll services,
              payroll outsourcing, and international payroll solutions. By
              partnering with one of the best payroll service providers, you
              gain accurate processing, full compliance, and scalable support
              for businesses of all sizes—locally and globally.
            </Typography>
          </Box>

          {/* ✅ Benefits List (Same Card Style) */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 3,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            {benefits.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 380px" },
                  maxWidth: { xs: "100%", sm: 420 },
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "rgba(255,255,255,0.1)",

                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.15)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {/* Icon */}
                  <CheckCircleIcon
                    sx={{
                      fontSize: 24,
                      color: "#97ba3a",
                      mt: 0.25,
                    }}
                  />

                  {/* Text */}
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: "#fff",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* ✅ Closing CTA (Same Soft White Text) */}
          <Typography
            sx={{
              mt: { xs: 5, md: 6 },
              fontSize: 15,
              lineHeight: 1.7,
              color: "#eaeaea",
              maxWidth: 750,
              mx: "auto",
            }}
          >
            By outsourcing payroll to Milta Accounting, you can focus on growing
            your business with confidence while our experts manage accuracy,
            compliance, and efficiency. Get started today with professional{" "}
            <strong>Payroll Management Services in the UK</strong>.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;

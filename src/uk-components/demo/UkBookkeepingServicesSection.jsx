// src/uk-components/Services/BookKeeping/UkBookkeepingServicesSection.jsx
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const services = [
  {
    title: "Bank and Credit Card Reconciliation",
    desc:
      "We ensure your financial records align with actual bank and credit card statements through regular reconciliation—preventing errors, fraud, and discrepancies.",
  },
  {
    title: "Cash Flow, AR & AP Management",
    desc:
      "We document and track all cash inflows and outflows, ensuring effective AR/AP management and a clear picture of your business cash flow.",
  },
  {
    title: "Invoice Generation and Recording",
    desc:
      "We handle invoice generation, timely recording, and follow-ups to maintain a steady income stream and ensure accurate financial records.",
  },
  {
    title: "Chart of Accounts & Accounting Setup",
    desc:
      "We help maintain a clear chart of accounts for accurate categorization, easy tracking, and efficient accounting preparation.",
  },
  {
    title: "Payroll, Taxation & Employee Benefits",
    desc:
      "Our payroll experts manage salaries, tax withholdings, and employee benefits—ensuring compliant payroll processing.",
  },
  {
    title: "Regular Financial Reporting",
    desc:
      "Weekly, monthly, and yearly reports offering insights into revenue, expenses, and profitability.",
  },
  {
    title: "Small Business, Non-Profit & Clean-Up Accounting",
    desc:
      "We assist small businesses and non-profits and provide bookkeeping clean-up services.",
  },
  {
    title: "CPA Collaboration for Year-End Tax",
    desc:
      "We collaborate with CPAs to ensure accurate and timely year-end tax preparation.",
  },
];

const UkBookkeepingServicesSection = () => {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#fff" }}>
      <Container maxWidth={false}>
        <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center" }}>

          {/* SECTION HEADER */}
          <Box sx={{ maxWidth: 750, mx: "auto", mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                mb: 2,
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
                Services
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: 30, sm: 36, md: 46 },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                fontFamily: "var(--uk-font-primary)",
              }}
            >
              End-to-End Bookkeeping and
              <br />
              Financial Organization
            </Typography>

            <Typography
              sx={{
                color: "#666",
                lineHeight: 1.8,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Our comprehensive bookkeeping solutions help small businesses stay
              organized, compliant, and confident.
            </Typography>
          </Box>

          {/* SERVICE CARDS */}
          <Grid container spacing={4} justifyContent="center">
            {services.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    maxWidth: 300,
                    width: "100%",
                    p: 3.5,
                    borderRadius: 3,
                    backgroundColor: "#1f3d1f",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,
                    transition: "all 0.35s ease",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                      transform: "translateY(-6px)",
                      boxShadow: "0px 24px 60px rgba(0,0,0,0.25)",
                    },
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 32, color: "#fff" }} />

                  <Typography
                    sx={{
                      fontSize: 16.5,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      fontFamily: "var(--uk-font-primary)",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Container>
    </Box>
  );
};

export default UkBookkeepingServicesSection;

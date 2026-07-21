// src/uk-components/Services/BookKeeping/UkBookkeepingServicesSection.jsx

import React from "react";
import { Box, Typography, Container } from "@mui/material";

/* ✅ Icons */
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import VerifiedIcon from "@mui/icons-material/Verified";
import StorageIcon from "@mui/icons-material/Storage";

/* ✅ Arrow Icon */
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const services = [
  {
    title: "Core Services",
    points: [
      "Law firm bookkeeping (daily transaction recording and reconciliation)",
      "VAT returns (including partial exemption where applicable)",
      "Management accounts and monthly reporting",
      "Payroll and pension administration (auto-enrolment compliance)",
      
      
    ],
  },
  {
    title: "Legal-Specific Services",
    points: [
      "SRA Accounts Rules compliance support",
      "Client account (trust account) reconciliation",
      "Three-way reconciliations",
      "COFA assistance",
      "Preparation for SRA audits",
      "Matter-level profitability reporting",
    ],
  },
  {
    title: "Year-End & Compliance",
    points: [
      "Year-end statutory accounts preparation",
      "Corporation Tax returns (CT600)",
      "Companies House filings",
      "Self-assessment for partners (LLPs)",
      "Confirmation statements",
    ],
  },
  {
    title: "Technology & Systems Support",
    points: [
      "Xero and QuickBooks setup and management",
      "Legal practice management software integration",
      "Cloud migration and accounting automation",
    ],
  },
];

const UkBookkeepingServicesSection = () => {
  /* ✅ Icon Map */
  const iconMap = {
    "Core Services": ReceiptLongIcon,
    "Legal-Specific Services": FactCheckIcon,
    "Year-End & Compliance": VerifiedIcon,
    "Technology & Systems Support": StorageIcon,
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 6 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ maxWidth: 1200, mx: "auto" }}>
          {/* ================= HEADER ================= */}
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: "#97ba3a",
                mb: 2,
              }}
            >
              Specialist Services
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "34px", md: "42px" },
                fontWeight: 700,
                mb: 3,
                color: "#2b6d2a",
              }}
            >
              Specialist UK Accounting Services for Law Firms
            </Typography>

            <Typography
              sx={{
                color: "#666",
                maxWidth: 850,
                mx: "auto",
                fontSize: "16px",
                lineHeight: 1.8,
              }}
            >
              We provide dedicated law firm accounting services tailored
              specifically to UK solicitors and legal practices.
            </Typography>
          </Box>

          {/* ================= SERVICE CARDS ================= */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 4,
              width: "100%",
                    height: "100%",
              maxWidth: 1080,
              mx: "auto",
            }}
          >
            {services.map((item, index) => {
              const Icon = iconMap[item.title];

              return (
                <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 280px", md: "0 1 300px" },
                  maxWidth: { xs: "100%", sm: 320 },
                  display: "flex",
                }}
              >
                  {/* ✅ Card Box */}
                  <Box
                    sx={{
                      width: "400px", // ✅ Fixed Width
                      height: "400px", // ✅ Fixed Height
                      p: 4,
                      borderRadius: "16px",

                      background:
                        "linear-gradient(180deg, rgba(43,109,42,0.98), rgba(55,125,50,0.98))",

                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start", // ✅ Left Align Items
                      justifyContent: "flex-start",
                      gap: 2,

                      textAlign: "left", // ✅ Text Left Align
                      color: "#fff", // ✅ White Text

                      transition: "0.3s ease",
                      boxShadow: "0 10px 28px rgba(43,109,42,0.12)",

                      "&:hover": {
                        transform: "translateY(-8px)",
                        background:
                          "linear-gradient(180deg,#97ba3a,#2b6d2a)",
                        boxShadow: "0 25px 60px rgba(15,23,42,0.18)",
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 55,
                        height: 55,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "linear-gradient(135deg,#97ba3a,#2b6d2a)",
                      }}
                    >
                      <Icon sx={{ fontSize: 26, color: "#fff" }} />
                    </Box>

                    {/* Title */}
                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Bullet Points */}
                    <Box sx={{ mt: 1 }}>
                      {item.points.map((point, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          {/* Arrow */}
                          <ArrowRightAltIcon
                            sx={{
                              fontSize: 18,
                              mt: "3px",
                              color: "#fff",
                            }}
                          />

                          {/* Text */}
                          <Typography
                            sx={{
                              fontSize: 14,
                              lineHeight: 1.6,
                              color: "#fff",
                            }}
                          >
                            {point}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UkBookkeepingServicesSection;

// src/uk-components/Services/BookKeeping/UkBookkeepingServicesSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import BuildIcon from "@mui/icons-material/Build";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const services = [
  {
    title: "General Ledger Data Entry",
    desc: "All financial transactions should be accurately recorded in your general ledger.",
  },
  {
    title: "Accounts Payable & Receivable Data Entry",
    desc: "Smooth handling of invoices, payments, and customer billing.",
  },
  {
    title: "Invoice Data Entry",
    desc: "Organised and timely invoice processing to support healthy cash flow.",
  },
  {
    title: "Bank Reconciliation",
    desc: "To maintain uniformity, bank statements are matched with accounting data.",
  },
  {
    title: "Payroll Data Entry",
    desc: "Accurate recording of salaries, deductions, and payroll details.",
  },
  {
    title: "Expense Data Management",
    desc: "Tracking and organising business expenses for better financial planning.",
  },
  {
    title: "Financial Statement Preparation",
    desc: "Creation of reports, profit and loss statements, and balance sheets.",
  },
  {
    title: "Custom Data Entry Solutions",
    desc: "Flexible services customized to your specific business needs.",
  },
  {
    title: "QuickBooks Data Entry",
    desc: "Complete QuickBooks support, from invoice entry to report generation, for accurate and accessible records.",
  },
];

const UkBookkeepingServicesSection = () => {
  const iconMap = {
    "General Ledger Data Entry": ReceiptLongIcon,
    "Accounts Payable & Receivable Data Entry": AccountBalanceWalletRoundedIcon,
    "Invoice Data Entry": DescriptionIcon,
    "Bank Reconciliation": AccountBalanceIcon,
    "Payroll Data Entry": PaidRoundedIcon,
    "Expense Data Management": MonetizationOnIcon,
    "Financial Statement Preparation": QueryStatsRoundedIcon,
    "Custom Data Entry Solutions": BuildIcon,
    "QuickBooks Data Entry": CloudUploadIcon,
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 2 }, pb: { xs: 8, md: 6 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center" }}>

          {/* SECTION HEADER */}
          <Box sx={{ maxWidth: 750, mx: "auto", mb: { xs: 6, md: 8 } }}>

            {/* Label */}
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

            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "34px", md: "42px" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                fontFamily: "'Poppins', sans-serif",
                color: "#2b6d2a",
              }}
            >
              Our Data Entry Services <br />
              in the UK
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                color: "#666",
                lineHeight: 1.8,
                maxWidth: 600,
                mx: "auto",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
              }}
            >
              We offer a complete range of accounting data entry services designed
              to support your business efficiently.
            </Typography>
          </Box>

          {/* SERVICE CARDS */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 4,
              width: "100%",
              maxWidth: 1080,
              mx: "auto",
            }}
          >
            {services.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 280px", md: "0 1 300px" },
                  maxWidth: { xs: "100%", sm: 320 },
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    maxWidth: 300,
                    width: "100%",
                    p: 3.5,
                    borderRadius: "16px",
                    height: "100%",
                    background: "linear-gradient(180deg, rgba(43,109,42,0.98), rgba(55,125,50,0.98))",
                    color: "#fff",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,

                    position: "relative",
                    transition: "transform 0.32s ease, box-shadow 0.32s ease, background 0.32s ease",
                    boxShadow: "0 8px 24px rgba(43,109,42,0.06)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 28px 70px rgba(15,23,42,0.14)",
                      background: "linear-gradient(180deg,#97ba3a,#2b6d2a)",
                    },
                  }}
                >
                  {/* Icon Badge */}
                  {(() => {
                    const Icon = iconMap[item.title] || CheckCircleIcon;
                    return (
                      <Box sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg,#ffffff10,#ffffff05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.06), 0 8px 20px rgba(0,0,0,0.08)',
                        border: '1px solid rgba(255,255,255,0.06)'
                      }}>
                        <Box sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'linear-gradient(135deg,#97ba3a,#2b6d2a)'
                        }}>
                          <Icon sx={{ fontSize: 26, color: '#fff' }} aria-hidden />
                        </Box>
                      </Box>
                    );
                  })()}

                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: 16.5,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      color: "rgba(255,255,255,0.9)",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.9)",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
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

export default UkBookkeepingServicesSection;

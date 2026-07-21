// src/uk-components/Services/BookKeeping/UkBookkeepingServicesSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ✅ Healthcare Icons */
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PaidIcon from "@mui/icons-material/Paid";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SavingsIcon from "@mui/icons-material/Savings";
import DescriptionIcon from "@mui/icons-material/Description";

const services = [
  {
    title: "Income Recording",
    desc: "Accurate recording of income from NHS contracts, private patients, and insurance providers, ensuring complete visibility across all revenue streams.",
  },
  {
    title: "Expense Management",
    desc: "Organised tracking of medical supplies, staff costs, rent, and day-to-day operational expenses to maintain cost control and clarity.",
  },
  {
    title: "Bank Reconciliation",
    desc: "Regular reconciliation of bank and card transactions to ensure accurate, error-free financial records.",
  },
  {
    title: "Accounts Payable & Receivable",
    desc: "Monitoring supplier payments and managing outstanding patient or insurer invoices to support steady cash flow.",
  },
  {
    title: "VAT Support",
    desc: "Preparation and review of VAT data, including exempt and mixed healthcare supplies, aligned with HMRC requirements.",
  },
  {
    title: "Financial Record Maintenance",
    desc: "Maintaining compliant, up-to-date financial records ready for reporting, audits, and reviews.",
  },
  {
    title: "Healthcare Payroll Processing",
    desc: "End-to-end payroll services for healthcare staff, including accurate PAYE and National Insurance calculations.",
  },
  {
    title: "Locum & Shift Payroll",
    desc: "Precise payroll management for shift-based, part-time, and locum healthcare professionals.",
  },
  {
    title: "Pension Management",
    desc: "Support with auto-enrolment obligations and NHS pension contributions to ensure full compliance.",
  },
  {
    title: "HMRC Reporting",
    desc: "Timely RTI submissions and payroll reporting to HMRC to keep your healthcare organisation fully compliant.",
  },
];

const UkBookkeepingServicesSection = () => {
  /* ✅ Icon Map for Healthcare Services */
  const iconMap = {
    "Income Recording": PaidIcon,
    "Expense Management": ReceiptLongIcon,
    "Bank Reconciliation": AccountBalanceIcon,
    "Accounts Payable & Receivable": SyncAltIcon,
    "VAT Support": RequestQuoteIcon,
    "Financial Record Maintenance": VerifiedIcon,
    "Healthcare Payroll Processing": GroupsIcon,
    "Locum & Shift Payroll": EventAvailableIcon,
    "Pension Management": SavingsIcon,
    "HMRC Reporting": DescriptionIcon,
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
        <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center" }}>
          {/* ================= HEADER ================= */}
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
                Healthcare Services
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
              Healthcare Accounting Services for UK Organisations
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                color: "#666",
                lineHeight: 1.8,
                maxWidth: 650,
                mx: "auto",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
              }}
            >
              Our customized healthcare accounting services are designed to
              remove financial obstacles and help UK healthcare practices operate
              with confidence.
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
              maxWidth: 1080,
              mx: "auto",
            }}
          >
            {services.map((item, index) => {
              const Icon = iconMap[item.title] || CheckCircleIcon;

              return (
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
                      background:
                        "linear-gradient(180deg, rgba(43,109,42,0.98), rgba(55,125,50,0.98))",
                      color: "#fff",

                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 2,

                      transition:
                        "transform 0.32s ease, box-shadow 0.32s ease",

                      boxShadow: "0 8px 24px rgba(43,109,42,0.06)",

                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 28px 70px rgba(15,23,42,0.14)",
                        background:
                          "linear-gradient(180deg,#97ba3a,#2b6d2a)",
                      },
                    }}
                  >
                    {/* Icon Badge */}
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background:
                          "linear-gradient(135deg,#ffffff10,#ffffff05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow:
                          "inset 0 2px 0 rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 1.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "linear-gradient(135deg,#97ba3a,#2b6d2a)",
                        }}
                      >
                        <Icon sx={{ fontSize: 26, color: "#fff" }} />
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      sx={{
                        fontSize: 16.5,
                        fontWeight: 600,
                        lineHeight: 1.4,
                        fontFamily: "'Poppins', sans-serif",
                        color: "rgba(255,255,255,0.9)",
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
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UkBookkeepingServicesSection;

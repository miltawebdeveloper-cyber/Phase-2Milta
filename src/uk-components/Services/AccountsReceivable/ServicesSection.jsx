// src/uk-components/Services/BookKeeping/UkBookkeepingServicesSection.jsx

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ✅ Suitable Icons */
import PolicyIcon from "@mui/icons-material/Policy";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const services = [
  {
    title: "Clear Credit Approval Policies",
    desc: "Strong receivable performance starts with well-defined credit policies, including credit checks, trade references, and controlled payment terms...",
  },
  {
    title: "Timely and Accurate Invoicing",
    desc: "Delayed or inaccurate invoices lead to late payments. Our accounts receivable services ensure invoices are created and delivered promptly...",
  },
  {
    title: "Receivables Accounting & Cash Acceleration",
    desc: "Effective receivable management includes early settlement discounts, invoice factoring, and receivables financing...",
  },
  {
    title: "Tracking Overdue Payments",
    desc: "We use dashboards, alerts, and structured reminders to track overdue invoices efficiently...",
  },
  {
    title: "Aged Receivables Reporting",
    desc: "Accurate aged receivables reports provide visibility into outstanding balances and delays...",
  },
  {
    title: "Automation with Online Billing Tools",
    desc: "Automation is key to efficient receivable management. Our services integrate invoicing, reminders, and reporting...",
  },
];

const UkBookkeepingServicesSection = () => {
  /* ✅ Icon Mapping */
  const iconMap = {
    "Clear Credit Approval Policies": PolicyIcon,
    "Timely and Accurate Invoicing": ReceiptLongIcon,
    "Receivables Accounting & Cash Acceleration": PaidRoundedIcon,
    "Tracking Overdue Payments": NotificationsActiveIcon,
    "Aged Receivables Reporting": BarChartRoundedIcon,
    "Automation with Online Billing Tools": AutoAwesomeIcon,
  };

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 8, md: 5 },pb: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center" }}>
          {/* ================= HEADER ================= */}
          <Box sx={{ maxWidth: 780, mx: "auto", mb: { xs: 6, md: 8 } }}>
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
              <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                Accounts Receivable Services
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: "32px", sm: "40px", md: "48px" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                color: "#2b6d2a",
              }}
            >
              Smarter Accounts Receivable
              <br />
              Management & Cash Flow Control
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: 16,
                color: "rgba(0,0,0,0.75)",
                lineHeight: 1.8,
                maxWidth: 640,
                mx: "auto",
              }}
            >
              Milta Accounting delivers structured, automated, and reliable
              accounts receivable management to help businesses reduce late
              payments, improve liquidity, and maintain steady cash flow.
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

                      /* ✅ SAME MODERN STYLE */
                      background:
                        "linear-gradient(180deg, rgba(43,109,42,0.98), rgba(55,125,50,0.98))",
                      color: "#fff",

                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 2,

                      position: "relative",
                      transition:
                        "transform 0.32s ease, box-shadow 0.32s ease, background 0.32s ease",

                      boxShadow: "0 8px 24px rgba(43,109,42,0.08)",

                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 28px 70px rgba(15,23,42,0.14)",
                        background: "linear-gradient(180deg,#97ba3a,#2b6d2a)",
                      },
                    }}
                  >
                    {/* ✅ Premium Icon Badge */}
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
                          "inset 0 2px 0 rgba(255,255,255,0.06), 0 8px 20px rgba(0,0,0,0.10)",
                        border: "1px solid rgba(255,255,255,0.08)",
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
                        color: "rgba(255,255,255,0.92)",
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.85)",
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

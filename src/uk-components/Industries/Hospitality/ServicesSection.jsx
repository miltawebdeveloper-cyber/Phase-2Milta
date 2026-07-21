// src/uk-components/Services/BookKeeping/UkBookkeepingServicesSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ✅ Restaurant Suitable Icons */
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payment";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import InventoryIcon from "@mui/icons-material/Inventory";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const services = [
  {
    title: "Daily & Monthly Bookkeeping",
    desc: "Accurate recording of sales, expenses, supplier invoices, and bank reconciliations to keep your accounts up to date.",
  },
  {
    title: "Accounts Payable & Supplier Management",
    desc: "Timely invoice processing and supplier payment scheduling to maintain strong vendor relationships.",
  },
  {
    title: "Accounts Receivable & Credit Control",
    desc: "Customer invoicing and payment tracking to support steady cash flow.",
  },
  {
    title: "Payroll Administration",
    desc: "Full payroll management for permanent, temporary, and seasonal staff, ensuring compliance with UK employment regulations.",
  },
  {
    title: "Stock & Cost Monitoring",
    desc: "Food, beverage, and operational cost analysis to reduce wastage and protect profit margins.",
  },
  {
    title: "Financial Reporting & Insights",
    desc: "Clear profit and loss statements, cash flow forecasts, and performance reports customized to hospitality KPIs.",
  },
];

const UkBookkeepingServicesSection = () => {
  /* ✅ Icon Map */
  const iconMap = {
    "Daily & Monthly Bookkeeping": ReceiptIcon,
    "Accounts Payable & Supplier Management": PaymentIcon,
    "Accounts Receivable & Credit Control": AccountBalanceWalletIcon,
    "Payroll Administration": PeopleIcon,
    "Stock & Cost Monitoring": InventoryIcon,
    "Financial Reporting & Insights": AssessmentIcon,
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 7 },
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
                What We Provide
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
              Hospitality Accounting Services
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
              We deliver structured, efficient, and practical hospitality accounting
              solutions that strengthen your financial foundation.
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
                      position: "relative",
                      transition:
                        "transform 0.32s ease, box-shadow 0.32s ease, background 0.32s ease",
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
                          "inset 0 2px 0 rgba(255,255,255,0.06), 0 8px 20px rgba(0,0,0,0.08)",
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
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UkBookkeepingServicesSection;
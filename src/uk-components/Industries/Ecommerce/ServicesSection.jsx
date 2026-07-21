// src/uk-components/Services/BookKeeping/UkBookkeepingServicesSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ✅ Ecommerce Suitable Icons */
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaymentsIcon from "@mui/icons-material/Payments";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const services = [
  {
    title: "Bookkeeping Service for eCommerce",
    desc: "We provide accurate and up-to-date ecommerce bookkeeping services tailored to online sellers. Every sale, refund, platform fee, and expense is recorded correctly, ensuring your accounts remain compliant, organised, and ready for growth.",
  },
  {
    title: "E-commerce Sales Reconciliation",
    desc: "Our team reconciles sales data across all ecommerce platforms, payment gateways, and bank accounts. By matching orders, payouts, refunds, and fees, we ensure your financial records reflect the true performance of your online store.",
  },
  {
    title: "Inventory Accounting & (COGS)",
    desc: "We help ecommerce businesses track inventory movements and calculate accurate cost of goods sold (COGS). This gives you a clear view of stock value, profit margins, and pricing performance across sales channels.",
  },
  {
    title: "Management Accounts & Financial Reporting",
    desc: "Gain meaningful insights with monthly management accounts designed for ecommerce businesses. Our reports include profit and loss statements, cash flow summaries, and performance breakdowns by sales channel—helping you make informed decisions.",
  },
  {
    title: "Payroll & Director Payroll",
    desc: "We manage payroll for your ecommerce team, including director payroll, ensuring accurate calculations, timely payments, and full compliance with UK payroll and HMRC requirements.",
  },
  {
    title: "Cash Flow Forecasting & Budgeting",
    desc: "Our cash flow forecasting and budgeting services help you plan with confidence. We analyse income and expenditure trends so you can manage stock purchases, marketing spend, and growth investments without cash shortages.",
  },
  {
    title: "Advisory & eCommerce Accounting Support",
    desc: "Beyond day-to-day accounting, we offer ongoing ecommerce accounting services and advisory support. From system setup and process improvements to financial guidance as you scale, we act as a reliable partner for your business decisions.",
  },
];

const UkBookkeepingServicesSection = () => {
  /* ✅ Icon Map */
  const iconMap = {
    "Bookkeeping Service for eCommerce": ShoppingCartIcon,
    "E-commerce Sales Reconciliation": SyncAltIcon,
    "Inventory Accounting & (COGS)": Inventory2Icon,
    "Management Accounts & Financial Reporting": BarChartIcon,
    "Payroll & Director Payroll": PaymentsIcon,
    "Cash Flow Forecasting & Budgeting": TrendingUpIcon,
    "Advisory & eCommerce Accounting Support": SupportAgentIcon,
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
              Ecommerce Services We Offer for UK Businesses
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
              Miltafs provides specialised ecommerce accounting and bookkeeping
              solutions to help online sellers stay compliant, profitable, and
              ready to scale.
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

// src/uk-components/Services/BookKeeping/UkBookkeepingServicesSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ✅ Suitable Icons */
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import StorageIcon from "@mui/icons-material/Storage";
import ApprovalIcon from "@mui/icons-material/Approval";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";
import VerifiedIcon from "@mui/icons-material/Verified";

const services = [
  {
    title: "Receive Invoices",
    desc: "All supplier invoices are securely received through approved digital channels and centrally organised to ensure nothing is missed or delayed.",
  },
  {
    title: "Verify Accuracy",
    desc: "Invoices are carefully matched against purchase orders, contracts, and delivery confirmations to identify discrepancies and prevent incorrect payments.",
  },
  {
    title: "Record in Accounting System",
    desc: "Once validated, invoices are accurately recorded in the accounts payable system, including QuickBooks accounts payable, ensuring full traceability and audit readiness.",
  },
  {
    title: "Review for Approval",
    desc: "Invoices are routed through predefined approval workflows to ensure policy compliance, internal controls, and accountability at every stage.",
  },
  {
    title: "Schedule Payments",
    desc: "Payment dates are strategically planned to meet supplier due dates while maintaining optimal cash flow and avoiding late payment penalties.",
  },
  {
    title: "Prepare Checks or Transfers",
    desc: "Payments are executed securely via electronic bank transfers or checks, based on supplier preferences and agreed payment terms.",
  },
 
];

const UkBookkeepingServicesSection = () => {
  /* ✅ Icon Map Based on Title */
  const iconMap = {
    "Receive Invoices": ReceiptLongIcon,
    "Verify Accuracy": FactCheckIcon,
    "Record in Accounting System": StorageIcon,
    "Review for Approval": ApprovalIcon,
    "Schedule Payments": EventAvailableIcon,
    "Prepare Checks or Transfers": PaymentsIcon,
   
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
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
                Process
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
              Our Structured Accounts Payable Process
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
              Miltafs ensures every supplier payment is handled with accuracy,
              compliance, and complete financial control.
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
              maxWidth: 1040,
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
                      width: "100%",
                      height: "100%",
                      p: 3.5,
                      borderRadius: "16px",

                      /* ✅ SAME MODERN GRADIENT STYLE */
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
                    {/* ✅ Icon Badge SAME STYLE */}
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

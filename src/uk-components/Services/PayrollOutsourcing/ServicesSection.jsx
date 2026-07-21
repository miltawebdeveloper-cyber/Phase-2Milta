// src/uk-components/Services/Payroll/UkPayrollServicesSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ✅ Payroll Related Icons */
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

const services = [
  {
    title: "End-to-End Payroll Processing",
    desc: "We manage the complete payroll lifecycle, ensuring employees are paid accurately and on time with minimal administrative effort from your team.",
  },
  {
    title: "PAYE, National Insurance & Statutory Deductions",
    desc: "Our payroll services cover PAYE, National Insurance contributions, and all statutory deductions in line with HMRC requirements.",
  },
  {
    title: "Pension Auto-Enrolment & Compliance",
    desc: "We handle pension auto-enrolment setup, employee assessments, contributions, and ongoing compliance with UK pension regulations.",
  },
  {
    title: "HMRC RTI Submissions & Reporting",
    desc: "We manage Real Time Information (RTI) submissions, payroll reports, and statutory filings to ensure full HMRC compliance.",
  },
  {
    title: "Payslip Generation & Payroll Records",
    desc: "Accurate payslips and secure employee payroll records are generated and maintained for transparency and audit readiness.",
  },
  {
    title: "Secure Payroll Data Handling",
    desc: "Your payroll data is protected using secure systems, controlled access, and best practices for confidentiality and compliance.",
  },
  {
    title: "Flexible Payroll for Small Businesses",
    desc: "Our affordable payroll services for small businesses are scalable, cost-effective, and tailored to your workforce structure.",
  },
  {
    title: "Multi-Location & Growing Teams",
    desc: "We support advanced payroll needs for multi-location and expanding teams, including international workforce coordination.",
  },
];

const UkPayrollServicesSection = () => {
  /* ✅ Icon Map Like Bookkeeping */
  const iconMap = {
    "End-to-End Payroll Processing": PaymentsRoundedIcon,
    "PAYE, National Insurance & Statutory Deductions":
      AccountBalanceRoundedIcon,
    "Pension Auto-Enrolment & Compliance": VerifiedUserRoundedIcon,
    "HMRC RTI Submissions & Reporting": DescriptionRoundedIcon,
    "Payslip Generation & Payroll Records": ReceiptLongIcon,
    "Secure Payroll Data Handling": SecurityRoundedIcon,
    "Flexible Payroll for Small Businesses": BusinessRoundedIcon,
    "Multi-Location & Growing Teams": GroupsRoundedIcon,
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
        <Box sx={{ maxWidth: 1300, mx: "auto", textAlign: "center" }}>
          {/* SECTION HEADER */}
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
              Comprehensive Payroll Services Designed for UK Businesses
            </Typography>

            {/* Subtext */}
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
              Our business payroll services support organisations of all sizes,
              from start-ups to established enterprises. We deliver flexible,
              scalable payroll solutions tailored to your workforce structure.
            </Typography>
          </Box>

          {/* SERVICE CARDS (Bookkeeping Style Applied) */}
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
                      maxWidth: 280,
                      width: "100%",
                      p: 3.5,
                      borderRadius: "16px",
                    height: "100%",

                      /* ✅ Same Gradient Style */
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
                    {/* ✅ Icon Badge Same as Bookkeeping */}
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

          {/* FOOTER NOTE */}
          <Typography
            sx={{
              mt: { xs: 6, md: 8 },
              fontSize: 15,
              color: "#666",
              maxWidth: 720,
              mx: "auto",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            If you’re searching for{" "}
            <strong>payroll services for small business near me</strong>, our
            UK-focused payroll specialists ensure full local compliance with
            nationwide coverage.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default UkPayrollServicesSection;

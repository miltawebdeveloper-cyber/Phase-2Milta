import React, { useState, lazy, Suspense } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Breadcrumbs,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  NavigateNext as NavigateNextIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import HandshakeIcon from "@mui/icons-material/Handshake";
import TimerIcon from "@mui/icons-material/Timer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import useFullSEO from "../../utils/useFullSEO";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";

import Footer from "../../components/Footer";
const CTASection = lazy(() => import("../../components/homeComp/CTASection"));

/* ================= MOTION ================= */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ================= DATA ================= */
const SOLUTIONS = [
  {
    icon: AccountBalanceIcon,
    title: "Bank & Credit Card Reconciliation",
    desc: "We ensure your financial records match your bank and credit card statements, eliminating discrepancies, preventing fraud, and maintaining accurate accounts.",
  },
  {
    icon: CurrencyExchangeIcon,
    title: "Cash Flow, AR & AP Management",
    desc: "We manage your cash inflows and outflows, track receivables, and ensure vendors are paid on time for optimal financial health.",
  },
  {
    icon: ReceiptLongIcon,
    title: "Invoice Generation & Payment Tracking",
    desc: "Our invoicing system ensures timely billing, payment tracking, and follow-ups to maintain consistent cash flow.",
  },
  {
    icon: AssignmentIcon,
    title: "Chart of Accounts & System Setup",
    desc: "We create customized charts of accounts and maintain organized accounting systems for easy access and compliance.",
  },
  {
    icon: PeopleIcon,
    title: "Payroll Processing & Tax Compliance",
    desc: "We handle payroll calculations, employee benefits, and tax compliance to ensure accurate and timely payments.",
  },
  {
    icon: BarChartIcon,
    title: "Customized Financial Reporting",
    desc: "Weekly, monthly, and yearly reports provide insights into revenue, expenses, and profitability to guide smart decisions.",
  },
  {
    icon: CleaningServicesIcon,
    title: "Small Business & Non-Profit Bookkeeping",
    desc: "We offer accounting services for small businesses, nonprofits, and financial clean-up solutions.",
  },
  {
    icon: HandshakeIcon,
    title: "CPA Collaboration for Tax Preparation",
    desc: "We collaborate with CPAs to streamline year-end tax filings and ensure complete accuracy.",
  },
];

const ESSENTIALS = [
  "Track income and expenses effectively.",
  "Prepare for tax season without last-minute stress.",
  "Gain insights into financial performance.",
  "Ensure compliance with tax and legal obligations.",
];

const ADVANTAGES = [
  {
    icon: TimerIcon,
    title: "Save Time & Reduce Stress",
    desc: "Free yourself from tedious recordkeeping and focus on growing your California business.",
  },
  {
    icon: CheckCircleIcon,
    title: "Improve Accuracy & Reduce Errors",
    desc: "Our certified team keeps your books accurate, avoiding costly mistakes and rework.",
  },
  {
    icon: TrendingUpIcon,
    title: "Make Informed Decisions",
    desc: "Access up-to-date financial insights and expert guidance for strategic planning.",
  },
  {
    icon: SecurityIcon,
    title: "Ensure Tax Readiness & Compliance",
    desc: "Stay compliant with California and federal requirements, with records always tax-season ready.",
  },
  {
    icon: CenterFocusStrongIcon,
    title: "Focus on Business Growth",
    desc: "Delegate the bookkeeping — we handle the numbers while you scale your business.",
  },
];

const PANEL_STATS = [
  { num: "100+", label: "Clients" },
  { num: "10y+", label: "Experience" },
  { num: "100%", label: "Accuracy" },
  { num: "24/7", label: "Support" },
];

const FAQS = [
  {
    q: "What is bookkeeping, and why do I need it?",
    a: "Bookkeeping records, organizes, and manages financial transactions to ensure compliance, accuracy, and informed decision-making for your California business.",
  },
  {
    q: "Should I hire a professional bookkeeper?",
    a: "Yes. Professional bookkeeping saves time, ensures accuracy, and keeps your business compliant with U.S. and California tax laws.",
  },
  {
    q: "Do you offer payroll and bookkeeping together?",
    a: "Yes, we provide complete payroll and bookkeeping services across California, keeping your records organized and employees paid on time.",
  },
  {
    q: "How do I get started?",
    a: "Contact us today to schedule a free consultation with our California bookkeeping experts.",
  },
];

/* ================= HERO ================= */
const Hero = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "60vh" },
        background: "linear-gradient(145deg, #0d1f0e 0%, #163018 50%, #1a3d1c 100%)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: { xs: 14, md: 16 },
        pb: { xs: 10, md: 12 },
      }}
    >
      {/* Glows */}
      <Box sx={{ position: "absolute", top: "-15%", left: "-8%", width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(primary, 0.35)} 0%, transparent 65%)`, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: "-20%", right: "-8%", width: 650, height: 650, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(primary, 0.2)} 0%, transparent 65%)`, pointerEvents: "none" }} />
      {/* Rings */}
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: { xs: 500, md: 920 }, height: { xs: 500, md: 920 }, borderRadius: "50%", border: `1px solid ${alpha("#ffffff", 0.05)}`, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: { xs: 300, md: 580 }, height: { xs: 300, md: 580 }, borderRadius: "50%", border: `1px solid ${alpha("#ffffff", 0.04)}`, pointerEvents: "none" }} />

      <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto", position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", py: { xs: 4, md: 0 } }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Typography
              variant="h1"
              sx={{ letterSpacing: "0.25px",
                fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4rem", lg: "3.5rem" },
                color: theme.palette.primary.contrastText,
                maxWidth: { xs: "100%", md: "880px" },
                mx: "auto",
                mb: 4,
              }}
            >
              Elite Bookkeeping Services for Small Businesses in{" "}
              <Box component="span" sx={{ color: alpha(primary, 0.95) }}>California</Box>
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Typography sx={{ color: alpha("#ffffff", 0.7), fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 620, mx: "auto", mb: 4, fontFamily: '"Outfit", sans-serif' }}>
              Need bookkeeping services near me that streamline your finances? We've got you covered.
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Breadcrumbs
              separator={<NavigateNextIcon sx={{ fontSize: 18, color: alpha("#ffffff", 0.5) }} />}
              sx={{ mb: 3, "& .MuiBreadcrumbs-ol": { justifyContent: "center" } }}
            >
              <Link href="/" sx={{ display: "flex", alignItems: "center", gap: 0.5, color: alpha("#ffffff", 0.7), textDecoration: "none", transition: "all 0.3s ease", "&:hover": { color: primary, transform: "translateY(-2px)" } }}>
                <HomeIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>Home</Typography>
              </Link>
              <Typography variant="body2" sx={{ color: alpha("#ffffff", 0.9), fontWeight: 600, letterSpacing: "0.02em" }}>
                Bookkeeping Services in California
              </Typography>
            </Breadcrumbs>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

/* ================= INTRO / WHAT IS ================= */
const Intro = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 4 } }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 6, md: 10 }} alignItems={{ md: "center" }}>
          {/* Text side */}
          <Box sx={{ flex: 1 }}>
            <motion.div {...fadeUp(0)}>
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: "0.75rem", mb: 2, display: "block" }}>
                UNRIVALED IN CALIFORNIA
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.8rem" }, lineHeight: 1.2, mb: 2.5 }}>
                Bookkeeping Services for{" "}
                <Box component="span" sx={{ color: primary }}>Small Businesses in California</Box>
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.18)}>
              <Box sx={{ width: 48, height: 3, borderRadius: 4, bgcolor: alpha(primary, 0.35), mb: 3 }} />
              <Typography sx={{ color: "text.secondary", fontSize: "1rem", lineHeight: 1.85, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                Struggling to find bookkeeping services near me that truly elevate your business? Milta delivers precision-driven bookkeeping services for small businesses, transforming financial data into growth-focused insights.
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "1rem", lineHeight: 1.85, fontFamily: '"Outfit", sans-serif', mb: 3 }}>
                As a leading bookkeeping company in California, our certified experts ensure seamless transaction tracking, elite reporting, and financial clarity that keeps your business agile and ahead.
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.26)}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate("/contact")}
                sx={{ bgcolor: primary, color: "#fff", px: 4, py: 1.4, fontWeight: 700, "&:hover": { bgcolor: "#1a4d1d" } }}
              >
                Schedule Your Free Consultation
              </Button>
            </motion.div>
          </Box>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: "0 0 auto", width: "100%", maxWidth: 420 }}
          >
            <Box sx={{ position: "relative", borderRadius: "24px", overflow: "hidden", boxShadow: `0 32px 80px ${alpha(primary, 0.12)}` }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                alt="Bookkeeping services in California"
                sx={{ width: "100%", height: 480, objectFit: "cover", display: "block", transition: "transform 0.6s ease", "&:hover": { transform: "scale(1.04)" } }}
              />
              <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(45deg, ${alpha(primary, 0.15)} 0%, transparent 60%)` }} />
              <Box sx={{ position: "absolute", bottom: 24, left: 24, right: 24, borderRadius: "16px", bgcolor: (t) => (t.palette.mode === "dark" ? "rgba(25,42,27,0.95)" : "rgba(255,255,255,0.95)"), backdropFilter: "blur(12px)", p: 2.5, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
                <Stack direction="row" spacing={3} justifyContent="space-around">
                  {[{ num: "100+", label: "Clients" }, { num: "50", label: "States" }, { num: "10y+", label: "Experience" }].map(({ num, label }) => (
                    <Box key={label} textAlign="center">
                      <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: "1.4rem", color: primary, lineHeight: 1 }}>{num}</Typography>
                      <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.7rem", color: "text.secondary", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", mt: 0.4 }}>{label}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

/* ================= WHY ESSENTIAL ================= */
const WhyEssential = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 4 } }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: "0.75rem", mb: 2, display: "block" }}>
              WHY IT MATTERS
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, lineHeight: 1.2 }}>
              Why Bookkeeping Is{" "}
              <Box component="span" sx={{ color: primary }}>Essential in California</Box>
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 2.5 }}>
          {ESSENTIALS.map((text, i) => (
            <Box
              key={text}
              component={motion.div}
              {...fadeUp(i * 0.08)}
              sx={{
                p: 3.5,
                borderRadius: "20px",
                height: "100%",
                bgcolor: "background.default",
                borderLeft: `4px solid ${primary}`,
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                "&:hover": { transform: "translateY(-8px)", boxShadow: `0 20px 48px ${alpha(primary, 0.12)}` },
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 26, color: primary, mb: 1.5 }} />
              <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.98rem", lineHeight: 1.4, color: "text.primary" }}>
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= SOLUTIONS ================= */
const Solutions = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default", overflow: "hidden", position: "relative" }}>
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.05)} 1.5px, transparent 1.5px)`, backgroundSize: "28px 28px" }} />

      <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 4 }, position: "relative", zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: "0.75rem", mb: 2, display: "block" }}>
              END-TO-END SOLUTIONS
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.2 }}>
              Comprehensive Bookkeeping &{" "}
              <Box component="span" sx={{ color: primary }}>Financial Solutions</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: "text.secondary", fontSize: "1rem", lineHeight: 1.8, maxWidth: 600, mx: "auto", mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              Customized to your needs — from organizing financial records to year-end tax preparation, we have every aspect of your California business finances covered.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 2.5 }}>
          {SOLUTIONS.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Box
                key={svc.title}
                component={motion.div}
                {...fadeUp(i * 0.07)}
                sx={{
                  p: 3.5,
                  borderRadius: "20px",
                  height: "100%",
                  bgcolor: "background.paper",
                  border: (t) => `1px solid ${t.palette.mode === "dark" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "all 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    bgcolor: alpha(primary, 0.03),
                    border: `1px solid ${alpha(primary, 0.3)}`,
                    boxShadow: `0 24px 56px ${alpha(primary, 0.13)}, 0 4px 16px rgba(0,0,0,0.06)`,
                    "& .sweep-bar": { width: "100%" },
                    "& .icon-wrap": { bgcolor: primary, border: `1px solid ${primary}`, boxShadow: `0 8px 20px ${alpha(primary, 0.35)}`, transform: "scale(1.08)" },
                    "& .icon-svg": { color: "#ffffff" },
                    "& .card-title": { color: primary },
                    "& .card-num": { opacity: 1 },
                  },
                }}
              >
                <Box className="sweep-bar" sx={{ position: "absolute", top: 0, left: 0, height: "3px", width: 0, background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.5)})`, borderRadius: "0 0 3px 0", transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }} />
                <Typography className="card-num" sx={{ position: "absolute", bottom: 10, right: 14, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: "3.8rem", lineHeight: 1, color: alpha(primary, 0.07), userSelect: "none", pointerEvents: "none", opacity: 0, transition: "opacity 0.32s ease" }}>
                  {String(i + 1).padStart(2, "0")}
                </Typography>
                <Box className="icon-wrap" sx={{ width: 52, height: 52, borderRadius: "14px", bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.15)}`, display: "flex", alignItems: "center", justifyContent: "center", mb: 2.5, flexShrink: 0, transition: "all 0.32s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  <Icon className="icon-svg" sx={{ fontSize: 24, color: primary, transition: "color 0.32s ease" }} />
                </Box>
                <Typography className="card-title" sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "0.95rem", color: "text.primary", mb: 1, lineHeight: 1.35, transition: "color 0.28s ease" }}>
                  {svc.title}
                </Typography>
                <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.84rem", lineHeight: 1.72, color: "text.secondary", pr: 2 }}>
                  {svc.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= ADVANTAGES ================= */
const Advantages = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: "background.paper", overflow: "hidden", position: "relative" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto", px: { xs: 3, md: 4 } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: { xs: 6, lg: 5 }, alignItems: "stretch" }}>
          {/* LEFT dark panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: "0 0 360px", display: "flex" }}
          >
            <Box sx={{ width: "100%", minHeight: { xs: "auto", lg: 500 }, background: "linear-gradient(145deg, #0d1f0e 0%, #163018 50%, #1a3d1c 100%)", borderRadius: "24px", p: { xs: 4, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", position: "relative" }}>
              <Box sx={{ position: "absolute", top: "-20%", right: "-15%", width: 320, height: 320, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(primary, 0.35)} 0%, transparent 65%)`, pointerEvents: "none" }} />
              <Box sx={{ position: "absolute", bottom: "-25%", left: "-15%", width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(primary, 0.2)} 0%, transparent 65%)`, pointerEvents: "none" }} />
              <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 460, height: 460, borderRadius: "50%", border: `1px solid ${alpha("#ffffff", 0.05)}`, pointerEvents: "none" }} />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                  <Box sx={{ width: 24, height: 3, borderRadius: 2, bgcolor: primary }} />
                  <Typography variant="overline" sx={{ color: primary, fontWeight: 800, letterSpacing: "0.16em", fontSize: "0.72rem" }}>
                    THE ADVANTAGES
                  </Typography>
                </Box>
                <Typography variant="h2" sx={{ color: "#ffffff", fontSize: { xs: "1.75rem", md: "2.1rem" }, fontWeight: 900, lineHeight: 1.2, letterSpacing: "-0.02em", mb: 2.5 }}>
                  Why Professional{" "}
                  <Box component="span" sx={{ color: alpha(primary, 0.9) }}>Bookkeeping</Box>{" "}Matters
                </Typography>
                <Typography sx={{ color: alpha("#ffffff", 0.68), fontSize: "0.9rem", lineHeight: 1.8, mb: 4, fontFamily: '"Outfit", sans-serif' }}>
                  Outsourcing your bookkeeping gives you expert accuracy, tax-readiness, and the freedom to focus entirely on growing your California business.
                </Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mb: 4 }}>
                  {PANEL_STATS.map((stat) => (
                    <Box key={stat.label} sx={{ px: 2, py: 1.5, borderRadius: "12px", bgcolor: alpha("#ffffff", 0.07), border: `1px solid ${alpha("#ffffff", 0.1)}` }}>
                      <Typography sx={{ color: "#fff", fontWeight: 900, fontSize: "1.3rem", fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1 }}>{stat.num}</Typography>
                      <Typography sx={{ color: alpha("#fff", 0.55), fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", mt: 0.5 }}>{stat.label}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/contact")}
                  endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem !important" }} />}
                  sx={{ px: 3.5, py: 1.4, borderRadius: "50px", bgcolor: primary, color: "#fff", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", boxShadow: `0 10px 28px ${alpha(primary, 0.4)}`, "&:hover": { bgcolor: "#1a4d1d", boxShadow: `0 16px 38px ${alpha(primary, 0.5)}` } }}
                >
                  GET STARTED
                </Button>
              </Box>
            </Box>
          </motion.div>

          {/* RIGHT cards */}
          <Stack sx={{ flex: 1 }} spacing={2.5}>
            {ADVANTAGES.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div key={adv.title} {...fadeUp(i * 0.09)}>
                  <Box sx={{ p: { xs: 3, md: 3.5 }, borderRadius: "20px", bgcolor: "background.default", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: 3, position: "relative", overflow: "hidden", transition: "all 0.28s cubic-bezier(0.4,0,0.2,1)", "&:hover": { transform: "translateX(8px)", boxShadow: `0 12px 40px ${alpha(primary, 0.12)}`, border: `1px solid ${alpha(primary, 0.25)}`, "& .adv-accent": { opacity: 1, height: "65%" } } }}>
                    <Box className="adv-accent" sx={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 4, height: "35%", borderRadius: "0 4px 4px 0", bgcolor: primary, opacity: 0, transition: "0.28s ease" }} />
                    <Box sx={{ width: 54, height: 54, flexShrink: 0, borderRadius: "16px", bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.15)}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon sx={{ fontSize: 26, color: primary }} />
                    </Box>
                    <Box sx={{ flex: 1, pr: { xs: 1, md: 4 } }}>
                      <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.05rem", color: "text.primary", mb: 0.5, lineHeight: 1.3 }}>
                        {adv.title}
                      </Typography>
                      <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.88rem", lineHeight: 1.75, color: "text.secondary" }}>
                        {adv.desc}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

/* ================= FAQ ================= */
const FAQSection = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth={false} sx={{ maxWidth: "900px", mx: "auto", px: { xs: 3, md: 4 } }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: "0.75rem", mb: 2, display: "block" }}>
              FAQ
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, lineHeight: 1.2 }}>
              Frequently Asked{" "}
              <Box component="span" sx={{ color: primary }}>Questions</Box>
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {FAQS.map((faq, i) => (
            <motion.div key={faq.q} {...fadeUp(i * 0.06)}>
              <Accordion
                expanded={expanded === `faq-${i}`}
                onChange={handleChange(`faq-${i}`)}
                elevation={0}
                sx={{
                  borderRadius: "14px !important",
                  border: `1px solid ${expanded === `faq-${i}` ? alpha(primary, 0.3) : "rgba(0,0,0,0.07)"}`,
                  bgcolor: expanded === `faq-${i}` ? alpha(primary, 0.06) : "background.default",
                  transition: "all 0.25s ease",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: primary }} />} sx={{ px: 3, py: 0.5, "& .MuiAccordionSummary-content": { my: 1.5 } }}>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: { xs: "0.95rem", md: "1rem" }, color: "text.primary", lineHeight: 1.4 }}>
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.92rem", lineHeight: 1.8, color: "text.secondary" }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= PAGE ================= */
export default function Bookkeeping() {
  useFullSEO({
    title: "Bookkeeping Services for Small Businesses in California",
    description:
      "Our California bookkeeping firm provides accurate, reliable bookkeeping services tailored to small businesses for stress-free financial management.",
    keywords:
      "bookkeeping services, bookkeeping services near me, bookkeeping services for small business, best bookkeeping for small business, bookkeeping company in california, bookkeeping services in california",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/best-bookkeeping-services-in-california/",
  });

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", position: "relative" }}>
      <Navbar />
      <Hero />
      <Intro />
      <WhyEssential />
      <Solutions />
      <Advantages />
      <FAQSection />
      <Suspense fallback={null}>
        <CTASection />
        <Footer />
      </Suspense>
      <ScrollToTop />
    </Box>
  );
}

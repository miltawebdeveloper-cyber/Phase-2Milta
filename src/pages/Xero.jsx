import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import useFullSEO from "../utils/useFullSEO";

/* ===================== DATA ===================== */

const highlights = [
  "Beautiful and intuitive interface",
  "Unlimited users",
  "Strong bank reconciliation tools",
  "Real-time dashboards",
  "Powerful automation",
  "Extensive integrations with CRM, POS, and e-commerce platforms",
  "Ideal for multi-currency accounting",
];

const howWeUse = [
  {
    title: "Bank Reconciliation & Automation",
    items: [
      "Automated bank feeds",
      "AI-based rule creation",
      "Fast reconciliation of large volumes",
    ],
  },
  {
    title: "Invoicing & Payment Management",
    items: [
      "Custom invoice templates",
      "Online payment links",
      "Recurring invoices",
      "Automatic reminders",
    ],
  },
  {
    title: "Expense & Vendor Tracking",
    items: [
      "Capturing receipts",
      "Matching vendor bills",
      "Classifying expenses",
      "Approval workflows",
    ],
  },
  {
    title: "Project & Time Tracking",
    items: [
      "Useful for agencies, consultants, and service providers",
    ],
  },
  {
    title: "Multi-Currency Support",
    items: [
      "Ideal for clients involved in international transactions",
    ],
  },
  {
    title: "Payroll, Reporting & Compliance",
    items: [
      "Weekly, biweekly, or monthly payroll cycles",
      "Tax deductions & filings",
      "Custom reporting",
      "Analytics dashboard",
    ],
  },
];

const processSteps = [
  {
    title: "Initial Setup & Cleanup",
    desc: "We set up your company file or clean your existing books:",
    items: [
      "Chart of accounts",
      "Opening balances",
      "Vendor & customer setup",
      "Bank integrations",
      "Previous year corrections",
    ],
  },
  {
    title: "Daily / Weekly Bookkeeping",
    desc: "Daily bookkeeping support includes:",
    items: [
      "Daily entries",
      "Expense management",
      "Receipt matching",
      "Cash flow tracking",
    ],
  },
  {
    title: "Monthly Closing",
    desc: "At month-end, we perform:",
    items: [
      "Reconciliation",
      "Trial balance checks",
      "Adjusting entries",
      "Reporting",
    ],
  },
  {
    title: "Quarterly Compliance",
    desc: "For US clients, this may include:",
    items: [
      "Quarterly payroll reporting",
      "Federal/state tax estimates",
      "Financial review",
    ],
  },
  {
    title: "Year-End Support",
    desc: "We prepare:",
    items: [
      "Tax-ready reports",
      "1099 vendor reports",
      "Final reconciliations",
      "Audit support",
    ],
  },
];

const chips = ["Startups", "Real Estate", "SaaS", "eCommerce"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ===================== COMPONENT ===================== */

const XeroAccountingModern = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  // Palette derived from theme.js so the page tracks the brand and light/dark mode.
  const COLORS = {
    primary: theme.palette.primary.main,
    primaryLight: theme.palette.primary.light,
    primarySoft: alpha(theme.palette.primary.main, 0.06),
    accent: theme.palette.primary.main,
    accentLight: theme.palette.primary.light,
    surface: theme.palette.background.default,
    surfaceAlt: theme.palette.background.paper,
    text: theme.palette.text.primary,
    textMuted: theme.palette.text.secondary,
    border: alpha(theme.palette.primary.main, 0.12),
  };

  const SectionHeading = ({ children }) => (
    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
      <Typography variant="h4" fontWeight={700} color={COLORS.primary} sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, lineHeight: 1.25 }}>
        {children}
      </Typography>
      <Box sx={{ width: 60, height: 3, borderRadius: 2, bgcolor: COLORS.primary, mx: "auto", mt: 2 }} />
    </Box>
  );

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useFullSEO({
    // MAIN SEO
    title: "Xero Accounting for the United States - Milta",
    description:
      "Xero is one of the fastest-growing cloud accounting tools in the USA, especially popular among startups and real estate businesses.",
    keywords:
      "xero for small business, xero accounting for small business, xero accounting for united states",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/us/software/xero-for-small-business/",
    ogTitle: "Xero Accounting for the United States - Milta",
    ogDescription:
      "Xero is one of the fastest-growing cloud accounting tools in the USA, especially popular among startups and real estate businesses.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/software/xero-for-small-business/",
  });

  const cardGradients = [
    { bg: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)`, accent: COLORS.accent },
    { bg: `linear-gradient(135deg, ${COLORS.primaryLight} 0%, ${COLORS.primary} 100%)`, accent: COLORS.accentLight },
    { bg: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)`, accent: COLORS.accent },
    { bg: `linear-gradient(135deg, ${COLORS.primaryLight} 0%, ${COLORS.primary} 100%)`, accent: COLORS.accentLight },
    { bg: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)`, accent: COLORS.accent },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${COLORS.surfaceAlt} 0%, ${COLORS.primarySoft} 45%, ${COLORS.surface} 100%)`,
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Decorative glows */}
      <Box sx={{ position: "absolute", top: "-12%", right: "-8%", width: 520, height: 520, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(COLORS.primary, 0.12)} 0%, transparent 68%)`, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", top: "38%", left: "-10%", width: 460, height: 460, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(COLORS.primary, 0.08)} 0%, transparent 68%)`, pointerEvents: "none" }} />
      {/* Dot texture */}
      <Box sx={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `radial-gradient(circle, ${alpha(COLORS.primary, 0.05)} 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>

        {/* PAGE TITLE */}
        <Box component={motion.div} {...fadeUp(0)} sx={{ textAlign: "center", mb: { xs: 7, md: 9 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.75,
              mb: 3,
              borderRadius: "50px",
              bgcolor: alpha(COLORS.primary, 0.1),
              border: `1px solid ${alpha(COLORS.primary, 0.25)}`,
            }}
          >
            <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: COLORS.primary }} />
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 4, color: COLORS.primary, fontSize: "0.68rem", lineHeight: 1 }}>
              ACCOUNTING SOFTWARE
            </Typography>
          </Box>

          <Typography
            variant="h3"
            align="center"
            fontWeight={800}
            color={COLORS.text}
            sx={{ fontSize: { xs: "1.9rem", md: "2.9rem" }, lineHeight: 1.18, letterSpacing: "-0.02em", maxWidth: 900, mx: "auto", mb: 2.5 }}
          >
            Xero Accounting – Smart, Simple, and Perfect for Streamlined{" "}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Cloud Bookkeeping
            </Box>
          </Typography>

          <Typography align="center" maxWidth={820} mx="auto" color={COLORS.textMuted} sx={{ fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.9 }}>
            Xero is one of the fastest-growing cloud accounting tools in the USA,
            popular among startups, real estate businesses, SaaS companies,
            digital agencies, and eCommerce brands.
            <br /><br />
            Our bookkeeping team provides full-service Xero support, keeping your
            books updated and IRS-compliant.
          </Typography>

          {/* Feature chips */}
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.25, mt: 4 }}>
            {chips.map((v) => (
              <Box
                key={v}
                sx={{
                  px: 2,
                  py: 0.85,
                  borderRadius: "50px",
                  bgcolor: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: COLORS.primary,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
                  transition: "all 0.25s ease",
                  "&:hover": { bgcolor: alpha(COLORS.primary, 0.08), transform: "translateY(-2px)" },
                }}
              >
                {v}
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= SECTION 1 ================= */}
        <Box component={motion.div} {...fadeUp(0.05)} sx={{ mb: { xs: 8, md: 11 } }}>
          <SectionHeading>Why Xero Is a Top Choice for Businesses</SectionHeading>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 2.5,
              maxWidth: 940,
              mx: "auto",
            }}
          >
            {highlights.map((item, index) => (
              <Box
                key={index}
                component={motion.div}
                {...fadeUp(index * 0.06)}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2.5,
                  pl: 3,
                  borderRadius: "16px",
                  bgcolor: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    background: `linear-gradient(180deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
                    transform: "scaleY(0)",
                    transformOrigin: "top",
                    transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                  },
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: `0 18px 40px ${alpha(COLORS.primary, 0.16)}`,
                    borderColor: alpha(COLORS.primary, 0.35),
                    "&:before": { transform: "scaleY(1)" },
                    "& .hl-icon": { bgcolor: COLORS.primary, color: "#fff", transform: "rotate(-6deg)" },
                  },
                }}
              >
                <Box
                  className="hl-icon"
                  sx={{
                    minWidth: 42,
                    height: 42,
                    borderRadius: "12px",
                    background: `linear-gradient(135deg, ${alpha(COLORS.primary, 0.14)}, ${alpha(COLORS.primary, 0.06)})`,
                    color: COLORS.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  <CheckRoundedIcon sx={{ fontSize: 20 }} />
                </Box>

                <Typography fontWeight={600} fontSize={15} color={COLORS.text}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= SECTION 2 ================= */}
        <Box component={motion.div} {...fadeUp(0.05)} sx={{ mb: { xs: 8, md: 11 }, maxWidth: 940, mx: "auto" }}>
          <SectionHeading>How We Use Xero for US Clients</SectionHeading>

          {howWeUse.map((section, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              expanded={expanded === index}
              onChange={handleAccordionChange(index)}
              sx={{
                mb: 1.5,
                borderRadius: "14px !important",
                overflow: "hidden",
                border: `1px solid ${COLORS.border}`,
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                sx={{
                  background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
                  color: "#fff",
                  minHeight: 58,
                  "& .MuiAccordionSummary-content": { my: 1.25 },
                }}
              >
                <Typography fontWeight={700} sx={{ color: "#fff" }}>
                  {section.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ backgroundColor: COLORS.surfaceAlt, px: 3, py: 2 }}>
                <List disablePadding>
                  {section.items.map((item, i) => (
                    <ListItem key={i} disableGutters sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, py: 0.75 }}>
                      <Box
                        sx={{
                          minWidth: 22,
                          height: 22,
                          borderRadius: "50%",
                          bgcolor: alpha(COLORS.primary, 0.12),
                          color: COLORS.primary,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: "2px",
                          flexShrink: 0,
                        }}
                      >
                        <CheckRoundedIcon sx={{ fontSize: 14 }} />
                      </Box>
                      <Typography color={COLORS.text}>{item}</Typography>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* ================= SECTION 3 ================= */}
        <Box component={motion.div} {...fadeUp(0.05)}>
          <SectionHeading>Our Process: How We Work With Your Accounting Software</SectionHeading>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              },
              gap: 2.5,
            }}
          >
            {processSteps.map((step, index) => {
              const gradient = cardGradients[index % cardGradients.length];

              return (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: `1px solid ${COLORS.border}`,
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: `0 22px 48px ${alpha(COLORS.primary, 0.18)}`,
                      "& .step-icon-wrapper": { transform: "scale(1.1)" },
                    },
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      background: gradient.bg,
                      p: 2.5,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: 150,
                    }}
                  >
                    <Box
                      className="step-icon-wrapper"
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "16px",
                        background: `linear-gradient(135deg, ${gradient.accent} 0%, ${alpha(gradient.accent, 0.8)} 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1.5,
                        transition: "transform 0.3s ease",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Typography sx={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>
                        {String(index + 1).padStart(2, "0")}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.35 }}>
                      {step.title}
                    </Typography>
                    <Box sx={{ width: 40, height: 3, background: gradient.accent, borderRadius: 2, mt: 1.25 }} />
                  </Box>

                  {/* Body */}
                  <Box sx={{ background: COLORS.surface, p: 2.5, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: COLORS.textMuted,
                        fontWeight: 500,
                        mb: 2,
                        textAlign: "center",
                        fontStyle: "italic",
                        fontSize: "0.8rem",
                      }}
                    >
                      {step.desc}
                    </Typography>
                    <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
                      {step.items.map((item, i) => (
                        <Box
                          key={i}
                          component="li"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            py: 1,
                            borderBottom: i !== step.items.length - 1 ? `1px solid ${COLORS.border}` : "none",
                          }}
                        >
                          <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: gradient.accent, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: COLORS.text, fontWeight: 500, fontSize: "0.8rem", lineHeight: 1.4 }}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Bottom accent */}
                  <Box sx={{ height: 4, background: `linear-gradient(90deg, ${gradient.accent}, ${alpha(gradient.accent, 0.5)})` }} />
                </Paper>
              );
            })}
          </Box>
        </Box>

        {/* FOOTER */}
        <Typography align="center" maxWidth={820} mx="auto" mt={{ xs: 8, md: 11 }} fontWeight={500} color={COLORS.text} sx={{ lineHeight: 1.85 }}>
          We provide insights and recommendations so you can make informed
          financial decisions while your Xero books stay accurate, secure, and
          up to date.
        </Typography>

      </Container>
    </Box>
  );
};

export default XeroAccountingModern;

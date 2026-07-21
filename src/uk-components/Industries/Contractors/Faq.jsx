import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/* =====================================================
   FAQ SECTION (UK GLOBAL THEME STYLE)
===================================================== */
const FaqBookKeep = () => {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const faqs = [
    {
      question: "Why do welders and contractors need bookkeeping services?",
      answer:
        "Welders and contractors manage job-based billing, job costing, and subcontractor payments. Proper bookkeeping ensures profitability, compliance, and smooth cash flow.",
    },
    {
      question: "Do you handle job costing and project-based accounting?",
      answer:
        "Yes. We track labour, materials, and overhead costs per project to help you understand job profitability.",
    },
    {
      question: "Can you manage progress billing and retainage tracking?",
      answer:
        "Absolutely. We manage progress billing and retainage to maintain steady cash flow.",
    },
    {
      question: "How do you manage payroll for construction workers?",
      answer:
        "We handle payroll including overtime, CIS, union wages, and labour compliance.",
    },
    {
      question: "Can you track equipment depreciation and maintenance costs?",
      answer:
        "Yes. We track asset purchases, depreciation schedules, and maintenance expenses.",
    },
    {
      question: "How do you handle materials and inventory tracking?",
      answer:
        "We monitor material usage and inventory levels to reduce wastage and overspending.",
    },
    {
      question: "Do you provide cash flow management?",
      answer:
        "Yes. We provide cash flow forecasting and budget tracking to keep finances stable.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 6, md: 8 },
        backgroundColor: "#ffffff",
        fontFamily: "var(--uk-font-secondary)",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "var(--uk-max-width)",
          mx: "auto",
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* ================= TITLE ================= */}
        <Typography
          variant={isSm ? "h5" : "h3"}
          sx={{
            fontFamily: "var(--uk-font-primary)",
            fontWeight: 700,
            color: "#1a1a1a",
            textAlign: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          FAQ for Accounting and Bookkeeping for Contractors
        </Typography>

        {/* ================= FAQ LIST ================= */}
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel-${index}`}
              onChange={() =>
                setExpanded(expanded === `panel-${index}` ? null : `panel-${index}`)
              }
              sx={{
                mb: 2,
                borderRadius: 3,
                backgroundColor: "#fff",
                boxShadow: "none",
                border: "1px solid #e6e6e6",
                "&:before": { display: "none" },
                "&.Mui-expanded": {
                  borderColor: "#97ba3a",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "#2b6d2a" }} />
                }
                sx={{
                  px: { xs: 2, md: 3 },
                  py: 2,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--uk-font-secondary)",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: { xs: 2, md: 3 },
                  pb: 3,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--uk-font-secondary)",
                    color: "var(--uk-text-light)",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqBookKeep;

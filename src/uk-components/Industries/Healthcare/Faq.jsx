// src/components/FaqSection.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const faqs = [
  {
    id: "panel1",
    question: "What do healthcare accounting services include?",
    answer:
      "Healthcare accounting services cover bookkeeping, payroll, VAT support, financial reporting, HMRC compliance, and specialist support for NHS and private healthcare income.",
  },
  {
    id: "panel2",
    question: "Why do healthcare organisations need specialised accounting services?",
    answer:
      "Healthcare businesses face unique regulations, VAT exemptions, payroll complexities, and NHS reporting requirements, making specialist healthcare accounting essential for compliance and accuracy.",
  },
  {
    id: "panel3",
    question: "Do you support payroll and pensions for healthcare staff?",
    answer:
      "Yes, we manage healthcare payroll, RTI submissions, auto-enrolment duties, and NHS pension contributions.",
  },
  {
    id: "panel4",
    question: "Can you manage payroll for locum and shift-based healthcare staff?",
    answer:
      "Yes, our healthcare payroll services handle PAYE, NIC, RTI submissions, pensions, and complex payroll structures for locum, part-time, and shift-based healthcare workers.",
  },
  {
    id: "panel5",
    question: "What software do you use for healthcare accounting?",
    answer:
      "We work with Xero, QuickBooks, MS Dynamics, and other secure cloud-based platforms commonly used by healthcare accounting firms.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 8 }, bgcolor: "#fff" }}>
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          px: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* LABEL */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "#97ba3a",
            }}
          />
          <Typography fontWeight={600}>
            Frequently Asked Questions (FAQ)
          </Typography>
        </Box>

        {/* HEADING */}
        <Typography
          component="h2"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            color: "#2b6d2a",
            fontWeight: 700,
            lineHeight: 1.25,
            mb: { xs: 3, sm: 4 },
            fontSize: { xs: 22, sm: 28, md: 36 },
            textAlign: "center",
          }}
        >
          Healthcare Accounting
          FAQs
        </Typography>

        {/* ACCORDIONS */}
        <Box sx={{ width: "100%" }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              disableGutters
              elevation={0}
              sx={{
                bgcolor: "transparent",
                "&::before": { display: "none" },
                borderBottom: "1px solid #e0e0e0",
                mb: 1,
              }}
            >
              <AccordionSummary
                sx={{
                  px: 0,
                  py: { xs: 1.5, sm: 2 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: 14, sm: 15 },
                      lineHeight: 1.6,
                      pr: 1,
                    }}
                  >
                    <Box component="span" sx={{ color: "#97ba3a", mr: 1 }}>
                      {`0${index + 1}.`}
                    </Box>
                    {faq.question}
                  </Typography>

                  <ArrowOutwardIcon
                    sx={{
                      fontSize: 18,
                      color: expanded === faq.id ? "#97ba3a" : "#2b6d2a",
                      transform:
                        expanded === faq.id
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                      transition: "0.3s ease",
                      flexShrink: 0,
                    }}
                  />
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 0, pt: 0, pb: 2 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 13.5, sm: 14 },
                    lineHeight: 1.7,
                    color: "#333",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqSection;

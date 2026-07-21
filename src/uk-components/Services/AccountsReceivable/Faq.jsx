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
    question: "What is bookkeeping, and how crucial is it for small businesses?",
    answer:
      "Bookkeeping involves recording and managing financial transactions. It helps UK businesses maintain accurate records, monitor cash flow, and comply with HMRC regulations.",
  },
  {
    id: "panel2",
    question: "Can I manage bookkeeping myself, or should I hire a professional?",
    answer:
      "While some owners handle bookkeeping internally, professional bookkeeping ensures accuracy, compliance, and saves time, allowing you to focus on business growth.",
  },
  {
    id: "panel3",
    question: "What bookkeeping services does Miltafs offer?",
    answer:
      "We provide reconciliation, invoicing, AR/AP management, payroll, and bookkeeping services, VAT support, financial reporting, and year-end preparation.",
  },
  {
    id: "panel4",
    question: "How do bookkeeping services benefit my small business?",
    answer:
      "They improve financial clarity, reduce errors, support tax compliance, and provide insights needed for informed decision-making.",
  },
  {
    id: "panel5",
    question: "Do you offer payroll and bookkeeping services together?",
    answer:
      "Yes. Our combined payroll and bookkeeping services in the UK ensure seamless financial management and statutory compliance.",
  },
  {
    id: "panel6",
    question: "How do I choose the best bookkeeping services for small businesses near me?",
    answer:
      "Look for experience, transparent pricing, UK compliance knowledge, and customised support. Miltafs delivers all of these.",
  },
  {
    id: "panel7",
    question: "Is my business too small to hire a bookkeeping company?",
    answer:
      "No. Small businesses benefit the most from professional bookkeeping, especially for cash-flow control and tax readiness.",
  },
  {
    id: "panel8",
    question: "Which industries do you support?",
    answer:
      "We work with retail, hospitality, professional services, e-commerce, non-profits, and more.",
  },
  {
    id: "panel9",
    question: "How do you ensure data security?",
    answer:
      "We use secure systems, access controls, and best practices to protect your financial data.",
  },
  {
    id: "panel10",
    question: "How can I get started with Miltafs bookkeeping services?",
    answer:
      "Simply contact us to book a consultation. We help companies with anything from reliable bookkeeping services in your area to comprehensive financial management.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box
      sx={{
        pt: { xs: 8, md: 6 },
        pb: { xs: 8, md: 12 },
        bgcolor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* CENTER WRAPPER */}
      <Box
        sx={{
          maxWidth: "500px",
          mx: "auto",
          px: { xs: 2, sm: 4 },
          textAlign: "center",
        }}
      >
        {/* LABEL */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          {/* DOT */}
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "#97ba3a", // uk-secondary
            }}
          />

          <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
            FAQs – Bookkeeping Services in the UK
          </Typography>
        </Box>

        {/* HEADING */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: 1.25,
            mb: { xs: 4, md: 6 },

            fontSize: {
              xs: "24px",
              sm: "30px",
              md: "42px", // uk-h2-size
            },
          }}
        >
          Learn About Our Bookkeeping Solutions
        </Typography>

        {/* ACCORDIONS */}
        <Box sx={{ textAlign: "left" }}>
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
                borderBottom: "1px solid #000",
              }}
            >
              {/* SUMMARY */}
              <AccordionSummary sx={{ px: 0, py: { xs: 1.5, sm: 2 } }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 2,
                  }}
                >
                  {/* QUESTION */}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: "14px", sm: "15px" },
                      lineHeight: 1.6,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color: "#97ba3a", // uk-secondary
                        mr: 1,
                      }}
                    >
                      {`0${index + 1}.`}
                    </Box>
                    {faq.question}
                  </Typography>

                  {/* ICON */}
                  <ArrowOutwardIcon
                    sx={{
                      fontSize: 18,
                      color:
                        expanded === faq.id
                          ? "#97ba3a" // secondary
                          : "#2b6d2a", // primary

                      transform:
                        expanded === faq.id
                          ? "rotate(90deg)"
                          : "rotate(0deg)",

                      transition: "0.3s ease",
                      mt: "4px",
                      flexShrink: 0,
                    }}
                  />
                </Box>
              </AccordionSummary>

              {/* DETAILS */}
              <AccordionDetails sx={{ px: 0, pt: 0, pb: 2 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "13.5px", sm: "14px" },
                    lineHeight: 1.8,
                    maxWidth: "650px",
                    color: "rgba(0,0,0,0.75)",
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

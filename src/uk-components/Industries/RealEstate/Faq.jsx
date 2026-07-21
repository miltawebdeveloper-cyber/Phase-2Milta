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
    question: "What is included in real estate accounting services?",
    answer:
      "Real estate accounting services generally involve maintaining accurate financial records, monitoring rental income, managing property-related transactions, handling tax obligations, preparing financial statements, and completing annual accounts.",
  },
  {
    id: "panel2",
    question: "Do you support real estate investors with accounting?",
    answer:
      "Yes, we provide tailored accounting support for property investors, covering revenue tracking, cost control, portfolio performance reporting, and structured tax planning.",
  },
  {
    id: "panel3",
    question: "How is property management accounting different from standard accounting?",
    answer:
      "Property management accounting is industry-specific and deals with rent schedules, deposit handling, trust accounts, landlord reporting, and tenant transactions, requiring specialist knowledge of real estate operations.",
  },
  {
    id: "panel4",
    question: "Can you handle real estate bookkeeping in QuickBooks?",
    answer:
      "Yes, we work with QuickBooks for property management to record transactions accurately, perform reconciliations, and generate clear, customised financial reports.",
  },
  {
    id: "panel5",
    question: "Do you provide outsourced real estate bookkeeping?",
    answer:
      "Yes, our outsourced real estate bookkeeping solutions allow property businesses to lower internal costs while ensuring their financial records remain organised, accurate, and compliant.",
  },
  {
    id: "panel6",
    question: "How do I choose a dependable real estate accountant near me?",
    answer:
      "When looking for a real estate accountant near me, consider firms with strong experience in property accounting, tax compliance, portfolio reporting, and multi-entity financial management.",
  },
  {
    id: "panel7",
    question: "Can you manage accounting for multiple properties or entities?",
    answer:
      "Yes, we support multi-property portfolios and complex ownership structures, providing consolidated reporting, structured financial oversight, and clear cash flow management.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 3 }, bgcolor: "#fff" }}>
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
          <Typography fontWeight={600}>FAQs</Typography>
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
          FAQs About <br />
          Real Estate Accounting Services
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

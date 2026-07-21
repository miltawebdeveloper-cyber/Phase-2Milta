// src/components/FaqSection.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const faqs = [
  {
    id: "panel1",
    question: "What services do you provide?",
    answer:
      "We offer bookkeeping, payroll management, tax planning and preparation, CPA services, virtual assistance, data entry, and controller services.",
  },
  {
    id: "panel2",
    question: "How do I get started?",
    answer:
      "Book a consultation, and we'll assess your needs before setting up a smooth onboarding process.",
  },
  {
    id: "panel3",
    question: "How do you keep data secure?",
    answer:
      "We use encrypted systems, strict security protocols, and confidentiality agreements to protect your data.",
  },
  {
    id: "panel4",
    question: "Which accounting software do you use?",
    answer:
      "We work with popular platforms such as QuickBooks, Xero, Sage, Wave, and Zoho Books.",
  },
  {
    id: "panel5",
    question: "Which industries do you work with?",
    answer:
      "We support businesses across retail, healthcare, real estate, legal services, hospitality, non-profits, and more.",
  },
  {
    id: "panel6",
    question: "What payment methods do you accept?",
    answer:
      "We accept international wire transfers and Veem. Billing details are shared during onboarding.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const splitIndex = Math.ceil(faqs.length / 2);
  const firstColumnFaqs = faqs.slice(0, splitIndex);
  const secondColumnFaqs = faqs.slice(splitIndex);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const renderAccordions = (faqList, startNumber) =>
    faqList.map((faq, index) => {
      const currentNumber = startNumber + index;

      return (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.id}
          onChange={handleChange(faq.id)}
          disableGutters
          elevation={0}
          sx={{
            bgcolor: "transparent",
            borderBottom: "1px solid #e6e6e6",
            "&::before": { display: "none" },
            "&.Mui-expanded": { margin: 0 },
          }}
        >
          <AccordionSummary
            sx={{
              px: 0,
              py: { xs: 1.5, sm: 2 },
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  lineHeight: 1.6,
                }}
              >
                <Box component="span" sx={{ color: "#97ba3a", mr: 1 }}>
                  {currentNumber.toString().padStart(2, "0")}.
                </Box>
                {faq.question}
              </Typography>

              <ArrowOutwardIcon
                sx={{
                  fontSize: 20,
                  color: expanded === faq.id ? "#97ba3a" : "#2b6d2a",
                  transform:
                    expanded === faq.id ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "0.3s ease",
                  flexShrink: 0,
                }}
              />
            </Box>
          </AccordionSummary>

          <AccordionDetails sx={{ px: 0, pt: 0, pb: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: 13.5, sm: 14, md: 15 },
                lineHeight: 1.7,
                color: "#444",
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    });

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="lg">
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
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "#97ba3a",
            }}
          />
          <Typography
            sx={{
              fontWeight: 600,
              color: "#2b6d2a",
              letterSpacing: 1,
              fontSize: { xs: 13, sm: 14 },
            }}
          >
            FAQS
          </Typography>
        </Box>

        {/* HEADING */}
        <Typography
          component="h2"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            color: "#2b6d2a",
            fontWeight: 700,
            textAlign: "center",
            mb: { xs: 4, sm: 5, md: 6 },
            fontSize: { xs: 24, sm: 32, md: 42 },
            lineHeight: 1.3,
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* 2 COLUMN RESPONSIVE GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: 3, sm: 4, md: 6 },
          }}
        >
          <Box>{renderAccordions(firstColumnFaqs, 1)}</Box>
          <Box>{renderAccordions(secondColumnFaqs, splitIndex + 1)}</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;
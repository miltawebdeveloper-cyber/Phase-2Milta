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
    question: "What are hospitality accounting services?",
    answer:
      "Hospitality accounting services are specialist financial solutions designed for businesses such as hotels, restaurants, cafés, pubs, and resorts. They include bookkeeping for hospitality, payroll, VAT returns, supplier payments, stock control, and financial reporting tailored to industry-specific needs.",
  },
  {
    id: "panel2",
    question: "Why does my hospitality business need specialist accounting?",
    answer:
      "The hospitality sector operates with tight margins, seasonal demand, and complex inventory management. Professional accounting for hospitality ensures accurate cost tracking, improved cash flow management, and full compliance with UK regulations.",
  },
  {
    id: "panel3",
    question: "Do you provide bookkeeping for hospitality businesses of all sizes?",
    answer:
      "Yes. Our hospitality bookkeeping services support independent venues, growing restaurant groups, and multi-location hotel operations across the UK. Our services can be expanded to accommodate the expansion of your company.",
  },
  {
    id: "panel4",
    question: "Can you manage payroll for seasonal and part-time staff?",
    answer:
      "Absolutely. Our hospitality accounting solutions include payroll processing for full-time, part-time, and seasonal employees, ensuring compliance with UK employment and pension regulations.",
  },
  {
    id: "panel5",
    question: "Which accounting software do you work with?",
    answer:
      "We work with leading cloud-based systems such as Xero, QuickBooks, Sage, FreeAgent, Dext, Hubdoc, and BrightPay to deliver efficient and secure accounting services for hospitality businesses.",
  },
  {
    id: "panel6",
    question: "How can your accounting services improve profitability?",
    answer:
      "By providing accurate financial reports, cost analysis, stock monitoring, and cash flow forecasting, our accounting services for hospitality help you identify profit opportunities, reduce wastage, and make informed business decisions.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const renderAccordion = (faq, index) => (
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
      <AccordionSummary sx={{ px: 0, py: { xs: 1.5, sm: 2 } }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: 14, sm: 15 },
              lineHeight: 1.6,
            }}
          >
            <Box component="span" sx={{ color: "#97ba3a", mr: 1 }}>
              {`${index + 1 < 10 ? `0${index + 1}` : index + 1}.`}
            </Box>
            {faq.question}
          </Typography>

          <ArrowOutwardIcon
            sx={{
              fontSize: 18,
              color: expanded === faq.id ? "#97ba3a" : "#2b6d2a",
              transform:
                expanded === faq.id ? "rotate(90deg)" : "rotate(0deg)",
              transition: "0.3s ease",
              mt: "4px",
              flexShrink: 0,
            }}
          />
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{ px: 0, pt: 0, pb: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: 13.5, sm: 14 },
            lineHeight: 1.8,
          }}
        >
          {faq.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );

  return (
    <Box sx={{ pt: { xs: 8, md: 7 }, pb: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          px: { xs: 2, sm: 4 },
          textAlign: "center",
        }}
      >
        {/* Section Label with dot */}
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
          <Typography fontWeight={600} sx={{ color: "#333" }}>
            Frequently Asked Questions (FAQs)
          </Typography>
        </Box>

        {/* Section Header */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            color: "#2b6d2a",
            fontWeight: 700,
            mb: { xs: 4, md: 2 },
            fontSize: { xs: 24, sm: 30, md: 40 },
          }}
        >
          Hospitality Accounting Services
        </Typography>


        {/* Single Column Layout */}
        <Box sx={{ textAlign: "left" }}>
          {faqs.map((faq, index) => renderAccordion(faq, index))}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqSection;
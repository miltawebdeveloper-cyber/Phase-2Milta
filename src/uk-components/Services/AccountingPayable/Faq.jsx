import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Container,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const faqs = [
  {
    id: "panel1",
    question:
      "What are accounts payable services, and why are they important for UK businesses?",
    answer:
      "Accounts payable services involve managing and processing all payments a business owes to suppliers, vendors, and service providers. This includes invoice receipt, verification, approval, payment scheduling, and reconciliation. For UK businesses, a well-managed accounts payable process is essential to maintain healthy cash flow, avoid late payment penalties, and ensure compliance with HMRC and VAT regulations. Outsourcing AP also helps businesses reduce administrative workload and improve financial accuracy.",
  },
  {
    id: "panel2",
    question:
      "How do accounts payable outsourcing companies ensure data security and confidentiality?",
    answer:
      "Reputable accounts payable outsourcing companies follow strict data security protocols, including role-based access controls, encrypted data transfers, secure cloud systems, and confidentiality agreements. We implement controlled approval hierarchies and secure accounting platforms to ensure your financial data remains protected and compliant with UK data protection standards.",
  },
  {
    id: "panel3",
    question: "Can your accounts payable services integrate with QuickBooks?",
    answer:
      "Yes. Our accounts payable services seamlessly integrate with QuickBooks accounts payable, as well as other leading accounting software. This allows real-time invoice tracking, automated posting, and accurate reconciliation without disrupting your existing accounting setup.",
  },
  {
    id: "panel4",
    question: "What does your accounts payable process look like?",
    answer:
      "Our structured accounts payable process includes invoice collection, validation against purchase orders, data entry into the accounting system, approval routing, payment scheduling, execution, and reconciliation.",
  },
  {
    id: "panel5",
    question: "How do outsourced accounts payable services help improve cash flow?",
    answer:
      "Outsourced accounts payable services improve cash flow by providing better visibility into outstanding liabilities, optimising payment schedules, and preventing duplicate or early payments.",
  },
  {
    id: "panel6",
    question:
      "Do you provide VAT and HMRC compliance support within accounts payable services?",
    answer:
      "Yes. Our accounts payable specialists support VAT accuracy, Making Tax Digital (MTD) compliance, and HMRC reporting requirements.",
  },
  {
    id: "panel7",
    question: "How scalable are your accounts payable outsourcing services?",
    answer:
      "Our accounts payable outsourcing services are fully scalable. Whether your invoice volume increases seasonally or your business expands, we adjust resources accordingly.",
  },
  {
    id: "panel8",
    question:
      "How quickly can we transition to outsourced accounts payable services?",
    answer:
      "Most businesses can be onboarded within a few weeks following workflow mapping, system integration, and compliance checks.",
  },
  {
    id: "panel9",
    question:
      "What types of businesses benefit most from outsourcing accounts payable?",
    answer:
      "Small to mid-sized businesses, multi-entity organisations, and growing companies with high invoice volumes benefit the most.",
  },
  {
    id: "panel10",
    question: "How do I get started with your accounts payable services?",
    answer:
      "We begin with a consultation to understand your current AP challenges and design a tailored outsourcing plan.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  // Split dynamically into 2 equal columns
  const midpoint = Math.ceil(faqs.length / 2);
  const firstColumn = faqs.slice(0, midpoint);
  const secondColumn = faqs.slice(midpoint);

  const renderFaqColumn = (items, startIndex) =>
    items.map((faq, index) => {
      const faqNumber = startIndex + index + 1;

      return (
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
                  textAlign: "left",
                }}
              >
                <Box component="span" sx={{ color: "#97ba3a", mr: 1 }}>
                  {faqNumber < 10 ? `0${faqNumber}.` : `${faqNumber}.`}
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
                color: "#555",
                textAlign: "left",
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    });

  return (
    <Box sx={{ 
      pt: { xs: 8, md: 2 }, 
      pb: { xs: 8, md: 12 }, 
      bgcolor: "#fff" 
    }}>
      <Container maxWidth="lg">
        {/* Section Label */}
        <Typography 
          fontWeight={600} 
          mb={2}
          sx={{ 
            textAlign: "center",
            color: "#97ba3a",
            letterSpacing: 1,
          }}
        >
          ● FAQs
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            color: "#2b6d2a",
            fontWeight: 700,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: 24, sm: 30, md: 40 },
            textAlign: "center",
          }}
        >
          Accounts Payable Services
        </Typography>

        {/* 2 Column Layout with max-width 600px each */}
        <Box sx={{ 
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: { xs: 0, md: 4 },
        }}>
          {/* Left Column */}
          <Box sx={{ 
            width: { xs: "100%", md: "600px" },
            maxWidth: "700px",
            mx: { xs: "auto", md: 0 }
          }}>
            {renderFaqColumn(firstColumn, 0)}
          </Box>

          {/* Right Column */}
          <Box sx={{ 
            width: { xs: "100%", md: "600px" },
            maxWidth: "700px",
            mx: { xs: "auto", md: 0 }
          }}>
            {renderFaqColumn(secondColumn, midpoint)}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;
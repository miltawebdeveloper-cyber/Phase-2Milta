// src/components/FaqSection.jsx
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
    question: "What is accounting data entry?",
    answer:
      "Accounting data entry involves recording, classifying, and organising financial transactions to ensure accurate, up-to-date business records.",
  },
  {
    id: "panel2",
    question: "Why should I outsource accounting data entry services?",
    answer:
      "Outsourcing accounting data entry saves time, reduces operational costs, and improves accuracy by leveraging experienced professionals and streamlined processes.",
  },
  {
    id: "panel3",
    question: "Are your accounting data entry services suitable for small businesses?",
    answer:
      "Yes. Our services are specifically designed for small and medium-sized UK businesses, providing scalable and cost-effective accounting support.",
  },
  {
    id: "panel4",
    question: "How do you ensure the security of my financial data?",
    answer:
      "We use encrypted file transfers, secure systems, access controls, and strict confidentiality agreements to protect your data at every stage.",
  },
  {
    id: "panel5",
    question: "Do you offer customised accounting data entry solutions?",
    answer:
      "Absolutely. Our accounting data entry services are fully flexible and customised to match your business processes, volume, and reporting needs.",
  },
  {
    id: "panel6",
    question: "Which accounting software do you work with?",
    answer:
      "We work with QuickBooks, Xero, and other leading accounting platforms, depending on your preference and business requirements.",
  },
  {
    id: "panel7",
    question: "What is your turnaround time for accounting data entry?",
    answer:
      "Turnaround time depends on data volume and complexity, but we always aim for fast, reliable, and timely delivery.",
  },
  {
    id: "panel8",
    question: "Is your team familiar with international accounting standards?",
    answer:
      "Yes. Our team is experienced with UK accounting requirements and international accounting standards where applicable.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  // Split FAQs into two columns
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
                  {faqNumber < 10 ? `0${faqNumber}.` : `${faqNumber}.`}
                </Box>
                {faq.question}
              </Typography>

              <ArrowOutwardIcon
                sx={{
                  fontSize: 18,
                  color: expanded === faq.id ? "#97ba3a" : "#2b6d2a",
                  transform: expanded === faq.id ? "rotate(90deg)" : "rotate(0deg)",
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
    });

  return (
    <Box sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
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
          <Typography fontWeight={600} sx={{ color: "#333" }}>
            FAQs – Data Entry Services in the UK
          </Typography>
        </Box>

        {/* HEADING */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: 1.25,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: 24, sm: 30, md: 40 },
            textAlign: "center",
            color: "#2b6d2a",
          }}
        >
          Learn About Our Data Entry Services
        </Typography>

        {/* TWO COLUMN LAYOUT - Each column 600px on desktop */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 0, md: 6 },
            justifyContent: "center",
          }}
        >
          {/* Left Column - 600px */}
          <Box
            sx={{
              width: { xs: "100%", md: "640px" },
              textAlign: "left",
            }}
          >
            {renderFaqColumn(firstColumn, 0)}
          </Box>

          {/* Right Column - 600px */}
          <Box
            sx={{
              width: { xs: "100%", md: "560px" },
              textAlign: "left",
            }}
          >
            {renderFaqColumn(secondColumn, midpoint)}
          </Box>
        </Box>

        {/* Alternative using Grid (commented out) */}
        {/* <Grid 
          container 
          spacing={6} 
          justifyContent="center"
          sx={{
            '& .MuiGrid-item': {
              width: { md: '600px' },
              maxWidth: { md: '600px' },
              flexBasis: { md: '600px' },
              flexGrow: 0,
            }
          }}
        >
          <Grid item xs={12} md="auto">
            {renderFaqColumn(firstColumn, 0)}
          </Grid>
          <Grid item xs={12} md="auto">
            {renderFaqColumn(secondColumn, midpoint)}
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
};

export default FaqSection;
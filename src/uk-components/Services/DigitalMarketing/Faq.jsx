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
    question: "How does Milta create a customized marketing plan?",
    answer:
      "Our first step at Milta is to understand your target market, business goals, and industry dynamics. We then select the most effective platforms and create a tailored digital marketing strategy aligned with your objectives.",
  },
  {
    id: "panel2",
    question: "Can Milta help with website design and development?",
    answer:
      "Yes, we offer professional website design and development services in the UK to ensure your website reflects your brand identity and delivers an exceptional user experience.",
  },
  {
    id: "panel3",
    question: "How does Milta ensure a high return on investment (ROI)?",
    answer:
      "As a leading digital marketing company in the UK, we use data-driven strategies to attract high-quality leads, continuously optimize campaigns, and focus on measurable growth and revenue.",
  },
  {
    id: "panel4",
    question: "Can Milta help my business stay competitive in a crowded market?",
    answer:
      "Absolutely. Our innovative marketing techniques and customized digital strategies help your business stand out and gain a competitive advantage.",
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
        pt: { xs: 8, md: 0 }, // matches --uk-section-padding
        pb: { xs: 8, md: 12 },
        bgcolor: "#ffffff", // --uk-bg
        color: "#1a1a1a", // --uk-text
        fontFamily: "'Poppins', sans-serif", // --uk-font-secondary
        overflowX: "hidden",
      }}
    >
      {/* CENTERED WRAPPER */}
      <Box
        sx={{
          maxWidth: 900, // similar to container max-width
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
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "#97ba3a", // --uk-secondary
            }}
          />
          <Typography fontWeight={600}>FAQs – Digital Marketing Services</Typography>
        </Box>

        {/* HEADING */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif", // --uk-font-primary
            fontWeight: 700,
            color: "#2b6d2a", // --uk-primary
            lineHeight: 1.25,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: 30, sm: 38, md: 52 }, // responsive --uk-h1-size
          }}
        >
          Learn About Our Digital Marketing Solutions
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
                    <Box
                      component="span"
                      sx={{ color: "#97ba3a", mr: 1 }} // --uk-secondary
                    >
                      {`0${index + 1}.`}
                    </Box>
                    {faq.question}
                  </Typography>

                  <ArrowOutwardIcon
                    sx={{
                      fontSize: 18,
                      color:
                        expanded === faq.id ? "#97ba3a" : "#2b6d2a",
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
                    fontSize: { xs: 14, sm: 16 }, // matches --uk-body-size
                    lineHeight: 1.8,
                    maxWidth: 650,
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

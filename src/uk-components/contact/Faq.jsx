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

// Exported so the Contact page can build its FAQPage schema from the exact same
// data it renders — the markup can never drift from the visible copy.
export const faqs = [
  {
    id: "panel1",
    question: "How can I contact Milta for service inquiries?",
    answer:
      "You can contact Milta by filling out the contact form on this page. Once we receive your request, our team will review your requirements and respond to you as soon as possible to discuss your business needs.",
  },
  {
    id: "panel2",
    question: "Do you offer a free trial before starting the service?",
    answer:
      "Yes. Milta offers a No-Cost 5 Hour Free Trial Task for new clients. This allows you to evaluate our service quality, communication process, and workflow before committing to a long-term partnership.",
  },
  {
    id: "panel3",
    question: "What type of tasks can be included in the 5-hour free trial?",
    answer:
      "The free trial can include small tasks related to services such as bookkeeping support, data entry, virtual assistance, back-office tasks, or digital marketing activities. Our team will review the task and confirm whether it fits within the trial scope.",
  },
  {
    id: "panel4",
    question: "Is there any obligation after the free trial?",
    answer:
      "No. The free trial is completely risk-free. After reviewing the completed task, you can decide whether you would like to continue working with Milta. There is no obligation to proceed.",
  },
  {
    id: "panel5",
    question: "Can I schedule a consultation with your team?",
    answer:
      "Yes. After submitting your inquiry, our team can arrange a consultation to understand your business requirements and recommend the most suitable services.",
  },
  {
    id: "panel6",
    question: "Do you only work with UK businesses?",
    answer:
      "Milta primarily focuses on supporting UK small and medium-sized businesses, particularly in areas such as accounting, compliance support, virtual assistance, and digital marketing aligned with the UK market.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ pt: { xs: 8, md: 6 }, pb: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
      {/* CENTERED WRAPPER */}
      <Box
        sx={{
          maxWidth: 900,
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
              bgcolor: "#97ba3a",
            }}
          />
          <Typography fontWeight={600}>FAQs – Milta Accounting Services in the UK</Typography>
        </Box>

        {/* HEADING */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: 1.25,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: 24, sm: 30, md: 40 },
          }}
        >
          Learn About Our Milta Accounting Services
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
                borderBottom: "1px solid rgba(0,0,0,0.12)",
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
                      sx={{ color: "#97ba3a", mr: 1 }}
                    >
                      {`0${index + 1}.`}
                    </Box>
                    {faq.question}
                  </Typography>

                  <ArrowOutwardIcon
                    sx={{
                      fontSize: 18,
                      color:
                        expanded === faq.id
                          ? "#97ba3a"
                          : "#2b6d2a",
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

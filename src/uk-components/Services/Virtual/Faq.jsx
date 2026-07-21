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

/* ===== FAQ DATA ===== */
const faqs = [
  {
    id: "panel1",
    question: "How is a virtual assistant different from a traditional employee?",
    answer:
      "A virtual assistant works remotely on flexible terms, without the costs associated with office space, equipment, or full-time salaries. This allows UK businesses to access skilled support more efficiently.",
  },
  {
    id: "panel2",
    question: "Can virtual assistants handle confidential information?",
    answer:
      "Yes. Our virtual assistants follow strict security, confidentiality, and data protection protocols to ensure your business information remains secure at all times.",
  },
  {
    id: "panel3",
    question: "Are virtual assistant services affordable for small businesses?",
    answer:
      "Absolutely. Our virtual assistant services for small businesses are cost-effective, flexible, and scalable, making them ideal for growing UK companies.",
  },
  {
    id: "panel4",
    question: "How do I communicate with my virtual assistant?",
    answer:
      "You can communicate via email, video calls, messaging platforms, and project management tools, ensuring smooth collaboration and clear communication.",
  },
  {
    id: "panel5",
    question: "Can I customise tasks within virtual assistant services in the UK?",
    answer:
      "Yes. All our virtual assistant services are fully customisable to suit your specific business needs, workflows, and priorities.",
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
        pt: { xs: 8, md: 0 },
        pb: { xs: 8, md: 12 },
        bgcolor: "#ffffff", // --uk-bg
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* CENTER WRAPPER */}
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
          {/* DOT */}
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "#97ba3a", // --uk-secondary
            }}
          />

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              color: "#1a1a1a",
            }}
          >
            FAQs – Virtual Assistant Services in the UK
          </Typography>
        </Box>

        {/* MAIN HEADING */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            color: "#2b6d2a", // --uk-primary
            fontWeight: 700,
            lineHeight: 1.25,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: 24, sm: 30, md: 40 },
          }}
        >
          Learn About Our Virtual Assistant Solutions
        </Typography>

        {/* ACCORDION LIST */}
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
                borderBottom: "1px solid rgba(0,0,0,0.3)",
              }}
            >
              {/* QUESTION */}
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
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: 14, sm: 15 },
                      lineHeight: 1.6,
                      color: "#1a1a1a",
                    }}
                  >
                    {/* NUMBER */}
                    <Box
                      component="span"
                      sx={{
                        color: "#97ba3a", // --uk-secondary
                        mr: 1,
                        fontWeight: 700,
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

              {/* ANSWER */}
              <AccordionDetails sx={{ px: 0, pt: 0, pb: 2 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 13.5, sm: 14 },
                    lineHeight: 1.8,
                    maxWidth: 650,
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

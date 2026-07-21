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
    question: "What are payroll management services?",
    answer:
      "Payroll management services handle salary calculations, PAYE deductions, pension contributions, payroll processing, payslip generation, and HMRC compliance to ensure employees are paid accurately and on time.",
  },
  {
    id: "panel2",
    question: "How do payroll services ensure accuracy and compliance?",
    answer:
      "Professional payroll service companies use advanced payroll software, automated calculations, and expert payroll professionals to remain compliant with HMRC regulations and minimise payroll errors.",
  },
  {
    id: "panel3",
    question: "Why should businesses outsource payroll services in the UK?",
    answer:
      "Payroll outsourcing saves time, reduces compliance risk, improves accuracy, and protects sensitive employee data, making it ideal for small and growing UK businesses.",
  },
  {
    id: "panel4",
    question: "Is payroll outsourcing suitable for small businesses?",
    answer:
      "Yes. Payroll services for small businesses are cost-effective, scalable, and eliminate the need for in-house payroll expertise, making them one of the best payroll solutions for business owners.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ pt: { xs: 8, md: 0 }, pb: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
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
          <Typography fontWeight={600}>
            FAQs – Payroll Management Services
          </Typography>
        </Box>

        {/* HEADING */}
        <Typography
          sx={{
            fontFamily: "var(--uk-font-primary)",
            color:"#2b6d2a",
            fontWeight: 700,
            lineHeight: 1.25,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: 24, sm: 30, md: 40 },
          }}
        >
          Learn About Our Payroll Solutions
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

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router-dom";
import useFullSEO from "../../utils/useFullSEO";

/* ================= COLORS ================= */
const primaryGreen = "#0b3d2e";
const sectionBg = "#f6f8f3";
const hoverOrange = "#ff9800";
const white = "#fff";

/* ================= BANNER ================= */
const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #09271b 0%, #063d1e 100%)",
        color: white,
        py: { xs: 6, sm: 8, md: 10 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} mb={2}>
          Boost Your Tax Savings with Expert Tax Preparation in Texas
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
          mb={3}
          opacity={0.9} color="#ffffff"
        >
          Make tax season easier with dependable tax preparation services in
          Texas. From federal and state to local tax filings, our experienced
          accounting professionals deliver accurate tax planning and preparation
          you can trust—right in your area.
        </Typography>

        <Button
          sx={{
            px: 4,
            py: 1.3,
            bgcolor: hoverOrange,
            color: "#000",
            fontWeight: 600,
            borderRadius: 30,
            "&:hover": { bgcolor: "#ffa726" },
          }}
          onClick={() => navigate("/contact")}
        >
          Get Started Today with a Free Consultation!
        </Button>
      </Container>
    </Box>
  );
};

/* ================= SECTION ================= */
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography variant="h4" fontWeight={700} mb={3} color={primaryGreen}>
        {title}
      </Typography>
      {children}
    </Container>
  </Box>
);

/* ================= HIGHLIGHT BOXES ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 3,
      mt: 4,
    }}
  >
    {boxes.map((text, i) => (
      <Box
        key={i}
        sx={{
          width: { xs: "100%", sm: 300 },
          p: 3,
          borderLeft: `5px solid ${primaryGreen}`,
          borderRadius: 2,
          bgcolor: white,
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            borderLeft: `5px solid ${hoverOrange}`,
            transform: "translateY(-3px)",
          },
        }}
      >
        <Typography fontWeight={600}>{text}</Typography>
      </Box>
    ))}
  </Box>
);

/* ================= FEDERAL TAX FORMS ================= */
const FederalTaxForms = () => {
  const forms = [
    {
      title: "Form 1040",
      desc: "Used by individuals to report income and claim deductions and credits, including wages, investments, and itemized deductions.",
    },
    {
      title: "Form 1041",
      desc: "Filed for estates and trusts, reporting income distributed to beneficiaries while meeting fiduciary obligations.",
    },
    {
      title: "Form 1065",
      desc: "Partnership returns detailing profits, losses, and credits, with Schedule K-1 issued to partners.",
    },
    {
      title: "Form 990",
      desc: "Nonprofit organization returns required to maintain tax-exempt status with transparent financial reporting.",
    },
    {
      title: "Form 1120",
      desc: "C Corporation tax returns detailing income, expenses, depreciation, and corporate tax liabilities.",
    },
    {
      title: "Form 1120S",
      desc: "S Corporation filings reflecting pass-through income allocated to shareholders.",
    },
    {
      title: "Form 1099",
      desc: "Reporting miscellaneous income for contractors, freelancers, interest, dividends, and other non-employee payments.",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #09271b 0%, #063d1e 100%)",
        color: white,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={700} mb={6} textAlign="center">
          Understanding Key Federal Tax Forms
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {forms.map((form, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: white,
                color: primaryGreen,
                borderRadius: 3,
                p: 4,
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <Typography fontWeight={700} mb={2}>
                {form.title}
              </Typography>
              <Typography fontSize="0.9rem">{form.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= FAQ ================= */
const FAQSection = ({ faqData }) => (
  <Box sx={{ py: 8, bgcolor: sectionBg }}>
    <Container maxWidth="md">
      <Typography variant="h4" fontWeight={700} mb={4} textAlign="center">
        FAQs About Miltafs Tax Preparation Services in Texas
      </Typography>

      {faqData.map((item, i) => (
        <Accordion key={i} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.a.split("\n").map((line, idx) => {
              if (line.trim().startsWith("-")) {
                return (
                  <Box key={idx} sx={{ display: "flex", mb: 1 }}>
                    <ArrowRightIcon
                      sx={{ fontSize: "1rem", mr: 1, color: primaryGreen }}
                    />
                    <Typography>{line.replace("-", "")}</Typography>
                  </Box>
                );
              }
              return (
                <Typography key={idx} mb={1}>
                  {line}
                </Typography>
              );
            })}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

/* ================= PAGE ================= */
export default function TaxServicesTexas() {
  useFullSEO({
    title: "Texas Tax Planning & Preparation Services | Trusted Experts",
    description:
      "Stress-free tax planning and preparation in Texas for federal, state, and local taxes. Work with trusted tax professionals near you.",
    keywords:
      "tax services near me, tax preparation services in texas accounting firm near me, tax planning and preparation, texas tax preparation",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-texas/",
  });

  const highlightBoxes = [
    "Year-Round Tax Support & Compliance",
    "Texas-Specific Tax Knowledge",
    "Proactive IRS & State Compliance",
    "Stress-Free Tax Experience",
  ];

  const faqData = [
    {
      q: "Can Miltafs prepare both personal and company tax returns?",
      a: "Absolutely. We specialize in individual and business tax returns, including partnerships, corporations, estates, trusts, and nonprofits.",
    },
    {
      q: "What documents are required for tax preparation services in Texas?",
      a: `To ensure accurate tax preparation, you’ll need:
- W-2 and 1099 forms
- Prior year tax returns
- Business or rental income statements
- Investment and retirement income records
- Bank details for direct deposit`,
    },
    {
      q: "Can you help with state and city taxes?",
      a: "Yes, we provide complete tax preparation services in Texas for federal, state, and local taxes.",
    },
    {
      q: "Is Miltafs service affordable?",
      a: "Yes. We offer competitive pricing while delivering expert, high-quality tax services.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Specialized Business & Individual Tax Preparation Services in Texas">
        <Typography mb={3} maxWidth={950} mx="auto">
          At Milta, we provide reliable tax planning and preparation services for
          individuals and businesses across Texas. From payroll and estimated
          taxes to cash flow and compliance, our experts handle it all.
        </Typography>

        <Typography mb={3} maxWidth={950} mx="auto">
          Our proactive approach ensures you remain compliant while maximizing
          tax savings—so you can focus on growth, not paperwork.
        </Typography>
      </Section>

      <FederalTaxForms />

      <Section title="Why Partner With Us?">
        <HighlightBoxes boxes={highlightBoxes} />
      </Section>

      <FAQSection faqData={faqData} />
    </>
  );
}

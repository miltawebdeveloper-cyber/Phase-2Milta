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
const lightGreen = "#145a43";
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
          Graceful Your Tax Filing Process with Expert Federal, State, and City
          Tax Services Near You in Florida!
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
          mb={3}
          opacity={0.9}  color="#ffffff"
        >
          We handle complicated tax forms and filings, so you don’t have to.
          Get started today with a FREE consultation!
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
          Schedule Your Free Consultation
        </Button>
      </Container>
    </Box>
  );
};

/* ================= SECTION ================= */
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
        color={primaryGreen}
      >
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
      desc: "Individual income tax returns with deductions and credits.",
    },
    {
      title: "Form 1041",
      desc: "Estate and trust tax filings with fiduciary compliance.",
    },
    {
      title: "Form 1065",
      desc: "Partnership tax returns with Schedule K-1 reporting.",
    },
    {
      title: "Form 990",
      desc: "Nonprofit returns to maintain tax-exempt status.",
    },
    {
      title: "Form 1120",
      desc: "C Corporation tax filings with depreciation schedules.",
    },
    {
      title: "Form 1120S",
      desc: "S Corporation pass-through income reporting.",
    },
    {
      title: "Form 1099",
      desc: "Contractor, freelancer, and miscellaneous income reporting.",
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
                "&:hover": {
                  transform: "translateY(-5px)",
                },
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
        Frequently Asked Questions
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
                  <Box
                    key={idx}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
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
export default function TaxServices() {

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Miltafs prepare both personal and company tax returns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and nonprofits."
      }
    },
    {
      "@type": "Question",
      name: "Can you help with state and city taxes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide complete tax preparation services in Florida for federal, state, and city taxes, ensuring compliance at all levels."
      }
    },
    {
      "@type": "Question",
      name: "Is Miltafs service affordable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client."
      }
    }
  ]
};

  useFullSEO({
  // MAIN SEO
  title: "Tax Planning and Preparation in Florida | Federal, State & City",
  description:
    "Expert tax planning and preparation in Florida for Federal, State, and City taxes. Specializing in Forms 1040, 1041, 1065, 1120, 1120S, and 990.",
  keywords:
    "tax services near me, tax preparation services in florida, accounting firm near me, tax planning and preparation, fl tax preparation",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-florida/",
    schema: faqSchema,

});

  const highlightBoxes = [
    "Never Miss a Tax Deadline Again",
    "Florida-Specific Tax Expertise",
    "Avoid Penalties and IRS Issues",
    "Stress-Free Tax Compliance",
  ];

  const faqData = [
    {
      q: "Can Miltafs prepare both personal and business tax returns?",
      a: "Yes. We handle individual, corporate, partnership, nonprofit, estate, and trust tax filings.",
    },
    {
      q: "What documents are required for tax preparation in Florida?",
      a: `You’ll need:
- W-2 and 1099 forms
- Prior year tax returns
- Business income statements
- Rental and investment records`,
    },
    {
      q: "Do you handle Florida state and local taxes?",
      a: "Absolutely. We prepare federal, Florida state, and applicable local tax filings.",
    },
    {
      q: "Is Miltafs affordable?",
      a: "Yes. We provide competitive pricing with high-quality expert service.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="We Specialize in Business & Individual Tax Preparation in Florida">
        <Typography mb={3} maxWidth={900} mx="auto">
          At Miltafs, we help Florida individuals and businesses stay compliant,
          reduce tax burdens, and avoid penalties with proactive tax planning
          and preparation.
        </Typography>

        <Typography mb={3} maxWidth={900} mx="auto">
          As your trusted partner, we handle deadlines, filings, and complex
          regulations—so you can focus on growing your business with confidence.
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

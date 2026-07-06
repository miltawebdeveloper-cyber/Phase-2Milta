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
        background: "linear-gradient(135deg, #09271bff 0%, #063d1eff 100%)",
        color: white,
        py: { xs: 6, sm: 8, md: 10 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sm={{ fontSize: "2rem" }}
          md={{ fontSize: "2.5rem" }}
          fontWeight={700}
          mb={2}
        >
Unlock the Full Potential of Your Refund with Premier Tax Services Near Me!
        </Typography>
        <Typography
          fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
          mb={3}
          opacity={0.9} color="#ffffff"
        >
We specialize in tax planning and preparation for federal and state filings, including IRS Forms 1040, 1041, 1065, 1120, 1120S, and 990. Let’s tackle your taxes the smarter way.
        </Typography>
        <Button
          sx={{
            px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.3 },
            bgcolor: hoverOrange,
            color: "#000",
            fontWeight: 600,
            borderRadius: 30,
            fontSize: { xs: "0.9rem", sm: "1rem" },
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

/* ================= REUSABLE SECTION ================= */
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 5, sm: 6, md: 8 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
        color={primaryGreen}
        fontSize={{ xs: "1.5rem", sm: "1.8rem", md: "2rem" }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
        {children}
      </Box>
    </Container>
  </Box>
);

/* ================= HIGHLIGHT BOX ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 3,
      mt: 2,
    }}
  >
    {boxes.map((text, i) => (
      <Box
        key={i}
        sx={{
          width: { xs: "100%", sm: 320, md: 350 },
          p: 3,
          borderLeft: `5px solid ${primaryGreen}`,
          borderRadius: 2,
          bgcolor: white,
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            borderLeft: `5px solid ${hoverOrange}`,
            transform: "translateY(-3px)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Typography
          textAlign="left"
          fontWeight={600}
          fontSize={{ xs: "0.9rem", sm: "0.95rem", md: "1rem" }}
        >
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= FAQ ================= */
const FAQSection = ({ faqData }) => (
  <Box sx={{ py: { xs: 5, sm: 6, md: 8 }, bgcolor: sectionBg }}>
    <Container maxWidth="md">
      <Typography
        variant="h4"
        fontWeight={700}
        mb={4}
        textAlign="center"
        fontSize={{ xs: "1.5rem", sm: "1.7rem", md: "2rem" }}
      >
        Frequently Asked Questions
      </Typography>

      {faqData.map((item, i) => (
        <Accordion key={i} sx={{ mb: 2, borderRadius: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              fontWeight={600}
              textAlign="left"
              fontSize={{ xs: "0.95rem", sm: "1rem" }}
            >
              {item.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              {item.a.split("\n").map((line, index) => {
                const trimmed = line.trim();
                if (trimmed.startsWith("-")) {
                  return (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", ml: 2, mb: 0.5 }}
                    >
                      <ArrowRightIcon sx={{ fontSize: "1rem", mr: 1, color: primaryGreen }} />
                      <Typography component="span">{trimmed.replace("-", "").trim()}</Typography>
                    </Box>
                  );
                } else {
                  return (
                    <Typography key={index} sx={{ mb: 1, textAlign: "justify" }}>
                      {trimmed}
                    </Typography>
                  );
                }
              })}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

/* ================= FEDERAL TAX FORMS ================= */
const FederalTaxForms = () => {
  const forms = [
    { title: "Form 1040", desc: "Used by individuals to report income and claim deductions/credits. Includes detailed sections for wages, investments, and deductions." },
    { title: "Form 1041", desc: "Filed for estates and trusts, reporting income distributed to beneficiaries. Ensures compliance with fiduciary tax obligations." },
    { title: "Form 1065", desc: "Partnership tax returns, detailing profits, losses, and credits. Partners receive a Schedule K-1 for individual filings." },
    { title: "Form 990", desc: "Non-Profit Organization returns, required to maintain tax-exempt status. Transparency in reporting revenue, expenses, and program activities." },
    { title: "Form 1120", desc: "C Corporation returns, detailing corporate income, expenses, and tax liabilities." },
    { title: "Form 1120S", desc: "For S Corporations, reflecting income passed through to shareholders." },
    { title: "Form 1099", desc: "Used to report miscellaneous income for contractors, freelancers, and other non-employee payments." },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #09271bff 0%, #063d1eff 100%)",
        color: white,
        py: { xs: 6, sm: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          mb={6}
          textAlign="center"
        >
          Understanding Key Federal Tax Forms
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 4,
            justifyContent: "center",
          }}
        >
          {forms.map((form, index) => (
            <Box
              key={index}
              sx={{
                maxWidth: 350,
                mx: "auto",
                bgcolor: white,
                color: primaryGreen,
                borderRadius: 3,
                p: 4,
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px) scale(1.03)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                mb={2}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Box
                  sx={{
                    bgcolor: hoverOrange,
                    color: white,
                    width: 25,
                    height: 25,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  {index + 1}
                </Box>
                {form.title}
              </Typography>
              <Typography fontSize={{ xs: "0.85rem", sm: "0.9rem" }} textAlign="justify">
                {form.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= PAGE ================= */
export default function TaxServices() {
  useFullSEO({
  // MAIN SEO
  title: "Tax Planning and Preparation Services in MA | Milta",
  description:
    "As a trusted accounting firm near me, we specialize in tax planning and preparation services for federal and state filings.",
  keywords:
    "tax services near me, tax preparation services in massachusetts, accounting firm near me, tax planning and preparation, ma tax preparation",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/tax-planning-and-preparation-service-in-massachusetts/",
});

  const solutions = [
  { title: "Individual MA Tax Preparation Service", desc: "Customized solutions to maximize deductions and credits while ensuring IRS and Massachusetts compliance." },
  { title: "Business Tax Services Near Me", desc: "Corporate tax planning and preparation to minimize liabilities and optimize profitability." },
  { title: "Estate and Trust Taxation", desc: "Expert handling of fiduciary tax filings to protect beneficiaries and meet compliance standards." },
  { title: "Nonprofit Tax Compliance", desc: "Maintain tax-exempt status with accurate Form 990 filings and regulatory compliance." },
  { title: "Federal Tax Preparation", desc: "Expert filing of Forms 1040, 1120, 1120S, 1041, and 1065 with deductions and credits applied." },
  { title: "Massachusetts State & Local Tax Preparation", desc: "Income, sales, property, and municipal tax filings handled with MA-specific expertise." },
  { title: "Tax Review & Finalization", desc: "Accuracy checks, compliance audits, and optimization scans before submission." },
  { title: "Tax E-Filing Service", desc: "Secure electronic filing for IRS, MA DRS, municipal portals, amendments, and extensions." },
  { title: "Specialized Tax Forms", desc: "Form 990, 1099 series, Schedule C, Form 8825, and other niche filings handled expertly." },
];


 const highlightBoxes = [
   "Year-Round Tax Support — Not Just During Tax Season",
   "Massachusetts-Specific Tax Knowledge & Incentives",
   "Proactive Compliance to Prevent Penalties",
   "Stress-Free Tax Experience So You Can Focus on Growth"
 ];

const faqData = [
  {
    q: "Can Miltafs prepare both personal and company tax returns?",
    a: "Absolutely. We specialize in individual and business tax returns, including partnerships, corporations, nonprofits, trusts, and estates."
  },
  {
    q: "What documents are required for tax preparation services in Massachusetts?",
    a: `To ensure accurate and complete tax preparation service in Massachusetts, USA, you’ll need to provide the following documents:

Personal Information:
- Social Security numbers and dates of birth for you, your spouse, and dependents
- Copies of last year’s tax return (helpful, but not required)
- Bank account and routing number for direct deposit

Income Information:
- W-2 forms
- 1099-NEC, 1099-MISC
- 1099-G, 1099-C
- 1099-R, Form 8606
- 1099-S
- 1099-INT, DIV, B, or K-1
- SSA-1099
- Business, rental, farming, and miscellaneous income documentation`
  },
  {
    q: "Can you help with state and city taxes?",
    a: "Yes, we provide complete tax preparation services across Massachusetts for federal, state, and municipal tax compliance."
  },
  {
    q: "Is Miltafs service affordable?",
    a: "Yes. We offer competitive pricing while delivering high-quality, precision-driven tax services."
  }
];


  return (
    <>
      <BannerSection />
<Section title="We Specialize in Business & Individual Tax Preparation">
        <Typography mb={3} textAlign="center" maxWidth={{ xs: "100%", sm: 700, md: 900 }} fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.1rem" }}>
  Strategic Tax Planning & Precision-Driven Preparation Solutions in Massachusetts
</Typography>

<Typography mb={3} textAlign="center" maxWidth={{ xs: "100%", sm: 700, md: 900 }} fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.1rem" }}>
  As a business leader, your focus should remain on scaling operations and innovation—not untangling tax codes or deciphering financial reports. Growth demands proactive tax planning, payroll optimization, cash flow forecasting, and multi-state compliance expertise.
</Typography>

<Typography mb={3} textAlign="center" maxWidth={{ xs: "100%", sm: 700, md: 900 }} fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.1rem" }}>
  At Milta, we deliver tailored tax preparation services in Massachusetts for businesses and individuals. Our strategic approach ensures compliance while unlocking every savings opportunity—long after tax season ends.
</Typography>

<Typography mb={3} textAlign="center" maxWidth={{ xs: "100%", sm: 700, md: 900 }} fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.1rem" }}>
  Missed deadlines or filing errors can trigger audits, penalties, and cash flow disruptions. Our MA tax preparation experts handle complex IRS and state filings so you can focus on growth with confidence.
</Typography>

      </Section>

      <FederalTaxForms />

      <Section title="Why Partner With Us?">
        <HighlightBoxes boxes={highlightBoxes} />
      </Section>

      {/* Miltafs Comprehensive Tax Preparation Services Section with Gradient Background */}
      <Box
  sx={{
    py: { xs: 8, md: 12 },
    background:
      "radial-gradient(circle at top, #0f3f2f 0%, #071f18 75%)",
  }}
>
  <Container maxWidth="xl">
    <Typography
      variant="h4"
      fontWeight={700}
      mb={6}
      textAlign="center"
      color={hoverOrange}
      fontSize={{ xs: "1.5rem", sm: "1.8rem", md: "2rem" }}
    >
      Miltafs Comprehensive Tax Preparation Services
    </Typography>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: { xs: 3, md: 4 },
      }}
    >
      {solutions.map((item, index) => (
        <Box
          key={index}
          sx={{
            p: 4,
            minHeight: 240,
            borderRadius: 4,
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: white,
            transition: "all 0.35s ease",
            "&:hover": {
              transform: "translateY(-8px)",
              borderColor: hoverOrange,
              boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
            },
          }}
        >
          <Typography
            fontWeight={700}
            mb={2}
            fontSize={{ xs: "0.95rem", sm: "1rem" }}
            color={hoverOrange}
          >
            {item.title}
          </Typography>

          <Typography
            fontSize={{ xs: "0.85rem", sm: "0.95rem" }}
            lineHeight={1.7}
            opacity={0.95}
          >
            {item.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
</Box>


      <FAQSection faqData={faqData} />
    </>
  );
}

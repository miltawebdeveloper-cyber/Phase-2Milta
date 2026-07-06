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
import { useNavigate } from "react-router-dom";
import WaveDivider from "../../components/homeComp/WaveDivider";
import useFullSEO from "../../utils/useFullSEO";


/* ================= COLORS ================= */
const primaryGreen = "#0b3d2e";
const hoverOrange = "#ff9800";
const softOrange = "#fff3e0";
const white = "#fff";
const sectionBg = "#f6f8f3";

/* ================= BANNER ================= */
const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "radial-gradient(circle at top, #0f3f2f 0%, #071f18 70%)",
        color: white,
        py: { xs: 7, sm: 9, md: 11 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={2}
          fontSize={{ xs: "1.7rem", sm: "2.1rem", md: "2.6rem" }}
        >
          Expert Outsourcing Accounting & Data Entry Services in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Florida
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}
          color="#ffffff"
        >
          Enhance accuracy, save time, and drive growth for your business. Let
          us handle your data complexities.
        </Typography>

        <Button
          sx={{
            px: 5,
            py: 1.4,
            bgcolor: hoverOrange,
            color: "#000",
            fontWeight: 700,
            borderRadius: 30,
            fontSize: "1rem",
            boxShadow: "0 10px 25px rgba(255,152,0,0.35)",
            "&:hover": {
              bgcolor: "#ffa726",
              transform: "translateY(-2px)",
            },
          }}
          onClick={() => navigate("/contact")}
        >
          Book a Free 30-Minute Zoom Consultation
        </Button>
      </Container>
    </Box>
  );
};

/* ================= SECTION ================= */
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight={800}
        mb={4}
        color={primaryGreen}
        fontSize={{ xs: "1.5rem", md: "2.1rem" }}
      >
        {title}
      </Typography>

      <Box maxWidth={900} mx="auto">
        {children}
      </Box>
    </Container>
  </Box>
);

/* ================= HIGHLIGHT BOXES ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
      gap: 3,
      mt: 2,
    }}
  >
    {boxes.map((text, i) => (
      <Box
        key={i}
        sx={{
          p: 3.5,
          bgcolor: softOrange,
          borderRadius: 3,
          border: `1px solid ${hoverOrange}`,
          boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <Typography fontWeight={700} color={primaryGreen}>
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= SERVICES ================= */
const DataEntryServices = () => {
  const services = [
    { title: "General Ledger Entry", desc: "Maintain accurate and thorough general ledger documentation of all financial activities." },
    { title: "Accounts Payable & Receivable", desc: "Manage billing and payments to streamline cash flow and vendor relationships." },
    { title: "Invoice Data Entry", desc: "Process invoices efficiently for timely payments and organized records." },
    { title: "Bank Reconciliation", desc: "Reconcile bank statements to ensure consistency and eliminate discrepancies." },
    { title: "Payroll Data Entry", desc: "Accurate and compliant payroll records from salaries to deductions." },
    { title: "Expense Report Management", desc: "Arrange and analyze business expenses for efficient planning." },
    { title: "Financial Statement Preparation", desc: "Prepare balance sheets and profit & loss statements for informed decision-making." },
    { title: "Custom Data Entry Services", desc: "Tailored solutions to meet unique business requirements and workflows." },
    { title: "QuickBooks Data Entry", desc: "Manage QuickBooks entries, invoices, and reporting to maintain accessible financial records." },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #09271b 0%, #063d1e 100%)",
        py: { xs: 7, md: 11 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={6}
          textAlign="center"
          color={hoverOrange}
        >
          Our Data Entry Services in Florida
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: white,
                p: 4,
                borderRadius: 4,
                borderTop: `5px solid ${hoverOrange}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                textAlign: "center",
              }}
            >
              <Typography fontWeight={700} mb={2} color={primaryGreen}>
                {item.title}
              </Typography>
              <Typography fontSize="0.95rem">{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= FAQ SECTION ================= */
const FAQSection = () => {
  const faqData = [
    { q: "What is accounting data entry?", a: "Recording financial transactions into organized systems for accurate reporting and analysis." },
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging professional expertise." },
    { q: "Are your services customized for small businesses?", a: "Yes, we design our solutions specifically for small and medium-sized businesses in the USA." },
    { q: "How do you ensure data security?", a: "We use secure data transfer, encryption, and confidentiality agreements to protect your information." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely! We provide flexible solutions tailored to your business needs." },
    { q: "What software do you use?", a: "We work with QuickBooks, Xero, and other preferred accounting platforms." },
    { q: "How quickly can you process my data?", a: "Turnaround depends on volume, but we prioritize timely and efficient service." },
    { q: "Is your team familiar with US accounting standards?", a: "Yes, our staff is knowledgeable in US accounting rules and principles." },
  ];

  return (
    <Box sx={{ py: 9, bgcolor: sectionBg }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={5}
          textAlign="center"
          color={primaryGreen}
        >
          Frequently Asked Questions (FAQs)
        </Typography>

        {faqData.map((item, i) => (
          <Accordion key={i} sx={{ mb: 2, borderRadius: 2, "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: hoverOrange }} />}>
              <Typography fontWeight={700}>{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

/* ================= PAGE ================= */
export default function AccountingDataEntryFlorida() {
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I outsource accounting data entry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging the expertise of professionals."
      }
    },
    {
      "@type": "Question",
      name: "Are your services customized for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our services are specifically designed to meet the needs of small and medium-scale businesses in the USA."
      }
    },
    {
      "@type": "Question",
      name: "How do you ensure data security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use secure data transfer methods, encryption, and confidentiality agreements to protect your sensitive information."
      }
    },
    {
      "@type": "Question",
      name: "Is your team familiar with US accounting standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our staff is knowledgeable in US accounting rules and concepts."
      }
    }
  ]
};



  useFullSEO({
  // MAIN SEO
  title: "Leading Outsourcing Accounting Data Entry Companies in Florida",
  description:
    "Best data entry companies in Florida specializing in outsourced accounting. Improve efficiency with accurate, cost-effective data entry services in FL.",
  keywords:
    "data entry companies, accounting data entry, data entry services, data management services",
  author: "Milta Accounting",
  canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-florida/",
    schema: faqSchema,

});

  const highlights = [
    "Accuracy & Compliance",
    "Time-Saving Solutions",
    "Cost-Effective Services",
    "Professional Expertise",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Our Identity and Activities">
        <Typography mb={3}>
          Milta is a trusted partner for precise and efficient accounting data entry services designed for small and medium-sized businesses in the U.S.
        </Typography>
        <Typography>
          We provide high-quality, affordable, and accurate data entry solutions tailored to your needs.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Our Efficient Accounting Data Entry Process">
        <HighlightBoxes boxes={highlights} />
        <Typography mt={4}>
          We collect, verify, categorize, and reconcile financial data while preparing detailed financial reports to help you make informed decisions.
        </Typography>
      </Section>

      <DataEntryServices />

      <FAQSection />
    </>
  );
}

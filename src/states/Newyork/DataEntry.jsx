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
          Precision-Driven Data Management Services in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            New York, USA
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Our specialized solutions are designed to enhance accuracy, optimize workflows, and fuel growth for small businesses.
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
          Book a free 30-minute Zoom consultation
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
      gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
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

/* ================= DATA ENTRY SERVICES ================= */
const DataEntryServices = () => {
  const services = [
    { title: "General Ledger Entry", desc: "Maintain accurate financial records with methodical documentation of all activities." },
    { title: "Accounts Payable & Receivable", desc: "Manage billing and payments accurately to streamline cash flow and vendor relationships." },
    { title: "Invoice Data Entry", desc: "Process invoices efficiently for timely payments and organized records." },
    { title: "Bank Reconciliation", desc: "Reconcile statements with accounting records to ensure consistency and accuracy." },
    { title: "Payroll Data Entry", desc: "Manage salaries, deductions, and ensure payroll compliance." },
    { title: "Expense Report Management", desc: "Track and evaluate business spending for efficient planning and payments." },
    { title: "Financial Statement Preparation", desc: "Prepare balance sheets, profit & loss statements, and other reports for decision-making." },
    { title: "Custom Data Entry Services", desc: "Tailored solutions to meet unique business requirements." },
    { title: "QuickBooks Data Entry", desc: "Integration with QuickBooks for invoices, reports, and accurate record-keeping." },
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
          Our Data Entry Services in USA
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
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: white,
                p: 4,
                borderRadius: 4,
                borderTop: `5px solid ${hoverOrange}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
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
    { q: "Why should I outsource accounting data entry?", a: "Saves time, reduces costs, and ensures accuracy using professional expertise." },
    { q: "Are your services customized for small businesses?", a: "Yes, we design services specifically for small and medium-scale businesses in the USA." },
    { q: "How do you ensure data security?", a: "We use encrypted channels, secure transfers, and confidentiality agreements." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely! We provide flexible solutions to meet specific business requirements." },
    { q: "What software do you use?", a: "QuickBooks, Xero, and other custom platforms as per client preference." },
    { q: "How quickly can you process data?", a: "Turnaround depends on volume, but we ensure timely and efficient service." },
    { q: "Is your team familiar with US accounting standards?", a: "Yes, our team is knowledgeable in US accounting rules and concepts." },
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
          Frequently Asked Questions
        </Typography>

        {faqData.map((item, i) => (
          <Accordion
            key={i}
            sx={{
              mb: 2,
              borderRadius: 2,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: hoverOrange }} />}
            >
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
export default function DataEntryNewYork() {
  useFullSEO({
  // MAIN SEO
  title: "Leading Accounting Data Entry Companies in New York",
  description:
    "Partner with trusted data entry companies in New York for expert accounting data entry services to boost efficiency and reduce costs.",
  keywords:
    "data entry companies, accounting data entry, data entry services, data management services",
  author: "Milta Accounting",
  canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-newyork/",
});

  const highlights = [
    "Accurate Financial Records",
    "Optimized Workflows",
    "Secure Data Management",
    "Customized Solutions",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Our Identity and Activities">
        <Typography mb={3}>
          We are a trusted partner among Accounting Data Entry Companies in New York,
          delivering precise and efficient accounting data entry solutions for small and medium-sized businesses.
        </Typography>
        <Typography>
          Our mission is to streamline your business operations with affordable, high-quality, and error-free data entry services.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Our Efficient Accounting Data Entry Process">
        <HighlightBoxes boxes={highlights} />
        <Typography mt={3}>
          From secure data collection and verification to double-entry checks and financial reporting, our workflow ensures unmatched precision and reliability.
        </Typography>
      </Section>

      <DataEntryServices />

      <FAQSection />
    </>
  );
}

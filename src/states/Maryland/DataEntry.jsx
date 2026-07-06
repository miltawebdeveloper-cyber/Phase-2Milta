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
const sectionBg = "#faf9f6";

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
            Maryland, USA
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Our trusted data entry companies provide accurate accounting data entry and efficient data entry services to optimize your business.
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
    { title: "General Ledger Entry", desc: "Maintain accurate and thorough ledgers by methodically documenting all financial activities." },
    { title: "Accounts Payable and Receivable Data Entry", desc: "Manage billing and payments accurately, streamlining cash flow and improving vendor relationships." },
    { title: "Invoice Data Entry", desc: "Efficiently process invoices for timely payments and organized record-keeping." },
    { title: "Bank Reconciliation", desc: "Reconcile bank statements with accounting records to eliminate discrepancies and ensure consistency." },
    { title: "Payroll Data Entry", desc: "Ensure payroll records are precise and compliant, covering salaries, deductions, and payments." },
    { title: "Expense Report Data Management", desc: "Arrange and evaluate business spending for efficient planning and payment." },
    { title: "Financial Statement Preparation", desc: "Prepare balance sheets, profit & loss statements, and reports for strategic decision-making." },
    { title: "Custom Data Entry Services", desc: "Flexible solutions tailored to your unique business requirements." },
    { title: "QuickBooks Data Entry", desc: "Manage invoices, reports, and financial records using QuickBooks integration for efficiency." },
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
          Our Data Entry Services in the USA
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
  const faqs = [
    { q: "What is accounting data entry?", a: "Accounting data entry involves recording financial transactions into organized systems for accurate reporting and analysis." },
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging the expertise of professionals." },
    { q: "Are your services customized for small businesses?", a: "Yes, our services are designed for small and medium-scale businesses in the USA." },
    { q: "How do you ensure data security?", a: "We use secure data transfer methods, encryption, and confidentiality agreements to protect sensitive information." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely! We offer tailored solutions to match your specific requirements." },
    { q: "What software do you use for accounting data entry?", a: "We work with QuickBooks, Xero, and other custom platforms as per your preference." },
    { q: "How quickly can you process my data?", a: "Turnaround time depends on data volume, but we pride ourselves on timely and efficient service." },
    { q: "Is your team familiar with US accounting standards?", a: "Yes, our staff is knowledgeable in US accounting rules and concepts." },
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

        {faqs.map((item, i) => (
          <Accordion
            key={i}
            sx={{ mb: 2, borderRadius: 2, "&:before": { display: "none" } }}
          >
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
export default function DataEntryMaryland() {
  useFullSEO({
  // MAIN SEO
  title: "Top Accounting Data Entry Services in Maryland | Milta",
  description:
    "Partner with top data entry services in Maryland for precise accounting data entry solutions.",
  keywords:
    "data entry companies, accounting data entry, data entry services, data management services, data management services in maryland",
  author: "Milta Accounting",
  canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-maryland/",
});

  const highlights = [
    "Accurate Data Management",
    "Efficient Accounting Data Entry",
    "Secure & Confidential",
    "Custom Data Solutions",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Who We Are & What We Do">
        <Typography mb={3}>
          As a trusted leader among data entry companies, we provide accurate and efficient accounting data entry solutions for small and mid-sized businesses across the U.S.
        </Typography>
        <Typography>
          Our secure, systematic approach guarantees accuracy and professionalism, so you can focus on business growth.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Our Efficient Accounting Data Entry Process">
        <HighlightBoxes boxes={highlights} />
        <Typography mt={4}>
          We implement a structured workflow trusted by top data entry companies to ensure precise and efficient accounting data entry. This includes data collection, verification, chart of accounts setup, double-entry accounting checks, reconciliation, and financial reporting.
        </Typography>
      </Section>

      <DataEntryServices />

      <FAQSection />
    </>
  );
}

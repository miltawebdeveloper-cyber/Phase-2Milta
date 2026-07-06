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
            Ohio, USA
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Trust Ohio’s trusted data entry companies for streamlined financial
          operations and scalable solutions.
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

/* ================= DATA ENTRY SERVICES ================= */
const DataEntryServices = () => {
  const services = [
    { title: "General Ledger Entry", desc: "Maintain an accurate and thorough general ledger documenting all financial activities." },
    { title: "Accounts Payable & Receivable", desc: "Streamline billing and payments to improve cash flow and vendor relationships." },
    { title: "Invoice Data Entry", desc: "Efficiently process invoices for timely payments and organized record-keeping." },
    { title: "Bank Reconciliation", desc: "Reconcile bank statements with accounting records to ensure consistency." },
    { title: "Payroll Data Entry", desc: "Manage salaries, deductions, and payroll records accurately and compliantly." },
    { title: "Expense Report Management", desc: "Track and evaluate business spending for efficient planning and payments." },
    { title: "Financial Statement Preparation", desc: "Prepare accurate balance sheets, P&L statements, and reports for informed decision-making." },
    { title: "Custom Data Entry Services", desc: "Tailored solutions for unique business requirements and data management support." },
    { title: "QuickBooks Data Entry", desc: "Integration and management of QuickBooks for accurate and accessible financial records." },
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
    { q: "What is accounting data entry?", a: "Accounting data entry involves recording financial transactions into organized systems for accurate reporting and analysis." },
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging professional expertise." },
    { q: "Are your services customized for small businesses?", a: "Yes, our services are designed for small and medium-scale businesses in the USA." },
    { q: "How do you ensure data security?", a: "We use secure data transfer methods, encryption, and confidentiality agreements to protect your sensitive information." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely! We provide personalized solutions tailored to your business needs." },
    { q: "What software do you use?", a: "We work with QuickBooks, Xero, and other custom platforms according to your preference." },
    { q: "How quickly can you process my data?", a: "Turnaround time depends on the volume of data, but we ensure timely and efficient delivery." },
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
export default function DataEntryOhio() {
  useFullSEO({
  // MAIN SEO
  title: "Partner with Premier Data Management Services in Ohio",
  description:
    "We specialize in accounting data entry services in Ohio. Leverage our precision-driven data entry services to boost productivity.",
  keywords:
    "data entry companies, accounting data entry, data entry services, data management services",
  author: "Milta Accounting",
  canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-ohio/",
});

  const highlights = [
    "Precision & Accuracy",
    "Streamlined Financial Operations",
    "Cost-Effective Solutions",
    "Scalable Data Management",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Who We Are & What We Do">
        <Typography mb={3}>
          As a premier data entry company in Ohio, Milta delivers high-performance, error-free accounting data entry solutions for SMEs nationwide.
        </Typography>
        <Typography>
          We empower businesses with cost-effective data entry services that reduce administrative burdens, streamline workflows, and enable growth.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Our Precision-Driven Accounting Data Entry Workflow">
        <HighlightBoxes boxes={highlights} />
        <Typography mt={4}>
          From data collection and verification to financial reporting, our structured workflow ensures accuracy, compliance, and actionable insights for your business.
        </Typography>
      </Section>

      <DataEntryServices />

      <FAQSection />
    </>
  );
}

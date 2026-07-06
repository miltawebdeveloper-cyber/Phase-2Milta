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
const sectionBg = "#f6f8f3";
const hoverOrange = "#ff9800";
const softOrange = "#fff3e0";
const white = "#fff";

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
            Georgia
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          For your small business operations, our professional accounting and data entry services are designed to enhance accuracy, save time, and drive growth.
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

      <Box maxWidth={900} mx="auto" textAlign="left">
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
const AccountingServices = () => {
  const services = [
    { title: "General Ledger Entry", desc: "Maintain accurate financial records by documenting all your business transactions methodically." },
    { title: "Accounts Payable & Receivable", desc: "Manage billing and payments efficiently to improve cash flow and vendor relationships." },
    { title: "Invoice Data Entry", desc: "Process invoices promptly for organized record-keeping and timely payments." },
    { title: "Bank Reconciliation", desc: "Ensure consistency by reconciling bank statements with accounting records." },
    { title: "Payroll Data Entry", desc: "Accurate payroll management including salaries, deductions, and compliance." },
    { title: "Expense Report Management", desc: "Organize and evaluate business spending for efficient financial planning." },
    { title: "Financial Statement Preparation", desc: "Generate accurate profit & loss statements and balance sheets for decision-making." },
    { title: "Custom Data Entry Services", desc: "Tailored solutions to meet your unique business requirements and support operations." },
    { title: "QuickBooks Data Entry", desc: "Leverage QuickBooks to manage invoices, reports, and maintain accessible financial records." },
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
          Our Data Entry Services in Georgia
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

/* ================= FAQ ================= */
const FAQSection = () => {
  const faqData = [
    { q: "What is accounting data entry?", a: "Recording financial transactions into organized systems for accurate reporting and analysis." },
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy using professionals." },
    { q: "Are your services customized for small businesses?", a: "Yes, designed specifically for small and medium businesses in the USA." },
    { q: "How do you ensure data security?", a: "We use secure data transfer, encryption, and confidentiality agreements to protect your sensitive information." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely, we offer flexible solutions tailored to your requirements." },
    { q: "What software do you use for accounting data entry?", a: "We work with QuickBooks, Xero, and other preferred platforms." },
    { q: "How quickly can you process my data?", a: "Turnaround depends on data volume, but we ensure timely and efficient service." },
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
export default function AccountingGeorgia() {
  useFullSEO({
  // MAIN SEO
  title: "The Outsourcing Accounting Data Entry Companies in Georgia",
  description:
    "Top data entry companies in Georgia offer accurate accounting data entry and data management services to boost efficiency and reduce costs.",
  keywords:
    "data entry companies, accounting data entry, data entry services, data management services",
  author: "Milta Accounting",
  canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-georgia/",
});

  const highlights = [
    "Accurate Financial Records",
    "Time-Saving Solutions",
    "Customized Services",
    "QuickBooks Expertise",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Our Identity and Activities">
        <Typography mb={3} sx={{ textAlign: "center" }}>
          Welcome to Milta, your trusted partner for precise and efficient accounting data entry services. Tailored for small and medium-sized businesses in Georgia, we help you optimize operations with high-quality, accurate data entry solutions.
        </Typography>
        <Typography  sx={{ textAlign: "center" }}>
          With years of experience managing financial data, we ensure records are accurate, up-to-date, and compliant, providing clear insights for informed business decisions.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Our Efficient Accounting Data Entry Process">
        <HighlightBoxes boxes={[
          "Data Collection",
          "Data Verification",
          "Chart of Accounts Creation",
          "Double-Entry Accounting Check",
          "Data Reconciliation",
          "Financial Reporting"
        ]} />
      </Section>

      <AccountingServices />

      <FAQSection />
    </>
  );
}

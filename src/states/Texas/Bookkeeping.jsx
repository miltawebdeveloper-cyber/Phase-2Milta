import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import useFullSEO from "../../utils/useFullSEO";

/* ================= COLORS ================= */
const primaryGreen = "#0b3d2e";
const lightGreen = "#145a43";
const sectionBg = "#f6f8f3";
const hoverOrange = "#ff9800";

/* ================= BANNER ================= */
const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${primaryGreen}, ${lightGreen})`,
        color: "#fff",
        py: { xs: 6, sm: 8, md: 10 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={700}
          mb={2}
          fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.5rem" }}
        >
          Best Bookkeeping Services for Small Businesses in Texas, USA
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
          mb={3}
          opacity={0.9} color="#ffffff"
        >
          With over a decade of industry experience, our Texas-based bookkeeping
          firm delivers dependable, precision-driven bookkeeping services
          customized for small businesses.
        </Typography>

        <Button
          sx={{
            px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.3 },
            bgcolor: hoverOrange,
            color: "#000",
            fontWeight: 600,
            borderRadius: 30,
            "&:hover": { bgcolor: "#ffa726" },
          }}
          onClick={() => navigate("/contact")}
        >
          Contact Us Today
        </Button>
      </Container>
    </Box>
  );
};

/* ================= REUSABLE SECTION ================= */
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
        color={primaryGreen}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
      >
        {title}
      </Typography>
      {children}
    </Container>
  </Box>
);

/* ================= FAQ ================= */
const FAQSection = () => (
  <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: sectionBg }}>
    <Container maxWidth="md">
      <Typography
        variant="h4"
        fontWeight={700}
        mb={4}
        textAlign="center"
      >
        Frequently Asked Questions
      </Typography>

      {faqData.map((item, i) => (
        <Accordion key={i} sx={{ mb: 2, borderRadius: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

/* ================= PAGE ================= */
export default function BookkeepingTexas() {
  /* ================= SEO ================= */
  useFullSEO({
    title: "Professional Bookkeeping Services for Small Businesses in Texas",
    description:
      "Keep your finances organized with expert bookkeeping services in Texas. Accurate records, clear reports, and professional support.",
    keywords:
      "bookkeeping services, bookkeeping services near me, bookkeeping services for small business, best bookkeeping for small business, bookkeeping company in texas, bookkeeping services in texas",
    canonical:
      "https://www.miltafs.com/us/services/best-bookkeeping-services-in-texas/",
    author: "Milta Accounting",
  });

  return (
    <>
      <BannerSection />

      {/* ================= INTRO ================= */}
      <Section title="Trusted Bookkeeping Services for Small Businesses in Texas, USA">
        <Typography maxWidth={900} mx="auto" mb={3}>
          As a leading bookkeeping company in Texas, Milta offers expert
          bookkeeping services to keep your financial records accurate,
          organized, and easy to manage. Our professionals provide the best
          bookkeeping for small business, ensuring clear financial insights that
          help you stay in control of your finances.
        </Typography>

        <Typography maxWidth={900} mx="auto" mb={4}>
          From precise data entry to comprehensive financial reporting, we handle
          every aspect of your accounting with accuracy and care. If you're
          searching for bookkeeping services near me, we deliver reliable
          bookkeeping services for small business across Texas.
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
        >
          To Arrange Your Free Initial Consultation, Contact Us Right Now!
        </Button>
      </Section>

      <Divider />

      {/* ================= WHY BOOKKEEPING ================= */}
      <Section title="Why Every Business Needs Professional Bookkeeping Services">
        <Typography maxWidth={900} mx="auto">
          Accurate bookkeeping services are crucial for documenting, organizing,
          and managing financial transactions while ensuring tax compliance and
          providing valuable insights for strategic decision-making. Our
          bookkeeping services in Texas allow you to focus on business growth
          while we manage your finances efficiently.
        </Typography>
      </Section>

      {/* ================= SOLUTIONS ================= */}
      <Section
        title="Comprehensive Bookkeeping and Financial Solutions Customized to Your Needs"
        bg={sectionBg}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            mt: 3,
          }}
        >
          {solutions.map((item, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: "100%", sm: 300 },
                bgcolor: "#fff",
                p: 3,
                borderRadius: 3,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <Typography fontWeight={700} mb={2}>
                {i + 1}. {item.title}
              </Typography>
              <Typography>{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ================= INDUSTRIES ================= */}
      <Section title="Industries We Serve for Bookkeeping Services">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mt: 3,
          }}
        >
          {industries.map((industry, i) => (
            <Box
              key={i}
              sx={{
                px: 3,
                py: 1,
                bgcolor: hoverOrange,
                borderRadius: 20,
                fontWeight: 600,
              }}
            >
              {industry}
            </Box>
          ))}
        </Box>
      </Section>

      <FAQSection />
    </>
  );
}

/* ================= DATA ================= */
const solutions = [
  {
    title: "Bank and Credit Card Reconciliation",
    desc:
      "We reconcile every transaction to eliminate discrepancies and safeguard against errors or fraud.",
  },
  {
    title: "Cash Flow, AR & AP Management",
    desc:
      "Track inflows and outflows, manage receivables, and ensure timely vendor payments.",
  },
  {
    title: "Invoice Generation & Tracking",
    desc:
      "We manage invoices, track payments, and follow up on overdue balances.",
  },
  {
    title: "Chart of Accounts & System Setup",
    desc:
      "Customized accounting systems designed for clarity and organization.",
  },
  {
    title: "Payroll & Tax Compliance",
    desc:
      "Accurate payroll processing while staying compliant with regulations.",
  },
  {
    title: "Financial Reporting",
    desc:
      "Weekly, monthly, and yearly reports to drive informed decisions.",
  },
  {
    title: "Financial Clean-Up",
    desc:
      "Reorganizing and correcting financial records for clarity and control.",
  },
  {
    title: "CPA Collaboration",
    desc:
      "Year-end tax preparation support with certified public accountants.",
  },
];

const industries = [
  "Healthcare",
  "Education",
  "Travel & Tourism",
  "Transportation",
  "Telecommunication",
  "Food & Beverage",
  "Finance & Insurance",
  "Entertainment",
  "Hospitality",
  "Information Technology",
  "E-commerce",
  "CPA Industry",
  "Marketing & Advertising",
];

const faqData = [
  {
    q: "What is bookkeeping, and why do I need it for my small business?",
    a:
      "Bookkeeping involves recording, organizing, and managing financial transactions to ensure accuracy and compliance.",
  },
  {
    q: "Can I handle bookkeeping myself?",
    a:
      "You can, but hiring professionals saves time and ensures accuracy and compliance.",
  },
  {
    q: "Do you offer payroll services?",
    a:
      "Yes, we offer complete payroll and bookkeeping services in Texas.",
  },
  {
    q: "How do I get started?",
    a:
      "Contact us today to schedule your free consultation.",
  },
];

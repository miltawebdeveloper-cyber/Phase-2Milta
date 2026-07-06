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
            Virginia, USA
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Our specialized solutions enhance accuracy, streamline workflows, and drive growth for small businesses.
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
      gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
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
    { title: "Data Collection", desc: "Securely gather invoices, receipts, bank statements, payroll records, and more with confidentiality and efficiency." },
    { title: "Data Verification", desc: "Cross-check and verify each document to eliminate discrepancies and ensure accuracy." },
    { title: "Chart of Accounts Setup", desc: "Create or refine accounts tailored to your business structure for seamless financial categorization." },
    { title: "Double-Entry Accounting Check", desc: "Maintain balanced financial records using double-entry principles to prevent mismatches." },
    { title: "Data Reconciliation", desc: "Reconcile bank statements and ledgers to identify and resolve inconsistencies." },
    { title: "Financial Reporting", desc: "Generate P&L statements, balance sheets, and cash flow reports for informed business decisions." },
    { title: "Accounts Payable & Receivable", desc: "Streamline billing and payments to improve cash flow and vendor relationships." },
    { title: "Payroll & Expense Management", desc: "Accurately manage payroll, deductions, and expense reporting for operational efficiency." },
    { title: "QuickBooks & Custom Solutions", desc: "Integrate with QuickBooks or custom platforms to maintain accurate and accessible financial records." },
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
    { q: "What is accounting data entry?", a: "Recording financial transactions into organized systems for accurate reporting and analysis, maintaining up-to-date financial records." },
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging professional expertise." },
    { q: "Are your services customized for small businesses?", a: "Yes, we design services to meet the needs of small and medium-sized businesses in the USA." },
    { q: "How do you ensure data security?", a: "We use secure data transfer, encryption, and confidentiality agreements to protect sensitive information." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely! We offer tailored solutions to match your specific requirements." },
    { q: "What software do you use?", a: "We work with QuickBooks, Xero, and other custom platforms as per your business preference." },
    { q: "How quickly can you process my data?", a: "Turnaround time depends on the volume, but we pride ourselves on timely and efficient service." },
    { q: "Is your team familiar with US accounting standards?", a: "Yes, our team is knowledgeable in US accounting rules and concepts." },
  ];

  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: sectionBg }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={6}
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
export default function DataEntryVirginia() {
  useFullSEO({
  // MAIN SEO
  title: "Top Accounting Data Entry Firms in Virginia, USA | Milta",
  description:
    "Work with top data entry companies in Virginia for expert accounting data entry services that enhance efficiency and cut costs.",
  keywords:
    "data entry companies, accounting data entry, data entry services, data management services",
  author: "Milta Accounting",
  canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-virginia/",
});

  const highlights = [
    "High Accuracy & Efficiency",
    "Secure Data Handling",
    "Cost-Effective Solutions",
    "Quick Turnaround",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Who We Are & What We Do">
        <Typography mb={3}>
          As a leading data entry company in Virginia, we provide high-quality, efficient, and error-free accounting data entry solutions tailored for small and medium-sized businesses across the U.S.
        </Typography>
        <Typography>
          Our skilled team ensures your financial records are precise, compliant, and up-to-date, allowing informed, data-driven decisions for long-term success.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Our Efficient Accounting Data Entry Process">
        <Typography mb={4}>
          We follow a structured workflow trusted by top data entry companies in Virginia to manage financial data with precision and efficiency.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DataEntryServices />

      <FAQSection />
    </>
  );
}

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WaveDivider from "../../components/homeComp/WaveDivider";
import useFullSEO from "../../utils/useFullSEO";

/* ================= COLORS ================= */
const primaryGreen = "#0b3d2e";
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
          Reliable Data Entry & Management Services in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            North Carolina, USA
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          As one of the top data entry companies, we specialize in accounting data entry and data management services.
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
    { title: "General Ledger Entry", desc: "Maintain accurate and thorough general ledger records for all financial activities." },
    { title: "Accounts Payable & Receivable", desc: "Manage billing, payments, and cash flow efficiently for better vendor relationships." },
    { title: "Invoice Data Entry", desc: "Process invoices efficiently for timely payments and organized record-keeping." },
    { title: "Bank Reconciliation", desc: "Ensure consistency by reconciling bank statements with accounting records." },
    { title: "Payroll Data Entry", desc: "Accurate payroll records including salaries and deductions, fully compliant." },
    { title: "Expense Report Management", desc: "Organize and evaluate business spending for smooth financial operations." },
    { title: "Financial Statement Preparation", desc: "Prepare profit & loss statements, balance sheets, and other reports for informed decisions." },
    { title: "Custom Data Entry Services", desc: "Tailored solutions to meet unique business requirements for precise financial data." },
    { title: "QuickBooks Data Entry", desc: "Integration with QuickBooks for invoice entry, reporting, and accurate bookkeeping." },
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
          Our Data Entry Services in North Carolina
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
    { q: "What are accounting data entry services?", a: "Recording financial transactions into organized systems for accurate reporting and analysis." },
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging professional expertise." },
    { q: "Are your services customized for small businesses?", a: "Yes, specifically designed for small and medium-scale businesses in the USA." },
    { q: "How do you ensure data security?", a: "We use encrypted data transfer, confidentiality agreements, and secure channels to protect sensitive information." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely, we offer tailored solutions to meet your unique business needs." },
    { q: "What software do you use for accounting data entry?", a: "We work with QuickBooks, Xero, and other preferred accounting software platforms." },
    { q: "How quickly can you process my data?", a: "Turnaround depends on data volume, but we prioritize timely and efficient delivery." },
    { q: "Is your team familiar with US accounting standards?", a: "Yes, our staff is fully knowledgeable in US accounting principles and regulations." },
  ];

  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: "#faf9f6" }}>
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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4,
            justifyItems: "center",
          }}
        >
          {faqData.map((item, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: white,
                p: 4,
                borderRadius: 3,
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                borderTop: `3px solid ${hoverOrange}`,
                textAlign: "center",
                maxWidth: 460,
                width: "100%",
              }}
            >
              <Typography fontWeight={700} mb={1} color={primaryGreen}>
                {item.q}
              </Typography>
              <Typography fontSize="0.95rem">{item.a}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= PAGE ================= */
export default function DataEntryNorthCarolina() {
  useFullSEO({
  // MAIN SEO
  title: "Data Entry & Management Services in North Carolina, USA",
  description:
    "We specialize in accounting data entry and data management services in North Carolina, customized to your needs.",
  keywords:
    "data entry companies, accounting data entry, data entry services, data management services",
  author: "Milta Accounting",
  canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-northcarolina/",
});

  const highlights = [
    "Secure & Accurate Data Entry",
    "Streamlined Accounting Processes",
    "Customized Data Management",
    "Expert Team Support",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Who We Are & What We Do">
        <Typography mb={3}>
          As a trusted leader among accounting data entry companies in North Carolina, Milta provides precise and efficient data entry solutions customized for small and medium-sized businesses across the U.S.
        </Typography>
        <Typography>
          Our goal is to maximize time and resources by streamlining operations with affordable, high-quality, and error-free data entry services.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Our Streamlined Accounting Data Entry Process">
        <Typography mb={4}>
          Milta follows a precision-driven workflow to ensure seamless financial data management with accuracy and efficiency.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DataEntryServices />

      <FAQSection />
    </>
  );
}

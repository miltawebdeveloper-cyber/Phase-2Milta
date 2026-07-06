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
          Reliable Data Entry & Management Services in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            New Jersey, USA
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Our expertise in accounting data entry ensures seamless financial record management, while our comprehensive data management services help you organize, process, and secure critical business information.
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
    { title: "General Ledger Entry", desc: "Maintain accurate and thorough general ledger by documenting all financial activities." },
    { title: "Accounts Payable & Receivable", desc: "Manage billing and payments accurately to streamline cash flow and improve vendor relationships." },
    { title: "Invoice Data Entry", desc: "Efficient invoice processing for timely payments and organized record-keeping." },
    { title: "Bank Reconciliation", desc: "Reconcile bank statements with accounting records to ensure consistency." },
    { title: "Payroll Data Entry", desc: "Manage payroll, salaries, and deductions accurately and compliantly." },
    { title: "Expense Report Management", desc: "Arrange and analyze business spending for efficient planning and payment." },
    { title: "Financial Statement Preparation", desc: "Prepare accurate balance sheets and P&L statements for informed decision-making." },
    { title: "Custom Data Entry Services", desc: "Flexible solutions to cater to unique business requirements." },
    { title: "QuickBooks Data Entry", desc: "Integration with QuickBooks for invoice entry, reporting, and record accuracy." },
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
          Our Data Entry Services in New Jersey, USA
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
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy with professional expertise." },
    { q: "Are your services customized for small businesses?", a: "Yes, we specifically serve small and medium-scale businesses across the USA." },
    { q: "How do you ensure data security?", a: "We use secure transfers, encryption, and confidentiality agreements to protect your data." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely! We provide tailored solutions for your specific requirements." },
    { q: "What software do you use for accounting data entry?", a: "We work with QuickBooks, Xero, and other platforms as per your preference." },
    { q: "How quickly can you process my data?", a: "Turnaround depends on volume, but we ensure timely and efficient service." },
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

        {faqData.map((item, i) => (
          <Accordion
            key={i}
            sx={{ mb: 2, borderRadius: 2, "&:before": { display: "none" } }}
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
export default function DataEntryNewJersey() {
  useFullSEO({
  // MAIN SEO
  title: "Reliable Entry & Management Services in New Jersey, USA",
  description:
    "As one of the leading data entry companies, we provide accurate and efficient data entry services customized to your business needs.",
  keywords:
    "data entry companies, accounting data entry, data entry services, data management services",
  author: "Milta Accounting",
  canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-newjersey/",
});

  const highlights = [
    "Accurate & Error-Free Data",
    "Secure Data Management",
    "Cost-Effective Solutions",
    "Expert Team Support",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Who We Are & What We Do">
        <Typography mb={3}>
          As a trusted leader among data entry companies, Milta specializes in accounting data entry solutions tailored for small and medium-sized businesses across the U.S.
        </Typography>
        <Typography>
          Our mission is to optimize your time and resources by providing high-quality, error-free data entry services that streamline operations and improve efficiency.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Experience Accuracy and Efficiency with Milta">
        <Typography mb={4}>
          We offer a comprehensive suite of data entry services, including data collection, reconciliation, reporting, and customized data management solutions designed for small businesses.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DataEntryServices />

      <FAQSection />
    </>
  );
}

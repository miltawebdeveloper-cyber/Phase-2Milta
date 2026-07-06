import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import WaveDivider from "../../components/homeComp/WaveDivider";
import useFullSEO from "../../utils/useFullSEO";

/* ================= FONTS ================= */
const headingFont = "Syne, sans-serif";
const bodyFont = "DM Sans, sans-serif";

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
          fontFamily={headingFont}
          fontWeight={800}
          mb={2}
          fontSize={{ xs: "1.7rem", sm: "2.1rem", md: "2.6rem" }}
        >
          Outsourced{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Financial Controller Services in California
          </Box>
        </Typography>

        <Typography
          fontFamily={bodyFont}
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Gain financial clarity, compliance, and strategic control with certified
          financial controller experts in California.
        </Typography>

        <Button
          sx={{
            px: 5,
            py: 1.4,
            bgcolor: hoverOrange,
            color: "#000",
            fontFamily: bodyFont,
            fontWeight: 700,
            borderRadius: 30,
            fontSize: "1rem",
            boxShadow: "0 10px 25px rgba(255,152,0,0.35)",
            "&:hover": { bgcolor: "#ffa726", transform: "translateY(-2px)" },
          }}
          onClick={() => navigate("/contact")}
        >
          💼 Book Your Free Consultation Today – Limited Time Only!
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
        fontFamily={headingFont}
        fontWeight={800}
        mb={4}
        color={primaryGreen}
        fontSize={{ xs: "1.5rem", md: "2.1rem" }}
      >
        {title}
      </Typography>

      <Box
        maxWidth={900}
        mx="auto"
        sx={{ fontFamily: bodyFont, fontSize: "1rem" }}
      >
        {children}
      </Box>
    </Container>
  </Box>
);

/* ================= HIGHLIGHTS ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
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
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
          },
        }}
      >
        <Typography
          fontFamily={headingFont}
          fontWeight={700}
          color={primaryGreen}
        >
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= CAPABILITIES TABLE ================= */
const CapabilitiesTable = () => {
  const capabilities = [
    ["Accounting Function Oversight", "✔️", "✔️"],
    ["Regulatory Compliance (GAAP, etc.)", "✔️", "✔️"],
    ["ERP Implementation", "✔️", "✔️"],
    ["Management Accounting", "✔️", "✔️"],
    ["Accounting Internal Controls", "✔️", "✔️"],
    ["Closing Entries (Financial Close)", "✔️", "✔️"],
    ["Budgeting & Forecasting Support", "✔️", "✔️"],
    ["Cash Flow Management", "✔️", "✔️"],
    ["Financial Reporting & Analysis", "✔️", "✔️"],
    ["Financial Statement Preparation/Review", "✔️", "✔️"],
    ["Team Management, Hiring & Training", "✔️", "✔️"],
    ["Long-Term Business & Financial Strategy", "", "✔️"],
    ["Fundraising & Investor Relations", "", "✔️"],
    ["Investment Advisory", "", "✔️"],
  ];

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead sx={{ bgcolor: hoverOrange }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 700, fontFamily: headingFont }}>
              Capabilities
            </TableCell>
            <TableCell sx={{ fontWeight: 700, fontFamily: headingFont }}>
              Controller
            </TableCell>
            <TableCell sx={{ fontWeight: 700, fontFamily: headingFont }}>
              CFO
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {capabilities.map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, i) => (
                <TableCell
                  key={i}
                  align={i === 0 ? "left" : "center"}
                  sx={{ fontFamily: bodyFont }}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

/* ================= FAQ ================= */
const FAQSection = () => {
  const faqData = [
    {
      q: "What is a Financial Controller?",
      a: "A financial controller oversees accounting operations, ensures compliance, and provides accurate financial reporting.",
    },
    {
      q: "Why outsource Financial Controller Services?",
      a: "Outsourcing provides expert professionals without the cost of a full-time hire.",
    },
    {
      q: "Which businesses benefit most?",
      a: "Startups, SMBs, and growing companies across California.",
    },
    {
      q: "Can a controller assist with audits?",
      a: "Yes, controllers assist with audit preparation and compliance.",
    },
    {
      q: "How often will I receive reports?",
      a: "Monthly, quarterly, or annual reporting based on your needs.",
    },
    {
      q: "How do I get started?",
      a: "Contact Miltafs today for a free consultation.",
    },
  ];

  return (
    <Box sx={{ py: 9, bgcolor: sectionBg }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontFamily={headingFont}
          fontWeight={800}
          mb={5}
          textAlign="center"
          color={primaryGreen}
        >
          FAQs – Financial Controller Services in California
        </Typography>

        {faqData.map((item, i) => (
          <Accordion key={i} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: hoverOrange }} />}
            >
              <Typography fontFamily={headingFont} fontWeight={700}>
                {item.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontFamily={bodyFont}>{item.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

/* ================= PAGE ================= */
export default function FinancialControllerCalifornia() {
  useFullSEO({
    title: "Outsourced Financial Controller Services in California | Miltafs",
    description:
      "We provide expert financial controller services in California to enhance reporting, strengthen controls, and ensure full compliance.",
    keywords:
      "financial controller services, outsourced financial controller, accounting controller, certified financial controller",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/financial-controller-services-in-california/",
  });

  const highlights = [
    "Expert Financial Oversight",
    "Regulatory Compliance",
    "Real-Time Financial Intelligence",
    "Scalable Controller Solutions",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Optimize Your Finances with Expert Financial Controller Services in California">
        <Typography mb={3}>
          Gain unparalleled financial clarity and operational efficiency with our
          certified financial controller team. We provide customized accounting
          controller solutions tailored to California’s dynamic business landscape.
        </Typography>
        <Typography>
          From accurate reporting to strategic planning, our outsourced financial
          controller services empower businesses with compliance, insight, and
          sustainable growth.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Why Choose Miltafs Financial Controller Services">
        <Typography mb={4}>
          Affordable, scalable, and customized financial controller solutions
          designed to help California businesses grow with confidence.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <Section title="Controller vs CFO – Roles & Capabilities" bg={white}>
        <CapabilitiesTable />
      </Section>

      <FAQSection />
    </>
  );
}

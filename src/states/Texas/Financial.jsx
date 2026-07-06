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
          Elevate Your Financial Strategy with{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Expert Financial Controller Services in Texas
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Drive smarter financial strategy with Milta’s certified financial controllers in Texas,
          delivering accuracy, compliance, and scalable growth.
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
            "&:hover": { bgcolor: "#ffa726", transform: "translateY(-2px)" },
          }}
          onClick={() => navigate("/contact")}
        >
          💼 Schedule Your Free Consultation – Limited Time Offer!
        </Button>

        <Typography mt={2} fontSize="0.9rem" opacity={0.85}>
          ⏰ Hurry! The offer ends soon.
        </Typography>
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
        }}
      >
        <Typography fontWeight={700} color={primaryGreen}>
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
            <TableCell sx={{ fontWeight: 700 }}>Capabilities</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Controller</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>CFO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {capabilities.map((row, i) => (
            <TableRow key={i}>
              {row.map((cell, j) => (
                <TableCell key={j} align={j === 0 ? "left" : "center"}>
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

/* ================= FAQ SECTION ================= */
const FAQSection = () => {
  const faqData = [
    { q: "What is a Financial Controller?", a: "A financial controller oversees accounting operations, ensures compliance, and delivers accurate financial reporting and strategic insight." },
    { q: "Why should I outsource Financial Controller Services?", a: "Outsourcing offers expert leadership at a fraction of the cost of a full-time hire while maintaining accuracy and compliance." },
    { q: "What types of businesses benefit most?", a: "Startups, small businesses, and mid-sized enterprises seeking scalable financial expertise without full-time overhead." },
    { q: "What services does a Financial Controller provide?", a: "Budgeting, reporting, compliance oversight, internal controls, cash flow management, and audit support." },
    { q: "How does Miltafs customize services?", a: "We tailor solutions based on your industry, size, and financial goals." },
    { q: "What’s the difference between a Controller and a CFO?", a: "Controllers manage accounting operations; CFOs focus on long-term strategy and investor relations." },
    { q: "Can you assist with audits?", a: "Yes, we prepare documentation and provide full audit support." },
    { q: "How often are reports delivered?", a: "Monthly, quarterly, or annually—based on your business needs." },
    { q: "Is outsourcing cost-effective?", a: "Absolutely. You gain elite expertise at a fraction of the cost of a full-time role." },
    { q: "Can Miltafs manage compliance?", a: "Yes, we ensure compliance with both federal and Texas state regulations." },
    { q: "How do I get started?", a: "Contact Miltafs today for a free consultation." },
  ];

  return (
    <Box sx={{ py: 9, bgcolor: sectionBg }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={800} mb={5} textAlign="center" color={primaryGreen}>
          FAQs – Financial Controller Services
        </Typography>

        {faqData.map((item, i) => (
          <Accordion key={i} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "#f5f5f5" }}>
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
export default function FinancialControllerTexas() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should I outsource Financial Controller Services?",
        acceptedAnswer: { "@type": "Answer", text: "Outsourcing offers expert leadership without the cost of a full-time hire." },
      },
      {
        "@type": "Question",
        name: "What services does a Financial Controller provide?",
        acceptedAnswer: { "@type": "Answer", text: "Financial reporting, budgeting, compliance oversight, cash flow management, and audit support." },
      },
    ],
  };

  useFullSEO({
    title: "Top Financial Controller Services in Texas | Milta",
    description:
      "Drive smarter financial strategy with Milta’s certified financial controllers in Texas, delivering accuracy, compliance, and growth.",
    keywords:
      "financial controller services, outsourced financial controller, accounting controller, certified financial controller",
    canonical: "https://www.miltafs.com/us/services/financial-controller-services-in-texas/",
    schema: faqSchema,
  });

  const highlights = [
    "Expert Financial Oversight",
    "Regulatory Compliance",
    "Data-Driven Decisions",
    "Scalable Controller Solutions",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Certified Financial Controller Services in Texas">
        <Typography mb={3}>
          Enhance your financial management with our outsourced financial controller expertise,
          delivering precision, optimized processes, and strategic resource deployment.
        </Typography>
        <Typography>
          Whether ongoing oversight or project-based support, Miltafs empowers businesses to
          navigate complexity and achieve sustainable growth.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Why Choose Miltafs for Financial Controller Services">
        <Typography mb={4}>
          Affordable, scalable, and tailored financial leadership designed for growing Texas businesses.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <Section title="Capabilities – Controller vs CFO" bg={white}>
        <CapabilitiesTable />
      </Section>

      <FAQSection />
    </>
  );
}

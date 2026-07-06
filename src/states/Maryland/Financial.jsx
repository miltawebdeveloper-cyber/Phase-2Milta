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
          Optimize Your Finances with Expert{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Financial Controller Services in Maryland
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Ensure accuracy and compliance with our certified financial controller team, delivering top-tier services for Maryland businesses.
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
          💼 Claim Your Free Consultation – Limited Time Offer!
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
            <TableCell sx={{ fontWeight: 700, color: "#000" }}>Capabilities</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#000" }}>Controller</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#000" }}>CFO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {capabilities.map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, i) => (
                <TableCell key={i} align={i === 0 ? "left" : "center"}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

/* ================= FAQ DROPDOWN ================= */
const FAQSection = () => {
  const faqData = [
    { q: "What is a Financial Controller?", a: "A financial controller is in charge of your accounting department, ensuring compliance, accurate reporting, and strategic financial management." },
    { q: "Why should I outsource Financial Controller Services?", a: "Outsourcing gives you access to experienced professionals without hiring full-time staff, saving costs while ensuring high-quality oversight." },
    { q: "What types of businesses benefit from Financial Controller Services?", a: "Startups, small and medium-sized businesses, and growing companies that need expert financial management without a full-time hire." },
    { q: "What services does a Financial Controller provide?", a: "Manages accounting operations, prepares budgets, analyzes reports, ensures compliance, oversees cash flow, and assists with audits." },
    { q: "How can outsourced Financial Controller Services help my business?", a: "Streamlines financial processes, enhances compliance, improves cash flow, and provides strategic insights." },
    { q: "How does Miltafs customize Financial Controller Services?", a: "Services are tailored to your business size, industry, and financial goals for a personalized solution." },
    { q: "What’s the difference between a Financial Controller and a CFO?", a: "A Controller focuses on accounting and operations, while a CFO oversees strategic financial planning and investor relations." },
    { q: "Can a Financial Controller help with audits?", a: "Yes, they assist with audit preparation, documentation, and compliance support." },
    { q: "How often will I receive financial reports?", a: "Reports can be provided monthly, quarterly, or annually depending on your business requirements." },
    { q: "Is outsourcing cost-effective?", a: "Yes, it offers top-tier expertise at a fraction of the cost of hiring a full-time employee." },
    { q: "Can Miltafs handle federal and state compliance?", a: "Yes, Miltafs ensures all financial reporting meets federal and state regulations." },
    { q: "How do I get started with Miltafs Financial Controller Services?", a: "Contact us today for a free consultation to discuss customized solutions for your business." },
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
export default function FinancialControllerMaryland() {
  useFullSEO({
  // MAIN SEO
  title: "Trusted Financial Controller Services in Maryland | Milta",
  description:
    "Optimize finances with expert financial controller services in Maryland with our certified financial controller team.",
  keywords:
    "financial controller services, outsourced financial controller, accounting controller, certified financial controller",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/financial-controller-services-in-maryland/",
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

      <Section title="Enhance Your Financial Operations with Miltafs">
        <Typography mb={3}>
          Ensure accuracy and compliance with our certified financial controller team in Maryland. Our outsourced solutions provide precise financial reporting, strategic planning, and seamless regulatory compliance.
        </Typography>
        <Typography>
          Whether you need continuous support or project-based solutions, our services help businesses navigate financial complexities with confidence.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Why Businesses Choose Our Financial Controller Services">
        <Typography mb={4}>
          Miltafs empowers businesses of all sizes with expert financial management, streamlined operations, and actionable insights for sustainable growth.
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

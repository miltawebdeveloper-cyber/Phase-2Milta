import React, { useState } from "react";
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
            Financial Controller Services in North Carolina
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Delivering certified financial controller expertise to refine workflows, elevate reporting, and maintain compliance.
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

/* ================= TABULAR CAPABILITIES ================= */
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
                <TableCell key={i}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

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
        }}
      >
        <Typography fontWeight={700} color={primaryGreen}>
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= FAQ SECTION ================= */
const FAQSection = () => {
  const faqData = [
    {
      q: "What is a Financial Controller?",
      a: "A financial controller manages accounting operations, ensures compliance, and provides strategic financial oversight.",
    },
    {
      q: "Why should I outsource Financial Controller Services?",
      a: "Outsourcing provides access to expert professionals without the cost of a full-time hire, saving money while maintaining high-quality financial oversight.",
    },
    {
      q: "What types of businesses benefit from Financial Controller Services?",
      a: "Startups, small and medium-sized businesses that need expert financial management but are not ready for a full-time hire.",
    },
    {
      q: "What services does a Financial Controller provide?",
      a: "Manages accounting operations, prepares budgets, analyzes reports, ensures compliance, oversees cash flow, and assists with audits.",
    },
    {
      q: "How can outsourced Financial Controller Services help my business?",
      a: "Streamlines financial processes, enhances compliance, improves cash flow management, and provides insights for strategic decisions.",
    },
    {
      q: "What’s the difference between a Financial Controller and a CFO?",
      a: "A Controller focuses on accounting and financial management, while a CFO develops long-term financial strategies and oversees company financial health.",
    },
    {
      q: "Can a Financial Controller help with audits?",
      a: "Yes, they assist with audit preparation, documentation, and compliance support.",
    },
    {
      q: "How often will I receive financial reports?",
      a: "Miltafs provides regular financial reports, including monthly, quarterly, and annual updates as per your needs.",
    },
    {
      q: "Is outsourcing cost-effective?",
      a: "Yes, it offers top-tier expertise at a fraction of the cost of hiring full-time staff.",
    },
    {
      q: "Can Miltafs handle federal and state compliance?",
      a: "Yes, Miltafs ensures all reporting complies with federal and state regulations.",
    },
    {
      q: "How do I get started?",
      a: "Contact Miltafs today for a free consultation to assess your needs and discuss customized solutions.",
    },
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
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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

/* ================= NORTH CAROLINA DARK SECTION ================= */
const NCServicesSection = () => {
  const services = [
    "Accurate Management Reporting",
    "Oversight of Transaction Processing",
    "Assessment of Internal Controls",
    "Procedures & Policy Compliance",
    "Timely Payment Management",
    "On-Demand Reports",
    "Monthly Reviews & Reporting",
    "Adherence to Federal & State Regulations",
    "Fractional Controller Services",
    "Vendor & Employee Communication Assistance",
    "Audit Assistance",
  ];

  const benefits = [
    { title: "Startups", desc: "Build a solid financial foundation with expert advice." },
    { title: "Small Businesses", desc: "Simplify processes to focus on growth." },
    { title: "Medium Enterprises", desc: "Gain professional insights without full-time costs." },
  ];

  const reasons = [
    { title: "Affordable and Scalable", desc: "Solutions grow with your business." },
    { title: "Experienced Team", desc: "Expert financial controllers for SMBs." },
    { title: "Customized Solutions", desc: "Tailored to your specific needs." },
    { title: "Compliance & Accuracy", desc: "Regulatory adherence and financial integrity." },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: primaryGreen, color: white }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={6}
          textAlign="center"
          fontSize={{ xs: "1.8rem", md: "2.3rem" }}
        >
          North Carolina Financial Controller Services
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 6,
            mb: 8,
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={700} mb={3} color={hoverOrange}>
              Core Services
            </Typography>
            {services.map((service, i) => (
              <Typography key={i} sx={{ mb: 1.5 }}>
                {i + 1}. {service}
              </Typography>
            ))}
          </Box>

          <Box>
            <Typography variant="h5" fontWeight={700} mb={3} color={hoverOrange}>
              Who Can Benefit
            </Typography>
            {benefits.map((item, i) => (
              <Box key={i} sx={{ mb: 2 }}>
                <Typography fontWeight={700}>{item.title}:</Typography>
                <Typography>{item.desc}</Typography>
              </Box>
            ))}

            <Typography variant="h5" fontWeight={700} mb={3} mt={3} color={hoverOrange}>
              Why Choose Miltafs
            </Typography>
            {reasons.map((item, i) => (
              <Box key={i} sx={{ mb: 2 }}>
                <Typography fontWeight={700}>{item.title}:</Typography>
                <Typography>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

/* ================= PAGE ================= */
export default function FinancialControllerNC() {
  useFullSEO({
  // MAIN SEO
  title: "Milta - Certified Financial Controller Services in North Carolina",
  description:
    "Transform your financial operations today by partnering with trusted outsourced financial controller services in North Carolina.",
  keywords:
    "financial controller services, outsourced financial controller, accounting controller, certified financial controller",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/financial-controller-services-in-northcarolina/",
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

      <Section title="Optimize Your Financial Operations with Miltafs">
        <Typography mb={3}>
          Ensure precision and compliance with our certified financial controller team in North Carolina. Our outsourced solutions provide meticulous financial reporting, strategic analysis, and seamless regulatory compliance.
        </Typography>
        <Typography>
          Whether ongoing support or project-based assistance, our services empower businesses to navigate complexities and make confident, data-driven decisions.
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

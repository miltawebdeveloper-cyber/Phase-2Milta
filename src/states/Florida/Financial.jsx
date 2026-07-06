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
          Maximize Your Financial Reporting & Analysis with an{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Outsourced Financial Controller
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          A Certified Financial Controller leads our accounting services, ensuring compliance, accuracy, and timely reporting.
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
          ⏰ Hurry! The offer ends in 48 hours.
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
    {
      q: "What is a Financial Controller?",
      a: "A financial controller is in charge of the accounting department of your business, guaranteeing compliance, accurate financial reporting, and strategic financial management.",
    },
    {
      q: "Why should I outsource Financial Controller Services?",
      a: "Outsourcing provides access to experienced professionals without the cost of a full-time hire, helping you save money while maintaining high-quality financial oversight.",
    },
    {
      q: "What types of businesses benefit from Financial Controller Services?",
      a: "Small and medium-sized businesses, startups, and growing companies that need expert financial management but are not ready for a full-time hire can greatly benefit.",
    },
    {
      q: "What services does a Financial Controller provide?",
      a: "A Financial Controller manages accounting operations, prepares budgets, analyzes reports, ensures compliance, oversees cash flow, and assists with audits.",
    },
    {
      q: "How can outsourced Financial Controller Services help my business?",
      a: "These services streamline your financial processes, enhance compliance, improve cash flow management, and provide insights for strategic decision-making.",
    },
    {
      q: "How does Miltafs customize Financial Controller Services to my business?",
      a: "Miltafs customizes its services to match your business size, industry, and specific financial goals, ensuring personalized solutions that meet your needs.",
    },
    {
      q: "What’s the difference between a Financial Controller and a CFO?",
      a: "A Financial Controller focuses on accounting and financial management, while a CFO develops long-term financial strategies and oversees the company’s overall financial health.",
    },
    {
      q: "Can a Financial Controller help with audits?",
      a: "Yes, Financial Controllers assist with audit preparation by organizing documentation, ensuring compliance, and providing support throughout the audit process.",
    },
    {
      q: "How often will I receive financial reports?",
      a: "Miltafs provides regular financial reports, including monthly, quarterly, and annual updates, depending on your business requirements.",
    },
    {
      q: "Is outsourcing a cost-effective solution for Financial Controller Services?",
      a: "At a fraction of the cost of employing a controller full-time, outsourcing gives you access to top-tier experience.",
    },
    {
      q: "Can Miltafs handle compliance with federal and state regulations?",
      a: "Yes, Miltafs ensures that all financial reporting complies with federal and state regulations, minimizing risks and penalties.",
    },
    {
      q: "How do I get started with Miltafs Financial Controller Services?",
      a: "Contact Miltafs today for a free consultation to assess your needs and discuss customized solutions for your business.",
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
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ bgcolor: "#f5f5f5" }}
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
export default function FinancialControllerFlorida() {

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I outsource Financial Controller Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Outsourcing provides access to experienced professionals without the cost of a full-time hire, helping you save money while maintaining high-quality financial oversight."
      }
    },
    {
      "@type": "Question",
      name: "What types of businesses benefit from Financial Controller Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small and medium-sized businesses, startups, and growing companies that need expert financial management but are not ready for a full-time hire can greatly benefit."
      }
    },
    {
      "@type": "Question",
      name: "What services does a Financial Controller provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Financial Controller manages accounting operations, prepares budgets, analyzes reports, ensures compliance, oversees cash flow, and assists with audits."
      }
    },
    {
      "@type": "Question",
      name: "How do I get started with Miltafs Financial Controller Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact Miltafs today for a free consultation to assess your needs and discuss customized solutions for your business."
      }
    }
  ]
};



  useFullSEO({
  // MAIN SEO
  title: "Outsourced Financial Controller Services in Florida for Growth",
  description:
    "Strengthen your business with expert financial controller services in Florida. Get accurate financial oversight and strategic planning for growth.",
  keywords:
    "financial controller services, outsourced financial controller, accounting controller, certified financial controller",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/financial-controller-services-in-florida/",
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

      <Section title="Optimize Your Financial Operations with Miltafs">
        <Typography mb={3}>
          Ensure precision and compliance with our certified financial controller team in Florida. Our outsourced solutions provide meticulous financial reporting, strategic analysis, and seamless regulatory compliance.
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

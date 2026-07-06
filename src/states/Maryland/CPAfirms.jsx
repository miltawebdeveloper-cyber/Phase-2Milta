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
import useFullSEO from "../../utils/useFullSEO";


/* ================= COLORS ================= */
const primaryGreen = "#0b3d2e";
const lightGreen = "#145a43";
const sectionBg = "#f6f8f3";
const hoverOrange = "#ff9800";
const greenGradient = "linear-gradient(135deg, #09271bff 0%, #063d1eff 100%)";

/* ================= BANNER ================= */
const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: greenGradient,
        color: "#fff",
        py: { xs: 6, sm: 8, md: 10 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} mb={2}>
          Trusted CPA Firm in Maryland for Business Success
        </Typography>

        <Typography fontSize={{ xs: "1rem", sm: "1.1rem" }} mb={3} opacity={0.9} color="#ffffff">
          Optimize Your Business Finances with Expert CPA Services in Maryland
        </Typography>

        <Typography fontSize="1rem" mb={4} opacity={0.9} color="#ffffff">
          Milta provides expert CPA services in Maryland, offering tailored
          financial solutions for individuals and small businesses. As one of
          the top CPA firms in Maryland, we specialize in accounting, tax
          preparation, and financial planning to keep your finances accurate,
          compliant, and growth-ready.
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
          onClick={() => navigate("/contact")}
        >
          Schedule a Free Consultation
        </Button>
      </Container>
    </Box>
  );
};

/* ================= REUSABLE SECTION ================= */
const Section = ({
  title,
  children,
  background = sectionBg,
  titleColor = primaryGreen,
}) => (
  <Box sx={{ py: { xs: 5, md: 8 }, background }}>
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        fontWeight={700}
        mb={4}
        textAlign="center"
        color={titleColor}
      >
        {title}
      </Typography>
      {children}
    </Container>
  </Box>
);

/* ================= CARD GRID ================= */
const CardGrid = ({ items }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 3,
    }}
  >
    {items.map((item, i) => (
      <Box
        key={i}
        sx={{
          width: { xs: "100%", sm: 300 },
          bgcolor: "#fff",
          p: 3,
          borderRadius: 3,
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          transition: "all .3s",
          textAlign: "center",
          "&:hover": {
            transform: "translateY(-6px)",
            bgcolor: hoverOrange,
            color: "#fff",
          },
        }}
      >
        <Typography fontWeight={700} mb={1}>
          {item.title}
        </Typography>
        <Typography fontSize="0.9rem">{item.desc}</Typography>
      </Box>
    ))}
  </Box>
);

/* ================= FAQ ================= */
const FAQSection = ({ faqData }) => (
  <Section title="Frequently Asked Questions">
    <Container maxWidth="md">
      {faqData.map((item, i) => (
        <Accordion key={i} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize="0.95rem">{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Section>
);

/* ================= EMPOWERMENT ================= */
const EmpowermentSection = ({ cards }) => (
  <Section title="How Milta Supports Your Business Growth">
    <Typography
      fontSize={{ xs: "1rem", md: "1.1rem" }}
      textAlign="center"
      maxWidth="900px"
      mx="auto"
      mb={6}
    >
      A successful CPA firm in Maryland depends on accurate financial records
      and strategic insights. Managing bookkeeping and financial analysis can be
      time-consuming. Milta simplifies these tasks so CPA firms near you can
      focus on high-value financial strategies instead of routine accounting.
    </Typography>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 4,
      }}
    >
      {cards.map((card, i) => (
        <Box
          key={i}
          sx={{
            p: 5,
            borderRadius: 3,
            bgcolor: "#fff",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={2}>
            {card.title}
          </Typography>
          <Typography fontSize="1rem" lineHeight={1.7} color="text.secondary">
            {card.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  </Section>
);

/* ================= OUTSOURCING ================= */
const OutsourcingSection = ({ services }) => (
  <Section
    title="Our CPA Services for Small Business Include"
    background={greenGradient}
    titleColor="#ffffff"
  >
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 4,
      }}
    >
      {services.map((service, i) => (
        <Box
          key={i}
          sx={{
            p: 4,
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <Typography fontWeight={600} mb={1} color={lightGreen}>
            {service.split(":")[0]}
          </Typography>
          <Typography fontSize="0.95rem">
            {service.split(":")[1]}
          </Typography>
        </Box>
      ))}
    </Box>
  </Section>
);

/* ================= WHY CHOOSE ================= */
const benefits = [
  { title: "Available Full-Time", desc: "Dedicated professionals working exclusively on your accounting needs with backup support available." },
  { title: "Overnight Delivery", desc: "Work completed while you sleep so deliverables are ready when you start your day." },
  { title: "Offload Non-Core Functions", desc: "Focus on growth and client relationships while we manage accounting operations." },
  { title: "High-Quality CPA Services in Maryland", desc: "95%+ retention rate delivering consistent, customized accounting excellence." },
  { title: "Reduced Overheads", desc: "Save 60–70% by eliminating hiring, training, and payroll expenses." },
  { title: "Diversify Your Customers", desc: "Serve multiple industries without investing in additional training or tools." },
];

const WhyChooseMiltaSection = () => (
  <Section title="Why Choose Milta for CPA Services in Maryland">
    <CardGrid items={benefits} />
  </Section>
);

/* ================= MAIN PAGE ================= */
export default function CPAMaryland() {
  useFullSEO({
  // MAIN SEO
  title: "Superior CPA Services in Maryland | Milta Accounting Services",
  description:
    "We provide expert CPA services in Maryland for small businesses. Partner with CPA firms in Maryland for accuracy, growth, and success!",
  keywords:
    "cpa services in maryland, cpa firms near me, cpa firms in maryland, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in maryland, certified public accountant near me",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-maryland/",
});

  const empowermentCards = [
    {
      title: "Strategic Business Enablement",
      desc: "Outsourcing to Milta provides access to expert CPA services in Maryland, improving efficiency while reducing operational costs.",
    },
    {
      title: "Operational Excellence",
      desc: "We leverage advanced accounting technology and deep expertise to streamline workflows and minimize overhead.",
    },
  ];

  const coreServices = [
    { title: "Accounting & Bookkeeping", desc: "Financial statements, reconciliations, payroll, and ledger maintenance." },
    { title: "Tax Planning & Preparation", desc: "Corporate, individual, sales, and payroll tax filings with compliance." },
    { title: "Financial Consulting", desc: "Forecasting, budgeting, valuation, and M&A advisory." },
    { title: "Catch-Up Services", desc: "Fixing backlogs and restoring accurate financial records." },
    { title: "Software Setup & Conversion", desc: "QuickBooks, Xero, cloud migrations, and training." },
    { title: "Audit & Assurance", desc: "Audits, reviews, compilations, and regulatory compliance." },
  ];

  const faqData = [
    { q: "Why should I outsource CPA services?", a: "It reduces costs, improves efficiency, and provides specialized expertise." },
    { q: "Does Milta handle U.S. tax regulations?", a: "Yes, our team is fully compliant with U.S. accounting and tax standards." },
    { q: "What software do you support?", a: "QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and more." },
    { q: "Do you offer business consulting?", a: "Yes, including budgeting, forecasting, and profitability analysis." },
    { q: "Can you support international businesses?", a: "Yes, including cross-border tax and financial reporting." },
  ];

  const outsourcingServices = [
    "Monthly, Quarterly & Annual Write-Up Services: Accurate data entry and reconciliations.",
    "Catch-Up & Clean-Up Services: Fixing errors and updating records.",
    "Accounting Software Conversions: QuickBooks Desktop to Online or Xero.",
    "Accounting Reviews & Compilations: Performed by US CPAs and CMAs.",
    "Tax Return Preparation: Forms 1120, 1120S, 1065, 1040, 1041, 990.",
  ];

  return (
    <>
      <BannerSection />
      <EmpowermentSection cards={empowermentCards} />
      <OutsourcingSection services={outsourcingServices} />
      <WhyChooseMiltaSection />

      {/* ✅ THIS SECTION NOW HAS GREEN GRADIENT */}
      <Section
        title="Our Core CPA Services in Maryland"
        background={greenGradient}
        titleColor="#ffffff"
      >
        <CardGrid items={coreServices} />
      </Section>

      <FAQSection faqData={faqData} />
    </>
  );
}

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
          Top-Rated CPA Firm in Massachusetts For Your Business Needs
        </Typography>
        <Typography fontSize={{ xs: "1rem", sm: "1.1rem" }} mb={3} opacity={0.9} color="#ffffff">
          As a trusted certified public accountant near you, we blend local expertise with tailored solutions to empower your enterprise.
        </Typography>
        <Typography fontSize="1rem" mb={4} opacity={0.9} color="#ffffff">
          Searching for top-rated CPA firms near me? Your search ends here. Milta is your dedicated accounting partner in Massachusetts, delivering customized tax planning, compliance management, and financial advisory services for small businesses and individuals. Recognized as the best CPA service for small businesses in Massachusetts, our certified public accountants focus on accuracy, strategic foresight, and long-term growth.
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
const Section = ({ title, children }) => (
  <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: sectionBg }}>
    <Container maxWidth="lg">
      <Typography variant="h4" fontWeight={700} mb={4} textAlign="center" color={primaryGreen}>
        {title}
      </Typography>
      {children}
    </Container>
  </Box>
);

/* ================= CARD GRID ================= */
const CardGrid = ({ items }) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
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

/* ================= EMPOWERMENT SECTION ================= */
const EmpowermentSection = ({ cards }) => (
  <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: sectionBg }}>
    <Container maxWidth="lg">
      <Typography variant="h3" fontWeight={700} mb={4} textAlign="center">
        How Can Milta Empower Your CPA Firm?
      </Typography>

      <Typography
        fontSize={{ xs: "1rem", md: "1.1rem" }}
        textAlign="center"
        maxWidth="900px"
        mx="auto"
        mb={6}
      >
        Every thriving CPA firm in Massachusetts recognizes that accurate financial records and strategic insights are essential for growth. Managing bookkeeping, tax preparation, and financial analysis can strain internal resources. Milta handles these complexities so your team can focus on delivering high-value advisory services.
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              p: 5,
              borderRadius: 3,
              background: "#fff",
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              transition: "all 0.3s",
              "&:hover": { transform: "translateY(-6px)" },
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={2}>
              {card.title}
            </Typography>
            <Typography fontSize="1rem" color="text.secondary">
              {card.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

/* ================= OUTSOURCING SECTION ================= */
const OutsourcingSection = ({ services }) => (
  <Box sx={{ py: { xs: 6, md: 9 }, background: greenGradient }}>
    <Container maxWidth="lg">
      <Typography variant="h4" fontWeight={700} mb={4} color="#fff" textAlign="center">
        Why Outsource Your CPA Services?
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>
        {services.map((service, index) => (
          <Box key={index} sx={{ p: 4, bgcolor: "#fff", borderRadius: 3 }}>
            <Typography fontWeight={600} mb={1}>
              {service.split(":")[0]}
            </Typography>
            <Typography fontSize="0.95rem">
              {service.split(":")[1]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

/* ================= WHY CHOOSE MILTA ================= */
const benefits = [
  {
    title: "Available Full-Time",
    desc: "Dedicated accounting professionals aligned with your firm’s workflow.",
  },
  {
    title: "Overnight Delivery",
    desc: "Time-zone advantage ensures deliverables are ready when you start your day.",
  },
  {
    title: "Offload Non-Core Work",
    desc: "Focus on clients while we manage accounting complexities.",
  },
  {
    title: "High-Quality CPA Services",
    desc: "95%+ retention rate delivering consistent, compliant results.",
  },
  {
    title: "Reduced Overheads",
    desc: "Save 60–70% on staffing, hiring, and training costs.",
  },
  {
    title: "Diversified Expertise",
    desc: "Serve multiple industries without expanding internal teams.",
  },
];

const WhyChooseMiltaSection = () => (
  <Section title="Why Choose Milta for CPA Services in Massachusetts">
    <CardGrid items={benefits} />
  </Section>
);

/* ================= FAQ ================= */
const FAQSection = ({ faqData }) => (
  <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: sectionBg }}>
    <Container maxWidth="md">
      <Typography variant="h4" fontWeight={700} mb={4} textAlign="center">
        Frequently Asked Questions
      </Typography>

      {faqData.map((item, i) => (
        <Accordion key={i}>
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

/* ================= MAIN PAGE ================= */
export default function CPAMassachusetts() {
  useFullSEO({
  // MAIN SEO
  title: "Premier CPA Services in Massachusetts for Small Businesses | Milta",
  description:
    "Whether you need strategic tax planning or financial advisory support, our team provides the best CPA service for small businesses in Massachusetts.",
  keywords:
    "cpa services in massachusetts, cpa firms near me, cpa firms in massachusetts, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in massachusetts, certified public accountant near me",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-massachusetts/",
});

  const empowermentCards = [
    {
      title: "Strategic Support for CPA Firms",
      desc: "Milta acts as an extension of your firm, providing dependable bookkeeping, tax preparation, and compliance support.",
    },
    {
      title: "Operational Efficiency Through Outsourcing",
      desc: "Reduce payroll costs, improve accuracy, and streamline workflows with Milta’s expert accounting team.",
    },
  ];

  const coreServices = [
    { title: "Accounting & Bookkeeping", desc: "Financial statements, reconciliations, payroll, and compliance." },
    { title: "Tax Planning & Preparation", desc: "Corporate, individual, payroll, and sales tax filings." },
    { title: "Financial Advisory", desc: "Forecasting, cash flow management, valuations, and M&A support." },
    { title: "Catch-Up & Clean-Up", desc: "Restore accuracy to disorganized or outdated records." },
    { title: "Software Setup & Conversion", desc: "QuickBooks, Xero, and cloud-based accounting solutions." },
    { title: "Audit & Assurance", desc: "Internal audits, compliance audits, and reporting." },
  ];

  const outsourcingServices = [
    "Write-Up Services: Monthly, quarterly, and annual accounting.",
    "Catch-Up Services: Correcting and reconciling books.",
    "Software Conversions: QuickBooks and Xero transitions.",
    "Accounting Reviews: Performed by US CPAs and CMAs.",
    "Tax Preparation: Forms 1120, 1120S, 1065, 1040, 1041, 990.",
  ];

  const faqData = [
    { q: "Why outsource CPA services?", a: "It reduces costs and improves efficiency." },
    { q: "Do you follow U.S. regulations?", a: "Yes, we fully comply with U.S. accounting standards." },
    { q: "What software do you support?", a: "QuickBooks, Xero, Drake, Lacerte, TurboTax, and more." },
    { q: "Do you help with growth?", a: "Yes, through advisory and financial consulting." },
    { q: "Do you support international businesses?", a: "Yes, including cross-border compliance." },
  ];

  return (
    <>
      <BannerSection />
      <EmpowermentSection cards={empowermentCards} />
      <OutsourcingSection services={outsourcingServices} />
      <WhyChooseMiltaSection />
      <Section title="Our Core CPA Services in Massachusetts">
        <CardGrid items={coreServices} />
      </Section>
      <FAQSection faqData={faqData} />
    </>
  );
}

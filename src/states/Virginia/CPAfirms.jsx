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
          Reliable CPA Firm in Virginia for Your Business Success
        </Typography>

        <Typography fontSize={{ xs: "1rem", sm: "1.1rem" }} mb={3} opacity={0.9} color="#ffffff">
          Optimize Your Business Finances with Expert CPA Services in Virginia
        </Typography>

        <Typography fontSize="1rem" mb={4} opacity={0.9} color="#ffffff">
          Milta is a trusted provider of CPA services for small businesses in
          Virginia. As one of the leading CPA firms in Virginia, we deliver
          expert accounting, tax preparation, and financial advisory solutions
          to keep your business compliant, efficient, and growth-ready.
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
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        fontWeight={700}
        mb={4}
        textAlign="center"
        color={primaryGreen}
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
        <Typography fontSize="0.9rem" textAlign="justify">
          {item.desc}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= FAQ ================= */
const FAQSection = ({ faqData }) => (
  <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: sectionBg }}>
    <Container maxWidth="md">
      <Typography variant="h4" fontWeight={700} mb={4} textAlign="center">
        Frequently Asked Questions
      </Typography>

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
  </Box>
);

/* ================= EMPOWERMENT SECTION ================= */
const EmpowermentSection = ({ cards }) => (
  <Box sx={{ py: { xs: 8, md: 12 } }}>
    <Container maxWidth="lg">
      <Typography variant="h3" fontWeight={700} mb={4} textAlign="center">
        How Milta Supports Business Growth in Virginia
      </Typography>

      <Typography
        fontSize={{ xs: "1rem", md: "1.1rem" }}
        textAlign="center"
        maxWidth="900px"
        mx="auto"
        mb={6}
        sx={{ opacity: 0.9 }}
      >
        A reliable CPA firm in Virginia ensures accurate financial records and
        strategic insight. Milta simplifies bookkeeping, tax compliance, and
        financial analysis so businesses can focus on long-term growth.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              p: 5,
              borderRadius: 3,
              bgcolor: "#fff",
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={2}>
              {card.title}
            </Typography>
            <Typography fontSize="1rem" lineHeight={1.7}>
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
        Why Outsource CPA Services in Virginia?
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 4,
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              p: 4,
              bgcolor: "#fff",
              borderRadius: 3,
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
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
    </Container>
  </Box>
);

/* ================= MAIN PAGE ================= */
export default function CPAVirginia() {
  useFullSEO({
  // MAIN SEO
  title: "Reliable CPA Services for Small Businesses in Virginia",
  description:
    "We provide top CPA services for small businesses in Virginia, ensuring accuracy and growth. Partner with a trusted CPA firm in Virginia today.",
  keywords:
    "cpa services in virginia, cpa firms near me, cpa firms in virginia, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in virginia, certified public accountant near me",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-virginia/",
});

  const empowermentCards = [
    {
      title: "Efficiency Through Expertise",
      desc: "Outsourcing to Milta gives Virginia businesses access to experienced CPA professionals who improve accuracy while reducing operational costs.",
    },
    {
      title: "Focus on Strategic Growth",
      desc: "We manage accounting complexities so you can focus on scaling your business with confidence.",
    },
  ];

  const whyPartner = [
    { title: "Virginia Compliance", desc: "Accurate, compliant accounting aligned with Virginia and U.S. regulations." },
    { title: "Scalable Services", desc: "Flexible CPA services designed to grow with your business." },
    { title: "Cost Savings", desc: "Reduce overhead costs by up to 70% with outsourced CPA support." },
    { title: "Technology-Driven Accuracy", desc: "Advanced accounting tools ensure clean data and real-time insights." },
  ];

  const coreServices = [
    { title: "Accounting & Bookkeeping", desc: "Financial statements, reconciliations, AP/AR, payroll, and general ledger management." },
    { title: "Tax Planning & Preparation", desc: "Corporate, individual, sales, and payroll tax filings with full compliance." },
    { title: "Financial Advisory", desc: "Budgeting, forecasting, cash-flow management, and valuation services." },
    { title: "Catch-Up Accounting", desc: "Clean-up of backlogged and inaccurate financial records." },
    { title: "Software Setup & Conversion", desc: "QuickBooks, Xero, and cloud accounting migrations." },
    { title: "Audit & Assurance", desc: "Audits, reviews, compilations, and compliance reporting." },
  ];

  const faqData = [
    { q: "Why outsource CPA services?", a: "It reduces costs, improves efficiency, and provides expert support." },
    { q: "Do you follow U.S. accounting regulations?", a: "Yes, our team strictly follows U.S. GAAP and IRS standards." },
    { q: "Which software do you support?", a: "QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and more." },
    { q: "Do you offer business consulting?", a: "Yes, including growth planning and profitability analysis." },
    { q: "Do you support international accounting?", a: "Yes, including cross-border tax and reporting needs." },
  ];

  const outsourcingServices = [
    "Write-Up Services: Monthly, quarterly, and annual bookkeeping.",
    "Catch-Up & Clean-Up: Correcting and organizing financial records.",
    "Software Conversions: QuickBooks Desktop to Online or Xero.",
    "Accounting Reviews: Performed by U.S. CPAs and CMAs.",
    "Tax Return Preparation: Forms 1120, 1120S, 1065, 1040, 1041, 990.",
  ];

  return (
    <>
      <BannerSection />
      <EmpowermentSection cards={empowermentCards} />
      <OutsourcingSection services={outsourcingServices} />
      <Section title="Why Partner With Milta?">
        <CardGrid items={whyPartner} />
      </Section>
      <Box sx={{ py: { xs: 6, md: 9 }, background: greenGradient }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} mb={4} color="#fff" textAlign="center">
            Our Core CPA Services in Virginia
          </Typography>
          <CardGrid items={coreServices} />
        </Container>
      </Box>
      <FAQSection faqData={faqData} />
    </>
  );
}

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
const greenGradient =
  "linear-gradient(135deg, #09271bff 0%, #063d1eff 100%)";

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
          Top-Rated CPA Firm in New Jersey for Your Business Needs
        </Typography>

        <Typography fontSize={{ xs: "1rem", sm: "1.1rem" }} mb={3} opacity={0.9}  color="#ffffff">
          Elevate Your Financial Health with Premier CPA Services for Small
          Businesses in New Jersey.
        </Typography>

        <Typography fontSize="1rem" mb={4} opacity={0.9}  color="#ffffff">
          Are you searching for CPA services near me? Look no further! Milta is
          your trusted accounting firm in New Jersey, specializing in
          personalized tax planning and preparation for small businesses and
          individuals. Our certified public accountants ensure accuracy,
          compliance, and strategic growth tailored to your unique needs.
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

/* ================= EMPOWERMENT SECTION ================= */
const EmpowermentSection = ({ cards }) => (
  <Box sx={{ py: { xs: 8, md: 12 } }}>
    <Container maxWidth="lg">
      <Typography variant="h3" fontWeight={700} mb={4} textAlign="center">
        How Milta Empowers CPA Firms
      </Typography>

      <Typography
        fontSize="1.1rem"
        textAlign="center"
        maxWidth="900px"
        mx="auto"
        mb={6}
      >
        Every successful CPA firm in New Jersey understands that precise
        financial records and strategic insights are essential for growth.
        Managing bookkeeping, tax preparation, and financial analysis can
        stretch resources thin. Milta takes care of these complexities so your
        team can focus on advisory services.
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
              bgcolor: "#fff",
              borderRadius: 3,
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
      <Typography
        variant="h4"
        fontWeight={700}
        mb={4}
        color="#fff"
        textAlign="center"
      >
        Why Outsource Your CPA Services?
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
            <Typography fontWeight={600} mb={1} color={primaryGreen}>
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
    desc: "Access dedicated accounting professionals with optional backup support.",
  },
  {
    title: "Overnight Delivery",
    desc: "Work completed while you’re offline—ready by morning.",
  },
  {
    title: "Offload Non-Core Functions",
    desc: "Focus on growth while we manage accounting operations.",
  },
  {
    title: "High-Quality CPA Services in New Jersey",
    desc: "95%+ retention rate with consistent, high-quality results.",
  },
  {
    title: "Reduced Overheads",
    desc: "Save 60–70% on staffing and infrastructure costs.",
  },
  {
    title: "Diversify Your Customers",
    desc: "Expand into new industries without added training costs.",
  },
];

const WhyChooseMiltaSection = () => (
  <Section title="Why Choose Milta for CPA Services in New Jersey">
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
        <Accordion key={i} sx={{ mb: 2 }}>
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
export default function CPANewJersey() {
  useFullSEO({
  // MAIN SEO
  title: "Expert CPA Services for New Jersey Small Businesses | Milta",
  description:
    "Top-notch CPA services in New Jersey, specializing in accounting services for small businesses. Trusted as one of the best CPA firms in New Jersey.",
  keywords:
    "cpa services in new jersey, cpa firms near me, cpa firms in new jersey, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in new jersey, certified public accountant near me",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-newjersey/",
});

  const empowermentCards = [
    {
      title: "How Can Milta Empower Your CPA Firm?",
      desc: "Milta supports CPA firms in New Jersey by managing bookkeeping, tax preparation, and compliance, freeing your team to focus on advisory services.",
    },
    {
      title: "Operational Efficiency Through Outsourcing",
      desc: "Reduce payroll costs, improve accuracy, and scale effortlessly with Milta’s outsourcing solutions.",
    },
  ];

  const outsourcingServices = [
    "Monthly, Quarterly, and Annual Write-Up Services: Accurate data entry and reconciliations.",
    "Catch-Up and Clean-Up Services: Correcting and organizing financial records.",
    "Accounting Software Conversions: QuickBooks Online and Xero migrations.",
    "Accounting Reviews and Compilations: Performed by US CPAs and CMAs.",
    "Tax Return Preparation: Forms 1120, 1120S, 1065, 1040, 1041, and 990.",
  ];

  const faqData = [
    {
      q: "Why outsource CPA services?",
      a: "To reduce costs, increase efficiency, and access expert talent.",
    },
    {
      q: "Is Milta experienced with U.S. regulations?",
      a: "Yes, our team follows all U.S. accounting and tax standards.",
    },
    {
      q: "What software do you support?",
      a: "QuickBooks, Xero, Lacerte, Drake, TurboTax, and more.",
    },
  ];

  return (
    <>
      <BannerSection />
      <EmpowermentSection cards={empowermentCards} />
      <OutsourcingSection services={outsourcingServices} />
      <WhyChooseMiltaSection />
      <FAQSection faqData={faqData} />
    </>
  );
}

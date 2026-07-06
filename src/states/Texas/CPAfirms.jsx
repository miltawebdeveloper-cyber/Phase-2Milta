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
          Expert CPA Services in Texas for Small Business Success
        </Typography>

        <Typography fontSize={{ xs: "1rem", sm: "1.1rem" }} mb={3} opacity={0.9} color="#ffffff">
          Our Texas-based CPA professionals help small businesses gain financial
          clarity, ensure compliance, and strengthen long-term fiscal control.
        </Typography>

        <Typography fontSize="1rem" mb={4} opacity={0.9} color="#ffffff">
          Milta is a trusted CPA services provider in Texas, offering customized
          accounting and financial solutions for small businesses and
          individuals. Known for expertise in tax planning, bookkeeping, and
          forward-looking financial oversight, our certified CPA professionals
          deliver accurate insights, streamlined processes, and complete
          financial control across Texas.
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
  <Box sx={{ py: { xs: 8, md: 12 }, position: "relative" }}>
    <Container maxWidth="lg">
      <Typography variant="h3" fontWeight={700} mb={4} textAlign="center">
        How Milta Transforms Financial Challenges into Opportunities
      </Typography>

      <Typography
        fontSize={{ xs: "1rem", md: "1.1rem" }}
        textAlign="center"
        maxWidth="900px"
        mx="auto"
        mb={6}
        sx={{ opacity: 0.9 }}
      >
        A standout CPA firm in Texas doesn’t just crunch numbers—it delivers
        meticulous financial tracking and actionable insights. Yet juggling
        bookkeeping, tax compliance, and financial analysis can overwhelm
        entrepreneurs. Milta streamlines these processes, empowering CPA firms
        near you to prioritize strategic growth over administrative tasks.
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
            <Typography fontSize="1rem" lineHeight={1.7} color="text.secondary">
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
        Why Outsource CPA Services?
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
            <Typography fontSize="0.95rem" color="text.secondary">
              {service.split(":")[1]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

/* ================= MAIN PAGE ================= */
export default function CPATexas() {
  useFullSEO({
    title: "Expert CPA Services in Texas for Small Businesses | Milta",
    description:
      "Our Texas-based CPA professionals help small businesses gain financial clarity, ensure compliance, and strengthen long-term fiscal control.",
    keywords:
      "cpa services in texas, cpa firms near me, cpa firms in texas, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in texas, certified public accountant near me",
    canonical:
      "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-texas/",
  });

  const empowermentCards = [
    {
      title: "Precision-Driven Accounting Excellence",
      desc: "By partnering with Milta, you unlock access to seasoned professionals who boost productivity and minimize expenses. Our cutting-edge accounting approach blends advanced tools with industry expertise, optimizing workflows while slashing operational costs.",
    },
    {
      title: "From Complexity to Confidence",
      desc: "For businesses searching for CPA firms in Texas that combine innovation with reliability, Milta redefines certified public accountant services—transforming financial complexity into confidence.",
    },
  ];

  const outsourcingServices = [
    "Monthly, Quarterly, and Annual Write-Up Services: Data entry, reconciliations, and general ledger checks.",
    "Catch-Up and Clean-Up Services: Review and correction of books and records.",
    "Accounting Software Conversions: QuickBooks Desktop to QuickBooks Online or Xero.",
    "Accounting Reviews and Compilations: Performed by in-house US CPAs and CMAs.",
    "Tax Return Preparation: Forms 1120, 1120S, 1065, 1040, 1041, 990 using leading tax software.",
  ];

  const faqData = [
    {
      q: "Why should I outsource CPA services?",
      a: "Outsourcing helps reduce operational costs, enhances efficiency, and provides access to specialized expertise.",
    },
    {
      q: "Is Milta experienced in handling U.S.-based accounting regulations?",
      a: "Yes, our team is well-versed in U.S. tax laws, accounting standards, and regulatory compliance.",
    },
    {
      q: "What accounting software does Milta support?",
      a: "We support QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and other platforms.",
    },
    {
      q: "Do you offer consulting for business growth?",
      a: "Yes, Milta provides financial consulting including budgeting and profitability analysis.",
    },
    {
      q: "Can Milta assist with international accounting needs?",
      a: "Yes, we support cross-border tax compliance and global financial reporting.",
    },
  ];

  return (
    <>
      <BannerSection />
      <EmpowermentSection cards={empowermentCards} />
      <OutsourcingSection services={outsourcingServices} />
      <FAQSection faqData={faqData} />
    </>
  );
}

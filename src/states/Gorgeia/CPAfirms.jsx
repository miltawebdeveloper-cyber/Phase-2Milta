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
          Problem Solving CPA Firm in Georgia
        </Typography>
        <Typography fontSize={{ xs: "1rem", sm: "1.1rem" }} mb={3} opacity={0.9}  color="#ffffff">
          Transform Your Financial Challenges with the Best CPA Service for Small Businesses in Georgia
        </Typography>
        <Typography fontSize="1rem" mb={4} opacity={0.9}  color="#ffffff">
          Welcome to Milta CPA Services in Georgia, a trusted accounting firm dedicated to helping individuals and businesses with expert financial solutions. As one of the top CPA firms in Georgia, we specialize in accounting, tax preparation, and financial planning to ensure your business stays on track. Our team of certified professionals offers CPA services in Georgia that help you confidently manage your financial needs.
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
  <Box
    sx={{
      py: { xs: 8, md: 12 },
      position: "relative",
      overflow: "hidden",
      color: "#0b3303ff",
    }}
  >
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
      <Typography
        variant="h3"
        fontWeight={700}
        mb={4}
        textAlign="center"
      >
        How Milta Empowers CPA Firms
      </Typography>

      <Typography
        fontSize={{ xs: "1rem", md: "1.1rem" }}
        textAlign="center"
        maxWidth="900px"
        mx="auto"
        mb={6}
        sx={{ opacity: 0.9 }}
      >
        At the heart of every successful CPA firm in Georgia is the ability to maintain accurate financial records while providing strategic insights. Milta simplifies these processes, allowing CPA firms near me to focus on high-value financial strategy rather than routine bookkeeping.
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
              position: "relative",
              p: 5,
              borderRadius: 3,
              background: "#fff",
              color: "#000",
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 18px 36px rgba(0,0,0,0.25)",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -20,
                left: -20,
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: hoverOrange,
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              {index + 1}
            </Box>

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
  <Box
    sx={{
      py: { xs: 6, md: 9 },
      background: greenGradient,
    }}
  >
    <Container maxWidth="lg">
      <Typography variant="h4" fontWeight={700} mb={4} color="#fff" textAlign="center">
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
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Typography fontWeight={600} mb={1} color="#145a43">
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

/* ================= WHY CHOOSE MILTA SECTION ================= */
const benefits = [
  {
    title: "Available Full-Time",
    desc: "When you outsource to Milta, you gain access to full-time professionals dedicated to your accounting needs. Depending on your service package, we can even provide backup support to ensure continuous operations.",
  },
  {
    title: "Overnight Delivery",
    desc: "Operating in a different time zone allows us to work on your accounting tasks while you're offline, ensuring your deliverables are ready by the time you return to the office.",
  },
  {
    title: "Offload Non-Core Functions",
    desc: "By outsourcing your accounting functions to us, you can focus on growing your business and nurturing client relationships while we handle the financial complexities.",
  },
  {
    title: "High-Quality CPA Services in Georgia",
    desc: "Our team of skilled accounting professionals is committed to excellence. With a client retention rate exceeding 95%, we ensure consistent, high-quality service customizing to your business needs.",
  },
  {
    title: "Reduced Overheads",
    desc: "Outsourcing eliminates costs related to salaries, management, hiring, and training. You can achieve overall savings of 60-70%, significantly reducing operational expenses.",
  },
  {
    title: "Diversify Your Customers",
    desc: "Our expertise spans various industries and accounting platforms, allowing you to expand your client base without additional research or training investments.",
  },
];

const WhyChooseMiltaSection = () => (
  <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: sectionBg }}>
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        fontWeight={700}
        mb={6}
        textAlign="center"
        color={primaryGreen}
      >
        Why Choose Milta for CPA Services in Georgia
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 4,
        }}
      >
        {benefits.map((item, i) => (
          <Box
            key={i}
            sx={{
              p: 4,
              bgcolor: "#fff",
              borderRadius: 3,
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                bgcolor: hoverOrange,
                color: "#fff",
              },
            }}
          >
            <Typography fontWeight={700} mb={2}>
              {item.title}
            </Typography>
            <Typography fontSize="0.95rem" lineHeight={1.7}>
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

/* ================= MAIN PAGE ================= */
export default function CPAGeorgia() {
  useFullSEO({
  // MAIN SEO
  title: "Best CPA Services for Small Businesses in Georgia | Milta",
  description:
    "Milta offers the best CPA service for small businesses in Georgia, ensuring accurate accounting and business growth. Trusted CPA firms in Georgia.",
  keywords:
    "cpa services in georgia, cpa firms near me, cpa firms in georgia, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in georgia, certified public accountant near me",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-georgia/",
});

  const empowermentCards = [
    {
      title: "How Can Milta Empower Your CPA Firm?",
      desc: "At the core of any successful CPA firm in Georgia is the ability to maintain accurate financial records while providing strategic insights. Milta simplifies these processes, allowing CPA firms near me to focus on high-value financial strategy rather than routine bookkeeping.",
    },
    {
      title: "Operational Efficiency Through Outsourcing",
      desc: "By partnering with Milta, your firm gains access to a skilled team that provides reliable support for accounting needs. Our innovative approach combines accounting expertise with advanced technology, streamlining operations, reducing costs, and enhancing accuracy. Outsourcing your CPA services in Georgia helps cut payroll and overhead costs while improving overall efficiency.",
    },
  ];

  const whyPartner = [
    { title: "Local Expertise", desc: "As a premier provider of CPA services for small businesses in Georgia, we ensure compliance, accuracy, and timely filings for your clients." },
    { title: "Scalable Solutions", desc: "Seamlessly outsource accounting services for small business clients. Our team manages everything from payroll to financial reporting." },
    { title: "Cost Efficiency", desc: "Cut overhead with affordable tax preparation services in Georgia. Lower payroll expenses while enhancing operational efficiency." },
    { title: "Tech-Driven Precision", desc: "Utilize advanced tools for real-time insights, error-free data, and streamlined workflows." },
  ];

  const coreServices = [
    { title: "Accounting and Bookkeeping Services", desc: "Financial Statement Preparation, General Ledger Maintenance, Accounts Payable/Receivable Management, Bank and Credit Card Reconciliations, Payroll Processing and Compliance." },
    { title: "Tax Planning and Preparation", desc: "Corporate and Individual Tax Returns, Sales Tax and Payroll Tax Filings, Tax Compliance, Advisory Services, IRS Representation and Audit Support." },
    { title: "Financial Consulting and Advisory Services", desc: "Budgeting, Financial Forecasting, Cash Flow Management, Business Valuation, Risk Management, M&A Advisory." },
    { title: "Catch-Up and Clean-Up Services", desc: "Review and Correction of Historical Records, Reconciliation of Discrepancies, Updating Outdated Accounting Systems." },
    { title: "Accounting Software Setup and Conversion", desc: "QuickBooks Setup and Training, Conversions to QuickBooks Online, Cloud-Based Platform Migrations, Ongoing Support and Troubleshooting." },
    { title: "Audit and Assurance Services", desc: "Internal Audits, Risk Assessments, Financial Statement Audits, Reviews, Compilations, Compliance Audits, and Regulatory Reporting." },
  ];

  const faqData = [
    { q: "Why should I outsource CPA services?", a: "Outsourcing helps reduce operational costs, enhances efficiency, and provides access to specialized expertise." },
    { q: "Is Milta experienced in handling U.S.-based accounting regulations?", a: "Yes, our team is well-versed in U.S. tax laws, accounting standards, and regulatory compliance." },
    { q: "What accounting software does Milta support?", a: "QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and other leading accounting platforms." },
    { q: "Do you offer consulting for business growth?", a: "Yes, Milta provides financial consulting services including growth strategies, budgeting, and profitability analysis." },
    { q: "Can Milta assist with international accounting needs?", a: "Yes, we support businesses with international operations, covering cross-border tax compliance and financial reporting." },
  ];

  const outsourcingServices = [
    "Monthly, Quarterly, and Annual Write-Up Services: Data entry, account reconciliations, and a general ledger check to ensure accuracy.",
    "Catch-Up and Clean-Up Services: Write-up, review, and correction of books and records.",
    "Accounting Software Conversions: Transition from QuickBooks Desktop or other accounting software to QuickBooks Online or Xero.",
    "Accounting Reviews and Compilations: Performed by our in-house US CPAs and US CMAs.",
    "Tax Return Preparation: Preparation of Forms 1120, 1120S, 1065, and related 1040 and 1041, 990 using software like Lacerte, Drake, Tax Slayer, TurboTax, and more.",
  ];

  return (
    <>
      <BannerSection />
      <EmpowermentSection cards={empowermentCards} />
      <OutsourcingSection services={outsourcingServices} />
      <WhyChooseMiltaSection />
      <Section title="Why Partner With Milta?">
        <CardGrid items={whyPartner} />
      </Section>
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          background: greenGradient,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} mb={4} color="#fff" textAlign="center">
            Our Core CPA Services in Georgia
          </Typography>
          <CardGrid items={coreServices} />
        </Container>
      </Box>
      <FAQSection faqData={faqData} />
    </>
  );
}

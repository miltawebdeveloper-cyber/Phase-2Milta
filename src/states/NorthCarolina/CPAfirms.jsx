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
          Top-Rated CPA Firm in North Carolina for Your Business Needs
        </Typography>
        <Typography fontSize={{ xs: "1rem", sm: "1.1rem" }} mb={3} opacity={0.9}  color="#ffffff">
          Transform Your Finances with Premier Tax Preparation Services in North Carolina.
        </Typography>
        <Typography fontSize="1rem" mb={4} opacity={0.9}  color="#ffffff">
          Looking for tax services near me? Milta is your trusted accounting firm near me, delivering expert tax planning and preparation tailored to small businesses and individuals. As a leading provider of tax preparation services in North Carolina, our CPAs ensure accuracy, compliance, and strategic growth. Specializing in NC tax preparation, we streamline filings, maximize deductions, and offer proactive financial guidance. From bookkeeping to complex tax strategies, our team empowers you to thrive. Partner with Milta, the local choice for reliable, results-driven CPA services in North Carolina.
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
        Every thriving CPA firm in South Carolina recognizes that accurate financial records and strategic insights are vital for growth. Managing daily bookkeeping, tax planning, and comprehensive financial analysis can strain resources. Milta handles these complexities so your team can focus on high-value advisory services.
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
    title: "High-Quality CPA Services",
    desc: "Our team of skilled accounting professionals is committed to excellence. With a client retention rate exceeding 95%, we ensure consistent, high-quality service customized to your business needs.",
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
        Why Choose Milta for CPA Services in South Carolina
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
export default function CPASouthCarolina() {
  useFullSEO({
  // MAIN SEO
  title: "Expert CPA Services for North Carolina Small Businesses | Milta",
  description:
    "Milta offers the best CPA services in North Carolina, specializing in tax preparation, bookkeeping, and growth-focused financial strategy.",
  keywords:
    "cpa services in north carolina, cpa firms near me, cpa firms in north carolina, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in north carolina, certified public accountant near me",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-northcarolina/",
});

  const empowermentCards = [
  {
    title: "How Can Milta Empower Your CPA Firm?",
    desc: "Every thriving CPA firm in North Carolina knows that meticulous financial records and strategic insights drive success. Yet, balancing daily bookkeeping, tax planning and preparation, and deep financial analysis can drain your resources. Let Milta handle the complexities so your team can focus on high-value advisory roles.",
  },
  {
    title: "Operational Efficiency Through Outsourcing",
    desc: "By partnering with Milta, your firm gains access to a skilled team that provides reliable support for accounting services for small businesses. Our innovative approach, combining accounting expertise with technology, streamlines operations, reduces costs, and enhances accuracy. Outsourcing your CPA services in North Carolina to Milta helps cut payroll and overhead expenses while improving overall efficiency.",
  },
];

/* ================= WHY PARTNER / CARD GRID ================= */
const whyPartner = [
  { title: "Local Expertise", desc: "As a leading provider of tax preparation services in North Carolina, we ensure compliance, accuracy, and timely filings for your clients." },
  { title: "Scalable Solutions", desc: "Outsource accounting services for small business clients seamlessly. Our team manages everything from payroll to financial reporting." },
  { title: "Cost Efficiency", desc: "Reduce overhead with affordable NC tax preparation support. Slash payroll expenses while boosting operational efficiency." },
  { title: "Tech-Driven Precision", desc: "Leverage advanced tools for real-time insights, error-free data, and streamlined workflows." },
];

/* ================= OUTSOURCING / CPA SERVICES ================= */
const outsourcingServices = [
  "Monthly, Quarterly, and Annual Write-Up Services: Data entry, account reconciliations, and a general ledger check to ensure accuracy.",
  "Catch-Up and Clean-Up Services: Write-up, review, and correction of books and records.",
  "Accounting Software Conversions: Transition from QuickBooks Desktop or other accounting software to QuickBooks Online or Xero.",
  "Accounting Reviews and Compilations: Performed by our in-house US CPAs and US CMAs.",
  "Tax Return Preparation: Preparation of Forms 1120, 1120S, 1065, and related 1040 and 1041, 990 using software like Lacerte, Drake, Tax Slayer, TurboTax, and more.",
];

/* ================= CORE SERVICES ================= */
const coreServices = [
  {
    title: "Accounting and Bookkeeping Services",
    desc: `Financial Statement Preparation: Monthly, quarterly, and annual reports that provide clear insights into your business performance.
General Ledger Maintenance: Regular updates and reconciliations to ensure accuracy and consistency.
Accounts Payable and Receivable Management: Efficient tracking of incoming and outgoing payments to maintain healthy cash flow.
Bank and Credit Card Reconciliations: Regular reconciliations to identify discrepancies and prevent fraud.
Payroll Processing and Compliance: Accurate payroll management with full compliance to federal and state regulations.`,
  },
  {
    title: "Tax Planning and Preparation",
    desc: `Corporate Tax Return Preparation: Handling Forms 1120S, and 1065 with precision.
Individual Tax Return Preparation: Comprehensive preparation for Forms 1040 and 1041.
Sales Tax and Payroll Tax Filings: Ensuring accurate and timely filings to avoid penalties.
Tax Compliance and Advisory Services: Ongoing support to help you stay compliant with the latest tax regulations.
IRS Representation and Audit Support: Expert guidance during audits to protect your interests.`,
  },
  {
    title: "Financial Consulting and Advisory Services",
    desc: `Budgeting and Financial Forecasting: Proactive financial planning to meet business goals.
Cash Flow Management: Strategies to optimize liquidity and improve financial stability.
Business Valuation and Financial Analysis: Comprehensive assessments to understand your business’s true value.
Risk Management and Internal Controls: Identifying potential risks and implementing robust control mechanisms.
Mergers and Acquisitions Advisory: Expert advice to navigate complex transactions and maximize value.`,
  },
  {
    title: "Catch-Up Services",
    desc: `Review and Correction of Historical Records: Identifying errors and making necessary adjustments.
Reconciliation of Discrepancies: Ensuring accuracy across all financial accounts.
Updating Outdated Accounting Systems: Transitioning to modern systems for improved efficiency.`,
  },
  {
    title: "Accounting Software Setup and Conversion",
    desc: `QuickBooks Setup and Training: Custom configurations and hands-on training for your team.
Conversions to QuickBooks Online: Seamless migration from desktop versions to cloud-based solutions.
Cloud-Based Platform Migrations: Moving to platforms like Xero for real-time financial management.
Ongoing Support and Troubleshooting: Continuous assistance to resolve technical issues promptly.`,
  },
  {
    title: "Audit and Assurance Services",
    desc: `Internal Audits and Risk Assessments: Identifying operational risks and recommending improvements.
Financial Statement Audits, Reviews, and Compilations: Ensuring the accuracy and reliability of your financial reports.
Compliance Audits and Regulatory Reporting: Helping businesses meet industry-specific regulatory requirements.`,
  },
];

/* ================= BENEFITS ================= */
const benefits = [
  { title: "Available Full-Time", desc: "Gain access to full-time professionals dedicated to your accounting needs with backup support for continuous operations." },
  { title: "Overnight Delivery", desc: "Operating across time zones ensures deliverables are ready when you return to the office." },
  { title: "Offload Non-Core Functions", desc: "Focus on growing your business while we handle the financial complexities." },
  { title: "High-Quality CPA Services", desc: "Skilled accounting professionals ensure consistent, high-quality service tailored to your business." },
  { title: "Reduced Overheads", desc: "Outsourcing eliminates costs related to salaries, management, hiring, and training, saving 60-70%." },
  { title: "Diversify Your Customers", desc: "Expand your client base without additional research or training investments thanks to our industry expertise." },
];

/* ================= FAQ ================= */
const faqData = [
  { q: "Why should I outsource CPA services?", a: "Outsourcing helps reduce operational costs, enhances efficiency, and provides access to specialized expertise." },
  { q: "Is Milta experienced in handling U.S.-based accounting regulations?", a: "Yes, our team is well-versed in U.S. tax laws, accounting standards, and regulatory compliance." },
  { q: "What accounting software does Milta support?", a: "We support QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and other leading accounting platforms." },
  { q: "Do you offer consulting for business growth?", a: "Yes, Milta provides financial consulting services that include growth strategies, budgeting, and profitability analysis." },
  { q: "Can Milta assist with international accounting needs?", a: "Yes, we support businesses with international operations, covering cross-border tax compliance and financial reporting." },
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
            Our Core CPA Services in South Carolina
          </Typography>
          <CardGrid items={coreServices} />
        </Container>
      </Box>
      <FAQSection faqData={faqData} />
    </>
  );
}

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
import WaveDivider from "../../components/homeComp/WaveDivider";
import useFullSEO from "../../utils/useFullSEO";

/* ================= COLORS ================= */
const primaryGreen = "#0b3d2e";
const hoverOrange = "#ff9800";
const softOrange = "#fff3e0";
const white = "#fff";
const sectionBg = "#f6f8f3";

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
          Reliable Data Entry & Management Services in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Massachusetts, USA
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Our data entry companies prioritize precision and compliance, ensuring seamless integration of critical information into your systems.
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
            "&:hover": {
              bgcolor: "#ffa726",
              transform: "translateY(-2px)",
            },
          }}
          onClick={() => navigate("/contact")}
        >
          Claim Your Free 30-Min Zoom Discovery Call Now
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

      <Box maxWidth={900} mx="auto" textAlign="left">
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
      gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
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

/* ================= DATA ENTRY SERVICES ================= */
const DataEntryServices = () => {
  const services = [
    { title: "General Ledger Entry", desc: "Maintain accurate and thorough general ledger documentation of all financial activities." },
    { title: "Accounts Payable & Receivable", desc: "Manage billing and payments to streamline cash flow and enhance vendor relationships." },
    { title: "Invoice Data Entry", desc: "Efficient processing of invoices for timely payments and organized record-keeping." },
    { title: "Bank Reconciliation", desc: "Reconcile bank statements with accounting records to ensure consistency and accuracy." },
    { title: "Payroll Data Entry", desc: "Manage salaries, deductions, and ensure payroll compliance." },
    { title: "Expense Report Data Management", desc: "Organize and analyze business spending for efficient planning and payments." },
    { title: "Financial Statement Preparation", desc: "Prepare accurate balance sheets and profit & loss statements for informed decision-making." },
    { title: "Custom Data Entry Services", desc: "Tailored solutions to meet unique business requirements." },
    { title: "QuickBooks Data Entry", desc: "Specialized QuickBooks integration to maintain accurate financial records and reporting." },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #09271b 0%, #063d1e 100%)",
        py: { xs: 7, md: 11 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={6}
          textAlign="center"
          color={hoverOrange}
        >
          Our Data Entry Services in Massachusetts, USA
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: white,
                p: 4,
                borderRadius: 4,
                borderTop: `5px solid ${hoverOrange}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <Typography fontWeight={700} mb={2} color={primaryGreen}>
                {item.title}
              </Typography>
              <Typography fontSize="0.95rem">{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= FAQ SECTION ================= */
const FAQSection = () => {
  const faqData = [
    { q: "What are accounting data entry services?", a: "Accounting data entry involves recording financial transactions into organized systems for accurate reporting and analysis, essential for up-to-date records." },
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging the expertise of professionals." },
    { q: "Are your services customized for small businesses?", a: "Yes, our services are specifically designed for small and medium-scale businesses in the USA." },
    { q: "How do you ensure data security?", a: "We use secure data transfer methods, encryption, and confidentiality agreements to protect sensitive information." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely! We offer tailored alternatives to match your specific requirements." },
    { q: "What software do you use for accounting data entry?", a: "We work with QuickBooks, Xero, and other custom platforms based on client preferences." },
    { q: "How quickly can you process my data?", a: "Turnaround depends on data volume, but we deliver timely and efficient service." },
    { q: "Is your team familiar with US accounting standards?", a: "Yes, our team is knowledgeable in US accounting rules and practices." },
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
          Frequently Asked Questions (FAQs)
        </Typography>

        {faqData.map((item, i) => (
          <Accordion
            key={i}
            sx={{
              mb: 2,
              borderRadius: 2,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: hoverOrange }} />}
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
export default function DataEntryMassachusetts() {
  useFullSEO({
  // MAIN SEO
  title: "Stress Release Data Entry Companies in Massachusetts, USA",
  description:
    "We specialize in accounting data entry and data entry services designed to streamline workflows and secure sensitive data.",
  keywords:
    "data entry companies, accounting data entry, data entry services, data management services",
  author: "Milta Accounting",
  canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-massachusetts/",
});

  const highlights = [
    "Accurate & Compliant Data Entry",
    "Scalable Data Management",
    "QuickBooks Integration",
    "Tailored Solutions for Businesses",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Who We Are & What We Do">
        <Typography mb={3} sx={{ textAlign: "center" }}>
          As a pioneer among data entry companies, we provide accounting data entry solutions tailored to the needs of U.S. small and midsize businesses.
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Our dedicated team converts raw data into compliance-ready financial records, ensuring accuracy, speed, and scalability.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Experience Accuracy and Efficiency">
        <Typography mb={4} sx={{ textAlign: "center" }}>
          From precise data aggregation and reconciliation to real-time reporting, our holistic data management strategies empower businesses to focus on growth.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DataEntryServices />

      <FAQSection />
    </>
  );
}

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
          Expert Outsourcing Accounting & Data Entry Services in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Connecticut
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          For your small business operations, our professional accounting and data entry services enhance accuracy, save time, and drive growth.
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
          Book a Free 30-Minute Zoom Consultation
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

/* ================= HIGHLIGHT BOXES ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
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

/* ================= SERVICES ================= */
const AccountingServices = () => {
  const services = [
    { title: "General Ledger Entry", desc: "Maintain accurate financial records by documenting all transactions methodically." },
    { title: "Accounts Payable & Receivable", desc: "Manage billing and payments accurately to streamline cash flow and vendor relationships." },
    { title: "Invoice Data Entry", desc: "Process invoices efficiently for timely payments and organized record-keeping." },
    { title: "Bank Reconciliation", desc: "Ensure consistency by reconciling bank statements with accounting records." },
    { title: "Payroll Data Entry", desc: "Manage payroll accurately from salaries to deductions, ensuring compliance." },
    { title: "Expense Report Management", desc: "Organize and evaluate business expenses for efficient planning and payments." },
    { title: "Financial Statement Preparation", desc: "Prepare balance sheets and profit & loss statements for better decision-making." },
    { title: "Custom Data Entry Services", desc: "Flexible solutions tailored to your unique business requirements." },
    { title: "QuickBooks Data Entry", desc: "Integration and management of QuickBooks for accurate financial records and reporting." },
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
          Our Data Entry Services in USA
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
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
  const faqs = [
    { q: "What is accounting data entry?", a: "Accounting data entry involves recording financial transactions into organized systems for accurate reporting and analysis." },
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging professional expertise." },
    { q: "Are your services customized for small businesses?", a: "Yes, our services are specifically designed for small and medium-sized enterprises in the USA." },
    { q: "How do you ensure data security?", a: "We use secure data transfer methods, encryption, and confidentiality agreements to protect sensitive information." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely! We offer tailored solutions to match your specific requirements." },
    { q: "What software do you use?", a: "We work with QuickBooks, Xero, and other platforms as per client preference." },
    { q: "How quickly can you process my data?", a: "Turnaround time depends on data volume, but we deliver timely and efficient service." },
    { q: "Is your team familiar with US accounting standards?", a: "Yes, our staff is knowledgeable in US accounting rules and principles." },
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
          Frequently Asked Questions
        </Typography>

        {faqs.map((item, i) => (
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
export default function AccountingDataEntryConnecticut() {
  useFullSEO({
  // MAIN SEO
  title: "Outsourcing Accounting Data Entry Companies in Connecticut",
  description:
    "Top outsourcing accounting and data entry companies in Connecticut. Enhance your business efficiency with accurate and cost-effective data entry.",
  keywords:
    "data entry companies, accounting data entry, data entry services, data management services",
  author: "Milta Accounting",
  canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-connecticut/",
});

  const highlights = [
    "Accuracy & Efficiency",
    "Time-Saving Solutions",
    "Customized for Small Businesses",
    "Professional Expertise",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Our Identity and Activities">
        <Typography mb={3}>
          Welcome to Milta, your go-to source for dependable accounting data entry services for small and medium enterprises in the USA.
        </Typography>
        <Typography>
          Our team ensures financial records are accurate, current, and compliant, allowing you to make informed business decisions.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Our Efficient Accounting Data Entry Process">
        <Typography mb={4}>
          We handle your financial data with precision and efficiency, from collection to reporting:
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <AccountingServices />

      <FAQSection />
    </>
  );
}

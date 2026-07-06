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
            Florida
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Enhance accuracy, save time, and drive growth for your business. Let
          us handle your data complexities.
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
      gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
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
          textAlign: "center",
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
const DataEntryServices = () => {
  const services = [
    { title: "General Ledger Entry", desc: "Maintain accurate and thorough general ledger documentation of all financial activities." },
    { title: "Accounts Payable & Receivable", desc: "Manage billing and payments to streamline cash flow and vendor relationships." },
    { title: "Invoice Data Entry", desc: "Process invoices efficiently for timely payments and organized records." },
    { title: "Bank Reconciliation", desc: "Reconcile bank statements to ensure consistency and eliminate discrepancies." },
    { title: "Payroll Data Entry", desc: "Accurate and compliant payroll records from salaries to deductions." },
    { title: "Expense Report Management", desc: "Arrange and analyze business expenses for efficient planning." },
    { title: "Financial Statement Preparation", desc: "Prepare balance sheets and profit & loss statements for informed decision-making." },
    { title: "Custom Data Entry Services", desc: "Tailored solutions to meet unique business requirements and workflows." },
    { title: "QuickBooks Data Entry", desc: "Manage QuickBooks entries, invoices, and reporting to maintain accessible financial records." },
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
          Our Data Entry Services in Florida
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
                textAlign: "center",
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
    { q: "What is accounting data entry?", a: "Recording financial transactions into organized systems for accurate reporting and analysis." },
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging professional expertise." },
    { q: "Are your services customized for small businesses?", a: "Yes, we design our solutions specifically for small and medium-sized businesses in the USA." },
    { q: "How do you ensure data security?", a: "We use secure data transfer, encryption, and confidentiality agreements to protect your information." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely! We provide flexible solutions tailored to your business needs." },
    { q: "What software do you use?", a: "We work with QuickBooks, Xero, and other preferred accounting platforms." },
    { q: "How quickly can you process my data?", a: "Turnaround depends on volume, but we prioritize timely and efficient service." },
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
          Frequently Asked Questions (FAQs)
        </Typography>

        {faqData.map((item, i) => (
          <Accordion key={i} sx={{ mb: 2, borderRadius: 2, "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: hoverOrange }} />}>
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
/* ================= PAGE ================= */
export default function AccountingDataEntryFlorida() {
  useFullSEO({
    title: "Payroll Solutions for Businesses in Connecticut | Milta Accounting",
    description:
      "Boost payroll efficiency and manage costs effectively with our professional payroll management services in Connecticut. Contact us today! ",
    keywords:
      "payroll management services in connecticut, payroll management system, payroll management company, payroll management services, payroll management",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/payroll-management-services-in-the-connecticut/",
  });

  const payrollHighlights = [
    "Accurate Payroll Processing",
    "Full Tax Compliance",
    "Secure Payroll Systems",
    "Scalable Payroll Solutions",
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <BannerSection />

      {/* ================= INTRO ================= */}
      <Section title="Payroll Management Services in Connecticut">
        <Typography mb={3}>
          Accurate payroll processing is a cornerstone of successful business operations, yet it is often one of the most complex and regulation-heavy responsibilities. At Milta Accounting, we offer reliable Payroll Management Services in Connecticut, helping businesses streamline payroll workflows, reduce administrative errors, and stay fully compliant with federal, state, and local payroll requirements.
        </Typography>

        <Typography>
          As your trusted payroll management partner, we take full ownership of the payroll process—carefully managing wage calculations, deductions, and tax filings while ensuring every payment and submission is completed correctly and on schedule.
        </Typography>
      </Section>

      <WaveDivider />

      {/* ================= WHAT WE HANDLE ================= */}
      <Section title="End-to-End Payroll Management You Can Rely On" bg={sectionBg}>
        <Typography mb={4}>
         Our payroll administration services are designed to deliver a technologically advanced and well-organized payroll management solution to companies of all sizes. We manage everything from timesheets to payroll tax filings, allowing you to focus on business growth instead of administrative burdens.
        </Typography>

        <HighlightBoxes
          boxes={[
            "Employee Timesheet Management",
            "Accurate Wage & Overtime Calculation",
            "Payroll Tax Filing & Payments",
            "Payslip Generation & Reporting",
          ]}
        />
      </Section>

      {/* ================= PAYROLL SYSTEM ================= */}
      {/* ================= PAYROLL SYSTEM – COINLY STYLE ================= */}
<Box sx={{ py: { xs: 6, md: 9 }, bgcolor: "#f9fbfa" }}>
  <Container maxWidth="lg">
    <Typography
      variant="h4"
      fontWeight={800}
      mb={6}
      textAlign="center"
      color={primaryGreen}
      fontSize={{ xs: "1.5rem", md: "2.1rem" }}
    >
      How Our Payroll Management System Works
    </Typography>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
        gap: 4,
      }}
    >
      {[
        {
          step: "01",
          title: "Time & Wage Calculation",
          desc: "Working hours, overtime, paid leave, holidays, and gross pay estimation after deductions.",
        },
        {
          step: "02",
          title: "Payroll Processing & Payments",
          desc: "Automated payroll runs, direct deposits, paper checks, and on-time salary disbursement.",
        },
        {
          step: "03",
          title: "Payroll Reporting & Insights",
          desc: "Labor cost analysis, employee headcount, leave balances, and earning insights.",
        },
        {
          step: "04",
          title: "Payroll Tax Processing & Deductions",
          desc: "Federal, state, and local tax calculation, automated payments, and voluntary deductions.",
        },
      ].map((item, i) => (
        <Box
          key={i}
          sx={{
            p: 4,
            borderRadius: 3,
            bgcolor: white,
            border: "1px solid #e6efea",
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            display: "flex",
            gap: 3,
            alignItems: "flex-start",
          }}
        >
          {/* Step Number */}
          <Box
            sx={{
              minWidth: 44,
              height: 44,
              borderRadius: "50%",
              bgcolor: "#e9f5ef",
              color: primaryGreen,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.95rem",
            }}
          >
            {item.step}
          </Box>

          {/* Content */}
          <Box>
            <Typography fontWeight={700} mb={1} color={primaryGreen}>
              {item.title}
            </Typography>
            <Typography fontSize="0.95rem" color="#4a5d55">
              {item.desc}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Container>
</Box>


      {/* ================= WHY PAYROLL ================= */}
      <Section title="Why Payroll Management Is Essential for US Businesses" bg={sectionBg}>
        <HighlightBoxes
          boxes={[
            "Employee Satisfaction",
            "Time Efficiency",
            "Data Security",
            "Cost Savings",
          ]}
        />

        <Typography mt={4}>
          Professional payroll management ensures compliance, accuracy, and
          stability while allowing your business to scale with confidence.
        </Typography>
      </Section>

      {/* ================= OUTSOURCING BENEFITS ================= */}
      <Section title="Why Choose Outsourced Payroll Management Services?">
        <Typography mb={4}>
          Outsourcing payroll reduces compliance exposure, eliminates operational
          strain, and ensures payroll is handled correctly from start to finish.
        </Typography>

        <HighlightBoxes
          boxes={[
            "More Time for Business Growth",
            "Regulatory Confidence",
            "Higher Payroll Accuracy",
            "Enhanced Data Protection",
          ]}
        />
      </Section>

      {/* ================= SECURITY ================= */}
      <Section title="Trusted Payroll Data Security & Compliance" bg={sectionBg}>
        <Typography mb={3}>
          Our payroll management system is built with enterprise-grade security
          controls.
        </Typography>

        <HighlightBoxes
          boxes={[
            "Role-Based Access Control",
            "Fraud & Identity Protection",
            "Continuous System Monitoring",
            "Strict Data Confidentiality",
          ]}
        />
      </Section>

      {/* ================= PAYROLL FAQ ================= */}
      <Box sx={{ py: 9, bgcolor: sectionBg }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            fontWeight={800}
            mb={5}
            textAlign="center"
            color={primaryGreen}
          >
            Payroll Management FAQs
          </Typography>

          {[
            {
              q: "What are payroll management services?",
              a: "Payroll management services handle employee salary calculations, tax deductions, payroll processing, pay slip generation, and compliance with federal, state, and local regulations. These services ensure employees are paid accurately and on time while businesses remain compliant with payroll laws.",
            },
            {
              q: "How do payroll management services ensure compliance and accuracy?",
              a: "Professional payroll management companies use advanced payroll management systems and experienced specialists to calculate wages, manage deductions, file payroll taxes, and follow current labor laws. Automated processes and regular audits help maintain accuracy and compliance.",
            },
            {
              q: "Why should businesses outsource payroll management services in the connecticut?",
              a: "Outsourcing payroll management services in the connecticut helps businesses save time, reduce compliance risks, minimize errors, and protect sensitive employee data. Payroll experts stay updated with changing tax laws and regulations, ensuring accurate filings and timely payments.",
            },
            {
              q: "Is payroll outsourcing suitable for small and growing businesses?",
              a: "Yes. Payroll outsourcing is ideal for small and growing businesses that lack in-house payroll expertise or are expanding their workforce. Payroll management services scale easily with business growth and eliminate the need for costly software and dedicated payroll staff.",
            },
          ].map((item, i) => (
            <Accordion
              key={i}
              sx={{ mb: 2, borderRadius: 2, "&:before": { display: "none" } }}
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
    </>
  );
}

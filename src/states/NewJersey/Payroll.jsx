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
          Trusted Payroll Management Services in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            New Jersey
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Enhance payroll efficiency and manage costs effectively with our
          professional payroll management services in New Jersey.
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
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
      },
      gap: 3,
      mt: 2,
      justifyItems: "center",
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
          width: "100%",
          maxWidth: 260,
        }}
      >
        <Typography fontWeight={700} color={primaryGreen}>
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= PAGE ================= */
export default function PayrollManagementNewJersey() {
  useFullSEO({
    title: "Trusted Payroll Management Services for New Jersey | Milta",
    description:
      "Enhance payroll efficiency and manage costs effectively with our professional payroll management services in New Jersey. Contact us today for reliable payroll support.",
    keywords:
      "payroll management services in new jersey, payroll management system, payroll management company, payroll management services, payroll management",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/payroll-management-services-in-the-new-jersey/",
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <BannerSection />

      {/* ================= INTRO ================= */}
      <Section title="Payroll Management Services in New Jersey">
        <Typography mb={3}>
          Payroll accuracy plays a critical role in business operations, but
          managing it in line with ever-changing regulations can be challenging.
          Milta Accounting offers expert Payroll Management Services in New
          Jersey, designed to simplify payroll processing, reduce administrative
          burden, and ensure full compliance with federal, state, and local laws.
        </Typography>

        <Typography>
          As your dedicated payroll partner, we manage the complete payroll
          lifecycle—from wage calculations and deductions to tax filings and
          timely salary payments—so you can operate with confidence knowing your
          payroll is handled correctly and on schedule.
        </Typography>
      </Section>

      <WaveDivider />

      {/* ================= WHAT WE HANDLE ================= */}
      <Section title="End-to-End Payroll Management You Can Rely On" bg={sectionBg}>
        <Typography mb={4}>
          Our payroll administration services deliver a secure, technology-driven
          payroll management solution for businesses of all sizes. We manage
          everything from employee timesheets to payroll tax filings, allowing
          you to focus on business growth instead of administrative complexity.
        </Typography>

        <HighlightBoxes
          boxes={[
            "Employee Timesheet Management",
            "Accurate Calculation of Wages & Overtime",
            "Payroll Tax Calculation, Payment & Filing",
            "Payslip Generation & Payroll Reporting",
            "Compliance with US Payroll Laws & Labor Regulations",
          ]}
        />
      </Section>

      {/* ================= PAYROLL SYSTEM ================= */}
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
                desc: `Working hours and hourly wages
Paid leave, vacation, and holidays
Overtime and non-exempt employee calculations
Gross pay estimation after deductions`,
              },
              {
                step: "02",
                title: "Payroll Processing & Payments",
                desc: `Direct deposits or paper checks
Automated payroll runs
On-time salary disbursement`,
              },
              {
                step: "03",
                title: "Payroll Reporting & Insights",
                desc: `Labor cost analysis
Employee headcount tracking
Vacation and leave balances
Highest and lowest earning employees`,
              },
              {
                step: "04",
                title: "Payroll Tax Processing & Deductions",
                desc: `Federal, state, and local tax calculation
Automated tax payments to authorities
Voluntary deductions and wage garnishments`,
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
                }}
              >
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
                  }}
                >
                  {item.step}
                </Box>

                <Box>
                  <Typography fontWeight={700} mb={1} color={primaryGreen}>
                    {item.title}
                  </Typography>
                  <Typography fontSize="0.95rem" whiteSpace="pre-line">
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
          
            "Time Efficiency",
            "Data Security",
            "Scalability",
            "Cost Savings",
          ]}
        />
        <Typography mt={4}>
          Effective payroll management directly impacts compliance, employee
          satisfaction, and long-term business stability.
        </Typography>
      </Section>

      {/* ================= FAQ ================= */}
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
              a: "Payroll management services handle salary calculations, tax deductions, payroll processing, payslip generation, and compliance with federal, state, and local regulations.",
            },
            {
              q: "How do payroll services ensure compliance and accuracy?",
              a: "Payroll specialists use advanced payroll systems, automated checks, and updated tax rules to ensure accurate processing and regulatory compliance.",
            },
            {
              q: "Why outsource payroll management services in New Jersey?",
              a: "Outsourcing helps businesses save time, reduce compliance risk, improve accuracy, and protect sensitive payroll data.",
            },
            {
              q: "Is payroll outsourcing suitable for small businesses?",
              a: "Yes. Payroll outsourcing is ideal for small and growing businesses that lack in-house payroll expertise and need scalable solutions.",
            },
          ].map((item, i) => (
            <Accordion key={i} sx={{ mb: 2, borderRadius: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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

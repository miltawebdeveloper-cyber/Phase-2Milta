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
          Reliable Payroll Solutions for Businesses in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            New York
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Improve efficiency and control costs with our professional payroll
          management services in New York. Reach out today for affordable,
          compliant payroll solutions.
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
export default function PayrollManagementNewYork() {
  useFullSEO({
    title: "Reliable Payroll Solutions for Businesses in New York | Milta",
    description:
      "Improve efficiency and control costs with our professional payroll management services in New York. Reach out today for affordable, compliant payroll solutions.",
    keywords:
      "payroll management services in new york, payroll management system, payroll management company, payroll management services, payroll management",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/payroll-management-services-in-the-newyork/",
  });

  return (
    <>
      <BannerSection />

      <Section title="Payroll Management Services in New York">
        <Typography mb={3}>
          Managing payroll with precision is essential for every business, yet it
          remains one of the most regulation-intensive and time-consuming tasks.
          At Milta Accounting, we provide dependable Payroll Management Services in
          New York, enabling businesses to simplify payroll operations, minimize
          errors, and maintain full compliance with federal, state, and local
          payroll laws.
        </Typography>

        <Typography>
          As a trusted payroll management partner, we handle your entire payroll
          responsibility—accurately calculating employee wages, deductions, and
          tax obligations, and ensuring all payments and filings are completed on
          time, every time.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="End-to-End Payroll Management You Can Rely On" bg={sectionBg}>
        <Typography mb={4}>
          Our payroll administration services are designed to deliver a
          technologically advanced and well-organized payroll management
          solution to companies of all sizes.
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

      <Section title="Why Choose Outsourced Payroll Management Services?">
        <Typography mb={4}>
          By outsourcing Payroll Management Services in New York, businesses can
          reduce compliance exposure, eliminate operational strain, and ensure
          payroll is handled correctly from start to finish.
        </Typography>

        <HighlightBoxes
          boxes={[
            "More Time for Growth",
            "Regulatory Confidence",
            "Higher Accuracy",
            "Enhanced Data Protection",
          ]}
        />
      </Section>

      <Section title="Trusted Payroll Data Security & Compliance" bg={sectionBg}>
        <Typography>
          Our payroll management system is built with strong security and
          compliance controls including role-based access, identity protection,
          fraud prevention, and continuous monitoring.
        </Typography>
      </Section>

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
              a: "Payroll management services handle employee salary calculations, tax deductions, payroll processing, pay slip generation, and compliance with federal, state, and local regulations.",
            },
            {
              q: "How do payroll management services ensure compliance and accuracy?",
              a: "Professional payroll management companies use advanced systems and specialists to manage payroll and tax filings accurately.",
            },
            {
              q: "Why should businesses outsource payroll management services in New York?",
              a: "Outsourcing payroll management services in New York helps businesses save time, reduce compliance risks, minimize errors, and protect sensitive employee data.",
            },
            {
              q: "Is payroll outsourcing suitable for small and growing businesses?",
              a: "Yes. Payroll outsourcing scales easily with business growth and removes the need for in-house payroll staff.",
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

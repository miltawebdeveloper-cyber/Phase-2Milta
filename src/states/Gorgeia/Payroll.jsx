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
import { CenterFocusStrong } from "@mui/icons-material";

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
          Expert Payroll Management Services in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Georgia
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Save time and money with our payroll management experts in Georgia. Let
          us handle your payroll accurately, securely, and on time.
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
      gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
      gap: 3,
      mt: 2,
      justifyItems: "center", // centers each grid item horizontally
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
          width: "100%", // ensures box fills its grid column
          maxWidth: 250, // optional max width for nicer centering
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
export default function PayrollManagementGeorgia() {
  useFullSEO({
    title: "Hassle-Free Payroll Management Services in Georgia | Milta Accounting",
    description:
      "Save time and money with our payroll management experts in Georgia. Contact us today for affordable, stress-free payroll support.",
    keywords:
      "payroll management services in georgia, payroll management system, payroll management company, payroll management services, payroll management",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/payroll-management-services-in-the-georgia/",
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <BannerSection />

      {/* ================= INTRO ================= */}
      {/* ================= WHAT WE HANDLE ================= */}
      <Section title="Payroll Management Services in Georgia" allignItems={CenterFocusStrong}>
        <Typography mb={3}>
          Accurate payroll management is essential for every business, yet it
          remains one of the most complex and regulation-heavy responsibilities.
          At Milta Accounting, we provide dependable Payroll Management Services
          in Georgia, helping organizations simplify payroll operations, reduce
          costly errors, and remain fully compliant with federal, state, and
          local requirements.
        </Typography>

        <Typography>
          As a reliable payroll management partner, we manage your payroll end
          to end—ensuring employee wages, deductions, and tax obligations are
          calculated correctly and processed on time, every time.
        </Typography>
      </Section>

      <WaveDivider />

      {/* ================= WHAT WE HANDLE ================= */}
      <Section title="End-to-End Payroll Management You Can Rely On" bg={sectionBg} allignItems={CenterFocusStrong}>
        <Typography mb={4}>
          Our payroll administration services deliver a technologically advanced and
          well-organized payroll management solution for companies of all sizes.
          We handle everything from timesheets to payroll tax filings so you can
          focus on business growth.
        </Typography>

        <HighlightBoxes
          boxes={[
            "Employee Timesheet Management",
            "Accurate Wage & Overtime Calculation",
            "Payroll Tax Calculation, Payment & Filing",
            "Payslip Generation & Reporting",
            "Compliance with US Payroll Laws",
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
                desc: "Working hours, hourly wages, paid leave, vacation, holidays, overtime, and gross pay estimation after deductions.",
              },
              {
                step: "02",
                title: "Payroll Processing & Payments",
                desc: "Direct deposits or paper checks, automated payroll runs, and on-time salary disbursement.",
              },
              {
                step: "03",
                title: "Payroll Reporting & Insights",
                desc: "Labor cost analysis, employee headcount tracking, leave balances, and highest/lowest earning employees.",
              },
              {
                step: "04",
                title: "Payroll Tax Processing & Deductions",
                desc: "Federal, state, and local tax calculation, automated tax payments, and voluntary deductions.",
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
      <Section title="Why Payroll Management Is Essential for US Businesses" bg={sectionBg} allignItems={CenterFocusStrong}>
        <HighlightBoxes
          boxes={[
            "Employee Satisfaction",
            "Time Efficiency",
            "Data Security",
            "Scalability",
            
          ]}
        />
        <Typography mt={4}>
          Professional payroll management ensures compliance, accuracy, and stability while allowing your business to scale with confidence.
        </Typography>
      </Section>

      {/* ================= OUTSOURCING BENEFITS ================= */}
      <Section title="Why Choose Outsourced Payroll Management Services?">
        <Typography mb={4}>
          Managing payroll internally can be complex and time-consuming. By outsourcing Payroll Management Services in Georgia, businesses reduce compliance risks, save time, and ensure error-free processing.
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

      {/* ================= SECURITY ================= */}
      <Section title="Trusted Payroll Data Security & Compliance" bg={sectionBg}>
        <Typography mb={3}>
          Protecting payroll data is critical. Our payroll management system uses enterprise-grade security controls.
        </Typography>

        <HighlightBoxes
          boxes={[
            "Role-Based Access & Authentication",
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
              a: "Payroll management services handle employee salary calculations, tax deductions, payroll processing, pay slip generation, and compliance with federal, state, and local regulations.",
            },
            {
              q: "How do payroll management services ensure compliance and accuracy?",
              a: "Professional payroll management companies use advanced payroll systems and experienced specialists to calculate wages, manage deductions, file taxes, and follow labor laws. Automated processes and audits maintain accuracy and compliance.",
            },
            {
              q: "Why should businesses outsource payroll management services in Georgia?",
              a: "Outsourcing helps save time, reduce compliance risks, minimize errors, and protect sensitive employee data. Experts stay updated with tax laws and regulations.",
            },
            {
              q: "Is payroll outsourcing suitable for small and growing businesses?",
              a: "Yes. Payroll outsourcing scales with business growth and eliminates the need for costly software and dedicated payroll staff.",
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

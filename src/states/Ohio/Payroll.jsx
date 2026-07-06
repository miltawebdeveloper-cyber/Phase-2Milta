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
          Payroll Solutions for Businesses in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Ohio
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Take the stress out of payroll and reduce expenses with our Ohio payroll management
          services. Get started today!
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
      justifyItems: "center", // centers boxes horizontally
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
          maxWidth: 250,
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
export default function PayrollManagementOhio() {
  useFullSEO({
    title: "Payroll Solutions for Businesses in Ohio | Milta",
    description:
      "Take the stress out of payroll and reduce expenses with our Ohio payroll management services. Get started today!",
    keywords:
      "payroll management services in ohio, payroll management system, payroll management company, payroll management services, payroll management",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/payroll-management-services-in-the-ohio/",
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <BannerSection />

      {/* ================= INTRO ================= */}
      <Section title="Payroll Management Services in Ohio">
        <Typography mb={3}>
          Efficient payroll processing is crucial for the smooth operation of any business,
          yet it remains one of the most complex and regulation-intensive functions. At
          Milta Accounting, we provide dependable Payroll Management Services in Ohio,
          helping businesses simplify payroll operations, reduce errors, and maintain full
          compliance with federal, state, and local regulations.
        </Typography>

        <Typography>
          As your trusted payroll management partner, we handle the entire payroll process—
          accurately managing employee wages, deductions, and tax filings—ensuring that every
          payment and submission is completed on time and without mistakes.
        </Typography>
      </Section>

      <WaveDivider />

      {/* ================= WHAT WE HANDLE ================= */}
      <Section title="End-to-End Payroll Management You Can Rely On" bg={sectionBg}>
        <Typography mb={4}>
          Our payroll administration services are designed to deliver a technologically advanced
          and well-organized payroll management solution to companies of all sizes. We manage
          everything from timesheets to payroll tax filings, allowing you to focus on business
          growth instead of administrative burdens.
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
              justifyItems: "center", // centers the numbered cards
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
                  alignItems: "flex-start",
                  maxWidth: 500, // optional to restrict width
                  width: "100%",
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
                  <Typography fontSize="0.95rem" color="#4a5d55" whiteSpace="pre-line">
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
            "Money Savings",
          ]}
        />
        <Typography mt={4}>
          Effective payroll management has a direct impact on compliance, employee satisfaction,
          and business stability.
        </Typography>
      </Section>

      {/* ================= OUTSOURCING BENEFITS ================= */}
      <Section title="Why Choose Outsourced Payroll Management Services?">
        <Typography mb={4}>
          As organizations scale, payroll operations become increasingly detailed and regulation-heavy—
          particularly in the United States, where payroll tax rules and labor laws evolve constantly.
          Managing payroll internally can quickly turn into an administrative burden. By outsourcing
          Payroll Management Services in Ohio, businesses can reduce compliance exposure, eliminate
          operational strain, and ensure payroll is handled correctly from start to finish.
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
              a: "Payroll management services handle employee salary calculations, tax deductions, payroll processing, pay slip generation, and compliance with federal, state, and local regulations. These services ensure employees are paid accurately and on time while businesses remain compliant with payroll laws.",
            },
            {
              q: "How do payroll management services ensure compliance and accuracy?",
              a: "Professional payroll management companies use advanced payroll management systems and experienced specialists to calculate wages, manage deductions, file payroll taxes, and follow current labor laws. Automated processes and regular audits help maintain accuracy and compliance.",
            },
            {
              q: "Why should businesses outsource payroll management services in Ohio?",
              a: "Outsourcing payroll management services in Ohio helps businesses save time, reduce compliance risks, minimize errors, and protect sensitive employee data. Payroll experts stay updated with changing tax laws and regulations, ensuring accurate filings and timely payments.",
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

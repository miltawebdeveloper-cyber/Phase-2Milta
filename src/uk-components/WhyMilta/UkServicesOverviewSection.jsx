// src/components/UKServicesCardsSection.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

/* ✅ Framer Motion Animation */
import { motion } from "framer-motion";

const sections = [
  {
    title: "UK Accounting, Tax & Compliance Knowledge",
    points: [
      "UK GAAP and IFRS (where applicable)",
      "HMRC regulations and reporting requirements",
      "VAT returns and VAT compliance",
      "PAYE, payroll, and pension auto-enrolment",
      "Companies House filings and statutory accounts",
    ],
  },
  {
    title: "Experienced Professionals Dedicated to Your Business",
    points: [
      "Dedicated accountants, bookkeepers, and virtual assistants",
      "Documented workflows tailored to your business",
      "Internal quality checks and review processes",
      "Consistent account management",
    ],
  },
  {
    title: "End-to-End Accounting & Financial Support",
    points: [
      "Day-to-day and monthly bookkeeping",
      "Bank and credit card reconciliations",
      "Accounts payable and receivable",
      "Management accounts and financial reports",
      "VAT returns and compliance support",
      "Year-end accounts and HMRC coordination",
    ],
  },
  {
    title: "Virtual Assistant & Back-Office Support",
    points: [
      "Administrative and executive assistance",
      "Data entry and document management",
      "Appointment scheduling and email management",
      "Industry-specific virtual assistant services",
      "Accounting and finance support tasks",
    ],
  },
  {
    title: "Digital Marketing Services for the UK Market",
    points: [
      "Strengthen online presence",
      "Increase website traffic",
      "Generate qualified leads",
      "Build long-term brand credibility",
      "SEO, paid ads, social media & content strategy",
    ],
  },
  {
    title: "Clear Communication & Ongoing Support",
    points: [
      "Structured onboarding and documentation",
      "Regular progress updates and reports",
      "Dedicated point of contact",
      "Responsive and timely support",
    ],
  },
  {
    title: "Data Security, Confidentiality & Control",
    points: [
      "Secure systems and restricted access",
      "Confidential handling of financial data",
      "Documented workflows and internal controls",
      "UK data protection compliance",
    ],
  },
  {
    title: "Flexible, Scalable & Cost-Effective Services",
    points: [
      "Easy to scale up or down",
      "Flexible for changing workloads",
      "Cost-effective vs in-house teams",
    ],
  },
  {
    title: "One Trusted Partner for Multiple Services",
    points: [
      "Bookkeeping & payroll services",
      "Accounts payable & receivable",
      "Virtual assistance & back-office support",
      "Digital marketing services",
      "One streamlined process",
    ],
  },
];

/* ✅ Animation Directions */
const animationVariants = [
  { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } }, // Left
  { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } }, // Right
  { hidden: { opacity: 0, y: -80 }, visible: { opacity: 1, y: 0 } }, // Top
  { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } }, // Bottom
];

const UKServicesCardsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container sx={{ maxWidth: "1200px" }}>
        {/* Section Heading */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            textAlign: "center",
            mb: { xs: 4, sm: 5, md: 8 },
            fontSize: { xs: "24px", sm: "28px", md: "36px" },
            color: "#2b6d2a",
          }}
        >
          Comprehensive UK Business Support, Delivered by Experts
        </Typography>

        {/* Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, sm: 4, md: 5 },
            justifyContent: "center",
          }}
        >
          {sections.map((item, index) => (
            <motion.div
              key={index}
              variants={animationVariants[index % 4]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Card
                sx={{
                  p: 2,
                  minHeight: 360,
                  borderRadius: "12px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    backgroundColor: "#2b6d2a",
                  },
                }}
              >
                <CardContent>
                  {/* Card Title */}
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      mb: 2,
                      fontSize: { xs: "16px", sm: "17px", md: "18px" },
                      color: "#2b6d2a",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Points */}
                  <Stack spacing={1}>
                    {item.points.map((point, i) => (
                      <Stack
                        key={i}
                        direction="row"
                        spacing={1}
                        alignItems="flex-start"
                      >
                        <Typography
                          sx={{
                            color: "#2b6d2a",
                            fontWeight: 700,
                            lineHeight: 1.6,
                          }}
                        >
                          →
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { xs: "13px", sm: "14px" },
                            color: "#1a1a1a",
                            lineHeight: 1.6,
                          }}
                        >
                          {point}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UKServicesCardsSection;

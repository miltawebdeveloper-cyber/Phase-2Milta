import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
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

/* ================= BANNER ================= */
const BannerSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${primaryGreen}, ${lightGreen})`,
        color: "#fff",
        py: { xs: 6, sm: 8, md: 10 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
  variant="h4"
  sm={{ fontSize: "2rem" }}
  md={{ fontSize: "2.5rem" }}
  fontWeight={700}
  mb={2}
>
  Elite Bookkeeping Services for Small Businesses in Massachusetts, USA
</Typography>

<Typography
  fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
  mb={3}
  opacity={0.9} color="#ffffff"
>
  Looking for bookkeeping services near me to simplify your finances?
</Typography>

<Button
  sx={{
    px: { xs: 3, sm: 4 },
    py: { xs: 1, sm: 1.3 },
    bgcolor: hoverOrange,
    color: "#000",
    fontWeight: 600,
    borderRadius: 30,
    fontSize: { xs: "0.9rem", sm: "1rem" },
    "&:hover": { bgcolor: "#ffa726" },
  }}
  onClick={() => navigate("/contact")}
>
  Let’s work together starting today!
</Button>

      </Container>
    </Box>
  );
};

/* ================= REUSABLE SECTION ================= */
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 5, sm: 6, md: 8 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography variant="h4" fontWeight={700} mb={3} color={primaryGreen} fontSize={{ xs: "1.5rem", sm: "1.8rem", md: "2rem" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
        {children}
      </Box>
    </Container>
  </Box>
);

/* ================= FAQ ================= */
const FAQSection = () => (
  <Box sx={{ py: { xs: 5, sm: 6, md: 8 }, bgcolor: sectionBg }}>
    <Container maxWidth="md">
      <Typography variant="h4" fontWeight={700} mb={4} textAlign="center" fontSize={{ xs: "1.5rem", sm: "1.7rem", md: "2rem" }}>
        Frequently Asked Questions
      </Typography>

      {faqData.map((item, i) => (
        <Accordion key={i} sx={{ mb: 2, borderRadius: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600} textAlign="left" fontSize={{ xs: "0.95rem", sm: "1rem" }}>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography textAlign="left" fontSize={{ xs: "0.9rem", sm: "0.95rem" }}>{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

/* ================= AUTO SCROLL KEYFRAMES ================= */
const scrollAnimation = {
  "@keyframes scrollX": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
};

/* ================= PAGE ================= */
export default function Bookkeeping() {
  useFullSEO({
  // MAIN SEO
  title: "Top-Rated Bookkeeping Services in Massachusetts for Small Businesses",
  description:
    "Our trusted bookkeeping company in Massachusetts offers bookkeeping services for small businesses, delivering accuracy and reliability.",
  keywords:
    "bookkeeping services, bookkeeping services near me, bookkeeping services for small business, best bookkeeping for small business, bookkeeping company in massachusetts, bookkeeping services in massachusetts",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/us/services/best-bookkeeping-services-in-massachusetts/",
});

  const solutions = [
  {
    title: "Bank and Credit Card Reconciliation",
    desc: "At Miltafs, we provide meticulous bank and credit card reconciliation services. Our team ensures your financial records match your bank and credit card statements, eliminating discrepancies and safeguarding against errors or fraud. Regular reconciliation also helps identify unnecessary charges or mistakes, keeping your accounts accurate and secure."
  },
  {
    title: "Management of Cash Flow, Receivables (AR), and Accounts Payable (AP)",
    desc: "Effective cash flow management is vital for the sustainability of your business. We track and document your cash inflows and outflows, manage AR to monitor outstanding payments, and handle AP to ensure vendor bills are paid on time. This gives you a clear, real-time view of your financial health."
  },
  {
    title: "Invoice Generation and Payment Tracking",
    desc: "Invoicing can be time-consuming, but it’s essential for maintaining a steady cash flow. We handle invoice creation, ensure timely payment recording, and follow up on overdue payments. Our streamlined process guarantees that your income is tracked accurately and efficiently."
  },
  {
    title: "Chart of Accounts and Accounting System Setup",
    desc: "A well-structured chart of accounts is the foundation of sound financial management. We work with you to create a customized chart of accounts that categorizes transactions clearly. Additionally, we maintain an organized accounting system, ensuring all documents are easily accessible when needed."
  },
  {
    title: "Payroll Processing, Tax Compliance, and Employee Benefits Management",
    desc: "Payroll is a critical function that requires precision and compliance. We manage payroll calculations, tax withholdings, and employee benefits, ensuring your team is paid accurately and on time while adhering to all tax regulations."
  },
  {
    title: "Customized Financial Reporting (Weekly, Monthly, Yearly)",
    desc: "Regular financial reports are key to understanding your business’s performance. We provide weekly, monthly, and yearly reports customized to your needs, offering insights into revenue, expenses, profits, and other vital metrics. These reports empower you to make informed decisions and drive growth."
  },
  {
    title: "Small Business Accounting, Non-Profit Bookkeeping, and Financial Clean-Up",
    desc: "Whether you’re a small business or a non-profit, we specialize in managing your unique financial needs. We also offer financial clean-up services to reorganize and streamline your financial records, helping you regain control of your finances."
  },
  {
    title: "CPA Collaboration for Year-End Tax Preparation",
    desc: "We work closely with certified public accountants (CPAs) to ensure your year-end tax filings are accurate and timely. By preparing and organizing your financial records, we simplify the process for your CPA, allowing you to focus on running your business."
  }
];

  

  return (
    <>
      <BannerSection />
       <Section title="Unrivaled Bookkeeping Services for Small Businesses in Massachusetts">
  <Typography
    mb={3}
    textAlign="center"
    maxWidth={{ xs: "100%", sm: 700, md: 900 }}
    fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.1rem" }}
  >
    Struggling to find bookkeeping services near me that truly transform your business? Your search ends here. Milta is your trusted financial ally. We don’t just manage numbers; we deliver precision-driven bookkeeping services for small businesses, ensuring complete financial clarity at every stage.
  </Typography>

  <Typography
    mb={3}
    textAlign="center"
    maxWidth={{ xs: "100%", sm: 700, md: 900 }}
    fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.1rem" }}
  >
    From meticulous transaction tracking to advanced financial reporting, our certified experts provide the accuracy and insight your business needs to thrive. As a top bookkeeping company in Massachusetts, we navigate the financial landscape with customized solutions that keep your business agile, efficient, and ahead of the curve.
  </Typography>

  <Typography
    mb={3}
    textAlign="center"
    maxWidth={{ xs: "100%", sm: 700, md: 900 }}
    fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.1rem" }}
  >
    Why settle for ordinary? Choose Milta for the best bookkeeping for small businesses, where expertise meets innovation. Let’s turn your financial data into a powerhouse for growth. Your success starts now!
  </Typography>

  <Button
    sx={{
      px: { xs: 3, sm: 4 },
      py: { xs: 1, sm: 1.3 },
      bgcolor: hoverOrange,
      color: "#000",
      fontWeight: 600,
      borderRadius: 30,
      fontSize: { xs: "0.9rem", sm: "1rem" },
      "&:hover": { bgcolor: "#ffa726" },
    }}
  >
    To Arrange Your Free Initial Consultation, Contact Us Right Now!
  </Button>
</Section>

                       

                       <Section title="Unrivaled Bookkeeping Services for Small Businesses in Massachusetts">
  <Typography
    mb={3}
    textAlign="center"
    maxWidth={{ xs: "100%", sm: 700, md: 900 }}
    fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.1rem" }}
  >
    Struggling to find bookkeeping services near me that truly transform your business? Your search ends here. Milta is your trusted financial ally. We don’t just manage numbers; we deliver precision-driven bookkeeping services for small businesses, ensuring complete financial clarity at every stage.
  </Typography>

  <Typography
    mb={3}
    textAlign="center"
    maxWidth={{ xs: "100%", sm: 700, md: 900 }}
    fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.1rem" }}
  >
    From meticulous transaction tracking to advanced financial reporting, our certified experts provide the accuracy and insight your business needs to thrive. As a top bookkeeping company in Massachusetts, we navigate the financial landscape with customized solutions that keep your business agile, efficient, and ahead of the curve.
  </Typography>

  <Typography
    mb={3}
    textAlign="center"
    maxWidth={{ xs: "100%", sm: 700, md: 900 }}
    fontSize={{ xs: "0.9rem", sm: "1rem", md: "1.1rem" }}
  >
    Why settle for ordinary? Choose Milta for the best bookkeeping for small businesses, where expertise meets innovation. Let’s turn your financial data into a powerhouse for growth. Your success starts now!
  </Typography>

  <Button
    sx={{
      px: { xs: 3, sm: 4 },
      py: { xs: 1, sm: 1.3 },
      bgcolor: hoverOrange,
      color: "#000",
      fontWeight: 600,
      borderRadius: 30,
      fontSize: { xs: "0.9rem", sm: "1rem" },
      "&:hover": { bgcolor: "#ffa726" },
    }}
  >
    To Arrange Your Free Initial Consultation, Contact Us Right Now!
  </Button>
</Section>


      <Divider />

      <Section title="Why Does Every Business Need Bookkeeping?">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            mt: 2,
          }}
        >
          {[
    "Tracks income and expenses effectively, giving you a clear picture of your financial performance.",
    "Prepares you for tax season without last-minute stress by keeping your records organized.",
    "Provides insights into financial performance for strategic planning and business growth.",
    "Ensures compliance with financial and tax obligations, reducing risk of penalties or errors."
          ].map((text, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: "100%", sm: 320, md: 350 },
                p: 3,
                borderLeft: `5px solid ${primaryGreen}`,
                borderRadius: 2,
                bgcolor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderLeft: `5px solid ${hoverOrange}`,
                  transform: "translateY(-3px)",
                },
              }}
            >
              <Typography textAlign="left" fontWeight={600} fontSize={{ xs: "0.9rem", sm: "0.95rem", md: "1rem" }}>
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      {/* ================= COMPREHENSIVE SOLUTIONS GRID ================= */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: sectionBg }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            fontWeight={700}
            mb={4}
            color={primaryGreen}
            textAlign="center"
            fontSize={{ xs: "1.5rem", sm: "1.8rem", md: "2rem" }}
          >
            Comprehensive Bookkeeping and Financial Solutions Customized to Your Needs
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {solutions.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: 300, md: 300 },
                  minHeight: 400,
                  bgcolor: "#fff",
                  borderRadius: 3,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: hoverOrange,
                    color: "#fff",
                    transform: "translateY(-5px) scale(1.03)",
                  },
                }}
              >
                <Typography fontWeight={700} mb={2} textAlign="center" fontSize={{ xs: "0.95rem", sm: "1rem", md: "1.05rem" }}>
                  {index + 1}. {item.title}
                </Typography>
                <Typography textAlign="justify" fontSize={{ xs: "0.85rem", sm: "0.95rem", md: "0.95rem" }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ================= HIGHLIGHTED INDUSTRIES ================= */}
      <Box
        sx={{
          py: { xs: 6, md: 9 },
          background: `linear-gradient(135deg, ${primaryGreen}, ${lightGreen})`,
          overflow: "hidden",
          ...scrollAnimation,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} mb={4} color="#fff" textAlign="center" fontSize={{ xs: "1.5rem", sm: "1.8rem", md: "2rem" }}>
            Industries We Serve for Bookkeeping Services
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "200%",
              justifyContent: "center",
              animation: "scrollX 25s linear infinite",
            }}
          >
            {[...industries, ...industries].map((industry, i) => (
              <Box
                key={i}
                sx={{
                  minWidth: { xs: 140, sm: 160, md: 180 },
                  height: { xs: 50, sm: 60, md: 70 },
                  mx: 2,
                  background: "linear-gradient(135deg, #ff8c00, #ffb703)",
                  borderRadius: "30%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: 600,
                  color: "#000",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  transition: "all 0.4s ease",
                  "&:hover": { transform: "translateY(-6px) scale(1.05)" },
                  fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" },
                  px: 1,
                }}
              >
                {industry}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <FAQSection />
    </>
  );
}

/* ================= DATA ================= */
const industries = [
  "Healthcare",
  "Education",
  "Travel & Tourism",
  "Transportation",
  "Telecommunication",
  "Food & Beverage",
  "Finance & Insurance",
  "Entertainment",
  "Hospitality",
  "Information Technology",
  "Ecommerce",
  "CPA Industry",
  "Marketing & Advertising",
];


const faqData = [
  {
    q: "What is bookkeeping, and why do I need it for my small business?",
    a: "Bookkeeping involves recording, organizing, and managing your business's financial transactions. It helps you maintain accurate financial records, make informed decisions, and ensure compliance with U.S. tax laws and regulations. Proper bookkeeping is essential for tracking cash flow, preparing for tax season, and growing your business."
  },
  {
    q: "Can I handle bookkeeping myself, or should I hire a professional?",
    a: "While some small business owners manage their bookkeeping on their own, hiring a professional ensures accuracy and saves valuable time. Professionals are well-versed in U.S. tax laws, payroll management, and financial reporting, giving you peace of mind and allowing you to focus on running and growing your business."
  },
  {
    q: "What types of bookkeeping services do you offer?",
    a: "We provide a wide range of bookkeeping services, including bank and credit card reconciliation, accounts receivable and payable management, payroll processing, invoice generation, financial reporting, and tax preparation support. Our services are customized to meet the unique needs of small businesses in Massachusetts, USA."
  },
  {
    q: "How do your bookkeeping services benefit my small business?",
    a: "Our bookkeeping services streamline your financial operations, prevent costly errors, and help you save time. You gain clear insights into your financial health while ensuring compliance with legal and tax requirements, which is crucial for making strategic decisions and achieving long-term business growth."
  },
  {
    q: "Do you offer payroll and bookkeeping services together?",
    a: "Yes, we provide comprehensive payroll and bookkeeping services in Massachusetts, USA. This ensures your employees are paid accurately and on time while keeping your financial records organized, compliant, and up to date."
  },
  {
    q: "How do I find the best bookkeeping services for small businesses near me?",
    a: "When searching for the best bookkeeping services for small businesses near you, look for providers with proven experience, industry expertise, and a strong track record of serving small businesses in Massachusetts, USA. Reviews, referrals, and transparent pricing are key indicators of a reliable service. We pride ourselves on being one of the best bookkeeping service providers for small businesses in Massachusetts, offering personalized and dependable support."
  },
  {
    q: "Is my business too small to hire a bookkeeping company in Massachusetts?",
    a: "No business is too small to benefit from professional bookkeeping services in Massachusetts. Accurate financial management is especially important for small businesses to monitor cash flow, prepare for taxes, and plan for sustainable growth. Our bookkeeping services are affordable, flexible, and scalable to meet your business needs."
  },
  {
    q: "What industries do you work with?",
    a: "We work with a wide variety of industries, including retail, hospitality, professional services, e-commerce, and more. Regardless of your industry, our team customizes bookkeeping solutions to fit your specific business requirements."
  },
  {
    q: "How do you ensure data security?",
    a: "To keep your financial information safe and secure, we use protected systems and follow industry best practices. All data is handled with the highest level of confidentiality and care to ensure complete peace of mind."
  },
  {
    q: "How can I get started with your bookkeeping services in the USA?",
    a: "Getting started is easy. Contact us today to schedule a consultation. Whether you are searching for bookkeeping services near you or need help managing payroll, our experienced team is ready to support your small business across the USA."
  }
];

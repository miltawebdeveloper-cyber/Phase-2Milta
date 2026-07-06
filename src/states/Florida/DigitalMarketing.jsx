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
const sectionBg = "#f6f8f3";
const hoverOrange = "#ff9800";
const softOrange = "#fff3e0";
const white = "#ffffff";

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
          fontSize={{ xs: "1.8rem", sm: "2.3rem", md: "2.7rem" }}
        >
          Florida Leading{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            AI-Powered Digital Marketing Agency
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1.05rem", sm: "1.2rem", md: "1.3rem" }}
          mb={3}
          fontWeight={600}  color="#ffffff"
        >
          Boost Your Revenue This Year with a Leading Digital Marketing Company in
          Florida!
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
          Request a Proposal!
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
        fontSize={{ xs: "1.6rem", md: "2.2rem" }}
      >
        {title}
      </Typography>

      <Box maxWidth={900} mx="auto">
        {children}
      </Box>
    </Container>
  </Box>
);

/* ================= HIGHLIGHTS ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
      gap: 3,
      mt: 3,
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
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
          },
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
const DigitalMarketingServices = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Achieve higher rankings and greater visibility through keyword research, ethical SEO practices, on-page and off-page optimization, and performance tracking.",
    },
    {
      title: "Technical SEO Service",
      desc: "Improve crawlability and site performance with speed optimization, HTTPS audits, redirect fixes, structured data, and technical enhancements.",
    },
    {
      title: "Link Building Service",
      desc: "Build authority and trust with strategic backlinks through guest blogging, partnerships, infographics, and high-quality content distribution.",
    },
    {
      title: "Web Design & Development",
      desc: "Create custom, mobile-ready, SEO-optimized websites with strong CTAs, simplified forms, and conversion-focused design.",
    },
    {
      title: "Social Media Marketing",
      desc: "Grow your audience with data-driven social media strategies, competitor analysis, brand management, and paid advertising.",
    },
    {
      title: "Pay-Per-Click (PPC) Management",
      desc: "Drive high-quality leads with expertly managed PPC campaigns, optimized bidding strategies, and ROI-focused advertising.",
    },
    {
      title: "Content Marketing Service",
      desc: "Engage audiences with compelling, SEO-friendly content crafted using high-performing keywords, visuals, and structured formats.",
    },
    {
      title: "Email Marketing Service",
      desc: "Boost engagement with personalized email campaigns, optimized subject lines, A/B testing, and curiosity-driven messaging.",
    },
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
          Milta Digital Marketing Services in Florida
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
                transition: "0.35s",
                "&:hover": { transform: "translateY(-8px)" },
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

/* ================= FAQ ================= */
const FAQSection = ({ faqData }) => (
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

      {faqData.map((item, i) => (
        <Accordion
          key={i}
          sx={{ mb: 2, borderRadius: 2, "&:before": { display: "none" } }}
        >
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
);

/* ================= PAGE ================= */
export default function DigitalMarketingFlorida() {
  const faqData = [
    {
      q: "What digital marketing services does Milta offer?",
      a: "We provide SEO, PPC, social media marketing, content marketing, email marketing, and web development services.",
    },
    {
      q: "Is digital marketing suitable for small businesses?",
      a: "Yes. Digital marketing is scalable and cost-effective for startups and growing businesses.",
    },
    {
      q: "How do you measure campaign success?",
      a: "We use analytics, conversion tracking, and performance metrics to measure ROI.",
    },
    {
      q: "Do you customize strategies?",
      a: "Absolutely. Every strategy is tailored to your business goals and target audience.",
    },
    {
      q: "Why choose Milta?",
      a: "We combine AI-powered tools, expert strategy, and proven results to drive growth.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  useFullSEO({
    title: "AI-Powered Digital Marketing Agency in Florida | SEO & PPC Experts",
    description:
      "Grow your business with an AI-powered digital marketing agency in Florida specializing in SEO & PPC. Drive results with data-driven strategies!",
    keywords:
      "digital marketing agency, digital marketing services, digital marketing agency in florida, florida internet marketing, digital marketing services in florida",
    author: "Milta Accounting",
    canonical:
      "https://www.milta.com/us/services/best-digital-marketing-agency-in-florida",
    schema: faqSchema,
  });

  const highlights = [
    "AI-Driven Strategies",
    "Cost-Effective Marketing",
    "24/7 Online Growth",
    "Measurable ROI",
  ];

  return (
    <>
      <BannerSection />

      <Section title="AI-Driven Marketing & Advertising to Accelerate Your Business Growth">
        <Typography mb={3}>
          Reaching your audience can be challenging, but with the right partner,
          success is within reach. Milta specializes in AI-powered digital
          marketing solutions that deliver measurable results.
        </Typography>
        <Typography>
          Whether expanding into new markets or scaling your business, our team
          creates tailored strategies that maximize reach, engagement, and ROI.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Maximize Your Reach with AI-Driven Digital Marketing Solutions">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <FAQSection faqData={faqData} />
    </>
  );
}

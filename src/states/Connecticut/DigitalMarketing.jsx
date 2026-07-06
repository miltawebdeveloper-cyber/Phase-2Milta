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
const white = "#fff";

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
          Connecticut Leading AI-Powered Digital Marketing Agency
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Boost Your Revenue This Year with a Leading Digital Marketing Company
          in Connecticut!
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
          Request a Proposal
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
          transition: "all 0.3s ease",
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
      desc: "Achieve higher organic ranks with keyword research, on-page & off-page optimization, and Google Search Console tracking to attract quality leads.",
    },
    {
      title: "Technical SEO",
      desc: "Crawl error reports, HTTPS checks, site speed optimization, redirects, duplicate content elimination, structured data, and site migration support.",
    },
    {
      title: "Link Building",
      desc: "Build high-quality backlinks via partnerships, sponsored ads, guest blogging, infographics, and social media engagement to drive traffic.",
    },
    {
      title: "Web Design & Development",
      desc: "Custom, mobile-ready, SEO-optimized websites with visual hierarchy, CTAs, simplified forms, and audience-targeted content.",
    },
    {
      title: "Social Media Marketing",
      desc: "Engage and expand audiences with campaigns, competitor analysis, and data-driven social media strategies for brand management and paid ads.",
    },
    {
      title: "Pay-Per-Click (PPC) Management",
      desc: "Target customers with precision using data-driven campaigns, customized ad copy, bidding tactics, device targeting, and ROI tracking.",
    },
    {
      title: "Content Marketing",
      desc: "Compelling content creation with high-performing keywords, relevant imagery, and structured posts to boost SEO and conversions.",
    },
    {
      title: "Email Marketing",
      desc: "Personalized campaigns that avoid spam, engage subscribers, and drive action with tested designs, impactful language, and curiosity gaps.",
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
          Milta Digital Marketing Services in Connecticut
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
                transition: "all 0.35s ease",
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

/* ================= PAGE ================= */
export default function DigitalMarketingConnecticut() {
  useFullSEO({
  // MAIN SEO
  title: "AI-Driven Digital Marketing Agency in Connecticut | PPC & SEO Experts",
  description:
    "Partner with an AI-driven digital marketing agency in Connecticut for expert PPC & SEO solutions. Maximize growth with data-driven strategies!",
  keywords:
    "digital marketing agency, digital marketing services, digital marketing agency in connecticut, connecticut internet marketing, digital marketing services in connecticut",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-connecticut",
});

  const highlights = [
    "Comprehensive Services",
    "Expert Team",
    "Best Strategies",
    "Data-Driven Approach",
    "Proven Track Record",
    "Commitment to Results",
  ];

  const faqData = [
    {
      q: "How can AI-powered marketing help my business?",
      a: "AI-driven solutions help optimize campaigns, target the right audience, and maximize ROI with data-driven insights.",
    },
    {
      q: "What digital marketing services do you offer?",
      a: "We offer SEO, Technical SEO, Link Building, Web Design, Social Media Marketing, PPC, Content Marketing, and Email Marketing.",
    },
    {
      q: "Can your services increase my revenue?",
      a: "Yes. Our strategies are tailored to your business goals and focus on driving measurable growth.",
    },
    {
      q: "Do you work with small businesses?",
      a: "Absolutely. We support businesses of all sizes, from startups to multi-location companies.",
    },
    {
      q: "How do I get started with Milta?",
      a: "Request a proposal or contact us for a consultation to discuss your business goals and needs.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="AI-Driven Marketing & Advertising to Accelerate Your Business Growth">
        <Typography mb={3}>
          Connecting with your audience can be challenging, but with the right
          marketing partner, success is within reach. Milta specializes in
          website development, search engine marketing (SEM), social media
          management, and paid advertising to drive impactful results.
        </Typography>
        <Typography>
          Whether you're expanding into new markets, scaling your business, or
          increasing revenue, our expert team understands your unique needs and
          crafts customized strategies that communicate your message effectively.
        </Typography>
      </Section>
      {WaveDivider && <WaveDivider />}

      <Section title="Maximize Your Reach with AI-Driven Digital Marketing Solutions">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <FAQSection faqData={faqData} />
    </>
  );
}

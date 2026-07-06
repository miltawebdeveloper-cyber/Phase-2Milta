import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
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
          Transform Your Business with Georgia’s Premier{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            AI-Powered Digital Marketing Agency
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Unlock growth and drive revenue with the best digital marketing
          services in Georgia.
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
          Request a Proposal Today!
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
    { title: "Search Engine Optimization (SEO)", desc: "Boost organic rankings and visibility through ethical SEO and performance tracking." },
    { title: "Technical SEO Services", desc: "Improve crawlability, speed, structured data, and indexability." },
    { title: "Link Building Services", desc: "Build authority through high-quality backlinks and outreach." },
    { title: "Web Design & Development", desc: "Custom, SEO-friendly websites designed to convert visitors." },
    { title: "Social Media Marketing", desc: "Grow and engage your audience with data-backed strategies." },
    { title: "PPC Management", desc: "High-performing campaigns to maximize ROI and lead quality." },
    { title: "Content Marketing", desc: "SEO-driven content that educates and converts." },
    { title: "Email Marketing", desc: "Personalized campaigns that drive engagement and action." },
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
          Milta Digital Marketing Services in Georgia
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

/* ================= LAST SECTION – NEW STYLE ================= */
const WhyChooseMilta = () => {
  const points = [
    {
      title: "Comprehensive Digital Marketing Services",
      desc: "From SEO and PPC to content and email marketing, Milta delivers end-to-end digital solutions.",
    },
    {
      title: "Expert Georgia Marketing Team",
      desc: "Our specialists stay ahead of trends to ensure your campaigns perform at their best.",
    },
    {
      title: "Customized Growth Strategies",
      desc: "We tailor every strategy to your business goals, audience, and industry.",
    },
    {
      title: "Data-Driven Optimization",
      desc: "We continuously analyze and refine campaigns for measurable, transparent results.",
    },
    {
      title: "Proven Track Record",
      desc: "We help startups and enterprises increase traffic, leads, and revenue consistently.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: "#faf9f6" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={6}
          textAlign="center"
          color={primaryGreen}
        >
          Why Choose Milta as Your Digital Marketing Partner
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 4,
          }}
        >
          {points.map((item, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: white,
                p: 4,
                borderRadius: 3,
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                borderLeft: `4px solid ${hoverOrange}`,
              }}
            >
              <Typography fontWeight={700} mb={1} color={primaryGreen}>
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

/* ================= PAGE ================= */
export default function DigitalMarketingGeorgia() {
  useFullSEO({
  // MAIN SEO
  title: "Leading Digital Marketing Agency in Georgia | SEO & PPC Experts",
  description:
    "Elevate your brand with expert digital marketing services in Georgia. We specialize in SEO, PPC, and Georgia internet marketing to drive success.",
  keywords:
    "digital marketing agency, digital marketing services, digital marketing agency in georgia, georgia internet marketing, digital marketing services in georgia",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-georgia",
});

  const highlights = [
    "AI-Driven Strategies",
    "Higher ROI & Revenue Growth",
    "Cost-Effective Marketing",
    "Data-Backed Decisions",
  ];

  return (
    <>
      <BannerSection />

      <Section title="AI-Driven Marketing & Advertising to Accelerate Your Business Growth">
        <Typography mb={3}>
          Milta specializes in website development, SEM, social media management,
          and paid advertising to drive impactful results across Georgia.
        </Typography>
        <Typography>
          Our AI-powered digital marketing services help businesses scale faster,
          reach the right audience, and maximize ROI.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Maximize Your Reach with AI-Driven Digital Marketing Solutions">
        <Typography mb={4}>
          We help businesses strengthen their online presence and convert
          audiences into loyal customers.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <WhyChooseMilta />
    </>
  );
}

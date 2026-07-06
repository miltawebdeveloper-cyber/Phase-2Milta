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
          fontSize={{ xs: "1.8rem", sm: "2.2rem", md: "2.7rem" }}
        >
          Elevate Your Success with North Carolina’s Leading{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Digital Marketing Agency
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Dominate North Carolina’s competitive market with expert digital
          marketing services that deliver real results.
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
          Partner With Us Today
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
        fontSize={{ xs: "1.6rem", md: "2.1rem" }}
      >
        {title}
      </Typography>

      <Box maxWidth={920} mx="auto">
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
const DigitalMarketingServices = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Achieve higher organic rankings and greater visibility with ethical SEO practices, in-depth keyword research, on-page and off-page optimization, and performance tracking."
    },
    {
      title: "Technical SEO Services",
      desc: "Strengthen your website foundation with crawl audits, HTTPS checks, speed optimization, structured data, redirect audits, and seamless site migrations."
    },
    {
      title: "Link Building Services",
      desc: "Build authority and trust through guest blogging, partnerships, sponsored placements, and high-quality backlink strategies."
    },
    {
      title: "Web Design & Development",
      desc: "Custom, mobile-ready, SEO-optimized websites designed with clear CTAs, simplified forms, and conversion-focused layouts."
    },
    {
      title: "Social Media Marketing",
      desc: "Engage, grow, and convert audiences with data-backed social media strategies and paid advertising campaigns."
    },
    {
      title: "Pay-Per-Click (PPC) Management",
      desc: "Data-driven PPC campaigns managed by certified specialists to maximize ROI, traffic quality, and conversions."
    },
    {
      title: "Content Marketing",
      desc: "SEO-focused content creation with compelling headlines, high-performing keywords, and reader-friendly structures."
    },
    {
      title: "Email Marketing",
      desc: "Personalized email campaigns that avoid spam filters, build trust, and drive customer action."
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
          Milta Digital Marketing Services in North Carolina
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

/* ================= WHY CHOOSE ================= */
const WhyChooseMilta = () => {
  const points = [
    {
      title: "Comprehensive Digital Marketing Services",
      desc: "From SEO and PPC to social media, content, and email marketing, Milta delivers complete digital solutions."
    },
    {
      title: "Expert North Carolina Marketing Team",
      desc: "Our specialists stay ahead of trends and tools to ensure your campaigns perform at their best."
    },
    {
      title: "Customized Growth Strategies",
      desc: "Every strategy is tailored to your business goals, industry, and target audience."
    },
    {
      title: "Data-Driven Optimization",
      desc: "We track performance metrics, refine campaigns, and ensure measurable, transparent results."
    },
    {
      title: "Proven Track Record",
      desc: "From startups to enterprises, we help brands grow traffic, leads, and revenue consistently."
    },
    {
      title: "Commitment to Results",
      desc: "Your success is our priority. We focus on growth, conversions, and long-term ROI."
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
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4,
            justifyItems: "center",
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
                borderTop: `3px solid ${hoverOrange}`,
                textAlign: "center",
                maxWidth: 480,
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
export default function DigitalMarketingNorthCarolina() {
  useFullSEO({
  // MAIN SEO
  title: "SEO & PPC | Digital Marketing Agency in North Carolina",
  description:
    "As a leading digital marketing agency in North Carolina, we specialize in SEO, PPC, email marketing, and helping businesses grow.",
  keywords:
    "digital marketing agency, digital marketing services, digital marketing agency in north carolina, north carolina internet marketing, digital marketing services in north carolina",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-northcarolina/",
});

  const highlights = [
    "AI-Driven Marketing",
    "Hyper-Local Expertise",
    "Maximized ROI",
    "Measurable Growth",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Drive Your Brand to Success with Expert Digital Marketing Services in North Carolina">
        <Typography mb={3}>
          Reaching your audience in North Carolina’s fast-paced market is crucial.
          Milta leverages AI-powered strategies and proven internet marketing
          techniques to drive measurable results.
        </Typography>
        <Typography>
          Whether you’re expanding your reach, scaling operations, or increasing
          revenue, our customized digital marketing services help your business
          connect with the right audience at the right time.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Engage Your Audience with Precision – Right Time, Right Platform">
        <Typography mb={4}>
          We empower startups, growing brands, and enterprises to strengthen
          their online presence, attract high-quality leads, and optimize costs
          across channels.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <WhyChooseMilta />
    </>
  );
}

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
          fontSize={{ xs: "1.7rem", sm: "2.1rem", md: "2.6rem" }}
        >
          Expand Your Brand with a Top{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Digital Marketing Agency in Maryland!
          </Box>
        </Typography>

        <Typography fontSize={{ xs: "1rem", sm: "1.15rem" }} mb={1} color="#ffffff">
          Achieve success with expert digital marketing services in Maryland.
        </Typography>

        <Typography fontSize={{ xs: "1rem", sm: "1.15rem" }} mb={4} color="#ffffff">
          Get a tailored strategy with Maryland Internet marketing today!
        </Typography>

        <Button
          sx={{
            px: 5,
            py: 1.4,
            bgcolor: hoverOrange,
            color: "#000",
            fontWeight: 700,
            borderRadius: 30,
            boxShadow: "0 10px 25px rgba(255,152,0,0.35)",
            "&:hover": { bgcolor: "#ffa726" },
          }}
          onClick={() => navigate("/contact")}
        >
          Get Started Today
        </Button>
      </Container>
    </Box>
  );
};

/* ================= SECTION ================= */
const Section = ({ title, children }) => (
  <Box sx={{ py: { xs: 6, md: 9 } }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight={800}
        mb={4}
        color={primaryGreen}
      >
        {title}
      </Typography>
      <Box maxWidth={900} mx="auto">{children}</Box>
    </Container>
  </Box>
);

/* ================= HIGHLIGHTS ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
      gap: 3,
      mt: 4,
    }}
  >
    {boxes.map((item, i) => (
      <Box
        key={i}
        sx={{
          p: 4,
          bgcolor: softOrange,
          borderRadius: 3,
          border: `1px solid ${hoverOrange}`,
          textAlign: "center",
        }}
      >
        <Typography fontWeight={700} color={primaryGreen}>
          {item}
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
      desc: "Achieve higher organic rankings through in-depth keyword research, ethical SEO practices, on-page and off-page optimization, and Google Search Console tracking to attract high-quality traffic and boost conversions.",
    },
    {
      title: "Technical SEO Services",
      desc: "Improve crawlability and indexability through crawl audits, HTTPS checks, site speed optimization, redirect audits, duplicate content fixes, structured data implementation, and site migration support.",
    },
    {
      title: "Link Building Services",
      desc: "Increase authority and consumer trust with strategic guest blogging, sponsored placements, high-quality backlinks, infographics, and social amplification that drive consistent traffic and sales.",
    },
    {
      title: "Web Design & Development",
      desc: "Custom, mobile-responsive, SEO-optimized websites with clear CTAs, simplified forms, and conversion-focused layouts designed to support your marketing goals.",
    },
    {
      title: "Social Media Marketing",
      desc: "Grow and engage your audience through goal-driven campaigns, competitor benchmarking, audience analysis, social brand management, and paid advertising strategies.",
    },
    {
      title: "Pay-Per-Click (PPC) Management",
      desc: "Precision PPC campaigns managed by AdWords-certified specialists using optimized bidding, ad copy testing, device targeting, and ROI monitoring for maximum lead quality.",
    },
    {
      title: "Content Marketing",
      desc: "High-quality, Google-compliant content creation with compelling headlines, strategic keywords, relevant imagery, and easy-to-read formatting.",
    },
    {
      title: "Email Marketing",
      desc: "Personalized email campaigns that avoid spam filters, build subscriber lists, create curiosity, test performance, and drive customer action.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#09271b", py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={6}
          textAlign="center"
          color={hoverOrange}
        >
          Milta Digital Marketing Services in Maryland
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
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
    "Comprehensive digital marketing services tailored for Maryland businesses.",
    "Experienced Maryland internet marketing professionals.",
    "Customized strategies aligned with your goals and audience.",
    "Data-driven decision-making with transparent performance tracking.",
    "Proven success helping brands scale traffic, leads, and revenue.",
    "Strong commitment to measurable results and long-term growth.",
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
          Why Choose Milta as Your Digital Marketing Service in Maryland
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4,
            justifyItems: "center",
          }}
        >
          {points.map((text, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: white,
                p: 4,
                borderRadius: 3,
                textAlign: "center",
                maxWidth: 460,
                borderTop: `3px solid ${hoverOrange}`,
              }}
            >
              <Typography>{text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= PAGE ================= */
export default function DigitalMarketingMaryland() {
  useFullSEO({
  // MAIN SEO
  title: "Leading Digital Marketing Agency in Maryland | Milta",
  description:
    "Boost your brand with a top digital marketing agency in Maryland. We offer expert digital marketing services, SEO, PPC, and internet marketing.",
  keywords:
    "digital marketing agency, digital marketing services, digital marketing agency in maryland, Maryland internet marketing, digital marketing services in Maryland",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-maryland/",
});

  const highlights = [
    "AI-Powered Maryland Internet Marketing",
    "Local Expertise & Customized Strategies",
    "Maximized ROI & High Conversions",
  ];

  return (
    <>
      <BannerSection />

      <Section title="AI-Driven Digital Marketing for Business Growth">
        <Typography mb={3}>
          Thrive in Maryland’s competitive market with AI-powered digital marketing
          services. Milta specializes in SEO, PPC, website development, and social
          media marketing to elevate visibility and drive results.
        </Typography>
        <Typography>
          Our Maryland digital marketing solutions help businesses expand reach,
          scale efficiently, and engage the right audience through data-driven
          strategies.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>


      <DigitalMarketingServices />

      <WhyChooseMilta />
    </>
  );
}

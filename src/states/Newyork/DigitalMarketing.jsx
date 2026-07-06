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
          Elevate Your Success with New York’s Leading{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Digital Marketing Agency
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Unlock Explosive Growth Using Cutting-Edge Digital Marketing Services in
          New York
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
const Section = ({ title, children }) => (
  <Box sx={{ py: { xs: 6, md: 9 } }}>
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

      <Box maxWidth={950} mx="auto">
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
      mt: 4,
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
      desc: "Achieve higher organic rankings and increased visibility through in-depth keyword research, ethical SEO practices, on-page and off-page optimization, and performance tracking using Google Search Console to drive quality leads and conversions.",
    },
    {
      title: "Technical SEO Services",
      desc: "Strengthen your digital foundation with crawl error audits, HTTPS checks, site speed optimization, structured data implementation, redirect audits, duplicate content removal, and seamless site migrations.",
    },
    {
      title: "Link Building Services",
      desc: "Build authority and trust through high-quality backlinks using guest blogging, sponsorships, strategic partnerships, data-driven infographics, and engaging content distribution.",
    },
    {
      title: "Web Design & Development",
      desc: "Custom, mobile-ready, and SEO-optimized websites designed with clear CTAs, optimized user journeys, simplified forms, and conversion-focused layouts tailored to your audience.",
    },
    {
      title: "Social Media Marketing",
      desc: "Engage and grow your audience with data-backed social media strategies, competitor analysis, audience behavior insights, and paid social advertising campaigns.",
    },
    {
      title: "Pay-Per-Click (PPC) Management",
      desc: "Data-driven PPC campaigns managed by AdWords-certified specialists with optimized bidding strategies, keyword targeting, ad copy creation, and ROI tracking.",
    },
    {
      title: "Content Marketing",
      desc: "SEO-focused content creation with compelling headlines, high-performing keywords, engaging visuals, and reader-friendly formatting aligned with Google standards.",
    },
    {
      title: "Email Marketing",
      desc: "Personalized email campaigns that avoid spam filters, build subscriber lists, spark curiosity, and drive customer engagement and conversions.",
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
          Milta Digital Marketing Services in New York
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
      desc: "Full-service digital marketing solutions including SEO, PPC, social media, email marketing, and content creation to achieve your business goals.",
    },
    {
      title: "Expert New York Marketing Team",
      desc: "Experienced New York internet marketing professionals who stay ahead of trends and tools to deliver optimized campaigns.",
    },
    {
      title: "Customized Strategies",
      desc: "Personalized digital marketing strategies aligned with your business objectives, industry, and target audience.",
    },
    {
      title: "Data-Driven Approach",
      desc: "Performance-driven campaigns powered by analytics, real-time monitoring, and transparent reporting.",
    },
    {
      title: "Proven Track Record",
      desc: "Helping businesses of all sizes enhance visibility, attract customers, and achieve sustainable growth.",
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
          Why Choose Milta as Your Digital Marketing Service in New York
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
                width: "100%",
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
export default function DigitalMarketingNewYork() {
  useFullSEO({
  // MAIN SEO
  title: "SEO & PPC Experts | Digital Marketing Agency in New York",
  description:
    "Drive your brand to the best results with expert digital marketing services in New York. Specializing in SEO, PPC, email, and internet marketing for success.",
  keywords:
    "digital marketing agency, digital marketing services, digital marketing agency in new york, new york internet marketing, digital marketing services in new york",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-newyork",
});

  const highlights = [
    "AI-Driven New York Internet Marketing",
    "Hyper-Local Market Expertise",
    "Maximized ROI & Cost Efficiency",
    "Trackable & Measurable Growth",
  ];

  return (
    <>
      <BannerSection />

      <Section title="AI-Driven Marketing & Advertising to Accelerate Your Business Growth">
        <Typography mb={3}>
          Reaching your audience in New York’s competitive market is achievable
          with the right partner. Milta combines AI technology with proven New
          York digital marketing strategies to drive measurable growth.
        </Typography>
        <Typography>
          From hyper-local SEO to data-driven ad campaigns, we help your brand
          connect, convert, and scale across New York.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Engage Your Audience with Precision Right Time, Right Platform">
        <Typography mb={4}>
          Milta empowers businesses of all sizes to elevate their online presence,
          attract high-quality leads, and drive scalable growth while optimizing
          costs.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <WhyChooseMilta />
    </>
  );
}

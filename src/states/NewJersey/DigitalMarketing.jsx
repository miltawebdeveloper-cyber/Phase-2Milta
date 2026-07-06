import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
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
          Full Digital Marketing Solutions Provider in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            New Jersey
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}  color="#ffffff"
        >
          Dominate New Jersey’s competitive market with expert digital marketing
          services. Partner with us today and take your brand to the next level.
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
          Get Started Today
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

      <Box maxWidth={950} mx="auto">
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
      desc:
        "Achieve higher organic rankings and improved visibility with ethical SEO practices. We conduct keyword research, optimize on-page and off-page elements, and track performance using Google Search Console to drive qualified traffic and conversions.",
    },
    {
      title: "Technical SEO Services",
      desc:
        "Strengthen your website’s foundation with crawl audits, HTTPS checks, speed optimization, structured data implementation, redirect audits, and seamless site migrations to improve crawlability and indexability.",
    },
    {
      title: "Link Building Services",
      desc:
        "Increase trust and authority with high-quality backlinks through strategic guest blogging, sponsorships, partnerships, data-driven infographics, and content distribution.",
    },
    {
      title: "Web Design & Development",
      desc:
        "Custom-built, mobile-ready, SEO-optimized websites designed to drive engagement and conversions with clear CTAs, simplified forms, and targeted content strategies.",
    },
    {
      title: "Social Media Marketing",
      desc:
        "Grow and engage your audience through strategic social media campaigns, competitor analysis, customer behavior insights, and paid advertising tailored to your brand goals.",
    },
    {
      title: "Pay-Per-Click (PPC) Management",
      desc:
        "Reach customers with precision using expertly managed PPC campaigns. Our certified specialists optimize ad copy, bidding strategies, device targeting, and ROI to maximize lead quality.",
    },
    {
      title: "Content Marketing Services",
      desc:
        "High-impact content creation that supports SEO and engagement. We craft compelling headlines, use high-performing keywords, structure content for readability, and ensure Google compliance.",
    },
    {
      title: "Email Marketing Services",
      desc:
        "Stand out in crowded inboxes with personalized email campaigns. We build subscriber lists, test campaigns, optimize messaging, and create curiosity-driven emails that convert.",
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
          Milta Digital Marketing Services in New Jersey
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
      desc:
        "From SEO and PPC to social media, email marketing, and content creation, Milta delivers a complete digital marketing solution.",
    },
    {
      title: "Experienced New Jersey Marketing Experts",
      desc:
        "Our seasoned professionals stay updated with the latest trends, tools, and strategies to keep your campaigns competitive.",
    },
    {
      title: "Customized Strategies",
      desc:
        "We tailor each campaign to your business goals, industry, and audience for higher engagement and ROI.",
    },
    {
      title: "Data-Driven Approach",
      desc:
        "We track performance metrics, analyze insights, and continuously optimize campaigns for measurable results.",
    },
    {
      title: "Proven Results & Commitment",
      desc:
        "Our proven track record spans startups to enterprises, delivering increased traffic, leads, and sustainable growth.",
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
          Why Choose Milta as Your Digital Marketing Agency in New Jersey
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
                maxWidth: 460,
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
export default function DigitalMarketingNewJersey() {
  useFullSEO({
  // MAIN SEO
  title: "Top Rated Digital Marketing Agency in New Jersey | Milta",
  description:
    "We are a leading digital marketing agency in New Jersey, specializing in SEO, PPC, email marketing, and helping businesses grow.",
  keywords:
    "digital marketing agency, digital marketing services, digital marketing agency in new jersey, new jersey internet marketing, digital marketing services in new jersey",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-newjersey/",
});

  const highlights = [
    "Reach the Right Audience",
    "Cost-Effective Growth",
    "Higher Search Rankings",
    "Measurable Results",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Drive Your Brand to Success with Expert Digital Marketing Services in New Jersey">
        <Typography mb={3}>
          At Milta, we deliver results-driven digital marketing services tailored
          to businesses across New Jersey. Our expertise in SEO, PPC, email
          marketing, and content strategy helps brands increase visibility,
          generate leads, and achieve sustainable growth.
        </Typography>
        <Typography>
          We leverage data-driven insights and cutting-edge tools to ensure your
          brand connects with the right audience at the right time on the right
          platform.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Engage Your Audience with Precision – Right Time, Right Platform">
        <Typography mb={4}>
          Whether you're a startup, growing company, or enterprise, Milta helps
          you break geographic barriers, optimize costs, and scale your digital
          marketing success.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <WhyChooseMilta />
    </>
  );
}

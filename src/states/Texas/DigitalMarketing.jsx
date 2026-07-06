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
          Boost Your Business with a Leading Digital Marketing Agency in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Texas
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          We combine innovative tactics with proven marketing strategies to
          drive results across local and national markets. Strengthen your online
          presence and achieve measurable growth.
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
        "Achieve greater organic rankings and visibility with ethical SEO techniques. We perform in-depth keyword research, implement on-page and off-page optimization, and track performance using Google Search Console to attract high-quality traffic and conversions.",
    },
    {
      title: "Technical SEO Services",
      desc:
        "Lay a strong digital foundation with crawl audits, HTTPS checks, speed optimization, redirect audits, duplicate content fixes, structured data implementation, and seamless site migrations to enhance crawlability and indexability.",
    },
    {
      title: "Link Building Services",
      desc:
        "Build authority and trust through strategic guest blogging, sponsorships, partnerships, data-driven infographics, content distribution, and high-quality backlink acquisition that drives long-term growth.",
    },
    {
      title: "Web Design & Development Services",
      desc:
        "Custom-built, mobile-ready, SEO-optimized websites designed to support your digital marketing goals, improve UX, and drive conversions using clear CTAs and streamlined forms.",
    },
    {
      title: "Social Media Marketing",
      desc:
        "Grow and engage your audience with data-backed social media campaigns. We analyze competitors, customer behavior, and platform trends to deliver paid and organic strategies that convert.",
    },
    {
      title: "Pay-Per-Click (PPC) Management",
      desc:
        "Reach customers with precision using expertly managed PPC campaigns. Our certified specialists optimize ad copy, bidding strategies, device targeting, seasonal trends, and ROI for high-quality lead generation.",
    },
    {
      title: "Content Marketing Services",
      desc:
        "High-impact content that fuels SEO and engagement. We create compelling headlines, integrate high-performing keywords, ensure Google compliance, and structure content for maximum readability.",
    },
    {
      title: "Email Marketing Services",
      desc:
        "Stand out in crowded inboxes with personalized email campaigns. We build subscriber lists, test campaigns, optimize messaging, and craft curiosity-driven emails that encourage action.",
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
          Milta Digital Marketing Services in Texas
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
        "From SEO and PPC to social media, email marketing, and content creation, Milta delivers a full-suite digital marketing solution in Texas.",
    },
    {
      title: "Experienced Texas Marketing Experts",
      desc:
        "Our skilled Texas internet marketing professionals stay updated with the latest trends, tools, and algorithms to keep your campaigns competitive.",
    },
    {
      title: "Customized Strategies",
      desc:
        "Every business is unique. We design tailored strategies aligned with your goals, industry, and audience for maximum engagement and ROI.",
    },
    {
      title: "Data-Driven Approach",
      desc:
        "We rely on analytics and performance metrics to continuously optimize campaigns and deliver transparent, measurable results.",
    },
    {
      title: "Proven Results & Commitment",
      desc:
        "From startups to enterprises, our proven track record reflects consistent growth in traffic, leads, and revenue for Texas businesses.",
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
          Why Choose Milta as Your Digital Marketing Agency in Texas
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
export default function DigitalMarketingTexas() {
  useFullSEO({
    title: "SEO & PPC Experts | Digital Marketing Agency in Texas",
    description:
      "Results-focused digital marketing services in Texas, including SEO, PPC, and email marketing to increase visibility and growth.",
    keywords:
      "digital marketing agency, digital marketing services, digital marketing agency in texas, texas internet marketing, digital marketing services in texas",
    author: "Milta Accounting",
    canonical:
      "https://www.milta.com/us/services/best-digital-marketing-agency-in-texas/",
  });

  const highlights = [
    "Reach a Broader Audience",
    "Cost-Effective Growth",
    "High Search Rankings",
    "Trackable Results",
  ];

  return (
    <>
      <BannerSection />

      <Section title="AI-Powered Digital Marketing Agency in Texas | Fuel Business Growth with Precision">
        <Typography mb={3}>
          Standing out in Texas’s competitive landscape demands more than tactics
          — it requires evolution. As a top-tier digital marketing agency in
          Texas, Milta combines AI-powered precision with deep regional expertise
          to deliver measurable growth.
        </Typography>
        <Typography>
          From geo-targeted SEO that dominates Texas searches to AI-optimized ad
          campaigns, our digital marketing services adapt to your goals, ensuring
          your brand resonates, engages, and converts.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Why Select Milta as Your Partner in Digital Marketing">
        <Typography mb={4}>
          Digital marketing services empower Texas businesses to engage more
          clients, optimize budgets, and achieve scalable success through
          measurable, data-driven strategies.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <WhyChooseMilta />
    </>
  );
}

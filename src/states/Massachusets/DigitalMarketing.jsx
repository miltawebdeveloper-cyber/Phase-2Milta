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
          Accelerate Your Brand’s Success with{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Premier Digital Marketing Services in Massachusetts
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Drive visibility, conversions, and long-term growth with a trusted
          digital marketing agency in Massachusetts.
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
        "Achieve higher organic rankings through in-depth keyword research, ethical SEO practices, on-page and off-page optimization, and performance tracking using Google Search Console.",
    },
    {
      title: "Technical SEO Services",
      desc:
        "Strengthen your website foundation with crawl error audits, site speed optimization, HTTPS checks, structured data implementation, and seamless site migration support.",
    },
    {
      title: "Link Building Services",
      desc:
        "Increase authority and trust with strategic guest blogging, sponsored placements, partnerships, data-driven infographics, and high-quality backlink acquisition.",
    },
    {
      title: "Web Design & Development",
      desc:
        "Custom, mobile-ready, SEO-optimized websites designed with clear CTAs, simplified forms, and strong visual hierarchy to convert visitors into customers.",
    },
    {
      title: "Social Media Marketing",
      desc:
        "Engage and grow your audience through goal-driven campaigns, competitor benchmarking, audience analysis, and data-backed paid social strategies.",
    },
    {
      title: "Pay-Per-Click (PPC) Management",
      desc:
        "Reach customers with precision using expertly managed PPC campaigns, optimized ad copy, smart bidding strategies, device targeting, and ROI tracking.",
    },
    {
      title: "Content Marketing",
      desc:
        "High-quality content creation backed by market trends, SEO best practices, compelling headlines, keyword optimization, and reader-friendly structure.",
    },
    {
      title: "Email Marketing",
      desc:
        "Personalized email campaigns designed to bypass spam filters, build subscriber lists, spark curiosity, and drive meaningful customer action.",
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
          Milta Digital Marketing Services in Massachusetts
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

/* ================= LAST SECTION ================= */
const WhyChooseMilta = () => {
  const points = [
    {
      title: "Comprehensive Digital Marketing Services",
      desc:
        "SEO, PPC, Social Media, Email Marketing, and Content Creation—everything your business needs to grow online.",
    },
    {
      title: "Expert Massachusetts Marketing Team",
      desc:
        "Experienced professionals who stay ahead of trends, tools, and platform updates to maximize performance.",
    },
    {
      title: "Customized Strategies",
      desc:
        "Every strategy is tailored to your business goals, industry, and target audience for higher ROI.",
    },
    {
      title: "Data-Driven Decision Making",
      desc:
        "We use analytics and performance metrics to continuously optimize campaigns and ensure transparency.",
    },
    {
      title: "Proven Results",
      desc:
        "From startups to enterprises, we’ve helped brands boost visibility, traffic, leads, and revenue.",
    },
    {
      title: "Commitment to Your Success",
      desc:
        "Your growth is our priority—we focus on measurable outcomes that drive real business impact.",
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
          Why Choose Milta as Your Digital Marketing Partner in Massachusetts
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
export default function DigitalMarketingMassachusetts() {
  useFullSEO({
  // MAIN SEO
  title: "Digital Marketing Agency in Massachusetts | Milta",
  description:
    "Our trusted Massachusetts digital marketing service amplifies your brand’s growth via SEO, PPC, SMM, and more.",
  keywords:
    "digital marketing agency, digital marketing services, digital marketing agency in massachusetts, massachusetts internet marketing, digital marketing services in massachusetts",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-massachusetts/",
});

  const highlights = [
    "Targeted Audience Reach",
    "Cost-Effective Growth",
    "High Search Visibility",
    "Measurable Performance",
  ];

  return (
    <>
      <BannerSection />

      <Section title="High-Impact Digital Marketing Solutions for Massachusetts Businesses">
        <Typography mb={3}>
          Milta is a leading digital marketing agency in Massachusetts, delivering
          customized SEO, PPC, and email marketing solutions designed to grow
          visibility and conversions.
        </Typography>
        <Typography>
          Our data-driven strategies help businesses attract quality traffic,
          improve rankings, and achieve sustainable online success.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Why Digital Marketing Matters for Your Business">
        <Typography mb={4}>
          In today’s competitive digital landscape, effective digital marketing
          helps you engage more customers, build brand authority, and achieve
          measurable growth.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <WhyChooseMilta />
    </>
  );
}

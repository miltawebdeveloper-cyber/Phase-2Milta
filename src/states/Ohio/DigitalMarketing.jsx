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
          Elevate Your Brand with a Top Digital Marketing Agency in Ohio
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}
          color="#ffffff"
        >
          We blend innovation with proven strategies to dominate local and national markets. Elevate your online presence. Partner with the Experts Today!
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
    { title: "Search Engine Optimization (SEO)", desc: "Achieve higher organic ranks and visibility with ethical SEO, keyword research, and Google Search Console tracking." },
    { title: "Technical SEO Service", desc: "Optimize crawlability, site speed, HTTPS, redirects, duplicate content, structured data, and site migration." },
    { title: "Link Building Service", desc: "Generate quality backlinks via sponsorships, guest blogging, partnerships, and social media engagement." },
    { title: "Web Design & Development", desc: "Custom, mobile-ready, SEO-optimized websites with clear CTAs and visual hierarchy for conversions." },
    { title: "Social Media Marketing", desc: "Engage and expand your audience with campaigns backed by data, competitor benchmarking, and analytics." },
    { title: "Pay-Per-Click (PPC) Management", desc: "Expertly managed PPC campaigns with customized ads, bidding, device targeting, and ROI monitoring." },
    { title: "Content Marketing Service", desc: "Create high-quality content optimized for SEO, with compelling headlines, keywords, and imagery." },
    { title: "Email Marketing Service", desc: "Design personalized newsletters that engage, avoid spam filters, and drive customer action." },
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
          Milta Digital Marketing Services in Ohio
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

/* ================= LAST SECTION – CENTERED STYLE ================= */
const WhyChooseMilta = () => {
  const points = [
    { title: "Comprehensive Services", desc: "Full suite of SEO, PPC, Social Media, Email Marketing, and Content Creation." },
    { title: "Expert Ohio Marketing Team", desc: "Professionals with years of experience, staying ahead of trends." },
    { title: "Customized Growth Strategies", desc: "Personalized campaigns aligned with business goals and audience." },
    { title: "Data-Driven Approach", desc: "Continuous tracking and optimization for measurable results." },
    { title: "Proven Track Record", desc: "Successful outcomes for startups and enterprises across Ohio." },
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
export default function DigitalMarketingOhio() {
  useFullSEO({
  // MAIN SEO
  title: "SEO & PPC Specialists | Top Digital Marketing Agency Ohio",
  description:
    "We deliver tailored digital marketing services in Ohio designed to maximize ROI and visibility. Specializing in SEO, PPC, and email marketing.",
  keywords:
    "digital marketing agency, digital marketing services, digital marketing agency in ohio, ohio internet marketing, digital marketing services in ohio",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-ohio/",
});

  const highlights = [
    "AI-Driven Ohio Internet Marketing",
    "Ohio-Centric Strategy",
    "ROI-First Mindset",
    "Customized for Every Stage of Growth",
  ];

  return (
    <>
      <BannerSection />

      <Section title="AI-Powered Digital Marketing Agency in Ohio | Fuel Business Growth with Precision">
        <Typography mb={3}>
          Standing out in Ohio’s competitive landscape demands more than tactics—it requires evolution. 
          Milta merges AI-powered precision with deep regional expertise. 
        </Typography>
        <Typography>
          From geo-targeted SEO to AI-optimized ad campaigns, we ensure your brand resonates, engages, and converts.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Why Partner with Milta?">
        <Typography mb={4}>
          Predictive analytics, regional insights, and ROI-first strategies make Milta the trusted digital marketing agency in Ohio.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <WhyChooseMilta />
    </>
  );
}

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
          Outshine the competition with cutting-edge{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Digital Marketing Services in South Carolina
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Premier Digital Marketing Agency in South Carolina
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
          Accelerate Your Brand’s Success
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
    { title: "Search Engine Optimization (SEO)", desc: "Achieve higher organic rankings and attract qualified traffic through ethical SEO techniques." },
    { title: "Technical SEO Services", desc: "Optimize site speed, crawlability, HTTPS status, structured data, and handle site migrations." },
    { title: "Link Building Services", desc: "Generate authoritative backlinks using guest blogs, sponsorships, and strategic outreach." },
    { title: "Web Design & Development", desc: "Custom, mobile-friendly, and SEO-optimized websites designed to convert visitors." },
    { title: "Social Media Marketing", desc: "Develop engaging campaigns and grow your audience with data-driven strategies." },
    { title: "PPC Management", desc: "Precision-targeted PPC campaigns to maximize ROI and drive high-quality leads." },
    { title: "Content Marketing", desc: "Create compelling, SEO-friendly content that educates, engages, and converts." },
    { title: "Email Marketing", desc: "Design personalized email campaigns that drive engagement and customer action." },
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
          Milta Digital Marketing Services in South Carolina
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
    {
      title: "Comprehensive Digital Marketing Services",
      desc: "From SEO and PPC to content and email marketing, Milta delivers end-to-end digital solutions.",
    },
    {
      title: "Expert South Carolina Marketing Team",
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
export default function DigitalMarketingSouthCarolina() {
  useFullSEO({
  // MAIN SEO
  title: "Outshine Digital Marketing Agency In South Carolina | Milta",
  description:
    "Join forces with a trusted South Carolina internet marketing team and amplify your brand’s growth and success.",
  keywords:
    "digital marketing agency, digital marketing services, digital marketing agency in south carolina, south carolina internet marketing, digital marketing services in south carolina",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-southcarolina/",
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

      <Section title="Connect with Your Audience at the Perfect Moment – Right Time, Right Platform">
        <Typography mb={3}>
          At Milta, we equip businesses of all sizes with powerful digital marketing services in South Carolina to amplify their online presence, attract high-value leads, and drive sustainable growth.
        </Typography>
        <Typography>
          Whether you’re a startup, an expanding business, or a multi-location enterprise, our agency ensures your brand reaches the right audience transcending geographic and time zone limitations with precision-driven strategies.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Accelerate Your Brand’s Success with Premier Digital Marketing Services">
        <Typography mb={4}>
          We specialize in SEO, PPC, email marketing, social media, and web design, delivering measurable results to grow your brand in South Carolina.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <WhyChooseMilta />
    </>
  );
}

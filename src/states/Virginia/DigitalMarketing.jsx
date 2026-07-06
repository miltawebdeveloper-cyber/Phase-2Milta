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
          Elevate Your Brand with a Top Digital Marketing Agency in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Virginia
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95} color="#ffffff"
        >
          Unlock growth with expert digital marketing services.
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
    { title: "Search Engine Optimization (SEO)", desc: "Achieve greater organic rankings and exposure with careful keyword research, ethical SEO techniques, and performance tracking." },
    { title: "Technical SEO Services", desc: "Lay a strong foundation with crawl error reports, HTTPS checks, speed optimization, site audits, structured data, and migration support." },
    { title: "Link Building Services", desc: "Build authority and trust through high-quality backlinks, guest blogging, sponsorships, and strategic partnerships." },
    { title: "Web Design & Development", desc: "Custom, mobile-ready, SEO-optimized websites designed for conversions with clear CTAs and simplified user experience." },
    { title: "Social Media Marketing", desc: "Engage your audience and grow your social presence using data-driven campaigns and paid advertising." },
    { title: "Pay-Per-Click (PPC) Management", desc: "Precision-targeted PPC campaigns managed by certified specialists to maximize leads, ROI, and visibility." },
    { title: "Content Marketing", desc: "Create SEO-driven, compelling content with strategic keywords, relevant visuals, and engaging structures." },
    { title: "Email Marketing", desc: "Personalized campaigns that capture attention, avoid spam folders, and drive customer engagement." },
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
          Milta Digital Marketing Services in Virginia
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
    { title: "AI-Powered Virginia Internet Marketing", desc: "Data-driven insights for precise audience targeting." },
    { title: "Localized Expertise", desc: "Strategies tailored to Virginia’s dynamic business landscape." },
    { title: "Maximized ROI", desc: "Performance-focused campaigns for conversions and cost efficiency." },
    { title: "Comprehensive Services", desc: "Full suite including SEO, PPC, Social Media, Email Marketing, and Content Creation." },
    { title: "Proven Track Record", desc: "Helping startups and enterprises increase traffic, leads, and revenue consistently." },
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
export default function DigitalMarketingVirginia() {
  useFullSEO({
  // MAIN SEO
  title: "SEO & PPC Specialists | Top Digital Marketing Agency Virginia",
  description:
    "Achieve top results for your brand with expert digital marketing in Virginia. Specializing in SEO, PPC, email, and internet marketing.",
  keywords:
    "digital marketing agency, digital marketing services, digital marketing agency in virginia, virginia internet marketing, digital marketing services in virginia",
  author: "Milta Accounting",
  canonical: "https://www.milta.com/us/services/best-digital-marketing-agency-in-virginia/",
});

  const highlights = [
    "AI-Driven Strategies",
    "Targeted Engagement",
    "Cost-Effective Marketing",
    "Data-Backed Insights",
  ];

  return (
    <>
      <BannerSection />

      <Section title="AI-Powered Digital Marketing to Drive Business Success">
        <Typography mb={3}>
          Standing out in Virginia’s competitive market requires expertise and innovation.
          Milta blends AI-driven strategies with local internet marketing expertise.
        </Typography>
        <Typography>
          Our services, from website development to PPC advertising, are customized to align with your business goals, increase reach, and boost revenue.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Targeted Engagement for Maximum Impact">
        <Typography mb={4}>
          We empower businesses of all sizes to build a strong online presence, generate high-quality leads, and achieve scalable growth.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <WhyChooseMilta />
    </>
  );
}

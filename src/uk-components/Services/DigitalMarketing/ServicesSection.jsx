// src/uk-components/Services/DigitalMarketingServicesSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ✅ Suitable Icons */
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import LinkIcon from "@mui/icons-material/Link";
import WebIcon from "@mui/icons-material/Web";
import CampaignIcon from "@mui/icons-material/Campaign";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";

const services = [
  {
    title: "Search Engine Optimisation (SEO)",
    desc: "Achieve higher organic rankings and increased visibility with ethical, results-driven SEO. In-depth keyword research, on-page/off-page optimisation, and performance tracking to boost traffic and conversions.",
  },
  {
    title: "Technical SEO",
    desc: "Strengthen your website with technical SEO audits, site speed improvements, redirect fixes, structured data, HTTPS checks, and seamless site migrations.",
  },
  {
    title: "Link Building",
    desc: "Increase authority and trust through high-quality backlinks via guest blogging, partnerships, sponsored content, and data-driven campaigns to drive referral traffic.",
  },
  {
    title: "Web Design & Development",
    desc: "Custom, mobile-friendly, and SEO-optimised websites with clean layouts, intuitive navigation, strong CTAs, and user-centric design for better engagement.",
  },
  {
    title: "Social Media Marketing",
    desc: "Grow and engage your audience on social platforms with tailored organic and paid strategies, competitor analysis, and measurable results.",
  },
  {
    title: "Pay-Per-Click (PPC) Management",
    desc: "Data-driven PPC campaigns covering keyword selection, ad copy, bidding strategies, and ROI tracking to maximise visibility, traffic, and leads.",
  },
  {
    title: "Content Writing",
    desc: "SEO-friendly, engaging content that aligns with Google guidelines and user intent, including compelling headlines and structured, easy-to-read copy.",
  },
  {
    title: "Email Marketing",
    desc: "High-performing, personalised email campaigns to nurture leads, retain customers, and build engagement with newsletters that encourage action.",
  },
];

const DigitalMarketingServicesSection = () => {
  /* ✅ Icon Map for Marketing Services */
  const iconMap = {
    "Search Engine Optimisation (SEO)": TravelExploreIcon,
    "Technical SEO": BuildCircleIcon,
    "Link Building": LinkIcon,
    "Web Design & Development": WebIcon,
    "Social Media Marketing": CampaignIcon,
    "Pay-Per-Click (PPC) Management": AdsClickIcon,
    "Content Writing": ArticleIcon,
    "Email Marketing": EmailIcon,
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ maxWidth: 1300, mx: "auto", textAlign: "center" }}>
          {/* SECTION HEADER */}
          <Box sx={{ maxWidth: 750, mx: "auto", mb: { xs: 6, md: 8 } }}>
            {/* Label */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#97ba3a",
                }}
              />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Digital Marketing
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "34px", md: "42px" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                fontFamily: "'Poppins', sans-serif",
                color: "#2b6d2a",
              }}
            >
              Build Authority, Increase Visibility,
              <br />
              and Grow Profitably
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                color: "#666",
                lineHeight: 1.8,
                maxWidth: 600,
                mx: "auto",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
              }}
            >
              Our UK-focused digital marketing services help businesses strengthen
              their online presence, generate leads, and build long-term brand
              credibility.
            </Typography>
          </Box>

          {/* SERVICE CARDS */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "stretch",
              gap: 4,
              width: "100%",
              maxWidth: 1080,
              mx: "auto",
            }}
          >
            {services.map((item, index) => {
              const Icon = iconMap[item.title] || CheckCircleIcon;

              return (
                <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 280px", md: "0 1 300px" },
                  maxWidth: { xs: "100%", sm: 320 },
                  display: "flex",
                }}
              >
                  <Box
                    sx={{
                      maxWidth: 280,
                      width: "100%",
                      p: 3.5,
                      borderRadius: "16px",
                    height: "100%",

                      /* ✅ Same Premium Gradient Style */
                      background:
                        "linear-gradient(180deg, rgba(43,109,42,0.98), rgba(55,125,50,0.98))",
                      color: "#fff",

                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 2,

                      position: "relative",
                      transition:
                        "transform 0.32s ease, box-shadow 0.32s ease, background 0.32s ease",

                      boxShadow: "0 8px 24px rgba(43,109,42,0.06)",

                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 28px 70px rgba(15,23,42,0.14)",
                        background:
                          "linear-gradient(180deg,#97ba3a,#2b6d2a)",
                      },
                    }}
                  >
                    {/* ✅ Icon Badge (Same as Bookkeeping Style) */}
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        background:
                          "linear-gradient(135deg,#ffffff10,#ffffff05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow:
                          "inset 0 2px 0 rgba(255,255,255,0.06), 0 8px 20px rgba(0,0,0,0.08)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 1.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "linear-gradient(135deg,#97ba3a,#2b6d2a)",
                        }}
                      >
                        <Icon sx={{ fontSize: 26, color: "#fff" }} />
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      sx={{
                        fontSize: 16.5,
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: "rgba(255,255,255,0.9)",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.9)",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DigitalMarketingServicesSection;

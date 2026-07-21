// src/components/Testimonials.jsx
import React from "react";
import { Box, Typography, Avatar, Container } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Joseph B. Renn",
    role: "CEO & Founder",
    text: "At vero eos accusamus eustodio dignissimos ducimus blanditiis praese voluptatum deleniti atque corre.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Michael S. Johnson",
    role: "Manager",
    text: "Our company achieved amazing results thanks to their professional insurance services.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Sophia L. Carter",
    role: "Business Owner",
    text: "Highly recommend! Their team is efficient, friendly, and very reliable.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David P. Smith",
    role: "Entrepreneur",
    text: "Excellent service with great support. They truly care about their clients.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2b6d2a",
        color: "#ffffff",
        py: { xs: 6, md: 12 },
        px: 2,
        textAlign: "center",
        fontFamily: "var(--uk-font-secondary)",
      }}
    >
      <Container maxWidth="lg" sx={{ maxWidth: "1300px" }}>
        <Typography
          sx={{ color: "#97ba3a", mb: 1, fontWeight: 600 }}
        >
          Clients Testimonials
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            fontFamily: "var(--uk-font-primary)",
          }}
        >
          Clients Say About Insurance <br /> Services & Our Team
        </Typography>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            600: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  bgcolor: "#ffffff",
                  color: "#1a1a1a",
                  p: 4,
                  borderRadius: 3,
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                  height: 300, // fixed height for all cards
                  width: "100%", // fill SwiperSlide width
                  maxWidth:"300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Avatar
                  src={t.image}
                  alt={t.name}
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <FormatQuoteIcon
                  sx={{ color: "#97ba3a", fontSize: 40, mb: 2 }}
                />
                <Typography
                  sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4, // limit text lines to 4
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {t.text}
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>{t.name}</Typography>
                <Typography sx={{ fontSize: 14, color: "#6b6b6b" }}>
                  {t.role}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dots */}
        <Box sx={{ mt: 6, display: "flex", justifyContent: "center", gap: 1 }}>
          {testimonials.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: idx === 0 ? "#97ba3a" : "#ffffff",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;

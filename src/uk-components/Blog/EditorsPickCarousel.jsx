import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Box, Typography, Chip, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../../api/blogs";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const EditorsPickCarousel = () => {
  const [picks, setPicks] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getBlogs({ 
        table: "blogs_uk", 
        editors_pick: true 
      });
      setPicks(data || []);
    };

    load();
  }, []);

  return (
    <Box
      sx={{
        px: { xs: 2, md: 5 },
        mt: 8,
        position: "relative",
        fontFamily: "'Poppins', sans-serif",
        maxWidth: "1600px",
        mx: "auto",
      }}
    >
      {/* ================= Section Title ================= */}
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: { xs: "22px", md: "28px" },
          mb: 3,
          color: "#2b6d2a",
        }}
      >
        Editor’s Picks
      </Typography>

      {/* ================= Navigation Buttons ================= */}
      <IconButton
        className="prev-btn"
        sx={{
          position: "absolute",
          top: "55%",
          left: -10,
          zIndex: 20,

          /* Gradient Secondary Background */
          background: "linear-gradient(135deg, #97ba3a, #3b9c0d)",
          color: "#1a1a1a",

          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
          "&:hover": {
            background: "linear-gradient(135deg, #2b6d2a, #0f2a14)",
            color: "#fff",
          },
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <IconButton
        className="next-btn"
        sx={{
          position: "absolute",
          top: "55%",
          right: -10,
          zIndex: 20,

          /* Gradient Secondary Background */
          background: "linear-gradient(135deg, #97ba3a, #3b9c0d)",
          color: "#1a1a1a",

          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
          "&:hover": {
            background: "linear-gradient(135deg, #2b6d2a, #0f2a14)",
            color: "#fff",
          },
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      {/* ================= Swiper Carousel ================= */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={22}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
      >
        {picks.map((p) => (
          <SwiperSlide key={p.id}>
            {/* ================= Blog Card ================= */}
            {/* An onClick handler renders no <a href>, so these editor's-pick
                posts contributed no internal link. A real anchor does. */}
            <Box
              component={Link}
              to={`/uk/blogs/${p.slug}`}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: 2.5,
                borderRadius: "22px",
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
                bgcolor: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
                  borderColor: "#2b6d2a",
                },
              }}
            >

              {/* Date */}
              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#1a1a1a",
                  opacity: 0.75,
                  mb: 1,
                }}
              >
                {new Date(p.created_at).toDateString()}
              </Typography>

              {/* Blog Title */}
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "19px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  mb: 2,
                  color: "#2b6d2a",
                  flexGrow: 1,

                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {p.title}
              </Typography>

              {/* Category Chip + Read More */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Chip
                  label={p.category}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    fontSize: "11px",
                    background: "linear-gradient(135deg, #97ba3a, #3b9c0d)",
                    color: "#fff",
                    px: 0.5,
                  }}
                />
                <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "#2b6d2a" }}>
                  Read More →
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default EditorsPickCarousel;

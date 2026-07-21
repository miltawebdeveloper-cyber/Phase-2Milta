import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Box, Container, Typography, Chip, IconButton, Card } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../../api/blogs";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const EditorsPickCarousel = () => {
  const [picks, setPicks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await getBlogs({ editors_pick: true });
      setPicks(data || []);
    };
    load();
  }, []);

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto", px: { xs: 3, md: 5 }, mt: 8, position: "relative" }}>
      <Typography variant="overline" color="primary" sx={{ display: "block", mb: 0.5 }}>
        Curated For You
      </Typography>
      <Typography variant="h4" sx={{ mb: 3, color: "text.primary" }}>
        Editor’s Picks
      </Typography>

      {/* Navigation Buttons */}
      <IconButton
        className="prev-btn"
        sx={(theme) => ({
          position: "absolute",
          top: "60%",
          left: -12,
          zIndex: 20,
          background: theme.palette.background.paper,
          color: theme.palette.primary.main,
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(38,105,41,0.25)",
          "&:hover": { background: theme.palette.primary.main, color: "#fff" },
        })}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>

      <IconButton
        className="next-btn"
        sx={(theme) => ({
          position: "absolute",
          top: "60%",
          right: -12,
          zIndex: 20,
          background: theme.palette.background.paper,
          color: theme.palette.primary.main,
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(38,105,41,0.25)",
          "&:hover": { background: theme.palette.primary.main, color: "#fff" },
        })}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

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
        style={{ padding: "16px 8px 40px" }}
      >
        {picks.map((p) => (
          <SwiperSlide key={p.id}>
            <Card
              onClick={() => navigate(`/us/blogs/${p.slug}`)}
              sx={{
                height: "100%",
                p: 3,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {new Date(p.created_at).toDateString()}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  lineHeight: 1.35,
                  color: "text.primary",
                  mb: 2,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {p.title}
              </Typography>

              <Chip
                label={p.category}
                size="small"
                color="primary"
                sx={{ mt: "auto", alignSelf: "flex-start", fontWeight: 600 }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default EditorsPickCarousel;

// src/components/careerComp/VoicesFromTeam.jsx
import React, { useRef } from "react";
import { Box, Container, Typography, Card, Avatar, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const testimonials = [
  {
    text: "The collaborative culture here is unmatched. Every idea is valued, and the leadership team genuinely invests in our development. I've grown more in two years than I ever imagined!",
    name: "Siva Kumar",
    role: "Associate Business Analyst",
    avatar: "https://i.pravatar.cc/150?u=siva",
  },
  {
    text: "From day one, I felt welcomed. The training programs and mentorship opportunities show that Milta wants us to succeed, not just as professionals but as individuals.",
    name: "Anish Bosco",
    role: "Business Development Executive",
    avatar: "https://i.pravatar.cc/150?u=anish",
  },
  {
    text: "Diversity isn't just a buzzword here. My team includes people from various backgrounds, and it's amazing how that drives creativity in solving client challenges.",
    name: "Kavitha",
    role: "HR Executive",
    avatar: "https://i.pravatar.cc/150?u=kavitha",
  },
];

const VoicesFromTeam = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.6;
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default", overflow: "hidden" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto", px: { xs: 3, md: 4 } }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "flex-end" },
            justifyContent: "space-between",
            gap: 3,
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography variant="overline" sx={{ color: "primary.main", display: "block", mb: 1 }}>
                OUR PEOPLE
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "text.primary", mb: 1 }}>
                Voices from{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Our Team
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { xs: "1rem", md: "1.1rem" } }}>
                Hear directly from the people who make Milta great!
              </Typography>
            </motion.div>
          </Box>

          {/* Nav controls */}
          <Box sx={{ display: "flex", gap: 1.5, flexShrink: 0 }}>
            {[
              { icon: <KeyboardArrowLeftIcon />, dir: "left" },
              { icon: <KeyboardArrowRightIcon />, dir: "right" },
            ].map(({ icon, dir }) => (
              <IconButton
                key={dir}
                onClick={() => scroll(dir)}
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                  bgcolor: "background.paper",
                  border: "1px solid rgba(38,105,41,0.18)",
                  color: "primary.main",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  "&:hover": { bgcolor: "primary.main", color: "#fff", borderColor: "primary.main" },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Cards */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollBehavior: "smooth",
            pb: 2,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: "0 0 auto" }}
            >
              <Card
                sx={{
                  width: { xs: "82vw", sm: "360px", md: "400px" },
                  height: "100%",
                  p: { xs: 3.5, md: 4 },
                  borderRadius: "20px",
                  backgroundColor: "background.paper",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FormatQuoteIcon sx={{ color: "primary.main", fontSize: 44, mb: 1 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "text.primary", lineHeight: 1.8, fontSize: { xs: "0.97rem", md: "1.02rem" }, mb: 4, flexGrow: 1 }}
                >
                  {item.text}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar src={item.avatar} sx={{ width: 52, height: 52, border: "2px solid", borderColor: "primary.main" }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, fontSize: "0.97rem", lineHeight: 1.2, color: "text.primary" }}>
                      {item.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "0.68rem" }}
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default VoicesFromTeam;

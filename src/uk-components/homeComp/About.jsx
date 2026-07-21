// src/components/HeroSection.jsx
import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Accounting from "../../assets/Accounting & Bookkeeping Services.jpg";

const stats = [
  { value: 100, suffix: "+", label: "Satisfied Clients" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 60, suffix: "+", label: "Skilled Professionals" },
  { value: 95, suffix: "%", label: "Client Satisfaction Rate" },
];

/* ✅ Counter Component */
const Counter = ({ target, suffix, isActive }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 1500;
    const incrementTime = 20;
    const step = target / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, isActive]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const HeroSection = () => {
  const statsRef = useRef(null);

  const isStatsInView = useInView(statsRef, {
    once: false,
    amount: 0.3,
  });

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#fff",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 5, md: 10 },
        pb: 0,
      }}
    >
      {/* ================= MAIN CONTENT ================= */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 5, md: 10 },
          }}
        >
          {/* ================= LEFT IMAGE ================= */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }} // 📱 Fade-up on mobile
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "100%", md: 520 },
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={Accounting}
              alt="Accounting Services"
              sx={{
                width: "100%",
                height: { xs: 260, sm: 320, md: 520 },
                objectFit: "cover",
                borderRadius: "22px",
                boxShadow: "0 14px 40px rgba(0,0,0,0.15)",
              }}
            />

            {/* ✅ Floating Badge (Hidden on Mobile) */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" }, // 👈 Hidden on mobile
                position: "absolute",
                top: -35,
                left: -35,
                width: 140,
                height: 140,
                bgcolor: "#fff",
                borderRadius: "50%",
                boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 48,
                  fontWeight: 800,
                  color: "#2b6d2a",
                  lineHeight: 1,
                }}
              >
                10+
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#333",
                }}
              >
                Years of Experience
              </Typography>
            </Box>
          </Box>

          {/* ================= RIGHT CONTENT ================= */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }} // 📱 Fade-up on mobile
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            sx={{
              flex: 1.3,
              textAlign: { xs: "center", md: "left" },
              maxWidth: 750,
            }}
          >

            <Typography
              sx={{
                color: "#97ba3a",
                fontWeight: 700,
                fontSize: { xs: 14, md: 18 },
                letterSpacing: 1,
                mb: 2,
              }}
            >
              ● About Us
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                lineHeight: 1.25,
                fontSize: {
                  xs: "22px",
                  sm: "26px",
                  md: "42px",
                },
                mb: 3,
                color: "#2b6d2a",
              }}
            >
              A Reliable Accounting Partner You Can Trust
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 14, sm: 15 },
                lineHeight: 1.8,
                color: "#444",
                mb: 4,
                px: { xs: 1, md: 0 },
              }}
            >
              Managing business finances can be complex and time-consuming,
              particularly as your organisation grows. At Milta Accounting
              Services, we provide structured offshore accounting and
              bookkeeping support designed to simplify financial management and
              reduce operational pressure.

              Our expertise covers everything from routine bookkeeping and cash
              flow oversight to tax planning and regulatory compliance. By
              taking full ownership of your financial processes, we enable you
              to focus on strategic decision-making and sustainable business
              growth. We also offer targeted digital marketing support to help
              strengthen your online presence and attract the right audience.
              <br />
              <br />
              Milta is not just a service provider—we work alongside you as a
              long-term partner, delivering consistent guidance, reliable
              support, and practical financial insight throughout every stage
              of your business journey.
            </Typography>

            <Button
              component="a"
              href="/uk/about"
              variant="contained"
              sx={{
                bgcolor: "#2b6d2a",
                color: "#fff",
                borderRadius: "30px",
                px: 4,
                py: 1.3,
                fontWeight: 600,
                fontSize: 14,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#97ba3a",
                },
              }}
            >
              Learn More →
            </Button>
          </Box>
        </Box>
      </Container>

      {/* ================= STATS SECTION ================= */}
      <Box
        ref={statsRef}
        component={motion.div}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.3 }}
        sx={{
          mt: { xs: 5, md: 6 },
          bgcolor: "#2b6d2a",
          py: { xs: 4, md: 5 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 3, md: 4 },
              textAlign: "center",
            }}
          >
            {stats.map((stat, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: 22, md: 30 },
                    color: "#fff",
                  }}
                >
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                    isActive={isStatsInView}
                  />
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 12, md: 14 },
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
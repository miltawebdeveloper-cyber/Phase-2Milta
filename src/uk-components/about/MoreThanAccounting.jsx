// src/components/MoreThanAccounting.jsx
import React from "react";
import { Box, Typography, Container, Button, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

const MoreThanAccounting = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 1, sm: 2, md: 2 },
        backgroundColor: "#2b6d2a",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        minHeight: { xs: 'auto', sm: 'auto', md: 'auto' },
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{ 
          maxWidth: { xs: '100%', sm: '90%', md: '800px' },
          px: { xs: 2, sm: 3, md: 2 }
        }}
      >

        {/* ✅ Heading Animation (Top) */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography
            variant={isMobile ? "h5" : isTablet ? "h4" : "h4"}
            sx={{ 
              fontWeight: 700, 
              mb: { xs: 3, sm: 3, md: 4 },
              color: "#fff",
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
            }}
          >
            More Than Accounting
          </Typography>
        </motion.div>

        {/* ✅ Small subtitle + Description Animation (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: "rgba(255,255,255,0.92)", 
              fontWeight: 600, 
              mb: 1,
              fontSize: { xs: '1rem', sm: '1rem', md: '1rem' }
            }}
          >
            Accounting + Digital Support
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
              mb: { xs: 3, sm: 3.5, md: 4 },
              color: "#fff",
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1rem' },
              px: { xs: 1, sm: 2, md: 0 }
            }}
          >
            We help businesses manage finances and grow visibility — bookkeeping,
            accounting and targeted digital support combined for a single trusted
            partner.
          </Typography>

          {/* Feature chips */}
          <Box sx={{ 
            display: "flex", 
            gap: { xs: 1, sm: 1.5, md: 2 }, 
            justifyContent: "center", 
            mb: { xs: 3, sm: 3.5, md: 4 }, 
            flexWrap: "wrap",
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            px: { xs: 2, sm: 0 }
          }}>
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 1.25, 
              bgcolor: "rgba(255,255,255,0.06)", 
              px: { xs: 2, sm: 2.5, md: 2.5 }, 
              py: { xs: 0.7, sm: 0.8, md: 0.8 }, 
              borderRadius: 18,
              width: { xs: '100%', sm: 'auto' },
              justifyContent: { xs: 'center', sm: 'flex-start' }
            }}>
              <SpeedRoundedIcon sx={{ color: "#fff", fontSize: { xs: 16, sm: 18, md: 18 } }} />
              <Typography sx={{ color: "rgba(255,255,255,0.95)", fontSize: { xs: 13, sm: 14, md: 14 } }}>
                Fast Setup
              </Typography>
            </Box>

            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 1.25, 
              bgcolor: "rgba(255,255,255,0.06)", 
              px: { xs: 2, sm: 2.5, md: 2.5 }, 
              py: { xs: 0.7, sm: 0.8, md: 0.8 }, 
              borderRadius: 18,
              width: { xs: '100%', sm: 'auto' },
              justifyContent: { xs: 'center', sm: 'flex-start' }
            }}>
              <TrendingUpRoundedIcon sx={{ color: "#fff", fontSize: { xs: 16, sm: 18, md: 18 } }} />
              <Typography sx={{ color: "rgba(255,255,255,0.95)", fontSize: { xs: 13, sm: 14, md: 14 } }}>
                Growth Focused
              </Typography>
            </Box>

            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 1.25, 
              bgcolor: "rgba(255,255,255,0.06)", 
              px: { xs: 2, sm: 2.5, md: 2.5 }, 
              py: { xs: 0.7, sm: 0.8, md: 0.8 }, 
              borderRadius: 18,
              width: { xs: '100%', sm: 'auto' },
              justifyContent: { xs: 'center', sm: 'flex-start' }
            }}>
              <SupportAgentRoundedIcon sx={{ color: "#fff", fontSize: { xs: 16, sm: 18, md: 18 } }} />
              <Typography sx={{ color: "rgba(255,255,255,0.95)", fontSize: { xs: 13, sm: 14, md: 14 } }}>
                Dedicated Support
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* ✅ Highlight Card Animation (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              color: "#2b6d2a",
              borderRadius: { xs: '16px', sm: '18px', md: "20px" },
              p: { xs: 3, sm: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              maxWidth: { xs: '100%', sm: '90%', md: 600 },
              position: "relative",
              overflow: "hidden",
              mb: { xs: 2, sm: 3, md: 4 },
              boxShadow: { xs: '0 4px 12px rgba(0,0,0,0.15)', sm: '0 6px 16px rgba(0,0,0,0.2)', md: 'none' },
              "&::before": {
                content: '""',
                position: "absolute",
                width: "120%",
                height: "120%",
                top: "-10%",
                left: "-10%",
                background: "rgba(0,0,0,0.02)",
                transform: "rotate(45deg)",
                borderRadius: "50%",
              },
            }}
          >
            {/* ✅ Card Heading Animation (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <Typography 
                variant={isMobile ? "h6" : "h5"} 
                sx={{ 
                  fontWeight: 700, 
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.5rem' },
                  textAlign: 'center'
                }}
              >
                Let's Work Together
              </Typography>
            </motion.div>

            {/* ✅ Card Text Animation (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 }, 
                  mb: { xs: 3, sm: 3.5, md: 4 },
                  fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                  px: { xs: 1, sm: 2, md: 0 },
                  textAlign: 'center'
                }}
              >
                At Milta Accounting Services, we believe accounting should give
                you clarity and peace of mind, not add pressure. If you're
                looking for a reliable and supportive financial partner, we'd be
                happy to talk.
              </Typography>
            </motion.div>

            {/* ✅ Button Animation (Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Button
                component="a"
                href="/uk/contact"
                aria-label="Contact Milta for accounting services"
                variant="contained"
                sx={{
                  backgroundColor: "#2b6d2a",
                  color: "#fff",
                  fontWeight: 600,
                  px: { xs: 4, sm: 5, md: 5 },
                  py: { xs: 1.2, sm: 1.5, md: 1.5 },
                  borderRadius: "30px",
                  textTransform: "none",
                  fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: '280px', sm: 'auto' },
                  "&:hover": {
                    backgroundColor: "#97ba3a",
                  },
                }}
              >
                Let's Talk
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default MoreThanAccounting;
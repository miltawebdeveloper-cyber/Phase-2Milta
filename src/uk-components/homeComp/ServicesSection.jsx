import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* SERVICES DATA */
const services = [
  {
    title: "Bookkeeping Service",
    description:
      "We create customized bookkeeping solutions for small and growing businesses. Speak with our bookkeeping professionals and get a free consultation today.",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
    link: "/uk/bookkeeping-services-for-small-business",
  },
  {
    title: "Accounts Payable Service",
    description:
      "We provide a comprehensive outsourced accounts payable service to simplify your financial operations and improve efficiency.",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
    link: "/uk/accounts-payable-services-in-uk",
    featured: true,
  },
  {
    title: "Payroll Outsourcing Service",
    description:
      "Fully managed payroll services for small businesses, SMEs, and growing organizations across the UK.",
    icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    link: "/uk/payroll-services-for-small-business",
  },
  {
    title: "Accounts Receivable Service",
    description:
      "Optimize your cash collection cycle, improve customer payment experience, and prevent revenue leakage before it impacts cash flow.",
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    link: "/uk/accounts-receivable-services-in-uk",
  },
  {
    title: "Virtual Accounting Assistance",
    description:
      "Dependable virtual accounting services in the UK. Our experienced online accountants ensure accurate and efficient financial management.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    link: "/uk/virtual-assistant-services-in-the-uk",
  },
  {
    title: "Digital Marketing Service",
    description:
      "Best digital marketing services in the UK. Boost your online presence, drive traffic, and increase sales with our expert marketing solutions.",
    icon: "https://cdn-icons-png.flaticon.com/512/1968/1968641.png",
    link: "/uk/best-digital-marketing-service-in-uk",
  },
];

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 4, sm: 6, md: 10 },
        pb: { xs: 6, sm: 8, md: 16 },
        backgroundColor: "#f5f7f8",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {/* ================= HEADER ================= */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 9 } }}>
          <Typography
            sx={{
              color: "#97ba3a",
              fontWeight: 600,
              textAlign: "center",
              mb: { xs: 1.5, md: 2 },
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              letterSpacing: "0.5px",
            }}
          >
            ● Our Services
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontWeight: 600,
              lineHeight: { xs: 1.3, sm: 1.25 },
              maxWidth: { xs: "100%", sm: 550, md: 650 },
              mx: "auto",
              textAlign: "center",
              fontSize: {
                xs: "24px",
                sm: "32px",
                md: "38px",
                lg: "42px",
              },
              color: "#2b6d2a",
              px: { xs: 2, sm: 0 },
            }}
          >
            The largest truly global wealth manager
          </Typography>
        </Box>

        {/* ================= FLEXBOX GRID ================= */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "stretch",
            gap: { xs: 2.5, sm: 3, md: 4 },
            width: "100%",
            maxWidth: 1120,
            mx: "auto",
          }}
        >
          {services.map((item, index) => {
            // Adjust animation direction based on screen size
            const direction = isMobile ? 0 : (index % 2 === 0 ? -50 : 50);

            return (
              <Box
                key={index}
                sx={{
                  // Fixed basis so cards are equal width; the flex container
                  // centers whole rows and the trailing partial row.
                  flex: {
                    xs: "1 1 100%",
                    sm: "0 1 300px",
                    md: "0 1 320px",
                  },
                  maxWidth: { xs: "100%", sm: 340 },
                  display: "flex",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: direction }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.25,
                    delay: isMobile ? 0 : index * 0.1, // Stagger effect only on desktop
                  }}
                  viewport={{ once: true, amount: isMobile ? 0.1 : 0.2, margin: '0px 0px 900px 0px' }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: { xs: "12px", sm: "14px", md: "16px" },
                      padding: {
                        xs: "24px 20px",
                        sm: "28px 24px",
                        md: "32px 28px",
                        lg: "40px 32px",
                      },
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
                      background: item.featured
                        ? "linear-gradient(135deg, #2b6d2a 0%, #97ba3a 100%)"
                        : "#fff",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: !isMobile ? "translateY(-8px)" : "none",
                        boxShadow: !isMobile ? "0 16px 30px rgba(0, 0, 0, 0.12)" : "0 8px 20px rgba(0, 0, 0, 0.06)",
                      },
                    }}
                  >
                    {/* CONTENT - Always visible */}
                    <Box>
                      {/* ICON */}
                      <Box
                        sx={{
                          width: { xs: 45, sm: 50, md: 55 },
                          height: { xs: 45, sm: 50, md: 55 },
                          mb: { xs: 2, sm: 2.5, md: 3 },
                          mx: "auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src={item.icon}
                          alt={item.title}
                          loading="lazy"
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            filter: item.featured
                              ? "brightness(0) invert(1)"
                              : "none",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                              transform: !isMobile ? "scale(1.1)" : "none",
                            },
                          }}
                        />
                      </Box>

                      {/* TITLE */}
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: {
                            xs: "1.1rem",
                            sm: "1.15rem",
                            md: "1.2rem",
                            lg: "1.25rem",
                          },
                          mb: { xs: 1.5, sm: 1.75, md: 2 },
                          color: item.featured ? "#fff" : "#2b6d2a",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* DESCRIPTION */}
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.9rem",
                            sm: "0.92rem",
                            md: "0.95rem",
                            lg: "1rem",
                          },
                          lineHeight: { xs: 1.5, sm: 1.55, md: 1.6 },
                          color: item.featured
                            ? "rgba(255,255,255,0.95)"
                            : "rgba(0,0,0,0.7)",
                          mb: { xs: 2, sm: 2.5, md: 3 },
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>

                    {/* BUTTON */}
                    <Box>
                      <Button
                        component={Link}
                        to={item.link}
                        fullWidth
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          borderRadius: { xs: "25px", sm: "28px", md: "30px" },
                          px: { xs: 2, sm: 2.5, md: 3 },
                          py: { xs: 0.75, sm: 1, md: 1.25 },
                          fontSize: { 
                            xs: "0.85rem", 
                            sm: "0.88rem", 
                            md: "0.9rem",
                            lg: "0.95rem" 
                          },
                          backgroundColor: item.featured
                            ? "#ffffff"
                            : "#2b6d2a",
                          color: item.featured
                            ? "#2b6d2a"
                            : "#fff",
                          border: item.featured ? "none" : "none",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: item.featured
                              ? "rgba(255,255,255,0.9)"
                              : "#1f4d1e",
                            transform: !isMobile ? "scale(1.02)" : "none",
                          },
                          "&:active": {
                            transform: "scale(0.98)",
                          },
                        }}
                      >
                        {/* Six cards each linking somewhere different, so the
                            visible label alone ("Learn more") tells neither a
                            crawler nor a screen reader which service it opens.
                            The service name is appended off-screen: it counts as
                            anchor text without changing the card design. */}
                        Learn more
                        <Box component="span" sx={visuallyHidden}>
                          {` about our ${item.title}`}
                        </Box>
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
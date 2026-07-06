import React from "react";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme, alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const HIGHLIGHTS = [
  { icon: PublicOutlinedIcon, label: "Remote support across all 50 states" },
  { icon: VerifiedOutlinedIcon, label: "US GAAP & IRS compliant" },
  { icon: LockOutlinedIcon, label: "Bank-grade data security" },
];

const MiltaAccountingOverview = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1100px", mx: "auto", px: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Overline pill */}
          <motion.div {...fadeUp(0)}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                px: 2.5,
                py: 0.75,
                mb: 3,
                borderRadius: "50px",
                border: `1px solid ${alpha(primary, 0.3)}`,
                bgcolor: alpha(primary, 0.07),
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: primary, lineHeight: 1, letterSpacing: "0.18em" }}
              >
                Areas We Serve
              </Typography>
            </Box>
          </motion.div>

          {/* Main Heading */}
          <motion.div {...fadeUp(0.1)}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" },
                lineHeight: 1.2,
                maxWidth: "880px",
                mx: "auto",
              }}
            >
              Accounting, Bookkeeping &amp; Virtual Support{" "}
              <Box component="span" sx={{ color: primary }}>
                Across the USA
              </Box>
            </Typography>
          </motion.div>

          {/* Accent divider */}
          <motion.div {...fadeUp(0.15)}>
            <Box
              sx={{
                width: 64,
                height: 4,
                borderRadius: 2,
                bgcolor: primary,
                mt: 3,
                mb: 3,
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.div {...fadeUp(0.2)}>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: "980px",
                mx: "auto",
              }}
            >
              Areas We Serve

At Milta, we provide small and medium-sized businesses across the United States with reliable bookkeeping, accounting, tax planning and preparation, CPA services, virtual assistance, and digital marketing support.

<br></br>Our remote service model enables us to support businesses operating in multiple states while fully complying with U.S. accounting standards, IRS regulations, and strict data security requirements.<br></br>

Whether your business operates in a single state or across several locations, our experienced professionals keep your financial operations accurate, well-organized, and audit-ready year-round—so you can focus on growing with confidence.


            </Typography>
          </motion.div>

        

          {/* CTA */}
          <motion.div {...fadeUp(0.5)}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{ mt: 5, fontWeight: 800 }}
            >
              Get Started
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default MiltaAccountingOverview;

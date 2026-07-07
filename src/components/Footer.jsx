import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, Typography, Link, IconButton, Stack, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const BG = '#0B1A0C';
const BG_CARD = 'rgba(255,255,255,0.04)';
const ACCENT = '#9ABB3B';
const PRIMARY = '#266929';
const TEXT_MUTED = 'rgba(255,255,255,0.5)';
const TEXT_BODY = 'rgba(255,255,255,0.75)';

const linkSx = {
  fontSize: '0.9rem',
  fontWeight: 500,
  color: TEXT_BODY,
  textDecoration: 'none',
  transition: 'all 0.25s ease',
  display: 'block',
  '&:hover': { color: ACCENT, pl: '6px' },
};

const companyLinks = [
  { text: 'About Us', path: '/about' },
  { text: 'Career Opportunities', path: '/career' },
  { text: 'Contact Us', path: '/contact' },
  { text: 'Blogs & Resources', path: '/blogs' },
  { text: 'Areas We Serve', path: '/areas-we-serve' },
  
];

const Footer = () => {
  return (
    <Box
      sx={{
        pt: { xs: 10, md: 14 },
        pb: 0,
        backgroundColor: BG,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow blobs */}
      <Box sx={{ position: 'absolute', top: -120, left: -120, width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${PRIMARY}33 0%, transparent 70%)`, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: 0, right: -80, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${ACCENT}1A 0%, transparent 70%)`, pointerEvents: 'none' }} />

      {/* Watermark */}
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          bottom: '-0.1em',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: { xs: '18vw', md: '22vw' },
          fontWeight: 900,
          opacity: 0.04,
          color: ACCENT,
          whiteSpace: 'nowrap',
          zIndex: 0,
          pointerEvents: 'none',
          letterSpacing: '-0.05em',
          userSelect: 'none',
        }}
      >
        MILTA
      </Typography>

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ mb: { xs: 8, md: 10 } }}>

          {/* Brand column */}
          <Grid item xs={12} md={3.5}>
            <Stack spacing={4}>
              {/* Logo — use CSS filter to invert to white on dark bg */}
              <Box sx={{ width: 160, height: 80, display: 'flex', alignItems: 'center' }}>
                <img
                  src="/logo.svg"
                  alt="Milta Logo"
                  style={{ width: '100%', maxHeight: '100%', filter: 'brightness(0) invert(1)' }}
                />
              </Box>

              <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: TEXT_BODY, fontWeight: 400, maxWidth: 280 }}>
                Trusted outsourced accounting &amp; financial services for businesses across 12 countries since 2009.
              </Typography>

              {/* Contact chips */}
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <LocationOnIcon sx={{ fontSize: 16, color: ACCENT, mt: '0px', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_BODY }}>
                    Sri Sai Tower, 3rd floor, Peelamedu,<br />Coimbatore, TN 641004, India
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneIcon sx={{ fontSize: 16, color: ACCENT, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.85rem', color: TEXT_BODY }}>
                    +1 (813) 303-0213 &nbsp;|&nbsp; +91-96001 03723
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <EmailIcon sx={{ fontSize: 16, color: ACCENT, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.85rem', color: TEXT_BODY }}>info@miltafs.com</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={6} md={2.5} sx={{ ml: { xs: 0, md: 'auto' } }}>
            <Typography
              variant="overline"
              sx={{ fontWeight: 900, mb: 3, display: 'block', letterSpacing: 3, color: ACCENT, fontSize: '0.7rem' }}
            >
              SERVICES
            </Typography>
            <Stack spacing={1.8}>
              {[
                { text: 'Tax Planning & Preparation', path: '/us/services/tax-planning-and-preparation-services-usa/' },
                { text: 'Bookkeeping Services',       path: '/us/services/bookkeeping-company-in-the-usa/' },
                { text: 'CPA Services',               path: '/us/services/best-cpa-services-for-small-businesses-in-the-usa/' },
                { text: 'Virtual Assistant',          path: '/us/services/virtual-assistant-service-in-the-usa/' },
                { text: 'Data Entry',                 path: '/us/services/outsourcing-accounting-data-entry-services-in-the-usa/' },
                { text: 'Financial Controller',       path: '/us/services/financial-controller-services-in-the-usa/' },
                { text: 'Digital Marketing',          path: '/us/services/best-digital-marketing-agency-in-usa/' },
                { text: 'Payroll Management',         path: '/us/services/payroll-management-services-in-the-usa/' },
              ].map(({ text, path }) => (
                <Link key={text} component={RouterLink} to={path} underline="none" sx={linkSx}>{text}</Link>
              ))}
            </Stack>
          </Grid>

          {/* Industries */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="overline"
              sx={{ fontWeight: 900, mb: 3, display: 'block', letterSpacing: 3, color: ACCENT, fontSize: '0.7rem' }}
            >
              INDUSTRIES
            </Typography>
            <Stack spacing={1.8}>
              {[
                { text: 'Contractors',    path: '/us/industries/contractors-companies/' },
                { text: 'Real Estate',    path: '/us/industries/real-estate-companies/' },
                { text: 'Manufacturing',  path: '/us/industries/manufacturing-companies/' },
                { text: 'Healthcare',     path: '/us/industries/health-care-industry/' },
                { text: 'Non-Profit',     path: '/us/industries/non-profit-organizations/' },
                { text: 'Restaurant',      path: '/us/industries/restaurant-industry/' },
                { text: 'Retail Business', path: '/us/industries/retail-business/' },
                { text: 'Law Firms',      path: '/us/industries/law-firms/' },
              ].map(({ text, path }) => (
                <Link key={text} component={RouterLink} to={path} underline="none" sx={linkSx}>{text}</Link>
              ))}
            </Stack>
          </Grid>

          {/* Company */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="overline"
              sx={{ fontWeight: 900, mb: 3, display: 'block', letterSpacing: 3, color: ACCENT, fontSize: '0.7rem' }}
            >
              COMPANY
            </Typography>
            <Stack spacing={1.8}>
              {companyLinks.map((item) => (
                item.path === '#' ? (
                  <Link
                    key={item.text}
                    component="button"
                    type="button"
                    underline="none"
                    sx={{ ...linkSx, textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', p: 0, font: 'inherit' }}
                  >
                    {item.text}
                  </Link>
                ) : (
                  <Link
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    underline="none"
                    sx={linkSx}
                  >
                    {item.text}
                  </Link>
                )
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 0 }} />

        {/* Bottom bar */}
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography sx={{ fontSize: '0.90rem', fontWeight: 600, color: TEXT_MUTED, letterSpacing: 0.5 }}>
            © 2026 Milta Financial Services. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={4}>
            {[
              { label: 'Terms of Service', path: '/terms-of-service' },
              { label: 'Privacy Policy', path: '/privacy-policy' },
            ].map((item) => (
              <Link
                key={item.label}
                component={RouterLink}
                to={item.path}
                underline="none"
                sx={{ fontSize: '0.90rem', fontWeight: 600, letterSpacing: 0.5, color: TEXT_MUTED, background: 'none', border: 'none', cursor: 'pointer', p: 0, font: 'inherit', '&:hover': { color: ACCENT } }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" spacing={1.2}>
            {[
              {
                icon: <EmailIcon sx={{ fontSize: { xs: 18, md: 22 }, color: '#D44638' }} />,
                bg: '#ffffff',
                hoverBg: '#f5f5f5',
                link: 'mailto:info@miltafs.com',
                external: false,
              },
              {
                icon: <CalendarMonthIcon sx={{ fontSize: { xs: 18, md: 22 }, color: '#ff9401' }} />,
                bg: '#ffffff',
                hoverBg: '#f5f5f5',
                link: 'https://calendly.com/frank-miltafs/milta-accounting-service-zoom-meeting',
                external: false,
              },
              {
                icon: <FacebookIcon sx={{ fontSize: { xs: 18, md: 22 }, color: '#1877F2' }} />,
                bg: '#ffffff',
                hoverBg: '#f5f5f5',
                link: 'https://www.facebook.com/miltaaccountingservices/',
                external: true,
              },
              {
                icon: <InstagramIcon sx={{ fontSize: { xs: 18, md: 22 }, color: '#E1306C' }} />,
                bg: '#ffffff',
                hoverBg: '#f5f5f5',
                link: 'https://www.instagram.com/milta_accountings/',
                external: true,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <IconButton
                  component="a"
                  href={item.link}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  size="small"
                  sx={{
                    color: TEXT_BODY,
                    backgroundColor: item.bg,
                    border: '1px solid rgba(255,255,255,0.08)',
                    width: 36,
                    height: 36,
                    transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      backgroundColor: item.hoverBg,
                      color: '#FFFFFF',
                      borderColor: item.hoverBg,
                      boxShadow: `0 12px 24px ${item.hoverBg}40`,
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

/**
 * Floating social bar — fixed to the right edge, vertically centered, and
 * visible on every page. Links and behaviour are kept identical to what was
 * previously rendered in the footer.
 */
const SOCIALS = [
  {
    label: 'Email',
    icon: <EmailIcon sx={{ fontSize: 20 }} />,
    color: '#D44638',
    link: 'mailto:info@miltafs.com',
    external: false,
  },
  {
    label: 'Book a meeting',
    icon: <CalendarMonthIcon sx={{ fontSize: 20 }} />,
    color: '#ff9401',
    link: 'https://calendly.com/frank-miltafs/milta-accounting-service-zoom-meeting',
    external: false,
  },
  {
    label: 'Facebook',
    icon: <FacebookIcon sx={{ fontSize: 20 }} />,
    color: '#1877F2',
    link: 'https://www.facebook.com/miltaaccountingservices/',
    external: true,
  },
  {
    label: 'Instagram',
    icon: <InstagramIcon sx={{ fontSize: 20 }} />,
    color: '#E1306C',
    link: 'https://www.instagram.com/milta_accountings/',
    external: true,
  },
];

const SocialBar = () => (
  <Box
    sx={{
      position: 'fixed',
      right: { xs: 10, md: 14 },
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1200,
      display: 'flex',
      flexDirection: 'column',
      gap: 1.25,
    }}
  >
    {SOCIALS.map((item) => (
      <motion.div
        key={item.label}
        whileHover={{ scale: 1.15, x: -4 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      >
        <IconButton
          component="a"
          href={item.link}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
          aria-label={item.label}
          sx={{
            width: { xs: 42, md: 48 },
            height: { xs: 42, md: 48 },
            color: '#ffffff',
            background: `linear-gradient(135deg, ${item.color} 0%, ${alpha(item.color, 0.82)} 100%)`,
            border: `2px solid ${alpha('#ffffff', 0.85)}`,
            boxShadow: 'none',
            transition: 'filter 0.25s ease',
            '&:hover': {
              color: '#ffffff',
              filter: 'brightness(1.06)',
            },
          }}
        >
          {item.icon}
        </IconButton>
      </motion.div>
    ))}
  </Box>
);

export default SocialBar;

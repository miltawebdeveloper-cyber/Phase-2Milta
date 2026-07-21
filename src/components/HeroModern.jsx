import React from 'react';
import { Box, Container, Typography, Button, Stack, useTheme } from '@mui/material';

const HeroModern = ({
  title = "Welcome to Milta",
  subtitle = "We provide modern accounting and business solutions to help your company grow.",
  cta = { text: 'Get Started', href: '/contact' },
  secondary = { text: 'Learn More', href: '/about' },
  image = '/about_modern.webp',
  reverse = false
}) => {
  const theme = useTheme();

  return (
    <Box component="header" sx={{ py: { xs: 6, md: 12 }, background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)` }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 3, mb: 1 }}>
              Trusted by businesses
            </Typography>

            <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.05, mb: 2 }}>
              {title}
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 680 }}>
              {subtitle}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button href={cta.href} variant="contained" size="large" sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 800 }}>
                {cta.text}
              </Button>
              <Button href={secondary.href} variant="outlined" size="large" sx={{ px: 4, py: 1.5, borderRadius: 3 }}>
                {secondary.text}
              </Button>
            </Stack>
          </Box>

          <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
            <Box component="img" src={image} alt="Hero visual" sx={{ width: '100%', borderRadius: 3, boxShadow: '0 20px 60px rgba(12,18,10,0.12)', objectFit: 'cover' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroModern;

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SavingsIcon from '@mui/icons-material/Savings';
import TimerIcon from '@mui/icons-material/Timer';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const ADVANTAGES = [
  { 
    icon: FactCheckIcon,  
    title: 'Accurate Financial Records',     
    desc: 'Every rent payment, vendor invoice, or repair cost is recorded properly. This level of precision helps you stay audit-ready and organized.' 
  },
  { 
    icon: AssessmentIcon, 
    title: 'Transparent Financial Reporting', 
    desc: 'Get clear monthly or quarterly reports that help you understand the performance of each property. These reports are essential for smart forecasting and planning.' 
  },
  { 
    icon: SavingsIcon,    
    title: 'Tax Planning Made Easy',         
    desc: 'With professional support in real estate tax planning, you can claim every eligible deduction. We also offer tax planning for real estate agents and tax planning for property developers to reduce liabilities and improve tax efficiency.' 
  },
  { 
    icon: TimerIcon,      
    title: 'Cost and Time Efficiency',         
    desc: 'Skip the cost and complexity of hiring internally—partner with experienced professionals for your real estate bookkeeping needs. It reduces overhead and lets you focus on what you do best, growing your business.' 
  },
];

const REAdvantages = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 6, md: 8 } }}>

      {/* Full-bleed background image */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
        alt=""
        sx={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 30%',
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(180deg, rgba(5,16,6,0.96) 0%, rgba(8,22,9,0.91) 50%, rgba(5,16,6,0.96) 100%)',
      }} />

      {/* Top-center radial glow */}
      <Box sx={{
        position: 'absolute', top: '-20%', left: '50%',
        transform: 'translateX(-50%)',
        width: { xs: 320, md: 560 }, height: { xs: 320, md: 560 },
        borderRadius: '50%', zIndex: 1, pointerEvents: 'none',
        background: `radial-gradient(circle, ${alpha(primary, 0.16)} 0%, transparent 68%)`,
      }} />

      {/* Content */}
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          
          <motion.div {...fadeUp(0.08)}>
            <Typography variant="h2" sx={{
              fontSize: { xs: '1.75rem', md: '2.4rem' },
              lineHeight: 1.2, letterSpacing: '-0.025em',
              color: '#ffffff', fontWeight: 900,
            }}>
              Benefits of Property Management{' '}
              <Box component="span" sx={{ color: primary }}>Bookkeeping Services</Box>
            </Typography>
          </motion.div>
          
        </Box>

        {/* Bento grid: 2x2 layout since we have 4 items */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: { xs: 1.5, md: 2 },
        }}>
          {ADVANTAGES.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <Box
                key={adv.title}
                component={motion.div}
                {...fadeUp(0.05 * i)}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  p: { xs: 2, md: 2.5 },
                  bgcolor: alpha('#fff', 0.05),
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'flex-start',
                  gap: 2,
                  transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                  '&:hover': {
                    bgcolor: alpha('#fff', 0.08),
                    border: `1px solid ${alpha(primary, 0.35)}`,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 16px 40px ${alpha(primary, 0.15)}`,
                    '& .adv-icon-box': { bgcolor: primary, '& svg': { color: '#fff' } },
                    '& .adv-title': { color: primary },
                  },
                }}
              >
                {/* Icon */}
                <Box
                  className="adv-icon-box"
                  sx={{
                    width: 40, height: 40, flexShrink: 0,
                    borderRadius: '11px',
                    bgcolor: alpha(primary, 0.13),
                    border: `1px solid ${alpha(primary, 0.25)}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <Icon sx={{ fontSize: 18, color: primary, transition: 'color 0.25s ease' }} />
                </Box>

                {/* Text */}
                <Box sx={{ flex: 1, position: 'relative', zIndex: 1, minWidth: 0 }}>
                  <Typography sx={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 900, fontSize: '0.62rem',
                    color: alpha(primary, 0.75), letterSpacing: '0.1em', mb: 0.5,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    className="adv-title"
                    sx={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      color: '#ffffff', mb: 0.75,
                      lineHeight: 1.3,
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {adv.title}
                  </Typography>
                  <Typography sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: '0.78rem', lineHeight: 1.7,
                    color: alpha('#fff', 0.5),
                  }}>
                    {adv.desc}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default REAdvantages;
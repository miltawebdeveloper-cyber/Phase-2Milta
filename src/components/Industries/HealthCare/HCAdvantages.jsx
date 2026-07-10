import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import SavingsIcon from '@mui/icons-material/Savings';
import InsightsIcon from '@mui/icons-material/Insights';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const ADVANTAGES = [
  { 
    icon: SavingsIcon,     
    title: 'Time and Cost Savings',                       
    desc: 'Outsourcing your accounting for healthcare professionals allows you to focus on what truly matters—providing exceptional patient care. Our accounting solutions save valuable time and reduce operational costs by eliminating the need for in-house staff, extensive training, and expensive accounting software.' 
  },
  { 
    icon: InsightsIcon,       
    title: 'Informed Decision-Making',                     
    desc: 'With detailed financial reports, KPIs, and cost analyses tailored to the healthcare sector, you gain actionable insights that support smart business decisions. Our reports empower you to identify profitable services, control expenses, allocate budgets effectively, and plan future growth with confidence.' 
  },
  { 
    icon: MedicalServicesIcon,  
    title: 'Access to Specialized Expertise and Technology',              
    desc: 'Unlike general accountants, healthcare accounting firms understand the complexities of medical finance. Our team combines specialized knowledge with advanced technology—such as cloud-based systems and automated bookkeeping—to deliver accuracy, efficiency, and scalability without significant upfront investment.' 
  },
];

const HCAdvantages = () => {
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
              Benefits of Accounting Services for{' '}
              <Box component="span" sx={{ color: primary }}>Healthcare Professionals</Box>
            </Typography>
          </motion.div>
         
        </Box>

        {/* 3-column grid for 3 items */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
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
                  flexDirection: 'column',
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
                      fontSize: '0.88rem',
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

export default HCAdvantages;
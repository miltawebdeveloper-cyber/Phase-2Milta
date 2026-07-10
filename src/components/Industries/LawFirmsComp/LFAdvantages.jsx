import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import CalculateIcon from '@mui/icons-material/Calculate';
import CloudIcon from '@mui/icons-material/Cloud';
import SavingsIcon from '@mui/icons-material/Savings';
import InsightsIcon from '@mui/icons-material/Insights';
import BarChartIcon from '@mui/icons-material/BarChart';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const ADVANTAGES = [
  { 
    icon: GavelIcon,       
    title: 'Specialized Expertise in Legal Accounting',     
    desc: 'Our team understands the complexities of law firm accounting, including trust fund management, retainers, client escrow accounts, and partner distributions. We ensure every dollar is tracked accurately and ethically.' 
  },
  { 
    icon: SecurityIcon,    
    title: 'Compliance with Legal and Tax Regulations',        
    desc: 'Mila ensures your books comply with IOLTA trust accounting rules, IRS standards, and local bar association requirements. Stay compliant and ready for audits with zero stress.' 
  },
  { 
    icon: CalculateIcon,   
    title: 'Strategic Tax Planning & Preparation',                
    desc: 'We help law firms reduce tax liabilities through strategic planning, accurate quarterly estimates, and year-end filings. Our proactive approach maximizes deductions while maintaining compliance.' 
  },
  { 
    icon: CloudIcon,       
    title: 'Integration with Legal Practice Management Software',         
    desc: 'Mila seamlessly integrates with industry tools like Clio, LEAP, and MyCase—syncing your accounting and case management systems for real-time financial insights.' 
  },
  { 
    icon: SavingsIcon,     
    title: 'Cost-Effective Outsourcing Solution',                          
    desc: 'Save on in-house accounting expenses by outsourcing to Mila. We provide professional bookkeeping at a fraction of the cost—without sacrificing accuracy or control.' 
  },
  
];

const LFAdvantages = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 6, md: 8 } }}>

      {/* Full-bleed background image */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
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
          <motion.div {...fadeUp(0)}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <Box sx={{ width: 18, height: 2, borderRadius: 2, bgcolor: primary }} />
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.7rem' }}>
                BENEFITS OF OUTSOURCING LAW FIRM BOOKKEEPING
              </Typography>
              <Box sx={{ width: 18, height: 2, borderRadius: 2, bgcolor: primary }} />
            </Box>
          </motion.div>
          <motion.div {...fadeUp(0.08)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.4rem' }, lineHeight: 1.2, letterSpacing: '-0.025em', color: '#ffffff', fontWeight: 900 }}>
              Benefits of Outsourcing{' '}
              <Box component="span" sx={{ color: primary }}>Law Firm Bookkeeping</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.14)}>
            <Typography sx={{ color: alpha('#fff', 0.5), fontSize: '0.88rem', lineHeight: 1.75, fontFamily: '"Outfit", sans-serif', maxWidth: 480, mx: 'auto', mt: 1.5 }}>
              Legal accounting is complex. Outsourcing to Milta gives your firm expert financial management so attorneys can focus on what they do best.
            </Typography>
          </motion.div>
        </Box>

        {/* Bento grid: 6 items in 3-column grid */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: { xs: 1.5, md: 2 },
        }}>
          {ADVANTAGES.map((adv, i) => {
            const Icon = adv.icon;
            // Make first item wide (span 2) on desktop
            const isWide = i === 0;
            return (
              <Box
                key={adv.title}
                component={motion.div}
                {...fadeUp(0.05 * i)}
                sx={{
                  gridColumn: isWide ? { md: 'span 2' } : {},
                  position: 'relative', overflow: 'hidden',
                  borderRadius: '16px',
                  p: { xs: 2, md: 2.5 },
                  bgcolor: alpha('#fff', 0.05),
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: isWide ? { xs: 'column', sm: 'row' } : 'row',
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
                <Box className="adv-icon-box" sx={{
                  width: 40, height: 40, flexShrink: 0, borderRadius: '11px',
                  bgcolor: alpha(primary, 0.13), border: `1px solid ${alpha(primary, 0.25)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.25s ease',
                }}>
                  <Icon sx={{ fontSize: 18, color: primary, transition: 'color 0.25s ease' }} />
                </Box>

                {/* Text */}
                <Box sx={{ flex: 1, position: 'relative', zIndex: 1, minWidth: 0 }}>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '0.62rem', color: alpha(primary, 0.75), letterSpacing: '0.1em', mb: 0.5 }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography className="adv-title" sx={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700,
                    fontSize: isWide ? { xs: '0.95rem', md: '1.05rem' } : '0.88rem',
                    color: '#ffffff', mb: 0.75, lineHeight: 1.3,
                    transition: 'color 0.25s ease',
                  }}>
                    {adv.title}
                  </Typography>
                  <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.78rem', lineHeight: 1.7, color: alpha('#fff', 0.5) }}>
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

export default LFAdvantages;
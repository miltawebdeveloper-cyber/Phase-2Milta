import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  { 
    icon: AccountBalanceIcon,   
    title: 'Bank and Credit Card Reconciliation',       
    desc: 'We ensure your financial records align with actual bank and credit card statements through regular reconciliation—preventing errors, fraud, and discrepancies.' 
  },
  { 
    icon: CurrencyExchangeIcon, 
    title: 'Handling Cash Flow, Accounts Receivable (AR), and Accounts Payable (AP)',            
    desc: 'We document and track all cash inflows and outflows, ensuring effective AR/AP management and a clear picture of your business cash flow.' 
  },
  { 
    icon: ReceiptLongIcon,      
    title: 'Invoice Generation and Recording',           
    desc: 'We handle invoice generation, timely recording, and follow-ups to maintain a steady income stream and ensure accurate financial records.' 
  },
  { 
    icon: AssignmentIcon,       
    title: 'Maintaining a Well-Organized Chart of Accounts and Accounting Preparation System',    
    desc: 'We help set up and maintain a clear chart of accounts for accurate categorization, easy tracking, and efficient accounting preparation.' 
  },
  { 
    icon: PeopleIcon,           
    title: 'Payroll Processing, Taxation, and Employee Benefits Management', 
    desc: 'Our payroll experts manage salary calculations, tax withholdings, and employee benefits, ensuring timely and compliant payroll processing.' 
  },
  { 
    icon: BarChartIcon,         
    title: 'Regular Financial Reporting (Weekly, Monthly & Yearly)',              
    desc: 'We provide consistent, detailed financial reports offering insights into revenue, expenses, and profits—helping you make data-driven decisions.' 
  },
  { 
    icon: CleaningServicesIcon, 
    title: 'Assistance with Small Business Accounting, Non-Profit Bookkeeping, and Clean-Up Tasks',     
    desc: 'We assist with accounting for small businesses and non-profits and offer bookkeeping clean-up services to keep your records accurate.' 
  },
  { 
    icon: HandshakeIcon,        
    title: 'Collaborating with CPAs for Year-End Tax Preparations',       
    desc: 'We work closely with CPAs to ensure accurate and timely year-end tax preparation, keeping your books ready for audits and filings.' 
  },
];

const BKSolutions = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden', position: 'relative' }}>

      {/* Subtle dot pattern */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.05)} 1.5px, transparent 1.5px)`,
        backgroundSize: '28px 28px',
      }} />

      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem', mb: 2, display: 'block' }}>
              END-TO-END SOLUTIONS
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              End-to-End Bookkeeping{' '}
              <Box component="span" sx={{ color: primary }}>and Financial Organization</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 560, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              Our Comprehensive Bookkeeping Solutions for Small Businesses
            </Typography>
          </motion.div>
        </Box>

        {/* Service grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Box
                key={svc.title}
                component={motion.div}
                {...fadeUp(i * 0.07)}
                sx={{
                  p: 3.5,
                  borderRadius: '20px',
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',

                  /* Hover: lift + green tint + border glow */
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    bgcolor: alpha(primary, 0.03),
                    border: `1px solid ${alpha(primary, 0.3)}`,
                    boxShadow: `0 24px 56px ${alpha(primary, 0.13)}, 0 4px 16px rgba(0,0,0,0.06)`,

                    /* Sweep top bar */
                    '& .sweep-bar': { width: '100%' },

                    /* Icon morph: fill with primary */
                    '& .icon-wrap': {
                      bgcolor: primary,
                      border: `1px solid ${primary}`,
                      boxShadow: `0 8px 20px ${alpha(primary, 0.35)}`,
                      transform: 'scale(1.08)',
                    },
                    '& .icon-svg': { color: '#ffffff' },

                    /* Title activates */
                    '& .card-title': { color: primary },

                    /* Number watermark reveals */
                    '& .card-num': { opacity: 1 },

                    /* Arrow slides in */
                    '& .card-arrow': { opacity: 1, transform: 'translateX(0px)' },
                  },
                }}
              >
                {/* Sweeping top accent bar */}
                <Box className="sweep-bar" sx={{
                  position: 'absolute', top: 0, left: 0,
                  height: '3px', width: 0,
                  background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.5)})`,
                  borderRadius: '0 0 3px 0',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }} />

                {/* Faded watermark number */}
                <Typography className="card-num" sx={{
                  position: 'absolute', bottom: 10, right: 14,
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 900, fontSize: '3.8rem', lineHeight: 1,
                  color: alpha(primary, 0.07),
                  userSelect: 'none', pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.32s ease',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>

                {/* Icon */}
                <Box className="icon-wrap" sx={{
                  width: 52, height: 52,
                  borderRadius: '14px',
                  bgcolor: alpha(primary, 0.08),
                  border: `1px solid ${alpha(primary, 0.15)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2.5, flexShrink: 0,
                  transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <Icon className="icon-svg" sx={{ fontSize: 24, color: primary, transition: 'color 0.32s ease' }} />
                </Box>

                {/* Title */}
                <Typography className="card-title" sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 800, fontSize: '0.95rem',
                  color: 'text.primary', mb: 1, lineHeight: 1.35,
                  transition: 'color 0.28s ease',
                }}>
                  {svc.title}
                </Typography>

                {/* Description */}
                <Typography sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: '0.84rem', lineHeight: 1.72,
                  color: 'text.secondary',
                  pr: 2,
                }}>
                  {svc.desc}
                </Typography>

              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default BKSolutions;
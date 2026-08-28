import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const ELEMENTS = [
  { 
    icon: AccountBalanceIcon,  
    title: 'Direct Cost Accounting',           
    desc: 'This process includes allocating costs to inventory using methods such as standard costing, weighted-average, or cost layering. It ensures precise inventory valuation and aligns expenses with actual production levels.' 
  },
  { 
    icon: ReceiptLongIcon,     
    title: 'Overhead Cost Accounting',           
    desc: 'Factory overhead expenses should be consolidated into cost pools and then allocated across the total units produced within a given reporting period. This allocation increases the recorded inventory cost. To streamline the process and reduce administrative burden, it\'s recommended that manufacturers limit the number of cost pools used.' 
  },
  { 
    icon: TrendingUpIcon,      
    title: 'Cost of Goods Sold (COGS) Recognition',      
    desc: 'COGS is calculated as: Beginning Inventory + Purchases - Ending Inventory. Accurate inventory valuation procedures are critical for correct COGS reporting, a key part of accounting for manufacturing companies.' 
  },
  { 
    icon: AssessmentIcon,        
    title: 'Cost Accounting',        
    desc: 'For manufacturers, precise tracking of raw materials, labor, and overhead costs is essential to maintaining control over production expenses and ensuring profitability. Cost accounting offers the clarity needed to determine the actual cost of goods sold and establish competitive pricing strategies.' 
  },
  { 
    icon: BarChartIcon,           
    title: 'Budgeting and Forecasting', 
    desc: 'Accounting and bookkeeping for manufacturing companies offer critical financial insights that support budgeting and forecasting. Manufacturers use this data to plan production schedules, manage cash flow, and make informed decisions.' 
  },
  { 
    icon: GavelIcon,        
    title: 'Tax Planning & Preparation',    
    desc: 'We provide accurate tax return preparation for manufacturing businesses, including comprehensive year-end financial reporting. Our manufacturing tax experts ensure compliance, maximize deductions, and support strategic planning for the next fiscal year.' 
  },
  { 
    icon: DescriptionIcon,  
    title: 'Financial Reporting',         
    desc: 'Manufacturing companies are required to present their financial performance to key stakeholders such as investors and lenders. Well-prepared and accurate financial statements—made possible through effective accounting—are vital for establishing credibility and obtaining financial support.' 
  },
];

const RASolutions = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper', overflow: 'hidden', position: 'relative' }}>

      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.045)} 1.5px, transparent 1.5px)`,
        backgroundSize: '28px 28px',
      }} />

      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              The Role of Bookkeeping and{' '}
              <Box component="span" sx={{ color: primary }}>Accounting in Manufacturing</Box>
            </Typography>
          </motion.div>
          
        </Box>

        {/* ── Uniform card grid ── */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
          {ELEMENTS.map((el, i) => {
            const Icon = el.icon;
            return (
              <Box
                key={el.title}
                component={motion.div}
                {...fadeUp(i * 0.07)}
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 3.5 },
                  borderRadius: '20px',
                  bgcolor: 'background.default',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative', overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    border: `1px solid ${alpha(primary, 0.3)}`,
                    boxShadow: `0 20px 50px ${alpha(primary, 0.12)}`,
                    '& .mfg-icon': { bgcolor: primary, '& svg': { color: '#fff' } },
                    '& .mfg-title': { color: primary },
                  },
                }}
              >
                <Box className="mfg-icon" sx={{
                  width: 54, height: 54, borderRadius: '16px',
                  bgcolor: alpha(primary, 0.09),
                  border: `1px solid ${alpha(primary, 0.16)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2.5, flexShrink: 0, transition: 'all 0.3s ease',
                }}>
                  <Icon sx={{ fontSize: 26, color: primary }} />
                </Box>

                <Typography className="mfg-title" sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 800, fontSize: '1rem',
                  color: 'text.primary', mb: 1, lineHeight: 1.3,
                  transition: 'color 0.28s ease',
                }}>
                  {el.title}
                </Typography>
                <Typography sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: '0.86rem', lineHeight: 1.75,
                  color: 'text.secondary',
                }}>
                  {el.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default RASolutions;
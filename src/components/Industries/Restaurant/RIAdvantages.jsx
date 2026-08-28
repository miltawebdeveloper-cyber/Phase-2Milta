import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GavelIcon from '@mui/icons-material/Gavel';
import PaymentsIcon from '@mui/icons-material/Payments';
import AssessmentIcon from '@mui/icons-material/Assessment';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const ADVANTAGES = [
  { icon: RestaurantMenuIcon, title: 'Daily Sales & Expense Recording',   desc: 'We track every sale and expense daily, from food and beverage sales to dine-in versus delivery revenue. Transactions are categorized for real-time financial visibility, helping you identify trends and unusual spending early.' },
  { icon: ReceiptLongIcon,    title: 'Vendor Invoice Management',         desc: 'Milta manages invoices from all your restaurant vendors—ingredients, beverages, and supplies—ensuring payments are tracked, matched, and reconciled to avoid missed or duplicate payments.' },
  { icon: PaymentsIcon,       title: 'Tip Tracking & Payroll Reports',    desc: 'We handle payroll for tipped employees, including tip pooling, tax withholdings, and compliance with wage laws. Detailed payroll reports keep your restaurant audit-ready and accurate.' },
  { icon: Inventory2Icon,     title: 'Inventory & COGS Calculation',      desc: 'Our team monitors inventory purchases and usage while calculating your Cost of Goods Sold (COGS), helping you understand food cost percentages and minimize waste or theft.' },
  { icon: ShowChartIcon,      title: 'Cash Flow Monitoring',              desc: 'Milta tracks your inflows (sales) and outflows (payroll, rent, vendor bills) to maintain strong cash flow management—crucial for restaurants operating on thin margins.' },
  { icon: GavelIcon,          title: 'Tax Returns for Restaurant Filing', desc: 'We prepare and file all relevant taxes—sales, payroll, and income—on time. Our team reduces the risk of errors, missed deadlines, and penalties while maximizing compliance.' },
  { icon: AssessmentIcon,     title: 'Custom Financial Statements',       desc: 'We deliver clear and insightful financial reports, including Profit & Loss Statements, Balance Sheets, and Cash Flow Statements, helping with strategic decisions and lender or investor needs.' },
];

const RIAdvantages = () => {
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
              What’s Included in Milta’s{' '}
              <Box component="span" sx={{ color: primary }}>Restaurant Bookkeeping Service</Box>
            </Typography>
          </motion.div>
          
        </Box>

        {/* Bento grid: row1 [0](2col)+[1], row2 [2][3][4], row3 [5]+[6](2col) */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: { xs: 1.5, md: 2 },
        }}>
          {ADVANTAGES.map((adv, i) => {
            const Icon = adv.icon;
            const isWide = i === 0 || i === 6;
            return (
              <Box
                key={adv.title}
                component={motion.div}
                {...fadeUp(0.05 * i)}
                sx={{
                  gridColumn: isWide ? { md: 'span 2' } : {},
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
                      fontSize: isWide ? { xs: '0.95rem', md: '1.05rem' } : '0.88rem',
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

export default RIAdvantages;

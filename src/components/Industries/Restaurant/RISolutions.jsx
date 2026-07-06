import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaymentsIcon from '@mui/icons-material/Payments';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GavelIcon from '@mui/icons-material/Gavel';
import BarChartIcon from '@mui/icons-material/BarChart';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const ELEMENTS = [
  { icon: RestaurantMenuIcon, title: 'Daily Sales & Expense Recording', desc: 'Every sale and expense tracked daily — food and beverage, dine-in vs. delivery — for real-time visibility and early spotting of trends or unusual spending.' },
  { icon: ReceiptLongIcon,    title: 'Vendor Invoice Management',       desc: 'We organize and track every vendor invoice, matching them with payments and reconciling your books to avoid missed payments or overcharges.' },
  { icon: PaymentsIcon,       title: 'Tip Tracking & Payroll Reports',  desc: 'We handle payroll for tipped employees — tip pooling, reporting, and withholdings — with detailed reports that keep you wage-and-hour compliant.' },
  { icon: Inventory2Icon,     title: 'Inventory & COGS Calculation',    desc: 'We monitor inventory purchases and usage and calculate Cost of Goods Sold, helping you understand food cost percentages and minimize waste or theft.' },
  { icon: ShowChartIcon,      title: 'Cash Flow Monitoring',            desc: 'We watch cash inflows (sales, payments) and outflows (payroll, rent, vendor bills) so you maintain healthy cash flow on tight margins.' },
  { icon: GavelIcon,          title: 'Tax Returns for Restaurant Filing', desc: 'We prepare and file accurate returns — sales tax, payroll tax, and federal/state income taxes — reducing the risk of errors, missed deadlines, or penalties.' },
  { icon: BarChartIcon,       title: 'Custom Financial Statements',     desc: 'Easy-to-understand Profit & Loss Statements, Balance Sheets, and Cash Flow Statements that support loans, investor reporting, and strategic planning.' },
];

const RISolutions = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const featured = ELEMENTS.slice(0, 2);
  const rest = ELEMENTS.slice(2);

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
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem', mb: 2, display: 'block' }}>
              KEY ELEMENTS
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              What's Included in Our{' '}
              <Box component="span" sx={{ color: primary }}>Restaurant Bookkeeping</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 580, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              Seven core services built for small restaurant owners who need dependable, accurate, and stress-free financial management.
            </Typography>
          </motion.div>
        </Box>

        {/* ── TIER 1: 2 large featured cards ── */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, mb: 3 }}>
          {featured.map((el, i) => {
            const Icon = el.icon;
            const isFirst = i === 0;
            return (
              <Box
                key={el.title}
                component={motion.div}
                {...fadeUp(i * 0.1)}
                sx={{
                  p: { xs: 3.5, md: 5 },
                  borderRadius: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                  ...(isFirst ? {
                    background: `linear-gradient(135deg, ${alpha(primary, 0.1)} 0%, ${alpha(primary, 0.04)} 100%)`,
                    border: `1px solid ${alpha(primary, 0.25)}`,
                  } : {
                    bgcolor: 'background.default',
                    border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                  }),
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 24px 60px ${alpha(primary, 0.15)}`,
                    '& .feat-icon': { bgcolor: primary, '& svg': { color: '#fff' } },
                    '& .feat-title': { color: primary },
                  },
                }}
              >
                
                <Box className="feat-icon" sx={{
                  width: 60, height: 60, borderRadius: '18px',
                  bgcolor: alpha(primary, 0.1),
                  border: `1px solid ${alpha(primary, 0.2)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 3, transition: 'all 0.32s ease',
                }}>
                  <Icon sx={{ fontSize: 28, color: primary }} />
                </Box>

                <Typography className="feat-title" sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 900, fontSize: { xs: '1.1rem', md: '1.25rem' },
                  color: 'text.primary', mb: 1.5, lineHeight: 1.25,
                  transition: 'color 0.28s ease',
                }}>
                  {el.title}
                </Typography>
                <Typography sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: '0.92rem', lineHeight: 1.8,
                  color: 'text.secondary', position: 'relative', zIndex: 1,
                }}>
                  {el.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* ── TIER 2: 4-col compact grid for remaining 8 ── */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
          {rest.map((el, i) => {
            const Icon = el.icon;
            return (
              <Box
                key={el.title}
                component={motion.div}
                {...fadeUp(0.1 + i * 0.06)}
                sx={{
                  p: 3,
                  borderRadius: '18px',
                  bgcolor: 'background.default',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  position: 'relative', overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    border: `1px solid ${alpha(primary, 0.28)}`,
                    boxShadow: `0 16px 40px ${alpha(primary, 0.1)}`,
                    '& .cc-mini-icon': { bgcolor: primary, '& svg': { color: '#fff' } },
                    '& .cc-mini-title': { color: primary },
                  },
                }}
              >
                

                <Box className="cc-mini-icon" sx={{
                  width: 44, height: 44, borderRadius: '12px',
                  bgcolor: alpha(primary, 0.08),
                  border: `1px solid ${alpha(primary, 0.15)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2, transition: 'all 0.28s ease',
                }}>
                  <Icon sx={{ fontSize: 20, color: primary }} />
                </Box>

                <Typography className="cc-mini-title" sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 800, fontSize: '0.88rem',
                  color: 'text.primary', mb: 0.75, lineHeight: 1.35,
                  transition: 'color 0.28s ease',
                }}>
                  {el.title}
                </Typography>
                <Typography sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: '0.8rem', lineHeight: 1.7,
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

export default RISolutions;

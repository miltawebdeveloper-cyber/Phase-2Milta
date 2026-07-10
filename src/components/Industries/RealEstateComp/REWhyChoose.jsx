import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GavelIcon from '@mui/icons-material/Gavel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CARDS = [
  {
    icon: AccountBalanceIcon,
    title: 'Improved Accuracy and Compliance',
    desc: 'Accurate bookkeeping for real estate ensures your financial records are always up to date and compliant with tax and legal regulations. Our property management bookkeeping services handle everything from security deposits to lease agreements with precision. This helps real estate professionals, investors, and property developers maintain compliance, avoid costly penalties, and ensure seamless financial reporting.'
  },
  {
    icon: AccessTimeIcon,
    title: 'Time Savings for Real Estate Professionals',
    desc: 'Outsourcing bookkeeping for real estate agents and property managers saves valuable time that would otherwise be spent on administrative work. Instead, you can focus on high-value tasks like tenant satisfaction, property maintenance, and business growth while our expert team manages your financial records efficiently.'
  },
  {
    icon: TrendingUpIcon,
    title: 'Enhanced Financial Clarity and Decision-Making',
    desc: "With professional real estate accounting services, you gain complete visibility into your property's financial performance. Our detailed tracking of income, expenses, and investments gives you the clarity needed for budgeting, forecasting, and maximizing profitability. Whether you're a real estate agent or an investor, accurate financial insights support smarter decision-making."
  },
  {
    icon: AttachMoneyIcon,
    title: 'Better Cash Flow Management',
    desc: "Our bookkeeping for real estate investors and developers helps maintain consistent cash flow by tracking receivables, managing vendor payments, and identifying financial bottlenecks early. You'll have the insights to prevent overspending, manage rent collections, and ensure steady income streams for long-term financial stability."
  },
  {
    icon: ApartmentIcon,
    title: 'Streamlined Property Management Operations',
    desc: 'By leveraging property management bookkeeping solutions, you can simplify daily financial operations. From automating rent collection to reconciling accounts and generating financial statements, our standardized processes ensure efficiency and accuracy across all your properties.'
  },
  {
    icon: GavelIcon,
    title: 'Strategic Real Estate Tax Planning',
    desc: 'Our specialized real estate tax planning services cover every aspect of the industry, including tax planning for real estate agents, tax planning for property developers, and tax planning for real estate investors. We help reduce tax liabilities, identify eligible deductions, and align your financial strategies with your business goals for maximum profitability.'
  },
];

const STATS = [{ num: '10+', label: 'Years Experience' }, { num: '500+', label: 'Clients Served' }, { num: '100%', label: 'Retention Rate' }];

const REWhyChoose = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{
      py: { xs: 8, md: 14 },
      background: 'linear-gradient(145deg, #091509 0%, #0d1f0e 45%, #163018 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glows */}
      <Box sx={{ position: 'absolute', top: '-10%', left: '-8%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.28)} 0%, transparent 65%)`, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '-15%', right: '-8%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.18)} 0%, transparent 65%)`, pointerEvents: 'none' }} />
      {/* Rings */}
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: { xs: 600, md: 1100 }, height: { xs: 600, md: 1100 }, borderRadius: '50%', border: `1px solid ${alpha('#fff', 0.04)}`, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: { xs: 350, md: 680 }, height: { xs: 350, md: 680 }, borderRadius: '50%', border: `1px solid ${alpha('#fff', 0.03)}`, pointerEvents: 'none' }} />
      {/* Dot pattern */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `radial-gradient(circle, ${alpha('#fff', 0.035)} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2"  sx={{ color: '#ffffff',textAlign: 'center', fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 900, lineHeight: 1.18, letterSpacing: '-0.02em', mb: 2.5 }}>
                Advantages of Professional{' '}
                <Box component="span" sx={{ color: alpha(primary, 0.9) }}>Real Estate Bookkeeping and Tax Planning Services</Box>
              </Typography>
            </motion.div>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 8, lg: 10 }} alignItems={{ lg: 'flex-start' }}>


          {/* ── RIGHT: 3-per-row glass card grid ── */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2 }}>
              {CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <Box
                    key={card.title}
                    component={motion.div}
                    {...fadeUp(0.1 + i * 0.1)}
                    sx={{
                      p: { xs: 3, md: 3.5 },
                      borderRadius: '20px',
                      bgcolor: 'rgba(255,255,255,0.055)',
                      border: `1px solid rgba(255,255,255,0.1)`,
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.09)',
                        border: `1px solid ${alpha(primary, 0.45)}`,
                        transform: 'translateY(-5px)',
                        boxShadow: `0 20px 50px rgba(0,0,0,0.25)`,
                        '& .wc-icon': { bgcolor: primary },
                        '& .wc-icon svg': { color: '#fff' },
                      },
                    }}
                  >
                    <Box className="wc-icon" sx={{
                      width: 48, height: 48, borderRadius: '14px',
                      bgcolor: alpha(primary, 0.18),
                      border: `1px solid ${alpha(primary, 0.3)}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      mb: 2.5, transition: 'all 0.3s ease',
                    }}>
                      <Icon sx={{ fontSize: 22, color: primary }} />
                    </Box>
                    <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.97rem', color: '#ffffff', mb: 1, lineHeight: 1.3 }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.84rem', lineHeight: 1.72, color: alpha('#fff', 0.58) }}>
                      {card.desc}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};

export default REWhyChoose;
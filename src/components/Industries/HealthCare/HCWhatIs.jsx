import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import healthcareImage from '../../../assets/industry/Healthcare.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const STATS = [
  { num: '100+', label: 'Clients'    },
  { num: '50',  label: 'States'  },
  { num: '10y+', label: 'Experience' },
];

const CCWhatIs = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      <Container
        maxWidth={false}
        sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 5 } }}
      >
        {/* Headline */}
        <motion.div {...fadeUp(0.1)}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
              lineHeight: 1.34,
              fontWeight: 900,
              letterSpacing: '-0.025em',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Bookkeeping & Accounting Services for{' '}
            <Box component="span" sx={{ color: primary }}>
              Small Restaurants
            </Box>
          </Typography>
        </motion.div>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '5fr 4fr' },
          gap: { xs: 6, md: 10 },
          alignItems: 'stretch',
        }}>

          {/* ══ LEFT: Text content ══ */}
          <Box>
            {/* Body copy - Paragraph 1 */}
            <motion.div {...fadeUp(0.18)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                Running a small restaurant is no easy task; you're balancing food quality, customer satisfaction, and daily operations. Disorganized financials can cause stress, lead to mistakes, and prevent your business from seizing new opportunities. At Mila, we provide expert accounting and bookkeeping for small restaurant businesses to help you stay organized, compliant, and profitable.
              </Typography>
            </motion.div>

            {/* Body copy - Paragraph 2 */}
            <motion.div {...fadeUp(0.22)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                Whether you're managing a single-location café, a cozy diner, or a family-owned restaurant, our best restaurant bookkeeping services ensure that your books are accurate, your taxes are filed on time, and your business stays financially healthy.
              </Typography>
            </motion.div>

            {/* Body copy - Paragraph 3 - Why Bookkeeping Matters */}
            <motion.div {...fadeUp(0.26)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  Why Bookkeeping Matters for Small Restaurant Businesses
                </Box>
              </Typography>
            </motion.div>

            {/* Body copy - Daily Sales Tracking */}
            <motion.div {...fadeUp(0.30)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>1. Daily Sales Tracking</Box><br />
                Your daily income is tracked and categorized by Mila according to meal type, time slot, or service channel. Our specialized bookkeeping for restaurant businesses helps you understand peak hours, customer preferences, and profitable menu items.
              </Typography>
            </motion.div>

            {/* Body copy - Inventory & Cost Control */}
            <motion.div {...fadeUp(0.34)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>2. Inventory & Cost Control</Box><br />
                In a small restaurant, every ounce and dollar counts. Inventory tracking and cost-of-goods-sold (COGS) calculations are part of our restaurant bookkeeping solution, which helps you eliminate waste and control food costs.
              </Typography>
            </motion.div>

            {/* Body copy - Expense Monitoring */}
            <motion.div {...fadeUp(0.38)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>3. Expense Monitoring</Box><br />
                From payroll and food purchases to rent and utility bills, we record and classify every transaction. Our accounting for small restaurant business clients gains full visibility into their spending to improve cash management and budgeting.
              </Typography>
            </motion.div>

            {/* Body copy - Cash Flow Management */}
            <motion.div {...fadeUp(0.42)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>4. Cash Flow Management</Box><br />
                Cash flow is critical in the restaurant industry. Mila helps small restaurant owners track cash inflows and outflows, ensuring they can cover payroll, vendor payments, and day-to-day costs without falling behind.
              </Typography>
            </motion.div>

            {/* Body copy - Tax Compliance */}
            <motion.div {...fadeUp(0.46)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 4 }}>
                <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>5. Tax Compliance</Box><br />
                Avoid costly IRS penalties and sales tax complications. Mila handles complete tax return preparation and filing for restaurant businesses—including income tax, sales tax, and payroll tax—ensuring full compliance and peace of mind.
              </Typography>
            </motion.div>

            {/* Stats row */}
            <motion.div {...fadeUp(0.50)}>
              <Box sx={{
                display: 'inline-flex',
                gap: 0,
                borderRadius: '14px',
                overflow: 'hidden',
                border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                bgcolor: 'background.paper',
              }}>
                {STATS.map(({ num, label }, i) => (
                  <Box
                    key={label}
                    sx={{
                      px: { xs: 3, md: 3.5 }, py: 2,
                      textAlign: 'center',
                      borderRight: i < STATS.length - 1
                        ? (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`
                        : 'none',
                    }}
                  >
                    <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: { xs: '1.3rem', md: '1.5rem' }, color: primary, lineHeight: 1 }}>
                      {num}
                    </Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.62rem', color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mt: 0.4 }}>
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* ══ RIGHT: Image ══ */}
          <motion.div {...fadeRight(0.22)} style={{ height: '100%' }}>
            <Box sx={{
              borderRadius: '24px',
              overflow: 'hidden',
              bgcolor: 'background.paper',
              border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
              boxShadow: `0 20px 60px ${alpha(primary, 0.08)}`,
              position: 'relative',
              height: '100%',
              minHeight: { xs: '300px', md: '400px' },
            }}>
              <img
                src={healthcareImage}
                alt="Bookkeeping & Accounting Services for Small Restaurants"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </motion.div>

        </Box>
      </Container>
    </Box>
  );
};

export default CCWhatIs;
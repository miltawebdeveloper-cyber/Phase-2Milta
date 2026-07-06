import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import GavelIcon from '@mui/icons-material/Gavel';
import CloudIcon from '@mui/icons-material/Cloud';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const TILES = [
  { icon: AccountBalanceIcon, label: 'Trust Accounting',             desc: 'Client funds kept separate and reconciled to bar association standards.' },
  { icon: ReceiptLongIcon,    label: 'Timekeeping & Billing',        desc: 'Accurate billable-hour tracking and prompt invoicing for every matter.' },
  { icon: GavelIcon,          label: 'Tax Planning for Lawyers',     desc: 'Tailored strategies to minimize liability and stay fully compliant.' },
  { icon: CloudIcon,          label: 'Clio & LEAP Integration',      desc: 'Seamless sync with your practice management software.' },
];

const STATS = [
  { num: '100+', label: 'Clients'    },
  { num: '12+',  label: 'Countries'  },
  { num: '15y+', label: 'Experience' },
];

const LFWhatIs = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 5 } }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '5fr 4fr' },
          gap: { xs: 6, md: 10 },
          alignItems: 'center',
        }}>

          {/* LEFT: Text content */}
          <Box>
            <motion.div {...fadeUp(0)}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Box sx={{ width: 28, height: 2.5, borderRadius: 2, bgcolor: primary }} />
                <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.72rem' }}>
                  ACCOUNTING FOR LAW FIRMS
                </Typography>
              </Box>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' }, lineHeight: 1.14, fontWeight: 900, letterSpacing: '-0.025em', mb: 3 }}>
                What is Bookkeeping and{' '}
                <Box component="span" sx={{ color: primary }}>Accounting for Law Firms?</Box>
              </Typography>
            </motion.div>

            <motion.div {...fadeUp(0.18)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                Lawyers and law firms are busy professionals who often don't have the time — or shouldn't spend their time — on financial management tasks like bookkeeping and accounting. However, accurate financial reporting is essential for legal practices to stay compliant and thrive.
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.24)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 4 }}>
                At Milta, we specialize in law firm bookkeeping and understand the unique financial landscape legal professionals operate within. From trust accounting to integration with practice management software, our services are customized to meet the specific needs of every legal practice.
              </Typography>
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <Box sx={{
                display: 'inline-flex', gap: 0, borderRadius: '14px', overflow: 'hidden',
                border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                bgcolor: 'background.paper',
              }}>
                {STATS.map(({ num, label }, i) => (
                  <Box key={label} sx={{
                    px: { xs: 3, md: 3.5 }, py: 2, textAlign: 'center',
                    borderRight: i < STATS.length - 1
                      ? (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`
                      : 'none',
                  }}>
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

          {/* RIGHT: Feature card */}
          <motion.div {...fadeLeft(0.22)}>
            <Box sx={{
              borderRadius: '24px', bgcolor: 'background.paper',
              border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
              p: { xs: 3, md: 4 },
              boxShadow: `0 20px 60px ${alpha(primary, 0.08)}`,
            }}>
              <Box sx={{ mb: 3, pb: 2.5, borderBottom: `1px solid ${alpha(primary, 0.12)}` }}>
                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '1rem', color: 'text.primary', lineHeight: 1.3 }}>
                  Why every law firm needs{' '}
                  <Box component="span" sx={{ color: primary }}>professional bookkeeping</Box>
                </Typography>
              </Box>

              <Stack spacing={1.5}>
                {TILES.map((tile, i) => {
                  const Icon = tile.icon;
                  return (
                    <motion.div key={tile.label} {...fadeUp(0.32 + i * 0.09)}>
                      <Box sx={{
                        display: 'flex', alignItems: 'center', gap: 2,
                        p: 2, borderRadius: '14px',
                        bgcolor: alpha(primary, 0.04),
                        border: `1px solid ${alpha(primary, 0.1)}`,
                        transition: 'all 0.25s ease', cursor: 'default',
                        '&:hover': {
                          bgcolor: alpha(primary, 0.08),
                          border: `1px solid ${alpha(primary, 0.28)}`,
                          transform: 'translateX(4px)',
                          '& .feat-icon': { bgcolor: primary },
                          '& .feat-icon svg': { color: '#fff' },
                        },
                      }}>
                        <Box className="feat-icon" sx={{
                          width: 40, height: 40, flexShrink: 0, borderRadius: '11px',
                          bgcolor: alpha(primary, 0.1), border: `1px solid ${alpha(primary, 0.2)}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'all 0.25s ease',
                        }}>
                          <Icon sx={{ fontSize: 19, color: primary, transition: 'color 0.25s ease' }} />
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.86rem', color: 'text.primary', lineHeight: 1.3, mb: 0.2 }}>
                            {tile.label}
                          </Typography>
                          <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.78rem', color: 'text.secondary', lineHeight: 1.5 }}>
                            {tile.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  );
                })}
              </Stack>
            </Box>
          </motion.div>

        </Box>
      </Container>
    </Box>
  );
};

export default LFWhatIs;

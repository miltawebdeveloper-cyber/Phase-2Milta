import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const POINTS = [
  'Senior-Level Financial Oversight: a financial controller ensures all accounting processes run smoothly and comply with US accounting standards and regulations.',
  'Beyond Routine Accounting: FC services cover everything from day-to-day accounting oversight to strategic financial analysis, tailored to your SMB needs.',
  'The Right Leadership for SMEs: expert financial management without the cost of a full-time CFO — the ideal solution for growing small and medium businesses.',
  'Compliance & Accuracy: every financial process follows US GAAP and regulatory standards, protecting your business from penalties, audits, and errors.',
];

const COMPARISON = [
  { cap: 'Accounting Function Oversight',              ctrl: true,  cfo: true  },
  { cap: 'Regulatory Compliance (GAAP, etc.)',         ctrl: true,  cfo: true  },
  { cap: 'ERP Implementation',                         ctrl: true,  cfo: true  },
  { cap: 'Management Accounting',                      ctrl: true,  cfo: true  },
  { cap: 'Accounting Internal Controls',               ctrl: true,  cfo: true  },
  { cap: 'Closing Entries (Financial Close)',          ctrl: true,  cfo: true  },
  { cap: 'Budgeting & Forecasting Support',            ctrl: true,  cfo: true  },
  { cap: 'Cash Flow Management',                       ctrl: true,  cfo: true  },
  { cap: 'Financial Reporting & Analysis',             ctrl: true,  cfo: true  },
  { cap: 'Financial Statement Preparation/Review',     ctrl: true,  cfo: true  },
  { cap: 'Team Management, Hiring & Training',         ctrl: true,  cfo: true  },
  { cap: 'Long-Term Business & Financial Strategy',    ctrl: false, cfo: true  },
  { cap: 'Fundraising & Investor Relations',           ctrl: false, cfo: true  },
  { cap: 'Investment Advisory',                        ctrl: false, cfo: true  },
];

const FCWhatIs = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 10 }} alignItems={{ md: 'center' }}>

          {/* Text side */}
          <Box sx={{ flex: 1 }}>
            <motion.div {...fadeUp(0)}>
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 2, display: 'block' }}>
                UNDERSTANDING FINANCIAL CONTROLLER
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.8rem' }, lineHeight: 1.2, mb: 2.5 }}>
                What is a Finance Controller Services and{' '}
                <Box component="span" sx={{ color: primary }}>How It Empowers Your SME?</Box>
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.18)}>
              <Box sx={{ width: 48, height: 3, borderRadius: 4, bgcolor: alpha(primary, 0.35), mb: 3 }} />
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.85, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                Certified Financial Controller Services for SMEs refer to a set of financial management functions aimed at overseeing and managing a company's financial operations. A financial controller is a senior-level finance professional responsible for ensuring that a business's financial processes run smoothly and remain compliant with accounting standards and regulations.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.85, fontFamily: '"Outfit", sans-serif', mb: 3, fontWeight: 600 }}>
                The role is crucial for SMBs — here's how Miltafs Financial Controller Services stand apart:
              </Typography>
            </motion.div>
            <Stack spacing={1.5}>
              {POINTS.map((point, i) => (
                <motion.div key={i} {...fadeUp(0.22 + i * 0.08)}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <CheckCircleIcon sx={{ fontSize: 20, color: primary, mt: 0.2, flexShrink: 0 }} />
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', fontFamily: '"Outfit", sans-serif', lineHeight: 1.7 }}>
                      {point}
                    </Typography>
                  </Stack>
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: '0 0 auto', width: '100%', maxWidth: 420 }}
          >
            <Box sx={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: `0 32px 80px ${alpha(primary, 0.12)}` }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                alt="Financial controller services"
                sx={{ width: '100%', height: 480, objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', '&:hover': { transform: 'scale(1.04)' } }}
              />
              <Box sx={{ position: 'absolute', inset: 0, background: `linear-gradient(45deg, ${alpha(primary, 0.15)} 0%, transparent 60%)` }} />
              <Box sx={{ position: 'absolute', bottom: 24, left: 24, right: 24, borderRadius: '16px', bgcolor: (t) => t.palette.mode === 'dark' ? 'rgba(25,42,27,0.95)' : 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', p: 2.5, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
                <Stack direction="row" spacing={3} justifyContent="space-around">
                  {[{ num: '100+', label: 'Clients' }, { num: '12+', label: 'Countries' }, { num: '15y+', label: 'Experience' }].map(({ num, label }) => (
                    <Box key={label} textAlign="center">
                      <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '1.4rem', color: primary, lineHeight: 1 }}>{num}</Typography>
                      <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.7rem', color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', mt: 0.4 }}>{label}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </motion.div>
        </Stack>

        {/* Controller vs CFO comparison table */}
        <motion.div {...fadeUp(0.3)}>
          <Box sx={{ mt: { xs: 8, md: 12 } }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 1.5, display: 'block' }}>
                ROLE COMPARISON
              </Typography>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, lineHeight: 1.2, mb: 1 }}>
                Controller vs. CFO:{' '}
                <Box component="span" sx={{ color: primary }}>Different Roles, Unique Value</Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.8, fontFamily: '"Outfit", sans-serif', maxWidth: 560, mx: 'auto', mt: 1 }}>
                A Fractional Controller from Miltafs bridges the gap — providing expert financial leadership without the full-time CFO cost.
              </Typography>
            </Box>

            <Box sx={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              {/* Header row */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 140px 140px', bgcolor: 'linear-gradient(135deg, #0d1f0e, #163018)', background: 'linear-gradient(135deg, #0d1f0e 0%, #163018 100%)', px: { xs: 2, md: 3 }, py: 2 }}>
                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.85rem', color: alpha('#fff', 0.7), letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Capabilities
                </Typography>
                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.85rem', color: '#fff', textAlign: 'center', letterSpacing: '0.05em' }}>
                  Controller
                </Typography>
                <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.85rem', color: alpha(primary, 0.85), textAlign: 'center', letterSpacing: '0.05em' }}>
                  CFO
                </Typography>
              </Box>
              {/* Data rows */}
              {COMPARISON.map((row, i) => (
                <Box key={row.cap} sx={{ display: 'grid', gridTemplateColumns: '1fr 140px 140px', px: { xs: 2, md: 3 }, py: 1.5, bgcolor: i % 2 === 0 ? 'background.paper' : 'background.default', borderTop: '1px solid rgba(0,0,0,0.05)', alignItems: 'center' }}>
                  <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: { xs: '0.82rem', md: '0.9rem' }, color: 'text.primary', lineHeight: 1.4 }}>
                    {row.cap}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {row.ctrl
                      ? <CheckIcon sx={{ fontSize: 18, color: primary }} />
                      : <RemoveIcon sx={{ fontSize: 18, color: 'rgba(0,0,0,0.2)' }} />}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {row.cfo
                      ? <CheckIcon sx={{ fontSize: 18, color: primary }} />
                      : <RemoveIcon sx={{ fontSize: 18, color: 'rgba(0,0,0,0.2)' }} />}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default FCWhatIs;

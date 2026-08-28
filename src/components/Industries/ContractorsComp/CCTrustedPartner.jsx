import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CloudIcon from '@mui/icons-material/Cloud';
import GavelIcon from '@mui/icons-material/Gavel';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const HIGHLIGHTS = [
  { icon: AccountTreeIcon, label: 'Project-Based Accounting & Job Costing' },
  { icon: HandshakeIcon,   label: 'Subcontractor Management' },
  { icon: CloudIcon,       label: 'Cloud Tools Like QuickBooks' },
  { icon: GavelIcon,       label: 'Construction Tax Planning' },
];

const CCTrustedPartner = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 }, overflow: 'hidden', position: 'relative' }}>

      {/* Dot pattern bg */}
      <Box sx={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.045)} 1.5px, transparent 1.5px)`,
        backgroundSize: '28px 28px',
      }} />

      <Container maxWidth={false} sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
          <motion.div {...fadeUp(0)}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 24, height: 2, borderRadius: 2, bgcolor: primary }} />
              <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem' }}>
                YOUR TRUSTED PARTNER
              </Typography>
              <Box sx={{ width: 24, height: 2, borderRadius: 2, bgcolor: primary }} />
            </Box>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              Advantages of choosing Milta for Accounting and{' '}
              <Box component="span" sx={{ color: primary }}>Bookkeeping for Contractors</Box>
            </Typography>
          </motion.div>
        </Box>

        {/* Body copy */}
        <motion.div {...fadeUp(0.18)}>
          <Box sx={{
            p: { xs: 3.5, md: 5 },
            borderRadius: '24px',
            bgcolor: 'background.default',
            border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`,
            boxShadow: `0 20px 60px ${alpha(primary, 0.07)}`,
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Accent bar */}
            <Box sx={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: 3,
              background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.15)})`,
            }} />

            <Typography sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.95rem', md: '1rem' },
              lineHeight: 1.9,
              fontFamily: '"Outfit", sans-serif',
            }}>
              When it comes to reliable and accurate bookkeeping for contractors, Milta stands out as a trusted partner for businesses across various industries, especially small construction companies. Our expert team understands the complexities of accounting for construction companies, including project-based accounting, job costing, subcontractor management, and labor-intensive payroll systems. We help streamline your financial processes with cloud-based tools like QuickBooks, ensuring real-time tracking of expenses, invoices, and bank reconciliations. Our proactive approach to construction tax planning and compliance means you’ll never miss a deduction or deadline. Whether you're running a large crew or operating a small construction business, our customized solutions for bookkeeping and tax planning for contractors are designed to help you maintain profitability, minimize tax liability, and focus on growing your business, without the stress of managing the books.
            </Typography>
          </Box>
        </motion.div>

        {/* Highlight chips */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 2,
          mt: 3,
        }}>
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon;
            return (
              <Box
                key={h.label}
                component={motion.div}
                {...fadeUp(0.24 + i * 0.06)}
                sx={{
                  display: 'flex', alignItems: 'center', gap: 1.5,
                  p: 2, borderRadius: '16px',
                  bgcolor: 'background.default',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  cursor: 'default',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    border: `1px solid ${alpha(primary, 0.4)}`,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 14px 36px ${alpha(primary, 0.14)}`,
                    '& .tp-chip-icon': { bgcolor: primary, border: `1px solid ${primary}`, '& svg': { color: '#fff' } },
                    '& .tp-chip-label': { color: primary },
                  },
                }}
              >
                <Box className="tp-chip-icon" sx={{
                  width: 38, height: 38, flexShrink: 0, borderRadius: '11px',
                  bgcolor: alpha(primary, 0.08),
                  border: `1px solid ${alpha(primary, 0.15)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}>
                  <Icon sx={{ fontSize: 18, color: primary, transition: 'color 0.3s ease' }} />
                </Box>
                <Typography className="tp-chip-label" sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 800, fontSize: '0.78rem',
                  color: 'text.primary', lineHeight: 1.35,
                  transition: 'color 0.3s ease',
                }}>
                  {h.label}
                </Typography>
              </Box>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
};

export default CCTrustedPartner;

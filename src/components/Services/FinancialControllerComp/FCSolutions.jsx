import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SecurityIcon from '@mui/icons-material/Security';
import GavelIcon from '@mui/icons-material/Gavel';
import PaymentIcon from '@mui/icons-material/Payment';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  { icon: BarChartIcon,      title: 'Reporting from Management',                        desc: 'We provide accurate, timely financial reporting, ensuring that key stakeholders have the insights they need to make informed decisions.' },
  { icon: TrackChangesIcon,  title: 'Oversight and Evaluation of Transaction Processing', desc: 'Our team closely monitors transaction processes, ensuring accuracy and efficiency in your financial operations.' },
  { icon: SecurityIcon,      title: 'Assessment of Internal Control Mechanisms',        desc: 'We assess your current internal control mechanisms, identifying gaps and providing recommendations for improvements to safeguard your financial integrity.' },
  { icon: GavelIcon,         title: 'Procedures and Policy Direction and Conformity',   desc: 'We ensure that your business adheres to established procedures and policies, maintaining consistency and regulatory compliance.' },
  { icon: PaymentIcon,       title: 'Timely Payment Management',                        desc: 'We oversee the timely payment of all liabilities, ensuring that your business meets deadlines and avoids penalties.' },
  { icon: AssignmentIcon,    title: 'Reports that Are Requested',                       desc: 'Our team prepares reports on demand, addressing specific business needs and delivering financial data quickly and efficiently.' },
  { icon: EventNoteIcon,     title: 'Monthly Review and Reporting',                     desc: 'We conduct regular reviews and provide detailed monthly financial reports to ensure that your business stays on track with its goals.' },
  { icon: AccountBalanceIcon,title: 'Adherence to Federal and State Regulations',       desc: 'We ensure your business complies with both federal and state financial regulations, mitigating the risk of non-compliance penalties.' },
  { icon: PeopleAltIcon,     title: 'Fractional Controller Services',                   desc: "For businesses that don't require a full-time controller, we offer fractional controller services, giving you access to top-tier financial expertise without the full-time commitment." },
  { icon: HandshakeIcon,     title: 'Vendor and Employee Communication Assistance',     desc: 'Our team facilitates clear and effective communication between vendors, employees, and other stakeholders, ensuring smooth operations and financial transparency.' },
  { icon: FactCheckIcon,     title: 'Audit Assistance',                                 desc: 'We provide support during audits, helping you prepare documents, review financials, and ensure full compliance with auditing standards.' },
];

const FCSolutions = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden', position: 'relative' }}>
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.05)} 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' }} />

      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem', mb: 2, display: 'block' }}>
              COMPREHENSIVE OVERSIGHT
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              Our Financial Controller{' '}
              <Box component="span" sx={{ color: primary }}>Services in the USA</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 560, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              From reporting and compliance to transaction oversight and audit support, Milta's Financial Controller Services ensure your financial operations remain accurate, compliant, and efficient.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Box
                key={svc.title}
                component={motion.div}
                {...fadeUp(i * 0.06)}
                sx={{
                  p: 3.5, borderRadius: '20px', height: '100%',
                  bgcolor: 'background.paper',
                  border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  position: 'relative', overflow: 'hidden', cursor: 'default',
                  transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    bgcolor: alpha(primary, 0.03),
                    border: `1px solid ${alpha(primary, 0.3)}`,
                    boxShadow: `0 24px 56px ${alpha(primary, 0.13)}, 0 4px 16px rgba(0,0,0,0.06)`,
                    '& .sweep-bar': { width: '100%' },
                    '& .icon-wrap': { bgcolor: primary, border: `1px solid ${primary}`, boxShadow: `0 8px 20px ${alpha(primary, 0.35)}`, transform: 'scale(1.08)' },
                    '& .icon-svg': { color: '#ffffff' },
                    '& .card-title': { color: primary },
                    '& .card-num': { opacity: 1 },
                    '& .card-arrow': { opacity: 1, transform: 'translateX(0px)' },
                  },
                }}
              >
                <Box className="sweep-bar" sx={{ position: 'absolute', top: 0, left: 0, height: '3px', width: 0, background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.5)})`, borderRadius: '0 0 3px 0', transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                <Typography className="card-num" sx={{ position: 'absolute', bottom: 10, right: 14, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '3.8rem', lineHeight: 1, color: alpha(primary, 0.07), userSelect: 'none', pointerEvents: 'none', opacity: 0, transition: 'opacity 0.32s ease' }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Box className="icon-wrap" sx={{ width: 52, height: 52, borderRadius: '14px', bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.15)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, flexShrink: 0, transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <Icon className="icon-svg" sx={{ fontSize: 24, color: primary, transition: 'color 0.32s ease' }} />
                </Box>
                <Typography className="card-title" sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.95rem', color: 'text.primary', mb: 1, lineHeight: 1.35, transition: 'color 0.28s ease' }}>
                  {svc.title}
                </Typography>
                <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.84rem', lineHeight: 1.72, color: 'text.secondary', pr: 2 }}>
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

export default FCSolutions;

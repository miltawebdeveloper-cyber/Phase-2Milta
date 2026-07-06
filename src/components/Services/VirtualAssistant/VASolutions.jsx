import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import StorageIcon from '@mui/icons-material/Storage';
import EventIcon from '@mui/icons-material/Event';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import FlightIcon from '@mui/icons-material/Flight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  { icon: HomeWorkIcon,       title: 'Real Estate Virtual Assistant',          desc: 'Property listings, client databases, showing coordination, virtual tours, and market research reports to keep you competitive.' },
  { icon: StorageIcon,        title: 'Data Entry',                             desc: 'Meticulous input of large data volumes into spreadsheets or business software — maintaining accuracy and consistency across all datasets.' },
  { icon: EventIcon,          title: 'Event Planning',                         desc: 'RSVPs, vendor management, scheduling, and logistics coordination for virtual meetings, in-person events, and conferences.' },
  { icon: TravelExploreIcon,  title: 'Internet Research',                      desc: 'Market trends, competitor analysis, and customer behavior data — delivering actionable insights to support informed business decisions.' },
  { icon: ContactPageIcon,    title: 'Business Card Scanning',                 desc: 'Scan, upload, and organize business cards into contact management systems so your database stays updated and easily searchable.' },
  { icon: CalendarMonthIcon,  title: 'Appointment Scheduling',                 desc: 'Calendar management, meeting scheduling, automated reminders, rescheduling, and time-zone adjustments — seamlessly handled.' },
  { icon: AccountBalanceIcon, title: 'Accounting & Bookkeeping',               desc: 'Accurate financial records, transaction recording, account reconciliation, and financial statement generation — organized and error-free.' },
  { icon: PhoneInTalkIcon,    title: 'Call Answering',                         desc: 'Professional inbound call handling — client inquiries, service information, and appointment booking so you never miss an important call.' },
  { icon: MarkEmailReadIcon,  title: 'Correspondence Management',              desc: 'Email handling, professional message drafting, inbox organization, and timely responses — all aligned with your communication preferences.' },
  { icon: DesignServicesIcon, title: 'Desktop Publishing Services',            desc: 'Brochures, flyers, newsletters, reports, and presentations created with industry-standard tools — polished, on-brand, and professional.' },
  { icon: SlideshowIcon,      title: 'Presentations & Spreadsheets',           desc: 'Visually compelling PowerPoint presentations and detailed, easy-to-understand spreadsheets that make complex information clear.' },
  { icon: FlightIcon,         title: 'Travel & Hotel Reservations',            desc: 'Flight and hotel booking, transportation arrangements, and itinerary creation — ensuring seamless, cost-effective business trips.' },
];

const VASolutions = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden', position: 'relative' }}>
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.05)} 1.5px, transparent 1.5px)`, backgroundSize: '28px 28px' }} />

      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: '0.75rem', mb: 2, display: 'block' }}>
              END-TO-END VA SOLUTIONS
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}>
              Our Virtual Assistant{' '}
              <Box component="span" sx={{ color: primary }}>Services in the USA</Box>
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.18)}>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 560, mx: 'auto', mt: 2, fontFamily: '"Outfit", sans-serif' }}>
              From real estate support and data entry to bookkeeping and travel reservations — every service designed to reduce your workload and grow your business.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Box
                key={svc.title}
                component={motion.div}
                {...fadeUp(i * 0.07)}
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
                <Box className="card-arrow" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, mt: 2.5, color: primary, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
                  Learn more <ArrowForwardIcon sx={{ fontSize: '0.8rem' }} />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default VASolutions;

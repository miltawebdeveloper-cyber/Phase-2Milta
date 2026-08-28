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
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  { icon: HomeWorkIcon,       title: 'Real Estate Virtual Assistant',          desc: 'Our Real Estate VAs manage property listings, update client databases, coordinate showings, and perform market research—helping you focus on client relationships and closing deals.' },
  { icon: StorageIcon,        title: 'Data Entry',                             desc: 'We ensure data accuracy and consistency across all business platforms. From spreadsheets to CRMs, our virtual assistants efficiently manage large datasets for smooth workflow.' },
  { icon: EventIcon,          title: 'Event Planning',                         desc: 'From virtual meetings to large-scale conferences, our VAs coordinate RSVPs, vendors, schedules, and logistics to guarantee smooth and stress-free event management.' },
  { icon: TravelExploreIcon,  title: 'Internet Research',                      desc: 'Our VAs conduct thorough market, competitor, and customer research to deliver actionable insights that support data-driven business decisions.' },
  { icon: ContactPageIcon,    title: 'Business Card Scanning',                 desc: 'We digitize and organize business cards, ensuring your contact database remains updated and easy to access within your preferred CRM or contact management system.' },
  { icon: CalendarMonthIcon,  title: 'Appointment Scheduling',                 desc: 'Stay organized with our scheduling support — we manage your calendar, meetings, and reminders to keep your business running efficiently.' },
  { icon: AccountBalanceIcon, title: 'Accounting & Bookkeeping',               desc: 'We maintain financial records, reconcile accounts, and generate reports, ensuring your business stays compliant and financially organized.' },
  { icon: PhoneInTalkIcon,    title: 'Call Answering',                         desc: 'Our professional VAs handle your inbound calls promptly and courteously, improving client satisfaction and ensuring you never miss a lead.' },
  { icon: MarkEmailReadIcon,  title: 'Correspondence Management',              desc: 'We manage your emails and business communication — drafting, responding, and organizing messages to help you stay focused and professional.' },
  { icon: DesignServicesIcon, title: 'Desktop Publishing Services',            desc: 'Our VAs design and prepare marketing materials like brochures, flyers, and presentations that align with your brand and enhance communication.' },
  { icon: SlideshowIcon,      title: 'Presentations & Spreadsheets Creation',  desc: 'We create engaging, data-driven presentations and spreadsheets that help you communicate complex information clearly and professionally.' },
  { icon: FlightIcon,         title: 'Travel, Airline & Hotel Reservations',   desc: 'We manage complete travel planning — from booking flights to preparing detailed itineraries — for seamless and cost-effective business travel.' },
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
              Professional, Scalable, and Reliable Support for Your Business Growth
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
                
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default VASolutions;

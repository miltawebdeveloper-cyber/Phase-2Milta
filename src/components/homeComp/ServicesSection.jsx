import React from 'react';
import { Box, Typography, Card, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { AccountTree, Receipt, Settings, SupportAgent, Payment, AccountBalance, Campaign, Storage } from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/navigation';

const CARD_GAP      = 32;
const CONTENT_WIDTH = 1300;

const BASE_SERVICES = [
  { icon: <Receipt />,        title: 'Bookkeeping',                description: 'Streamlined bookkeeping services that keep your financial records organized and compliant.',            link: '/us/services/bookkeeping-company-in-the-usa/' },
  { icon: <Payment />,        title: 'Payroll Management',         description: 'Reliable, automated payroll services ensuring accuracy and peace of mind every payday.',              link: '/us/services/payroll-management-services-in-the-usa/' },
  { icon: <Settings />,       title: 'CPA Service',                description: 'Top-tier CPA services ensuring accurate financial reporting and compliance for your business.',        link: '/us/services/best-cpa-services-for-small-businesses-in-the-usa/' },
  { icon: <AccountBalance />, title: 'Controller Services',        description: 'Gain financial clarity and strategic insight through expert outsourced controller services.',         link: '/us/services/financial-controller-services-in-the-usa/' },
  { icon: <AccountTree />,    title: 'Tax Planning & Preparation', description: 'Comprehensive tax planning and preparation services for individuals, corporations, and nonprofits.',   link: '/us/services/tax-planning-and-preparation-services-usa/' },
  { icon: <Campaign />,       title: 'Digital Marketing',          description: 'Grow your brand with data-driven digital marketing built for accounting and finance businesses.',      link: '/us/services/best-digital-marketing-agency-in-usa/' },
  { icon: <SupportAgent />,   title: 'Virtual Assistant',          description: 'Let us handle your administrative and bookkeeping tasks efficiently with our virtual assistant team.', link: '/us/services/virtual-assistant-service-in-the-usa/' },
  { icon: <Storage />,        title: 'Data Entry',                 description: 'Accurate and reliable accounting data entry services modified specifically for small businesses.',    link: '/us/services/outsourcing-accounting-data-entry-services-in-the-usa/' },
];

/*
 * Triple the array so Swiper always has real rendered slides on both
 * sides at first paint — no waiting for loop-clone injection.
 */
const slides = [...BASE_SERVICES, ...BASE_SERVICES, ...BASE_SERVICES];

/*
 * Overflow strategy:
 *   • The outermost <Box> for this section keeps overflow:hidden → clips at viewport edges.
 *   • The carousel container does NOT clip → slides extend left/right into the section gutters.
 *   • "& .swiper" override forces Swiper's own internal overflow to visible.
 */
const focusSx = {
  '& .swiper': { overflow: 'visible !important' },

  '& .swiper-slide': {
    transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease',
    transform: 'scale(0.84)',
    opacity: 0.42,
    willChange: 'transform, opacity',
  },
  '& .swiper-slide-active': {
    transform: 'scale(1)',
    opacity: 1,
  },
  '& .swiper-slide-active .srv-card': {
    borderColor: 'rgba(38,105,41,0.45) !important',
    boxShadow: '0 28px 72px rgba(38,105,41,0.15), 0 6px 24px rgba(0,0,0,0.06) !important',
  },
};

const ServicesSection = () => (
  /* overflow:hidden on the section clips any slides that extend past the viewport */
  <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden', justifyContent: 'center', position: 'relative' }}>

    {/* Header */}
    <Box sx={{ maxWidth: CONTENT_WIDTH, mx: 'auto', px: { xs: 3, md: 4 }, mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
          What We Provide
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography variant="h2" sx={{ color: 'text.primary', fontSize: { xs: '2.2rem', md: '3.5rem' } }}>
          Our Services 
        </Typography>
      </motion.div>
    </Box>

    {/* Carousel */}
    <motion.div
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Carousel container — exactly 1300 px; clips peeking slides at boundary */}
      <Box sx={{ maxWidth: CONTENT_WIDTH, width: '100%', mx: 'auto', position: 'relative', py: '28px', overflow: 'hidden' }}>

        {/* ← Prev — overlaps left edge of carousel */}
        <IconButton
          className="srv-prev"
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute', left: { xs: 8, md: 16 },
            top: '50%', transform: 'translateY(-50%)', zIndex: 20,
            width: 64, height: 44, borderRadius: '12px',
            bgcolor: 'background.paper',
            boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
            color: 'text.primary',
            '&:hover': { bgcolor: 'background.paper', boxShadow: '0 4px 24px rgba(0,0,0,0.16)' },
          }}
        >
          <KeyboardDoubleArrowLeftIcon sx={{ fontSize: '1.3rem' }} />
        </IconButton>

        {/* Focus / fade layer — full 1300 px width, no overflow clipping */}
        <Box sx={focusSx}>
          <Swiper
            centeredSlides
            slidesPerView="auto"
            spaceBetween={CARD_GAP}
            loop
            initialSlide={BASE_SERVICES.length}   /* start on the first card of the middle copy */
            speed={520}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{ nextEl: '.srv-next', prevEl: '.srv-prev' }}
            modules={[Navigation, Autoplay]}
          >
            {slides.map((service, index) => (
              <SwiperSlide key={index} style={{ width: 'min(300px, 84vw)', maxWidth: '100%' }}>
                <Card
                  className="srv-card"
                  component="a"
                  href={service.link}
                  sx={{
                    width: '100%',
                    minHeight: { xs: 'auto', md: 360 },
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    color: 'inherit',
                    backgroundColor: 'background.paper',
                    border: '1.5px solid transparent',
                    transition: 'border-color 0.45s ease, box-shadow 0.45s ease',
                    /* suppress MuiCard theme hover-lift so our CSS class controls it */
                    '&:hover': { transform: 'none !important' },
                  }}
                >
                  {/* Watermark — always shows the original service number */}
                  <Typography sx={{
                    position: 'absolute', top: 12, right: 20,
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 900, fontSize: '4.5rem', lineHeight: 1,
                    color: 'rgba(0,0,0,0.04)', userSelect: 'none', pointerEvents: 'none',
                  }}>
                    {String((index % BASE_SERVICES.length) + 1).padStart(2, '0')}
                  </Typography>

                  {/* Icon */}
                  <Box sx={{
                    width: 54, height: 54, borderRadius: '14px',
                    backgroundColor: 'primary.main', color: 'primary.contrastText',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 3, flexShrink: 0,
                    boxShadow: '0 12px 24px rgba(38,105,41,0.22)',
                  }}>
                    {React.cloneElement(service.icon, { sx: { fontSize: 26 } })}
                  </Box>

                  <Typography variant="h5" sx={{
                    fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.3, mb: 1.5, color: 'text.primary',
                  }}>
                    {service.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, flexGrow: 1 }}>
                    {service.description}
                  </Typography>

                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* → Next — overlaps right edge of carousel */}
        <IconButton
          className="srv-next"
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute', right: { xs: 8, md: 16 },
            top: '50%', transform: 'translateY(-50%)', zIndex: 20,
            width: 64, height: 44, borderRadius: '12px',
            bgcolor: 'background.paper',
            boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
            color: 'text.primary',
            '&:hover': { bgcolor: 'background.paper', boxShadow: '0 4px 24px rgba(0,0,0,0.16)' },
          }}
        >
          <KeyboardDoubleArrowRightIcon sx={{ fontSize: '1.3rem' }} />
        </IconButton>

      </Box>
    </motion.div>

  </Box>
);

export default ServicesSection;

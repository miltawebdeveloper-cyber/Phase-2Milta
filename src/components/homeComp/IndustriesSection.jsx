import React, { useState } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Business, HomeWork, Factory, LocalHospital, VolunteerActivism, Restaurant, Storefront } from '@mui/icons-material';

const industries = [
  { id: '01', icon: <Business sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Contractors', desc: 'Expert bookkeeping for service contractors; track income, expenses, payroll, and taxes to keep your construction finances on point.', link: '/us/industry/bookkeeping-for-contractors-companies/', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800', stat: 'Job Costing Pro', tag: 'CONSTRUCTION' },
  { id: '02', icon: <HomeWork sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Real Estate', desc: 'We offer bookkeeping services for real estate. Book your free consultation today and simplify your property financial management.', link: '/us/industry/bookkeeping-for-real-estate-companies/', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', stat: 'Portfolio Optimized', tag: 'PROPERTY' },
  { id: '03', icon: <Factory sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Manufacturing', desc: 'Milta provides accounting and bookkeeping services for manufacturing companies, handling the tracking of financial operations and ensuring compliance with tax laws and regulations..', link: '/us/industry/accounting-services-for-manufacturing/', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', stat: 'Cost Efficiency', tag: 'PRODUCTION' },
  { id: '04', icon: <LocalHospital sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Healthcare', desc: 'Our specialized Accounting Services for Healthcare ensure accurate services for doctors, medical practices, and the healthcare industry.', link: '/us/industry/accounting-services-for-healthcare/', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800', stat: 'HIPAA Compliant', tag: 'MEDICAL' },
  { id: '05', icon: <VolunteerActivism sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Non-Profit', desc: 'Milta is your reliable partner for bookkeeping for nonprofits in the US. Whether you are launching a new nonprofit, managing a growing business', link: '/us/industry/accounting-services-for-nonprofit-organizations/', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800', stat: 'Fund Tracking', tag: 'CHARITY' },
  { id: '06', icon: <Restaurant sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Restaurant', desc: 'We provide expert accounting and bookkeeping for small restaurant businesses to help you stay organized, compliant, and profitable.', link: '/us/industry/accounting-services-for-restaurant-businesses/', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800', stat: 'Margin Control', tag: 'FOOD SERVICE' },
  { id: '07', icon: <Storefront sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Retail Business', desc: 'We offer accounting services for retail businesses in the USA. Our services include expense tracking, cash flow monitoring, tax maintenance, and reporting.', link: '/us/industry/accounting-services-for-retail-businesses/', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800', stat: 'Inventory Pro', tag: 'RETAIL' },
];

const IndustriesSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <Box sx={{ pt: { xs: 8, md: 0 }, pb: { xs: 8, md: 10 }, bgcolor: 'background.default', overflow: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto' }}>

        {/* Header — staggered */}
        <Box sx={{ mb: { xs: 6, md: 7 }, position: 'relative', textAlign: 'center' }}>
          <Stack spacing={2} alignItems="center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 6, display: 'block', textAlign: 'center' }}>
                SECTOR VISIBILITY
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', sm: '3rem', md: '4.2rem' }, lineHeight: 1.1, letterSpacing: '-0.05em', textAlign: 'center' }}>
                Industries<br />
                <Box component="span" sx={{ color: 'secondary.main' }}>We Serve</Box>
              </Typography>
            </motion.div>

            {/* Accent bar */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
              style={{ originX: 0.5 }}
            >
              <Box sx={{ width: 52, height: 3, borderRadius: '4px', bgcolor: 'primary.main', opacity: 0.3 }} />
            </motion.div>
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 6, md: 12 }, alignItems: 'flex-start' }}>

          {/* Industry list — staggered entrance */}
          <Box sx={{ flex: 1.1, width: '100%' }}>
            {industries.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <Box
                  onMouseEnter={() => setActiveIdx(index)}
                  onClick={() => setActiveIdx(index)}
                  sx={{ py: { xs: 2.5, md: 2 }, borderBottom: '1px solid rgba(0,0,0,0.06)', cursor: 'pointer', position: 'relative', transition: '0.4s', '&:hover': { pl: { xs: 0, md: 2 } }, '&:first-of-type': { borderTop: '1px solid rgba(0,0,0,0.06)' } }}
                >
                  <Stack direction="row" alignItems="center" spacing={{ xs: 2, md: 4 }}>
                    <Box sx={{ width: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: activeIdx === index ? 1 : 0.3, transition: '0.3s' }}>
                      {item.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Stack direction="row" alignItems="center" spacing={2} sx={{ flexWrap: 'wrap' }}>
                        <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.5rem' }, color: activeIdx === index ? 'text.primary' : 'text.disabled', transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)', letterSpacing: '-0.02em' }}>
                          {item.title}
                        </Typography>
                        {activeIdx === index && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <Box sx={{ px: 1, py: 0.2, backgroundColor: 'primary.main', color: '#FFF', borderRadius: '4px', fontSize: '0.6rem', fontWeight: 900 }}>{item.tag}</Box>
                          </motion.div>
                        )}
                      </Stack>
                      <AnimatePresence>
                        {activeIdx === index && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                            <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', maxWidth: '450px', lineHeight: 1.6, fontSize: { xs: '0.9rem', md: '1.05rem' }, fontWeight: 300 }}>{item.desc}</Typography>
                            <Box sx={{ display: { xs: 'flex', md: 'none' }, mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
                              <Box>
                                <Typography variant="caption" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 1, display: 'block' }}>ADVANTAGE</Typography>
                                <Typography variant="body2" sx={{ fontWeight: 900 }}>{item.stat}</Typography>
                              </Box>
                              <ElectricBoltIcon sx={{ color: 'secondary.main' }} />
                            </Box>
                            <Box sx={{ mt: 3, display: 'inline-block' }}>
                              <Stack component="a" href={item.link} direction="row" alignItems="center" spacing={1} sx={{ color: 'primary.main', textDecoration: 'none', cursor: 'pointer', fontWeight: 800, '&:hover': { opacity: 0.8 } }}>
                                <Typography variant="button" sx={{ fontSize: '0.9rem' }}>EXPLORE SERVICES</Typography>
                                <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
                              </Stack>
                            </Box>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Box>
                  </Stack>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Visual side — unchanged */}
          <Box sx={{ flex: 1, position: { xs: 'relative', md: 'sticky' }, top: '15vh', width: '100%', height: { xs: '300px', md: '650px' }, perspective: '1000px', display: { xs: 'none', md: 'block' } }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeIdx} initial={{ opacity: 0, rotateY: 10, scale: 0.9 }} animate={{ opacity: 1, rotateY: 0, scale: 1 }} exit={{ opacity: 0, rotateY: -10, scale: 1.1 }} transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }} style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <Box sx={{ width: '100%', height: '100%', borderRadius: '48px', overflow: 'hidden', position: 'relative', bgcolor: 'background.paper', boxShadow: '0 50px 100px rgba(0,0,0,0.12)', '&::after': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px', zIndex: 2 } }}>
                  <Box component="img" src={industries[activeIdx].image} sx={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9) contrast(1.1)' }} />
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default IndustriesSection;

import React, { useState } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Business, HomeWork, Factory, LocalHospital, VolunteerActivism, Restaurant, Storefront } from '@mui/icons-material';

const industries = [
  { id: '01', icon: <Business sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Contractors', desc: 'Specialized accounting for construction projects, ensuring accurate job costing and compliance.', link: '/us/industry/bookkeeping-for-contractors-companies/', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800', stat: 'Job Costing Pro', tag: 'CONSTRUCTION' },
  { id: '02', icon: <HomeWork sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Real Estate', desc: 'Precision asset management and tax-efficient structures for real estate portfolios and developers.', link: '/us/industry/bookkeeping-for-real-estate-companies/', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800', stat: 'Portfolio Optimized', tag: 'PROPERTY' },
  { id: '03', icon: <Factory sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Manufacturing', desc: 'Digital system implementation and cost-architecture for the next generation of industrial scale.', link: '/us/industry/accounting-services-for-manufacturing/', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', stat: 'Cost Efficiency', tag: 'PRODUCTION' },
  { id: '04', icon: <LocalHospital sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Healthcare', desc: 'Regulatory-compliant frameworks and structural auditing for medical practices and clinics.', link: '/us/industry/accounting-services-for-healthcare/', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800', stat: 'HIPAA Compliant', tag: 'MEDICAL' },
  { id: '05', icon: <VolunteerActivism sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Non-Profit', desc: 'Transparent financial reporting and grant management strategies for charitable organizations.', link: '/us/industry/accounting-services-for-nonprofit-organizations/', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800', stat: 'Fund Tracking', tag: 'CHARITY' },
  { id: '06', icon: <Restaurant sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Restaurant', desc: 'Streamlining operational Accountss, payroll, and margin analysis for the food service industry.', link: '/us/industry/accounting-services-for-restaurant-businesses/', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800', stat: 'Margin Control', tag: 'FOOD SERVICE' },
  { id: '07', icon: <Storefront sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: 'primary.main' }} />, title: 'Retail Business', desc: 'Omnichannel inventory accounting and POS integration for modern retail enterprises.', link: '/us/industry/accounting-services-for-retail-businesses/', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800', stat: 'Inventory Pro', tag: 'RETAIL' },
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
                  <Box sx={{ position: 'absolute', bottom: 40, left: 40, right: 40, p: 4, bgcolor: 'background.paper', backdropFilter: 'blur(30px)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 3 }}>
                    <Box>
                      <Typography variant="overline" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 2, display: 'block', mb: 0.5 }}>STRATEGIC ADVANTAGE</Typography>
                      <Typography variant="h5" sx={{ fontWeight: 900, color: 'text.primary' }}>{industries[activeIdx].stat}</Typography>
                    </Box>
                    <Box sx={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: 'secondary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                      <ElectricBoltIcon />
                    </Box>
                  </Box>
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

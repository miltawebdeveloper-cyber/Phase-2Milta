import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export const FAQS = [
  { q: 'How does Milta create a customized marketing plan?',             a: 'Our first step at Milta is to understand your target market, business goals, and industry dynamics. We then select the most effective platforms and create a tailored digital marketing strategy aligned with your objectives.' },
  { q: 'Can Milta help with website design and development?',            a: 'Yes, we offer professional website design and development services in the USA to ensure your website reflects your brand identity and delivers an exceptional user experience.' },
  { q: 'How does Milta ensure a high return on investment (ROI)?',       a: 'As a leading digital marketing company in the USA, we use data-driven strategies to attract high-quality leads, continuously optimize campaigns, and focus on measurable growth and revenue.' },
  { q: 'How long does it take for digital marketing to show results?',   a: 'Results vary depending on goals and strategies, but many businesses begin seeing measurable improvements within a few months. We focus on sustainable, long-term success.' },
  { q: 'Can Milta help my business stay competitive in a crowded market?',a: 'Absolutely. Our innovative marketing techniques and customized digital strategies help your business stand out and gain a competitive advantage.' },
  { q: 'What makes Milta different from other digital marketing agencies?',a: 'Our personalized approach, proven results, client-first mindset, and transparent communication set Milta apart as one of the best digital marketing agencies in the USA.' },
  { q: 'What digital marketing services does Milta offer?',              a: 'Milta provides comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, website design and development, and analytics reporting.' },
  { q: 'What is SEO, and how can it help my business?',                  a: 'SEO (Search Engine Optimization) improves your website\'s visibility on search engines, increases organic traffic, and strengthens your online presence using proven and modern techniques.' },
];

const DMFAQ = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 3, md: 4 } }}>

        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 2, display: 'block' }}>
              FAQ
            </Typography>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}>
              Frequently Asked{' '}
              <Box component="span" sx={{ color: primary }}>Questions</Box>
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 1.5, md: 3 }, alignItems: 'start' }}>
          {[FAQS.slice(0, Math.ceil(FAQS.length / 2)), FAQS.slice(Math.ceil(FAQS.length / 2))].map((col, colIdx) => (
            <Box key={colIdx} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {col.map((faq, rowIdx) => {
                const i = colIdx === 0 ? rowIdx : Math.ceil(FAQS.length / 2) + rowIdx;
                return (
                  <motion.div key={i} {...fadeUp(i * 0.04)}>
                    <Accordion
                      expanded={expanded === `faq-${i}`}
                      onChange={handleChange(`faq-${i}`)}
                      elevation={0}
                      sx={{
                        borderRadius: '14px !important',
                        border: `1px solid ${expanded === `faq-${i}` ? alpha(primary, 0.3) : 'rgba(0,0,0,0.07)'}`,
                        bgcolor: expanded === `faq-${i}` ? alpha(primary, 0.06) : 'background.default',
                        transition: 'all 0.25s ease',
                        '&:before': { display: 'none' },
                        overflow: 'hidden',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: primary }} />}
                        sx={{ px: 3, py: 0.5, '& .MuiAccordionSummary-content': { my: 1.5 } }}
                      >
                        <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: { xs: '0.9rem', md: '0.97rem' }, color: 'text.primary', lineHeight: 1.4 }}>
                          {faq.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.9rem', lineHeight: 1.8, color: 'text.secondary' }}>
                          {faq.a}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </motion.div>
                );
              })}
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default DMFAQ;

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

// `groups` is optional: when present it renders as titled bullet lists below `a`.
const FAQS = [
  {
    q: 'Can Milta prepare both personal and company tax returns?',
    a: 'Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and non-profits.',
  },
  {
    q: 'Do you assist with IRS audits?',
    a: 'Yes, our team is experienced in handling IRS audits and can provide comprehensive support to resolve any issues.',
  },
  {
    q: 'What documents are required for tax preparation?',
    a: "To ensure accurate and complete tax preparation, you'll need to provide the following documents:",
    groups: [
      {
        title: 'Personal Information',
        items: [
          'Social Security numbers and dates of birth for you, your spouse, and dependents',
          "Copies of last year's tax return (optional but helpful)",
          'Bank account number and routing number (for direct deposit)',
        ],
      },
      {
        title: 'Income Information',
        items: [
          'W-2 forms for you and your spouse',
          '1099 forms (C, G, MISC, R, S, INT, DIV, B, or K-1) for various income types',
          'SSA-1099 for Social Security benefits',
          'Alimony received',
          'Business or farming income records (profit/loss statement, capital equipment info)',
          'Rental property income and expenses (profit/loss statement, suspended loss info)',
          'Prior year installment sale info (Forms 6252, principal and interest collected)',
          'Miscellaneous income (jury duty, gambling winnings, scholarships, etc.)',
        ],
      },
    ],
  },
  {
    q: 'Can you help with state and city taxes?',
    a: 'Yes, we provide complete US expat tax service for federal, state, and city taxes, ensuring compliance at all levels.',
  },
  {
    q: "Are Milta's services affordable?",
    a: 'Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client.',
  },
];

const TaxFAQ = () => {
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
              Faq's{' '}
              <Box component="span" sx={{ color: primary }}>About Milta Tax Planning and Preparation Services























</Box>
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, maxWidth: 860, mx: 'auto' }}>
          {FAQS.map((faq, i) => (
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

                        {faq.groups?.map((group) => (
                          <Box key={group.title} sx={{ mt: 2 }}>
                            <Typography sx={{
                              fontFamily: '"Plus Jakarta Sans", sans-serif',
                              fontWeight: 800, fontSize: '0.85rem',
                              color: 'text.primary', mb: 1,
                            }}>
                              {group.title}
                            </Typography>
                            <Box component="ul" sx={{ listStyle: 'none', m: 0, pl: 0 }}>
                              {group.items.map((item) => (
                                <Box
                                  component="li"
                                  key={item}
                                  sx={{
                                    display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75,
                                    fontFamily: '"Outfit", sans-serif',
                                    fontSize: '0.88rem', lineHeight: 1.7, color: 'text.secondary',
                                  }}
                                >
                                  <Box component="span" sx={{ color: primary, fontSize: '0.75rem', lineHeight: 1.9, flexShrink: 0 }}>
                                    &#9656;
                                  </Box>
                                  {item}
                                </Box>
                              ))}
                            </Box>
                          </Box>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  </motion.div>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default TaxFAQ;

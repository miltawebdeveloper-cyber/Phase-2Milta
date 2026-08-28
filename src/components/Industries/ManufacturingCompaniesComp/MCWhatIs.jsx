import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import manufacturingImage from '../../../assets/industry/Manufacturing.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const STATS = [
  { num: '100+', label: 'Clients'    },
  { num: '50',  label: 'States'  },
  { num: '10y+', label: 'Experience' },
];

const CCWhatIs = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      <Container
        maxWidth={false}
        sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 5 } }}
      >
        {/* Headline */}
        <motion.div {...fadeUp(0.1)}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
              lineHeight: 1.34,
              fontWeight: 900,
              letterSpacing: '-0.025em',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Accounting and Bookkeeping for{' '}
            <Box component="span" sx={{ color: primary }}>
              the Manufacturing Industry
            </Box>
          </Typography>
        </motion.div>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '5fr 4fr' },
          gap: { xs: 6, md: 10 },
          alignItems: 'stretch',
        }}>

          {/* ══ LEFT: Text content ══ */}
          <Box>
            {/* Body copy - Paragraph 1 */}
            <motion.div {...fadeUp(0.18)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                The manufacturing industry is unlike any other. While retailers sell products and service providers offer expertise, only manufacturing companies create new products from raw materials. This unique nature makes bookkeeping and accounting for manufacturing companies especially important.
              </Typography>
            </motion.div>

            {/* Body copy - Paragraph 2 */}
            <motion.div {...fadeUp(0.22)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                Manufacturing businesses must account for both raw materials and production costs, as well as calculate the value of their finished goods. This complexity makes accounting services for manufacturing significantly more detailed compared to businesses that don't manage inventory.
              </Typography>
            </motion.div>

            {/* Body copy - Paragraph 3 */}
            <motion.div {...fadeUp(0.26)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                Manufacturing accounting focuses on key elements such as inventory valuation, cost of goods sold (COGS), and overall production efficiency. Proper bookkeeping for manufacturing companies ensures accurate financial records, helping to control costs and maximize profitability.
              </Typography>
            </motion.div>

            {/* Body copy - Paragraph 4 */}
            <motion.div {...fadeUp(0.30)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                To manage production patterns and material flow, manufacturers can track on-hand inventory, encourage vendor-managed inventory, use supplier drop shipping, or implement strategies that reduce inventory investment. These techniques play a vital role in both manufacturing tax planning and long-term financial management.
              </Typography>
            </motion.div>

            {/* Body copy - Paragraph 5 */}
            <motion.div {...fadeUp(0.34)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 2 }}>
                As a manufacturing business owner, keeping your finances in order is critical to long-term success. One of the most effective ways to do this is through structured accounting for manufacturing. However, with several accounting methods to choose from, finding the best fit can be challenging.
              </Typography>
            </motion.div>

            {/* Body copy - Paragraph 6 */}
            <motion.div {...fadeUp(0.38)}>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.97rem', lineHeight: 1.88, fontFamily: '"Outfit", sans-serif', mb: 4 }}>
                We'll break down the essential options in accounting for manufacturing businesses—including cost accounting, standard costing, and job-order costing—and help you determine which strategy best meets your company's unique needs. Whether you're preparing accurate tax returns for manufacturing or looking to improve profitability through strategic tax planning for manufacturing, a solid accounting foundation is key.
              </Typography>
            </motion.div>

            {/* Stats row */}
            <motion.div {...fadeUp(0.42)}>
              <Box sx={{
                display: 'inline-flex',
                gap: 0,
                borderRadius: '14px',
                overflow: 'hidden',
                border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                bgcolor: 'background.paper',
              }}>
                {STATS.map(({ num, label }, i) => (
                  <Box
                    key={label}
                    sx={{
                      px: { xs: 3, md: 3.5 }, py: 2,
                      textAlign: 'center',
                      borderRight: i < STATS.length - 1
                        ? (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`
                        : 'none',
                    }}
                  >
                    <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: { xs: '1.3rem', md: '1.5rem' }, color: primary, lineHeight: 1 }}>
                      {num}
                    </Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.62rem', color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mt: 0.4 }}>
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* ══ RIGHT: Image ══ */}
          <motion.div {...fadeRight(0.22)} style={{ height: '100%' }}>
            <Box sx={{
              borderRadius: '24px',
              overflow: 'hidden',
              bgcolor: 'background.paper',
              border: (t) => `1px solid ${t.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`,
              boxShadow: `0 20px 60px ${alpha(primary, 0.08)}`,
              position: 'relative',
              height: '100%',
              minHeight: { xs: '300px', md: '400px' },
            }}>
              <img
                src={manufacturingImage}
                alt="Accounting and Bookkeeping for the Manufacturing Industry"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </motion.div>

        </Box>
      </Container>
    </Box>
  );
};

export default CCWhatIs;
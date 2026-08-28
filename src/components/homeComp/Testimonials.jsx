import React, { useState } from 'react';
import { Box, Typography, Rating, Card } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CONTENT_WIDTH = 1300;

// Paragraph breaks are preserved via `whiteSpace: 'pre-line'` on the quote below.
const testimonials = [
  {
    text: `"I am happy to share my experience working with Milta. As the owner of Strategic Bookkeeping, I have had the privilege of working with the Milta team through some of the most challenging periods of my business journey. Their support, professionalism, and dedication have made a lasting impact on both my business and my clients.

There was a time when I faced significant personal and professional challenges and found myself rebuilding from the ground up. During that period, the Milta team became more than a support team—they became trusted partners. When my capacity was limited, they stepped in, helped keep things moving, and provided the consistency my clients depended on.

Their responsiveness, knowledge, and willingness to help have allowed me to continue serving my clients with confidence, even during difficult seasons. Knowing I have a team I can rely on has been invaluable.

What sets Milta apart is that they genuinely care about the success of the businesses they support. They bring expertise, professionalism, and a level of partnership that is difficult to find. I highly recommend Milta to any bookkeeping professional or business owner looking for a dependable team they can trust."`,
    rating: 5,
  },
  {
    text: `"I am pleased to recommend Milta for their excellent bookkeeping support. I have worked with the team for almost two years, and they have consistently been responsible, thorough, reliable, and open to feedback. Their work has been impeccable and has played an important role in the growth of my CPA firm.

I also appreciate Milta's professionalism, competitive pricing, and continued support. I highly recommend their bookkeeping services to anyone looking for dependable and high-quality support."`,
    rating: 5,
  },
  {
    text: `"The Milta team has been an integral part of our business for the past two years, and we can't imagine our operations without their support. Their bookkeeping expertise is top-notch, and they consistently demonstrate strong knowledge of QuickBooks, invoicing, reconciliations, and financial organization. They also help keep our day-to-day operations running smoothly and efficiently.

One of the team's greatest strengths is their ability to keep everything organized and accountable. They do an excellent job of following up on tasks, sending reminders, and ensuring deadlines are met. Their attention to detail and proactive approach have been invaluable to our business.

Beyond their technical abilities, the Milta team brings professionalism, positivity, and reliability to every interaction. They are always responsive, friendly, and willing to help wherever needed. Their dedication, professionalism, and commitment to excellence have made a tremendous impact on our business, and we are incredibly grateful for their continued support."`,
    rating: 5,
  },
];

const wrap = (i) => ((i % testimonials.length) + testimonials.length) % testimonials.length;

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [dir, setDir]       = useState(1);

  const go = (d) => {
    setDir(d);
    setActive((p) => wrap(p + d));
  };

  const t = testimonials[active];

  /* three pills shown on the right, centred on the active */
  const pills = [-1, 0, 1].map((offset) => ({
    ...testimonials[wrap(active + offset)],
    isActive: offset === 0,
  }));

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden' }}>

      {/* ── Heading ── */}
      <Box sx={{ maxWidth: CONTENT_WIDTH, mx: 'auto', px: { xs: 3, md: 4 }, mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px 900px 0px' }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
            TESTIMONIALS
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px 900px 0px' }} transition={{ duration: 0.25, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' }, color: 'text.primary' }}>
            Proven Success <br />
            <Box component="span" sx={{ color: 'primary.main' }}>at Global Scale.</Box>
          </Typography>
        </motion.div>
      </Box>

      {/* ── Carousel ── */}
      <Box sx={{ maxWidth: CONTENT_WIDTH, mx: 'auto', px: { xs: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 3 }, alignItems: 'stretch' }}>

          {/* ── Left: active quote card ── */}
          <Box sx={{ flex: { xs: '1 1 auto', md: '1 1 58%' }, width: '100%', minWidth: 0 }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={active}
                custom={dir}
                initial={{ opacity: 0, y: dir > 0 ? 30 : -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{   opacity: 0, y: dir > 0 ? -30 : 30 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    p: { xs: 3.5, md: 5 },
                    borderRadius: '20px',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                  }}
                >
                  {/* Quote text — scrolls when the review is long */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      lineHeight: 1.8,
                      fontSize: { xs: '0.97rem', md: '1.05rem' },
                      fontWeight: 400,
                      flexGrow: 1,
                      mb: 4,
                      maxHeight: { xs: 220, md: 300 },
                      overflowY: 'auto',
                      pr: 1,
                      whiteSpace: 'pre-line',
                      // Slim, on-brand scrollbar
                      '&::-webkit-scrollbar': { width: '6px' },
                      '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(38,105,41,0.35)', borderRadius: '8px' },
                      '&::-webkit-scrollbar-thumb:hover': { backgroundColor: 'rgba(38,105,41,0.55)' },
                    }}
                  >
                    {t.text}
                  </Typography>

                  {/* Bottom row: star rating */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Rating
                      value={t.rating}
                      readOnly
                      sx={{ '& .MuiRating-iconFilled': { color: '#FFA500' } }}
                    />
                  </Box>
                </Card>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* ── Right: 3 person pills (desktop only) ── */}
          <Box sx={{ flex: '0 0 260px', display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: 2, justifyContent: 'center' }}>
            {pills.map((p, i) => (
              <motion.div
                key={`${p.text.slice(0, 24)}-${i}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.05, 0.15), ease: [0.22, 1, 0.36, 1] }}
              >
                <Box
                  onClick={() => { setDir(i === 0 ? -1 : 1); setActive(wrap(active + (i - 1))); }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    borderRadius: '14px',
                    border: '1.5px solid',
                    borderColor: p.isActive ? 'primary.main' : 'rgba(0,0,0,0.07)',
                    backgroundColor: p.isActive ? 'rgba(38,105,41,0.05)' : 'background.paper',
                    boxShadow: p.isActive ? '0 4px 20px rgba(38,105,41,0.12)' : '0 2px 10px rgba(0,0,0,0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    '&:hover': { borderColor: 'primary.main', boxShadow: '0 4px 20px rgba(38,105,41,0.1)' },
                  }}
                >
                  <Box sx={{ minWidth: 0 }}>

                    {/* Review excerpt (1–2 lines) */}
                    <Typography
                      variant="caption"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        color: 'text.secondary',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        lineHeight: 1.5,
                      }}
                    >
                      {p.text}
                    </Typography>

                    {/* Stars at bottom */}
                    <Rating
                      value={p.rating}
                      readOnly
                      size="small"
                      sx={{ mt: 1, '& .MuiRating-iconFilled': { color: '#FFA500' } }}
                    />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* ── Up / Down arrows (desktop only) ── */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: 1.5, justifyContent: 'center', flexShrink: 0 }}>
            {[
              { icon: <KeyboardArrowUpIcon />,   d: -1 },
              { icon: <KeyboardArrowDownIcon />, d:  1 },
            ].map(({ icon, d }) => (
              <Box
                key={d}
                onClick={() => go(d)}
                sx={{
                  width: 48, height: 48,
                  borderRadius: '10px',
                  backgroundColor: 'primary.main',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease, transform 0.2s ease',
                  '&:hover': { backgroundColor: '#1a4d1d', transform: 'scale(1.05)' },
                }}
              >
                {icon}
              </Box>
            ))}
          </Box>

        </Box>

        {/* ── Dot navigation (mobile only) ── */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center', gap: 1.25, mt: 4 }}>
          {testimonials.map((_, i) => (
            <Box
              key={i}
              onClick={() => { setDir(i >= active ? 1 : -1); setActive(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
              sx={{
                width: i === active ? 26 : 9,
                height: 9,
                borderRadius: '50px',
                backgroundColor: i === active ? 'primary.main' : 'rgba(38,105,41,0.25)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;

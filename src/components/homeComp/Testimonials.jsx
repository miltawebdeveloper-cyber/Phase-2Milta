import React, { useState } from 'react';
import { Box, Typography, Avatar, Rating, Card } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CONTENT_WIDTH = 1300;

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    text: '"Milta Accounts has completely transformed how we handle our taxes. Their strategic approach saved us thousands in the first year alone. I highly recommend their services to any growing business."',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GreenSlate',
    text: '"The bookkeeping services are flawless. I can finally focus on growing my business knowing the numbers are in expert hands. Truly a world-class team that delivers consistently."',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    name: 'Emma Williams',
    role: 'CFO, Global Logistics',
    text: '"Professional, responsive, and highly knowledgeable. They are more than just accountants — they are true business partners who care deeply about your success and growth."',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=emma',
  },
  {
    name: 'David Miller',
    role: 'Director, Apex Corp',
    text: '"The financial visibility we gained with Milta is unprecedented. Their team is truly top-tier and architectural in their thinking. An outstanding experience from day one."',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
  {
    name: 'Rachel Torres',
    role: 'Owner, Bloom Studio',
    text: '"Switching to Milta was the best decision I made for my business. Clean books, zero stress, and always available when I need them. Absolutely exceptional service."',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=rachel',
  },
  {
    name: 'James Park',
    role: 'MD, Vertex Capital',
    text: '"Their controller services gave us the financial clarity we needed to close our Series B. I cannot recommend Milta enough — they are a true strategic asset."',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=james',
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
          viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
            TESTIMONIALS
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' }, color: 'text.primary' }}>
            Proven Success <br />
            <Box component="span" sx={{ color: 'primary.main' }}>at Global Scale.</Box>
          </Typography>
        </motion.div>
      </Box>

      {/* ── Carousel ── */}
      <Box sx={{ maxWidth: CONTENT_WIDTH, mx: 'auto', px: { xs: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, alignItems: 'stretch' }}>

          {/* ── Left: active quote card ── */}
          <Box sx={{ flex: '1 1 58%', minWidth: 0 }}>
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
                  {/* Stars */}
                  <Rating
                    value={t.rating}
                    readOnly
                    sx={{ mb: 3, '& .MuiRating-iconFilled': { color: '#FFA500' } }}
                  />

                  {/* Quote text */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      lineHeight: 1.8,
                      fontSize: { xs: '0.97rem', md: '1.05rem' },
                      fontWeight: 400,
                      flexGrow: 1,
                      mb: 4,
                    }}
                  >
                    {t.text}
                  </Typography>

                  {/* Bottom row: avatar + name | company tag */}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        src={t.avatar}
                        sx={{ width: 52, height: 52, border: '2px solid', borderColor: 'primary.main' }}
                      />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, fontSize: '0.97rem', lineHeight: 1.2, color: 'text.primary' }}>
                          {t.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.68rem' }}>
                          {t.role}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Company badge */}
                    <Box
                      sx={{
                        px: 2, py: 0.75,
                        borderRadius: '50px',
                        border: '1.5px solid',
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        letterSpacing: '0.06em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {t.role.split(', ')[1] ?? t.role}
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* ── Right: 3 person pills ── */}
          <Box sx={{ flex: '0 0 260px', display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center' }}>
            {pills.map((p, i) => (
              <motion.div
                key={`${p.name}-${i}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
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
                  <Avatar
                    src={p.avatar}
                    sx={{
                      width: 48, height: 48, flexShrink: 0,
                      border: '2px solid',
                      borderColor: p.isActive ? 'primary.main' : 'transparent',
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 800, fontSize: '0.9rem', lineHeight: 1.2, color: 'text.primary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      {p.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', fontSize: '0.72rem', fontWeight: 500 }}
                    >
                      {p.role}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* ── Up / Down arrows ── */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, justifyContent: 'center', flexShrink: 0 }}>
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
      </Box>
    </Box>
  );
};

export default Testimonials;

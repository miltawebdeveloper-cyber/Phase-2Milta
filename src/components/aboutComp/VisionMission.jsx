import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import CheckIcon from '@mui/icons-material/Check';

const CONTENT_WIDTH = 1300;
const SKEW    = -10;
const OVERLAP = '15%';
const CARD_W  = '62%';

const VISION_POINTS  = ['Global reach across 50 states', 'Financial clarity for every business', 'Compliance at every level'];
const MISSION_POINTS = ['Precision-driven bookkeeping & tax', 'Full regulatory compliance assured', 'Freeing clients to scale faster'];

const Bullet = ({ text, rtl = false }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, flexDirection: rtl ? 'row-reverse' : 'row' }}>
    <Box sx={{
      width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
      backgroundColor: 'rgba(255,255,255,0.16)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <CheckIcon sx={{ fontSize: '0.68rem', color: '#fff' }} />
    </Box>
    <Typography sx={{
      fontFamily: '"Outfit", sans-serif',
      fontSize: '0.8rem', fontWeight: 500,
      color: 'rgba(255,255,255,0.78)',
    }}>
      {text}
    </Typography>
  </Box>
);

const VisionMission = () => (
  <Box sx={{ pt: { xs: 8, md: 0 }, pb: { xs: 8, md: 10 }, bgcolor: 'background.default', overflow: 'hidden' }}>

    {/* ── Heading ── */}
    <Box sx={{ maxWidth: CONTENT_WIDTH, mx: 'auto', px: { xs: 3, md: 4 }, mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: '#266929', fontSize: '0.75rem', mb: 3, display: 'block' }}>
          PURPOSE & DIRECTION
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' }, color: 'text.primary' }}>
          Vision &{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>Mission</Box>
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography sx={{
          color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8,
          maxWidth: 520, mx: 'auto', mt: 2,
          fontFamily: '"Outfit", sans-serif',
        }}>
          Everything we do is guided by a clear purpose — to simplify financial
          complexity and empower businesses to grow with confidence.
        </Typography>
      </motion.div>
    </Box>

    {/* ── Parallelogram card row ── */}
    <Box sx={{ maxWidth: CONTENT_WIDTH, mx: 'auto', px: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'flex', alignItems: 'stretch', minHeight: { xs: 'auto', md: 360 } }}>

        {/* ══ LEFT — Vision (dark green) ══ */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: CARD_W, flexShrink: 0, zIndex: 1, display: 'flex' }}
        >
          <Box sx={{
            flex: 1,
            transform: `skewX(${SKEW}deg)`,
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'linear-gradient(145deg, #1b5220 0%, #266929 60%, #2e7a31 100%)',
            boxShadow: '0 28px 72px rgba(0,0,0,0.24)',
            display: 'flex', flexDirection: 'column',
            position: 'relative',
          }}>
            {/* Large watermark V */}
            <Typography sx={{
              position: 'absolute', bottom: '-14%', left: '-2%',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 900, fontSize: '16rem', lineHeight: 1,
              color: 'rgba(255,255,255,0.04)',
              userSelect: 'none', pointerEvents: 'none', zIndex: 0,
            }}>V</Typography>

            {/* Decorative rings */}
            <Box sx={{
              position: 'absolute', top: -60, right: -60,
              width: 200, height: 200, borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.07)',
              pointerEvents: 'none', zIndex: 0,
            }} />
            <Box sx={{
              position: 'absolute', top: -100, right: -100,
              width: 300, height: 300, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.04)',
              pointerEvents: 'none', zIndex: 0,
            }} />

            {/* Counter-skew content */}
            <Box sx={{
              transform: `skewX(${-SKEW}deg)`,
              flex: 1, display: 'flex', flexDirection: 'column',
              position: 'relative', zIndex: 1,
            }}>

              {/* TOP — icon badge */}
              <Box sx={{
                flex: 1, display: 'flex', alignItems: 'center',
                px: { xs: 4, md: 5.5 },
                pt: { xs: 3.5, md: 4.5 }, pb: { xs: 2, md: 2.5 },
              }}>
                <Box sx={{
                  width: 68, height: 68, borderRadius: '18px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  border: '1.5px solid rgba(255,255,255,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }}>
                  <RemoveRedEyeOutlinedIcon sx={{ fontSize: 34, color: '#fff' }} />
                </Box>
              </Box>

              {/* Gradient separator */}
              <Box sx={{
                height: '1px', mx: { xs: 4, md: 5.5 },
                background: 'linear-gradient(90deg, rgba(255,255,255,0.22) 0%, transparent 80%)',
              }} />

              {/* BOTTOM — text block, left-aligned */}
              <Box sx={{
                background: 'rgba(0,0,0,0.10)',
                px: { xs: 4, md: 5.5 },
                pt: { xs: 2.5, md: 3 },
                pb: { xs: 3.5, md: 4.5 },
              }}>
                <Typography sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 900, fontSize: { xs: '1.3rem', md: '1.6rem' },
                  color: '#fff', lineHeight: 1.2, mb: 1.2,
                }}>
                  Our Vision
                </Typography>
                <Typography sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: { xs: '0.84rem', md: '0.91rem' },
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.75, mb: 2.5, maxWidth: 360,
                }}>
                  To be the world's most trusted partner for outsourced accounting —
                  empowering every business to achieve clarity, compliance, and growth.
                </Typography>
                <Stack spacing={1}>
                  {VISION_POINTS.map((p) => <Bullet key={p} text={p} />)}
                </Stack>
              </Box>

            </Box>
          </Box>
        </motion.div>

        {/* ══ RIGHT — Mission (light green) ══ */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: CARD_W, flexShrink: 0,
            marginLeft: `-${OVERLAP}`,
            zIndex: 2, display: 'flex',
          }}
        >
          <Box sx={{
            flex: 1,
            transform: `skewX(${SKEW}deg)`,
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'linear-gradient(145deg, #3d9e41 0%, #4caf50 60%, #5dbb61 100%)',
            boxShadow: '0 28px 72px rgba(0,0,0,0.22)',
            display: 'flex', flexDirection: 'column',
            position: 'relative',
          }}>
            {/* Large watermark M */}
            <Typography sx={{
              position: 'absolute', bottom: '-14%', right: '-2%',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 900, fontSize: '16rem', lineHeight: 1,
              color: 'rgba(255,255,255,0.05)',
              userSelect: 'none', pointerEvents: 'none', zIndex: 0,
            }}>M</Typography>

            {/* Decorative rings */}
            <Box sx={{
              position: 'absolute', top: -60, left: -60,
              width: 200, height: 200, borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.07)',
              pointerEvents: 'none', zIndex: 0,
            }} />
            <Box sx={{
              position: 'absolute', top: -100, left: -100,
              width: 300, height: 300, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.04)',
              pointerEvents: 'none', zIndex: 0,
            }} />

            {/* Counter-skew content */}
            <Box sx={{
              transform: `skewX(${-SKEW}deg)`,
              flex: 1, display: 'flex', flexDirection: 'column',
              position: 'relative', zIndex: 1,
            }}>

              {/* TOP — icon badge, right-aligned */}
              <Box sx={{
                flex: 1, display: 'flex',
                alignItems: 'center', justifyContent: 'flex-end',
                px: { xs: 4, md: 6 },
                pt: { xs: 3.5, md: 4.5 }, pb: { xs: 2, md: 2.5 },
              }}>
                <Box sx={{
                  width: 68, height: 68, borderRadius: '18px',
                  backgroundColor: 'rgba(255,255,255,0.14)',
                  border: '1.5px solid rgba(255,255,255,0.26)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                }}>
                  <TrackChangesIcon sx={{ fontSize: 34, color: '#fff' }} />
                </Box>
              </Box>

              {/* Gradient separator — fades right to left */}
              <Box sx={{
                height: '1px', mx: { xs: 4, md: 6 },
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 100%)',
              }} />

              {/* BOTTOM — text block, right-aligned */}
              <Box sx={{
                background: 'rgba(0,0,0,0.08)',
                px: { xs: 4, md: 6 },
                pt: { xs: 2.5, md: 3 },
                pb: { xs: 3.5, md: 4.5 },
                textAlign: 'right',
              }}>
                <Typography sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 900, fontSize: { xs: '1.3rem', md: '1.6rem' },
                  color: '#fff', lineHeight: 1.2, mb: 1.2,
                }}>
                  Our Mission
                </Typography>
                <Typography sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: { xs: '0.84rem', md: '0.91rem' },
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.75, mb: 2.5,
                  ml: 'auto', maxWidth: 360,
                }}>
                  To deliver precision-driven accounting, bookkeeping, and tax solutions
                  that ensure full compliance and free clients to focus on scaling.
                </Typography>
                <Stack spacing={1} alignItems="flex-end">
                  {MISSION_POINTS.map((p) => <Bullet key={p} text={p} rtl />)}
                </Stack>
              </Box>

            </Box>
          </Box>
        </motion.div>

      </Box>
    </Box>

    {/* ── Bottom quote strip ── */}
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <Box sx={{
        maxWidth: 760, mx: 'auto',
        mt: { xs: 7, md: 9 },
        px: { xs: 3, md: 5 }, py: { xs: 4, md: 5 },
        textAlign: 'center',
        borderRadius: '22px',
        border: '1px solid rgba(38,105,41,0.13)',
        bgcolor: 'background.paper',
        boxShadow: '0 12px 40px rgba(38,105,41,0.07)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Dot grid */}
        <Box sx={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(38,105,41,0.05) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }} />
        {/* Big quote mark */}
        <Typography sx={{
          position: 'absolute', top: -22, left: 20,
          fontFamily: 'Georgia, serif', fontSize: '8rem',
          lineHeight: 1, color: 'rgba(38,105,41,0.06)',
          userSelect: 'none', pointerEvents: 'none',
        }}>"</Typography>

        <Typography sx={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontWeight: 700, fontSize: { xs: '1rem', md: '1.18rem' },
          color: 'text.primary', lineHeight: 1.78,
          position: 'relative', zIndex: 1,
        }}>
          We don't just manage your books — we help you see where your business
          is going and how to get there faster.
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mt: 3 }}>
          <Box sx={{ width: 28, height: 2.5, borderRadius: 2, backgroundColor: 'primary.main' }} />
          <Typography sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '0.72rem', fontWeight: 800,
            color: 'primary.main', letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>
            Milta Accounting Services
          </Typography>
          <Box sx={{ width: 28, height: 2.5, borderRadius: 2, backgroundColor: 'primary.main' }} />
        </Box>
      </Box>
    </motion.div>

  </Box>
);

export default VisionMission;

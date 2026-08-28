import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme, alpha } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px 900px 0px' },
  transition: { duration: 0.25, delay: Math.min(delay, 0.05), ease: [0.22, 1, 0.36, 1] },
});

const CARDS = [
  { 
    icon: PeopleIcon, 
    title: 'High Staff Turnover',        
    desc: 'We handle wage calculations, tip reporting, and tax withholdings accurately.' 
  },
  { 
    icon: TrendingUpIcon,  
    title: 'Seasonal Revenue',          
    desc: 'Milta offers planning tools to help small restaurant businesses stay profitable year-round.' 
  },
  { 
    icon: DescriptionIcon,      
    title: 'Manual Bookkeeping Headaches',          
    desc: 'Say goodbye to paper logs and spreadsheets — our digital solutions automate your bookkeeping for a restaurant business.' 
  },
  { 
    icon: SettingsEthernetIcon,   
    title: 'Multiple Systems',        
    desc: 'We integrate with your POS, payroll tools, and online ordering systems for seamless financial tracking.' 
  },
];

const STATS = [{ num: '100%', label: 'Compliance Focus' }, { num: '24/7', label: 'Cloud Access' }, { num: 'Small', label: 'Business Focus' }];

const RIWhyChoose = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{
      py: { xs: 8, md: 14 },
      background: 'linear-gradient(145deg, #091509 0%, #0d1f0e 45%, #163018 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glows */}
      <Box sx={{ position: 'absolute', top: '-10%', left: '-8%', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.28)} 0%, transparent 65%)`, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '-15%', right: '-8%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(primary, 0.18)} 0%, transparent 65%)`, pointerEvents: 'none' }} />
      {/* Rings */}
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: { xs: 600, md: 1100 }, height: { xs: 600, md: 1100 }, borderRadius: '50%', border: `1px solid ${alpha('#fff', 0.04)}`, pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: { xs: 350, md: 680 }, height: { xs: 350, md: 680 }, borderRadius: '50%', border: `1px solid ${alpha('#fff', 0.03)}`, pointerEvents: 'none' }} />
      {/* Dot pattern */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `radial-gradient(circle, ${alpha('#fff', 0.035)} 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      <Container maxWidth={false} sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 8, lg: 10 }} alignItems={{ lg: 'flex-start' }}>

          {/* ── LEFT: sticky text panel ── */}
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', lg: 360 }, position: { lg: 'sticky' }, top: { lg: 80 } }}>
           
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ color: '#ffffff', fontSize: { xs: '2rem', md: '2.6rem' }, fontWeight: 900, lineHeight: 1.18, letterSpacing: '-0.02em', mb: 2.5 }}>
                Common Challenges We Solve for{' '}
                <Box component="span" sx={{ color: alpha(primary, 0.9) }}>Small Restaurants</Box>
              </Typography>
            </motion.div>
            <motion.div {...fadeUp(0.18)}>
              <Typography sx={{ color: alpha('#fff', 0.6), fontSize: '0.95rem', lineHeight: 1.8, mb: 4, fontFamily: '"Outfit", sans-serif' }}>
                We specialize in accounting for small restaurant owners who need personalized support — dependable, accurate, and stress-free financial management.
              </Typography>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.25)}>
              <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
                {STATS.map((s) => (
                  <Box key={s.label}>
                    <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#fff', lineHeight: 1 }}>{s.num}</Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.68rem', color: alpha('#fff', 0.45), fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', mt: 0.4 }}>{s.label}</Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <Button
                variant="outlined"
                href="/contact"
                endIcon={<ArrowForwardIcon sx={{ fontSize: '0.9rem !important' }} />}
                sx={{
                  px: 3.5, py: 1.3, borderRadius: '50px',
                  color: '#fff', borderColor: alpha('#fff', 0.3),
                  fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.06em',
                  '&:hover': { borderColor: primary, bgcolor: alpha(primary, 0.15) },
                }}
              >
                GET STARTED
              </Button>
            </motion.div>
          </Box>

          {/* ── RIGHT: 2×2 glass card grid ── */}
          <Box sx={{ flex: 1 }}>
            {/* 2×2 grid (4 cards) */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              {CARDS.map((card, i) => {
                const Icon = card.icon;
                return (
                  <Box
                    key={card.title}
                    component={motion.div}
                    {...fadeUp(0.1 + i * 0.1)}
                    sx={{
                      p: { xs: 3, md: 3.5 },
                      borderRadius: '20px',
                      bgcolor: 'rgba(255,255,255,0.055)',
                      border: `1px solid rgba(255,255,255,0.1)`,
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.09)',
                        border: `1px solid ${alpha(primary, 0.45)}`,
                        transform: 'translateY(-5px)',
                        boxShadow: `0 20px 50px rgba(0,0,0,0.25)`,
                        '& .wc-icon': { bgcolor: primary },
                        '& .wc-icon svg': { color: '#fff' },
                      },
                    }}
                  >
                    <Box className="wc-icon" sx={{
                      width: 48, height: 48, borderRadius: '14px',
                      bgcolor: alpha(primary, 0.18),
                      border: `1px solid ${alpha(primary, 0.3)}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      mb: 2.5, transition: 'all 0.3s ease',
                    }}>
                      <Icon sx={{ fontSize: 22, color: primary }} />
                    </Box>
                    <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.97rem', color: '#ffffff', mb: 1, lineHeight: 1.3 }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.84rem', lineHeight: 1.72, color: alpha('#fff', 0.58) }}>
                      {card.desc}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};

export default RIWhyChoose;
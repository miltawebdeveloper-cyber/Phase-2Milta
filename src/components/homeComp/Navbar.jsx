import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar, Toolbar, Box, Container, IconButton, Drawer,
  List, ListItem, Typography, Button, Stack, Divider, useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, alpha } from '@mui/material/styles';

const navItems = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industry', path: '/industry' },
  { label: 'Blogs',    path: '/blogs' },
  { label: 'Career',   path: '/career' },
  { label: 'Contact',  path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const location = useLocation();

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: '#fff',
          borderBottom: `1px solid ${trigger ? alpha(primary, 0.1) : 'rgba(0,0,0,0.06)'}`,
          boxShadow: trigger ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: '1340px', mx: 'auto' }}>
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 }, minHeight: { xs: 64, md: 72 } }}>

            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            >
              <Box sx={{ width: { xs: 100, md: 120 }, height: 50 }}>
                <img src="/logo.svg" alt="Milta Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </Box>
            </Box>

            {/* Desktop nav */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Typography
                    key={item.label}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      px: 2, py: 0.8,
                      fontSize: '0.9rem',
                      fontWeight: active ? 700 : 500,
                      color: active ? primary : 'text.primary',
                      textDecoration: 'none',
                   
                      transition: 'all 0.2s',
                      '&:hover': { color: primary, bgcolor: alpha(primary, 0.05) },
                    }}
                  >
                    {item.label}
                  </Typography>
                );
              })}
            </Stack>

            {/* CTA + hamburger */}
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Button
                variant="contained"
                component={RouterLink}
                to="/contact"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  px: 3, py: 1,
                  bgcolor: primary,
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textTransform: 'none',
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#1a4a1c', boxShadow: 'none' },
                }}
              >
                Free Consultation
              </Button>

              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ display: { md: 'none' }, color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Plain mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: '#fff',
          },
        }}
      >
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2.5, py: 2 }}>
          <Box sx={{ width: 100, height: 44 }}>
            <img src="/logo.svg" alt="Milta Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Box>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Divider />

        {/* Nav links */}
        <List sx={{ px: 1.5, pt: 1 }}>
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <ListItem
                key={item.label}
                disablePadding
                component={RouterLink}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                sx={{ display: 'block', textDecoration: 'none', mb: 0.5 }}
              >
                <Typography
                  sx={{
                    px: 2, py: 1.4,
                   
                    fontSize: '1.5rem',
                    fontWeight: active ? 700 : 500,
                    color: active ? primary : 'text.primary',
                    bgcolor: active ? alpha(primary, 0.07) : 'transparent',
                    display: 'block',
                    '&:hover': { bgcolor: alpha(primary, 0.05) },
                    transition: '0.15s',
                  }}
                >
                  {item.label}
                </Typography>
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ mt: 1 }} />

        {/* Footer CTA */}
        <Box sx={{ px: 2.5, py: 3 }}>
          <Button
            variant="contained"
            fullWidth
            component={RouterLink}
            to="/contact"
            onClick={() => setMobileOpen(false)}
            sx={{
              py: 1.5,
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'none',
              bgcolor: primary,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#1a4a1c', boxShadow: 'none' },
            }}
          >
            Free Consultation
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

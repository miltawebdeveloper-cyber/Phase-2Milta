import React, { useState, useEffect } from 'react';
import { IconButton, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Zoom in={visible}>
      <IconButton
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 1000,
          backgroundColor: '#1A1A1A',
          color: '#FFFFFF',
          width: 50,
          height: 50,
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'primary.main',
            transform: 'translateY(-5px)',
            boxShadow: '0 30px 60px rgba(38,105,41,0.3)',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Zoom>
  );
};

export default ScrollToTop;

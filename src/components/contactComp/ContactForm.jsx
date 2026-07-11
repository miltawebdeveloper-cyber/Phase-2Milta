import React, { useState } from 'react';
import { Box, TextField, Button, Stack, MenuItem, Typography, Snackbar, Alert } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { submitContactForm } from '../../api/client';

const SERVICE_OPTIONS = [
  'Bookkeeping Services',
  'Payroll Management',
  'Tax Planning & Preparation',
  'CPA Services',
  'Controller Services',
  'Virtual Assistant',
  'Data Entry Services',
  'Digital Marketing',
];

const FOUND_OPTIONS = ['Google', 'Media', 'Email', 'Referral'];

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: 'rgba(255,255,255,0.55)',
    transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
    '& fieldset': { borderColor: 'rgba(38,105,41,0.16)' },
    '&:hover fieldset': { borderColor: 'rgba(38,105,41,0.38)' },
    '&:hover': { backgroundColor: 'rgba(255,255,255,0.75)' },
    '&.Mui-focused fieldset': { borderColor: '#3c8a35', borderWidth: '2px' },
    '&.Mui-focused': { backgroundColor: '#fff', boxShadow: '0 6px 20px rgba(38,105,41,0.12)' },
  },
  '& .MuiInputLabel-root.Mui-focused': { color: '#266929' },
};

const initialState = {
  firstName: '',
  lastName: '',
  companyName: '',
  contactNumber: '',
  email: '',
  howDidYouFind: '',
  serviceInterest: '',
  requirement: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = 'First name is required';
  if (!values.lastName.trim()) errors.lastName = 'Last name is required';
  if (!values.companyName.trim()) errors.companyName = 'Company name is required';
  if (!values.contactNumber.trim()) errors.contactNumber = 'Contact number is required';
  else if (!/^[+\d][\d\s()-]{6,}$/.test(values.contactNumber.trim())) errors.contactNumber = 'Enter a valid contact number';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address';
  if (!values.howDidYouFind) errors.howDidYouFind = 'Please let us know how you found us';
  if (!values.serviceInterest) errors.serviceInterest = 'Please select a service';
  return errors;
};

const ContactForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: 'error', message: '' });

  const closeSnackbar = () => setSnackbar((s) => ({ ...s, open: false }));

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setSubmitting(true);
    try {
      const result = await submitContactForm({
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        companyName: values.companyName.trim(),
        email: values.email.trim(),
        phoneNumber: values.contactNumber.trim(),
        howDidYouFind: values.howDidYouFind,
        serviceInterest: values.serviceInterest,
        message: values.requirement.trim(),
      });

      if (result?.error) throw new Error(result.error);

      setSubmitted(true);
      setValues(initialState);
      setErrors({});
    } catch (err) {
      console.error('Contact form submit failed:', err);
      setSnackbar({
        open: true,
        severity: 'error',
        message: 'Something went wrong. Please try again or email us directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Box sx={{ textAlign: 'center', py: { xs: 4, sm: 6 }, px: 2 }}>
        <CheckCircleIcon sx={{ fontSize: 64, color: '#3c8a35', mb: 2 }} />
        <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: { xs: '1.6rem', md: '2rem' }, color: 'text.primary', mb: 1.5 }}>
          Thank You!
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.8, maxWidth: 460, mx: 'auto', fontFamily: '"Outfit", sans-serif' }}>
          We've received your request successfully. One of our accounting specialists will contact you within a few hours.
        </Typography>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outlined"
          sx={{ mt: 4, px: 4, py: 1.2, borderRadius: '50px', fontWeight: 700, textTransform: 'none', color: '#266929', borderColor: '#266929', '&:hover': { borderColor: '#266929', bgcolor: 'rgba(38,105,41,0.08)' } }}
        >
          Submit Another Request
        </Button>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
      <Stack spacing={2.5}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <TextField
            name="firstName"
            label="First name"
            value={values.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
            sx={fieldSx}
          />
          <TextField
            name="lastName"
            label="Last name"
            value={values.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
            sx={fieldSx}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <TextField
            name="companyName"
            label="Company name"
            value={values.companyName}
            onChange={handleChange}
            error={!!errors.companyName}
            helperText={errors.companyName}
            fullWidth
            sx={fieldSx}
          />
          <TextField
            name="contactNumber"
            label="Contact number"
            value={values.contactNumber}
            onChange={handleChange}
            error={!!errors.contactNumber}
            helperText={errors.contactNumber}
            fullWidth
            sx={fieldSx}
          />
        </Box>

        <TextField
          name="email"
          label="Email address"
          value={values.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          sx={fieldSx}
        />

        <TextField
          name="howDidYouFind"
          label="How did you find us? *"
          value={values.howDidYouFind}
          onChange={handleChange}
          error={!!errors.howDidYouFind}
          helperText={errors.howDidYouFind}
          select
          fullWidth
          sx={fieldSx}
        >
          {FOUND_OPTIONS.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          name="serviceInterest"
          label="Service of interest *"
          value={values.serviceInterest}
          onChange={handleChange}
          error={!!errors.serviceInterest}
          helperText={errors.serviceInterest}
          select
          fullWidth
          sx={fieldSx}
        >
          {SERVICE_OPTIONS.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          name="requirement"
          label="Your requirement"
          value={values.requirement}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          sx={{ ...fieldSx, '& .MuiOutlinedInput-root': { ...fieldSx['& .MuiOutlinedInput-root'], borderRadius: '18px' } }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendOutlinedIcon />}
            disabled={submitting}
            sx={{
              px: 5, py: 1.6,
              borderRadius: '50px',
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: 1,
              background: 'linear-gradient(135deg, #266929 0%, #3c8a35 100%)',
              boxShadow: '0 10px 28px rgba(38,105,41,0.25)',
              '&:hover': { boxShadow: '0 14px 36px rgba(38,105,41,0.35)', transform: 'translateY(-2px)' }
            }}
          >
            {submitting ? 'Sending...' : 'Submit Request'}
          </Button>
        </Box>
      </Stack>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={closeSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;

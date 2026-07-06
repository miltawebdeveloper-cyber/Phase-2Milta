import React, { useState } from 'react';
import { Box, TextField, Button, Stack, MenuItem, Snackbar, Alert } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { submitContactForm } from '../../api/client';

const SERVICE_OPTIONS = [
  'Bookkeeping Services',
  'Tax Planning & Preparation',
  'CPA Services',
  'Virtual Assistant',
  'Data Entry & Management',
  'Financial Controller',
  'Digital Marketing',
  'Payroll Management',
  'Other',
];

const initialState = {
  firstName: '',
  lastName: '',
  contactNumber: '',
  serviceInterest: '',
  requirement: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = 'First name is required';
  if (!values.lastName.trim()) errors.lastName = 'Last name is required';
  if (!values.contactNumber.trim()) errors.contactNumber = 'Contact number is required';
  else if (!/^[+\d][\d\s()-]{6,}$/.test(values.contactNumber.trim())) errors.contactNumber = 'Enter a valid contact number';
  if (!values.serviceInterest) errors.serviceInterest = 'Please select a service';
  if (!values.requirement || values.requirement.trim().length < 20) errors.requirement = 'Please describe your requirement (min 20 characters)';
  return errors;
};

const ContactForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' });

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
        phoneNumber: values.contactNumber.trim(),
        serviceInterest: values.serviceInterest,
        message: values.requirement.trim(),
      });

      if (result?.error) throw new Error(result.error);

      setSnackbar({
        open: true,
        severity: 'success',
        message: "Message sent — we'll contact you soon.",
      });
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
          />
          <TextField
            name="lastName"
            label="Last name"
            value={values.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <TextField
            name="contactNumber"
            label="Contact number"
            value={values.contactNumber}
            onChange={handleChange}
            error={!!errors.contactNumber}
            helperText={errors.contactNumber}
            fullWidth
          />
          <TextField
            name="serviceInterest"
            label="Service of interest"
            value={values.serviceInterest}
            onChange={handleChange}
            error={!!errors.serviceInterest}
            helperText={errors.serviceInterest}
            select
            fullWidth
          >
            {SERVICE_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <TextField
          name="requirement"
          label="Your requirement"
          value={values.requirement}
          onChange={handleChange}
          error={!!errors.requirement}
          helperText={errors.requirement}
          multiline
          rows={5}
          fullWidth
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
              boxShadow: '0 8px 24px rgba(38,105,41,0.25)',
              '&:hover': { boxShadow: '0 12px 32px rgba(38,105,41,0.35)' }
            }}
          >
            {submitting ? 'Sending...' : 'Send Message'}
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

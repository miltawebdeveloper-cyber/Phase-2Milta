// src/components/ApplyForm.jsx
import React, { useState, useEffect } from "react";
import {
  Dialog,
  Container,
  Paper,
  Box,
  IconButton,
  Typography,
  TextField,
  MenuItem,
  Button,
  Stack,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { submitApplicationForm } from "../api/client";

const jobTypes = ["Full Time", "Part Time", "Internship"];

const positions = [
  "Associate US Accountant",
  "Junior US Accountant",
  "Senior US Accountant",
  "US Accounts Reviewer",
  "Junior US Tax preparer",
  "Senior US Tax preparer",
  "Business Development Associate",
  "Business Development Executive",
  "Virtual Assistant",
];

const initialState = {
  firstName: "",
  phone: "",
  jobType: "",
  position: "",
  email: "",
  reference: "",
};

/**
 * Career application form.
 *   variant="dialog"  → themed popup modal (controlled via `open` / `onClose`)
 *   variant="inline"  → full-width embedded section on the page
 * Both share the same fields, validation and real submitApplicationForm API.
 */
const ApplyForm = ({ variant = "dialog", open, onClose, id = "apply" }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const [values, setValues] = useState(initialState);
  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: "success", message: "" });

  // Releases the previous blob URL whenever resumePreview changes — on a new
  // file pick, on resetForm() clearing it to null, and on unmount. The popup
  // stays mounted (with open=false) across closes rather than unmounting, so
  // without this every close/reopen/reselect cycle leaked one blob URL.
  useEffect(() => {
    if (!resumePreview) return;
    return () => URL.revokeObjectURL(resumePreview);
  }, [resumePreview]);

  const resetForm = () => {
    setValues(initialState);
    setResume(null);
    setResumePreview(null);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numeric = value.replace(/\D/g, "").slice(0, 10);
      setValues((v) => ({ ...v, phone: numeric }));
      return;
    }
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0] || null;
    setResume(file);
    setResumePreview(file && typeof URL !== "undefined" && typeof URL.createObjectURL === "function"
      ? URL.createObjectURL(file)
      : null);
  };

  const validate = () => {
    const found = {};
    if (!values.firstName.trim()) found.firstName = "First name is required";

    if (!values.phone.trim()) found.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(values.phone)) found.phone = "Enter a valid 10-digit phone number";

    if (!values.email.trim()) found.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) found.email = "Enter a valid email";

    if (!values.jobType) found.jobType = "Select a job type";
    if (!values.position) found.position = "Select a position";
    if (!resume) found.resume = "Resume is required";

    setErrors(found);
    return Object.keys(found).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    const payload = new FormData();
    payload.append("firstName", values.firstName);
    payload.append("phone", values.phone);
    payload.append("jobType", values.jobType);
    payload.append("position", values.position);
    payload.append("email", values.email);
    payload.append("reference", values.reference || "");
    payload.append("resume", resume);

    const response = await submitApplicationForm(payload);
    setSubmitting(false);

    if (response.error) {
      console.error("submitApplicationForm error:", response.error);
      setSnackbar({
        open: true,
        severity: "error",
        message: "Failed to submit application. Please try again.",
      });
      return;
    }

    resetForm();

    if (response.emailNotification && !response.emailNotification.success) {
      setSnackbar({
        open: true,
        severity: "warning",
        message: "Application submitted, but the email notification was skipped or failed.",
      });
      onClose?.();
      return;
    }

    setSnackbar({
      open: true,
      severity: "success",
      message: "Application submitted successfully. We will contact you soon.",
    });
    onClose?.();
  };

  const handleClose = () => {
    if (submitting) return;
    onClose?.();
  };

  /* ── Shared header + form fields, reused by both variants ── */
  const fieldSx = {
    "& .MuiInputBase-root": {
      minHeight: 56,
      overflow: "hidden",
    },
    "& .MuiInputBase-input": {
      fontSize: { xs: "0.96rem", sm: "1rem" },
      overflowWrap: "anywhere",
      whiteSpace: "normal",
    },
    "& .MuiInputLabel-root": {
      fontSize: { xs: "0.92rem", sm: "0.96rem" },
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "calc(100% - 24px)",
    },
    "& .MuiInputLabel-shrink": {
      whiteSpace: "normal",
      maxWidth: "100%",
    },
  };

  const formContent = (
    <>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
        <Typography variant="overline" sx={{ color: "primary.main", display: "block", mb: 1 }}>
          APPLY NOW
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "1.7rem", md: "2.4rem" }, color: "text.primary", mb: 1.5 }}
        >
          Build Your Career{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            With Confidence
          </Box>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: "520px", mx: "auto" }}>
          Join a team that works with U.S.-based clients, follows global accounting standards, and
          values accuracy, growth, and professional development at every stage.
        </Typography>
      </Box>

      {/* Form */}
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2.5}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2.5 }}>
            <TextField
              name="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              fullWidth
              required
              sx={fieldSx}
            />
            <TextField
              name="phone"
              label="Phone Number"
              value={values.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
              required
              inputProps={{ inputMode: "numeric", maxLength: 10 }}
              sx={fieldSx}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2.5 }}>
            <TextField
              select
              name="jobType"
              label="Job Type"
              value={values.jobType}
              onChange={handleChange}
              error={!!errors.jobType}
              helperText={errors.jobType}
              fullWidth
              required
              sx={fieldSx}
            >
              {jobTypes.map((t) => (
                <MenuItem key={t} value={t}>
                  {t}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              name="position"
              label="Position"
              value={values.position}
              onChange={handleChange}
              error={!!errors.position}
              helperText={errors.position}
              fullWidth
              required
              sx={fieldSx}
            >
              {positions.map((p) => (
                <MenuItem key={p} value={p}>
                  {p}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2.5 }}>
            <TextField
              name="email"
              label="Email ID"
              value={values.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              required
              sx={fieldSx}
            />
            <TextField
              name="reference"
              label="Reference (optional)"
              value={values.reference}
              onChange={handleChange}
              fullWidth
              sx={fieldSx}
            />
          </Box>

          {/* Resume upload */}
          <Box>
            <Button
              component="label"
              variant="outlined"
              startIcon={<UploadFileIcon />}
              sx={{
                alignSelf: "flex-start",
                py: 1.3,
                px: 3,
                borderRadius: "50px",
                border: `2px solid ${alpha(primary, 0.4)}`,
                color: "primary.main",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  border: `2px solid ${primary}`,
                  backgroundColor: alpha(primary, 0.06),
                },
              }}
            >
              {resume ? resume.name : "Upload Resume"}
              <input type="file" hidden accept=".pdf,.doc,.docx" onChange={handleFile} />
            </Button>
            {errors.resume && (
              <Typography variant="caption" sx={{ color: "error.main", display: "block", mt: 0.75, ml: 1 }}>
                {errors.resume}
              </Typography>
            )}
            {resumePreview && (
              <Link
                href={resumePreview}
                target="_blank"
                rel="noreferrer"
                sx={{ display: "block", mt: 0.75, ml: 1, color: "primary.main", fontWeight: 600 }}
              >
                View selected resume
              </Link>
            )}
          </Box>

          <Box sx={{ pt: 0.5 }}>
            <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                endIcon={<ArrowForwardIcon />}
                disabled={submitting}
                sx={{
                  py: 1.8,
                  borderRadius: "50px",
                  backgroundColor: "primary.main",
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
                  boxShadow: `0 12px 28px ${alpha(primary, 0.28)}`,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark || "#1a4d1d",
                    boxShadow: `0 18px 36px ${alpha(primary, 0.36)}`,
                  },
                }}
              >
                {submitting ? "Submitting..." : "Submit Your Application"}
              </Button>
            </motion.div>
          </Box>
        </Stack>
      </Box>
    </>
  );

  const snackbarEl = (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={5000}
      onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        severity={snackbar.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );

  /* ── Inline section variant ── */
  if (variant === "inline") {
    return (
      <Box id={id} sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
        <Container maxWidth={false} sx={{ maxWidth: "1000px", mx: "auto", px: { xs: 3, md: 4 } }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3.5, sm: 5, md: 7 },
                borderRadius: "32px",
                bgcolor: "background.default",
                border: `1px solid ${alpha(primary, 0.12)}`,
              }}
            >
              {formContent}
            </Paper>
          </motion.div>
        </Container>
        {snackbarEl}
      </Box>
    );
  }

  /* ── Dialog popup variant ── */
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        scroll="body"
        PaperProps={{
          sx: {
            borderRadius: { xs: "20px", sm: "28px" },
            bgcolor: "background.paper",
            backgroundImage: "none",
            border: `1px solid ${alpha(primary, 0.15)}`,
            overflow: "hidden",
          },
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={handleClose}
          aria-label="Close application form"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            color: "text.secondary",
            bgcolor: alpha(primary, 0.06),
            "&:hover": { bgcolor: alpha(primary, 0.14) },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          // Framer Motion applies the animation as an inline `transform`, which
          // creates its own stacking context. Without an explicit z-index here,
          // that context's stacking order against the close IconButton's
          // (zIndex: 2, above) is ambiguous rather than pinned, so this box can
          // paint over the button in the corner where they overlap and silently
          // swallow clicks meant for it. Explicit + lower resolves it outright.
          sx={{ p: { xs: 3, sm: 5 }, position: "relative", zIndex: 0 }}
        >
          {formContent}
        </Box>
      </Dialog>

      {snackbarEl}
    </>
  );
};

export default ApplyForm;

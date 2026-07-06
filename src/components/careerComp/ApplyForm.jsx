import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Stack,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const jobTypes = ["Full Time", "Part Time", "Internship", "Contract"];
const positions = [
  "Tax Professional",
  "Bookkeeping Specialist",
  "Accounts Payable Specialist",
  "Financial Reporting Analyst",
  "Virtual Assistant",
  "Business Development Executive",
];

const initialState = {
  firstName: "",
  phone: "",
  jobType: "",
  position: "",
  email: "",
  reference: "",
};

const ApplyForm = () => {
  const [values, setValues] = useState(initialState);
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const found = {};
    if (!values.firstName) found.firstName = "First name is required";
    if (!values.phone) found.phone = "Phone number is required";
    if (!values.email) found.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) found.email = "Invalid email";
    if (!values.jobType) found.jobType = "Select a job type";
    if (!values.position) found.position = "Select a position";
    return found;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;
    setSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 900));
      setOpenSnackbar(true);
      setValues(initialState);
      setFileName("");
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box id="apply" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
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
              border: "1px solid rgba(38,105,41,0.12)",
            }}
          >
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
              <Typography variant="overline" sx={{ color: "primary.main", display: "block", mb: 1 }}>
                APPLY NOW
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.6rem" }, color: "text.primary", mb: 1.5 }}>
                Build Your Career{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  With Confidence
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: "560px", mx: "auto", fontSize: { xs: "0.97rem", md: "1.05rem" } }}>
                Join a team that values accuracy, growth, and professional development at every stage.
              </Typography>
            </Box>

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
                  />
                  <TextField
                    name="phone"
                    label="Phone Number"
                    value={values.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    fullWidth
                  />
                </Box>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2.5 }}>
                  <TextField
                    select
                    name="jobType"
                    label="Select Job Type"
                    value={values.jobType}
                    onChange={handleChange}
                    error={!!errors.jobType}
                    helperText={errors.jobType}
                    fullWidth
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
                    label="Select Position"
                    value={values.position}
                    onChange={handleChange}
                    error={!!errors.position}
                    helperText={errors.position}
                    fullWidth
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
                  />
                  <TextField
                    name="reference"
                    label="Reference (optional)"
                    value={values.reference}
                    onChange={handleChange}
                    fullWidth
                  />
                </Box>

                {/* Resume upload */}
                <Button
                  component="label"
                  variant="outlined"
                  startIcon={<UploadFileIcon />}
                  sx={{
                    alignSelf: "flex-start",
                    py: 1.4,
                    px: 3,
                    borderRadius: "50px",
                    border: "2px solid rgba(38,105,41,0.4)",
                    color: "primary.main",
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": { border: "2px solid #266929", backgroundColor: "rgba(38,105,41,0.06)" },
                  }}
                >
                  {fileName || "Upload Resume"}
                  <input
                    type="file"
                    hidden
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </Button>

                <Box sx={{ pt: 1 }}>
                  <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      disabled={submitting}
                      sx={{
                        py: 2,
                        borderRadius: "50px",
                        backgroundColor: "primary.main",
                        color: "#fff",
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        boxShadow: "0 12px 28px rgba(38,105,41,0.28)",
                        "&:hover": { backgroundColor: "#1a4d1d", boxShadow: "0 18px 36px rgba(38,105,41,0.36)" },
                      }}
                    >
                      {submitting ? "Submitting..." : "Submit Your Application"}
                    </Button>
                  </motion.div>
                </Box>
              </Stack>
            </Box>
          </Paper>
        </motion.div>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
          Application submitted — our team will be in touch soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ApplyForm;

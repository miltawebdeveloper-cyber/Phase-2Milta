import React from "react";
import { Box, Typography, Button, Stack, Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const JobDetails = ({ job }) => {
  const navigate = useNavigate();

  if (!job)
    return (
      <Box
        sx={{
          width: "100%",
          p: 4,
          bgcolor: "background.paper",
          borderRadius: "20px",
          border: "1px solid rgba(38,105,41,0.12)",
          textAlign: "center",
        }}
      >
        <Typography sx={{ color: "text.secondary" }}>
          Select a job to view details
        </Typography>
      </Box>
    );

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        p: { xs: 3, sm: 3.5, md: 4 },
        borderRadius: "20px",
        border: "1px solid rgba(38,105,41,0.12)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.05)",

        // Sticky only on desktop
        position: { xs: "static", md: "sticky" },
        top: { md: "90px" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          color: "text.primary",
          fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.5rem" },
        }}
      >
        {job.title}
      </Typography>

      <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap" sx={{ mt: 1.5 }}>
        <Stack direction="row" alignItems="center" spacing={0.75}>
          <LocationOnIcon sx={{ color: "primary.main", fontSize: 20 }} />
          <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.85rem", md: "0.95rem" } }}>
            {job.location}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={0.75}>
          <WorkIcon sx={{ color: "text.secondary", fontSize: 20 }} />
          <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.85rem", md: "0.95rem" } }}>
            {job.experience}
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ my: 2.5, borderColor: "rgba(38,105,41,0.12)" }} />

      <Typography variant="h6" sx={{ fontWeight: 800, color: "text.primary", fontSize: { xs: "1rem", md: "1.15rem" }, mb: 1 }}>
        Responsibilities
      </Typography>

      <Box component="ul" sx={{ pl: 2.5, m: 0, mt: 1 }}>
        {job.responsibilities.map((item, i) => (
          <Box component="li" key={i} sx={{ mb: 0.75, "&::marker": { color: "primary.main" } }}>
            <Typography variant="body2" sx={{ color: "text.secondary", fontSize: { xs: "0.85rem", md: "0.95rem" } }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: 800, color: "text.primary", fontSize: { xs: "1rem", md: "1.15rem" }, mb: 1 }}>
        Required Skills
      </Typography>

      <Box component="ul" sx={{ pl: 2.5, m: 0, mt: 1 }}>
        {job.skills.map((skill, i) => (
          <Box component="li" key={i} sx={{ mb: 0.75, "&::marker": { color: "primary.main" } }}>
            <Typography variant="body2" sx={{ color: "text.secondary", fontSize: { xs: "0.85rem", md: "0.95rem" } }}>
              {skill}
            </Typography>
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          mt: 3.5,
          backgroundColor: "primary.main",
          color: "#fff",
          px: 4,
          py: 1.3,
          borderRadius: "50px",
          fontWeight: 700,
          letterSpacing: 1.2,
          textTransform: "uppercase",
          fontSize: { xs: "0.8rem", md: "0.9rem" },
          boxShadow: "0 12px 28px rgba(38,105,41,0.28)",
          "&:hover": { backgroundColor: "#1a4d1d", boxShadow: "0 18px 36px rgba(38,105,41,0.36)" },
        }}
        onClick={() => navigate("/career#apply")}
      >
        Apply Now
      </Button>
    </Box>
  );
};

export default JobDetails;

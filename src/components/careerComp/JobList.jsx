import React from "react";
import { Box, Typography, Stack, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlineOutlined";
import JobDetails from "./JobDetails"; // IMPORTANT: import this

const JobList = ({ jobs, selectedJob, onSelectJob, isMobile }) => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
      {jobs.map((job) => {
        const isSelected = selectedJob?.id === job.id;
        return (
          <Box key={job.id}>
            {/* --- Job Card --- */}
            <Box
              onClick={() => onSelectJob(job)}
              sx={{
                bgcolor: "background.paper",
                borderRadius: "16px",
                p: 2.5,
                cursor: "pointer",
                border: "1.5px solid",
                borderColor: isSelected ? "primary.main" : "rgba(0,0,0,0.07)",
                boxShadow: isSelected
                  ? "0 8px 24px rgba(38,105,41,0.12)"
                  : "0 2px 12px rgba(0,0,0,0.04)",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  boxShadow: "0 8px 24px rgba(38,105,41,0.1)",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.05rem", color: "text.primary", mb: 0.5 }}>
                {job.title}
              </Typography>

              <Stack direction="row" alignItems="center" spacing={0.75}>
                <LocationOnIcon sx={{ fontSize: 18, color: "primary.main" }} />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {job.location}
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={0.75} sx={{ mt: 0.5 }}>
                <WorkOutlineIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {job.experience}
                </Typography>
              </Stack>

              <Chip
                label={job.type}
                size="small"
                sx={{
                  mt: 1.5,
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.04em",
                  color: "primary.main",
                  bgcolor: "rgba(38,105,41,0.08)",
                  border: "1px solid rgba(38,105,41,0.2)",
                }}
              />
            </Box>

            {/* --- MOBILE ONLY: Show Details Under the Card --- */}
            {isMobile && isSelected && (
              <Box sx={{ mt: 1.5 }}>
                <JobDetails job={job} />
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default JobList;

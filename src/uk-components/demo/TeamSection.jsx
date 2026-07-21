// src/components/TeamSection.jsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Team data
const teamMembers = [
  {
    name: "Keith N. McSwain",
    role: "CEO & Founder",
    image: "/assets/team1.jpg",
  },
  {
    name: "Nathaniel R. Smith",
    role: "Marketing Developer",
    image: "/assets/team2.jpg",
  },
  {
    name: "Shawn D. Keeling",
    role: "Senior Manager",
    image: "/assets/team3.jpg",
  },
  {
    name: "Keith N. McSwain",
    role: "Junior Consultant",
    image: "/assets/team4.jpg",
  },
];

const TeamSection = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#2b6d2a",
        color: "#fff",
        py: { xs: 6, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* ================= HEADER ================= */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 3, md: 0 },
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box sx={{ maxWidth: 520 }}>
            <Typography
              sx={{
                color: "#97ba3a",
                fontWeight: 600,
                mb: 1.5,
                fontSize: "14px",
                letterSpacing: 1,
              }}
            >
              ● EXCLUSIVE TEAM
            </Typography>

            <Typography
              sx={{
                fontFamily: "var(--uk-font-primary)",
                fontWeight: 700,
                fontSize: { xs: "26px", sm: "30px", md: "36px" },
                lineHeight: 1.2,
              }}
            >
              Meet Our Professional Team Members
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#97ba3a",
              color: "#2b6d2a",
              borderRadius: 6,
              px: 3.5,
              py: 1.3,
              fontWeight: 600,
              alignSelf: { xs: "flex-start", md: "center" },
              "&:hover": { bgcolor: "#ffb966cc" },
            }}
          >
            Become A Member →
          </Button>
        </Box>

        {/* ================= TEAM GRID ================= */}
        <Grid
          container
          spacing={{ xs: 4, md: 5 }}
          justifyContent="left"
        >
          {teamMembers.map((member, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Box
                sx={{
                  textAlign: "center",
                  maxWidth: 280,
                  mx: "auto",
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: { xs: 120, sm: 150, md: 170 },
                    height: { xs: 120, sm: 150, md: 170 },
                    mx: "auto",
                    mb: 2.5,
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: "var(--uk-font-primary)",
                    fontWeight: 600,
                    fontSize: "18px",
                    mb: 0.5,
                  }}
                >
                  {member.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;

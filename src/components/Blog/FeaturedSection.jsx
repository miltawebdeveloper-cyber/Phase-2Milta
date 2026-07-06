import { Box, Grid, Typography, Chip, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { getBlogs } from "../../api/client";
import { useEffect, useState } from "react";

const FeaturedSection = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getBlogs({
        featured: true,
        order: "created_at",
        ascending: false,
        limit: 2
      });
      setFeatured(data || []);
    };
    load();
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 5 }, mt: 4 }}>
      <Grid container spacing={3}>
        {featured.map((item) => (
          <Grid size={{ xs: 12, md: 6 }} key={item.id}>
            <Card sx={{ overflow: "hidden", height: "100%" }}>
              <Box
                component={Link}
                to={`/us/blogs/${item.slug}`}
                sx={{ textDecoration: "none", color: "inherit", display: "block" }}
              >
                <Box
                  component="img"
                  src={item.image_url}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: { xs: 200, md: 280 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box sx={{ p: 3 }}>
                  <Chip
                    label={item.category}
                    size="small"
                    color="primary"
                    sx={{ mb: 1.5, fontWeight: 600 }}
                  />

                  <Typography variant="h5" sx={{ color: "text.primary", mb: 1 }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.author} — {new Date(item.created_at).toDateString()}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedSection;

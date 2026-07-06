import { Box, Typography, Chip } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box
      component={Link}
      to={`/us/blogs/${blog.slug}`}
      sx={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        borderRadius: "24px",
        overflow: "hidden",
        bgcolor: "background.paper",
        border: `1px solid ${alpha(primary, 0.12)}`,
        boxShadow: `0 16px 40px ${alpha(primary, 0.06)}`,
        transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
          borderColor: alpha(primary, 0.35),
          boxShadow: `0 28px 60px ${alpha(primary, 0.16)}`,
        },
        "&:hover .blog-card-arrow": { transform: "translateX(4px)", color: primary },
        "&:hover .blog-card-img": { transform: "scale(1.06)" },
      }}
    >
      {/* TEXT ONLY */}
      <Box sx={{ p: { xs: 2.5, md: 3 }, display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography
          sx={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "text.secondary",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            mb: 1,
          }}
        >
          {new Date(blog.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          {blog.author ? ` • ${blog.author}` : ""}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            fontSize: { xs: "1.1rem", md: "1.2rem" },
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            color: "text.primary",
            mb: 1.2,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {blog.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "0.9rem",
            lineHeight: 1.6,
            color: "text.secondary",
            mb: 2.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {blog.excerpt}
        </Typography>

        <Box sx={{ mt: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", pt: 0.5 }}>
          {blog.category && (
            <Chip 
              label={blog.category} 
              size="small" 
              sx={{ 
                fontFamily: '"Plus Jakarta Sans", sans-serif', 
                fontWeight: 700, 
                fontSize: "0.7rem", 
                color: primary, 
                bgcolor: alpha(primary, 0.1) 
              }} 
            />
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
            <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.85rem", color: "text.primary" }}>
              Read article
            </Typography>
            <ArrowForwardIcon className="blog-card-arrow" sx={{ fontSize: 17, color: "text.secondary", transition: "all 0.3s ease" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;

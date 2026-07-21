import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    // Full-height flex column so cards in the same row line up and the
    // "Read More" link always sits on the card's bottom edge.
    <Box
      component={Link}
      to={`/uk/blogs/${blog.slug}`}
      sx={{
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          p: { xs: 3, sm: 3.5 },
          borderRadius: "18px",
          backgroundColor: "#fff",
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 2px 10px rgba(16, 40, 16, 0.04)",
          transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
          fontFamily: "'Poppins', sans-serif",

          // Thin accent rule that draws in on hover
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            height: "3px",
            width: "100%",
            background: "linear-gradient(90deg, #2b6d2a, #97ba3a)",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          },

          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 22px 48px rgba(16, 40, 16, 0.13)",
            borderColor: "rgba(43,109,42,0.35)",
            "&:before": { transform: "scaleX(1)" },
            "& .blog-title": { color: "#2b6d2a" },
            "& .blog-readmore": { gap: 1.4 },
          },
        }}
      >
        {/* META */}
        <Typography
          component="div"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1,
            mb: 1.75,
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.02em",
            color: "rgba(0,0,0,0.5)",
          }}
        >
          {blog.created_at && (
            <Box component="span">
              {new Date(blog.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </Box>
          )}
          {blog.author && (
            <>
              <Box
                component="span"
                sx={{ width: 3, height: 3, borderRadius: "50%", bgcolor: "rgba(0,0,0,0.25)" }}
              />
              <Box component="span" sx={{ color: "#2b6d2a", fontWeight: 600 }}>
                {blog.author}
              </Box>
            </>
          )}
        </Typography>

        {/* TITLE */}
        <Typography
          className="blog-title"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "18px", sm: "20px" },
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            mb: 1.5,
            color: "#141a14",
            transition: "color 0.3s ease",

            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {blog.title}
        </Typography>

        {/* EXCERPT */}
        {blog.excerpt && (
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "14.5px" },
              lineHeight: 1.75,
              color: "rgba(0,0,0,0.6)",
              mb: 2.5,

              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.excerpt}
          </Typography>
        )}

        {/* READ MORE — pinned to the bottom, above a hairline divider */}
        <Box
          sx={{
            mt: "auto",
            pt: 2.5,
            borderTop: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <Box
            className="blog-readmore"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              fontSize: "13.5px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "#2b6d2a",
              transition: "gap 0.3s ease",
            }}
          >
            Read More
            <Box component="span" sx={{ fontSize: "15px", lineHeight: 1 }}>
              →
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;

import { Box, Grid, Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "../api/blogs";
import { useEffect, useState } from "react";
import useFullSEO from "../utils/useFullSEO";
import { blogSEO } from "../utils/blogSEO";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get manual SEO config
  const seoConfig = blogSEO[slug] || null;
  useFullSEO(seoConfig);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const response = await getBlogBySlug(slug, 'blogs_uk');

      if (response && response.blog) {
        setBlog(response.blog);
        setLatestPosts(response.latestPosts || []);
      } else {
        console.warn("No blog found for slug:", slug);
      }

      setLoading(false);
    };

    load();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found.</div>;

  return (
    <Box sx={{ mt: 4, px: 2, maxWidth: { md: 1600 }, mx: "auto" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 5 }}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* LEFT CONTENT */}
          <Box>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ mt: 3, fontSize: { xs: "22px", md: "32px" } }}
            >
              {blog.title}
            </Typography>

            <Typography
              sx={{
                color: "gray",
                mt: 1,
                fontSize: { xs: "12px", md: "14px" },
              }}
            >
              {blog.author} —{" "}
              {blog.created_at
                ? new Date(blog.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : ""}
            </Typography>

            <Box
              sx={{ mt: 3, lineHeight: 1.8, fontSize: { xs: "14px", md: "16px" } }}
              dangerouslySetInnerHTML={{ __html: blog.content || "<p>No content</p>" }}
            />
          </Box>

          {/* RIGHT SIDEBAR */}
          <Box
            sx={{
              mt: { xs: 3, md: 0 },
              position: { xs: "static", md: "sticky" },
              top: { md: "100px" },
              height: "fit-content",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2, fontSize: { xs: "16px", md: "18px" } }}
            >
              Latest Posts
            </Typography>

            {latestPosts.map((post) => (
              <Link
                key={post.id}
                to={`/uk/blogs/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: 2,
                    p: { xs: 1.5, md: 2 },
                    mb: 2,
                    borderRadius: 2,
                    bgcolor: "#fff",
                    border: "1px solid #eee",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                    transition: ".3s",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{ fontSize: { xs: "14px", md: "15px" }, fontWeight: 600 }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: { xs: "11px", md: "12px" }, color: "#666", mt: 0.5 }}
                    >
                      {post.created_at
                        ? new Date(post.created_at).toDateString()
                        : ""}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
      </Grid>
    </Box>
  );
};

export default BlogDetails;

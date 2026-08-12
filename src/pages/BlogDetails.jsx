import { Box, Grid, Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "../api/blogs";
import { useEffect, useState, useMemo, lazy, Suspense } from "react";
import useFullSEO from "../utils/useFullSEO";
import { blogSEO, buildBlogSEO, demoteContentHeadings } from "../utils/blogSEO";

import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const CTASection = lazy(() => import("../components/homeComp/CTASection"));
import Footer from "../components/Footer";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hand-written config if this post has one, otherwise derive it from the row.
  // Only ~20 of 74 posts have an entry, and before the fallback existed the
  // rest inherited the index.html shell and canonicalised to the home page.
  // Memoised because useFullSEO keys its effect on the config object.
  const seoConfig = useMemo(
    () => blogSEO[slug] || buildBlogSEO(blog, { prefix: "/us/blogs/" }),
    [slug, blog],
  );
  useFullSEO(seoConfig); // ✅ always called

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const response = await getBlogBySlug(slug);

      if (response && response.blog) {
        setBlog(response.blog);
        setLatestPosts(response.latestPosts || []);
      }
      
      setLoading(false);
    };

    load();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found.</div>;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", position: "relative" }}>
      <Navbar />
      
      <Suspense fallback={null}>
        <Box sx={{ pt: { xs: 12, md: 16 }, mb: 10, px: { xs: 2, md: 3 }, maxWidth: { md: 1600 }, mx: "auto" }}>
          <Grid container spacing={{ xs: 2, md: 5 }} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" }, justifyContent: "center", width: "100%" }}>
            {/* LEFT CONTENT */}
            <Box>
              {/* component="h1" keeps the h3 styling but makes the post title
                  the page's actual heading. Body <h1>s are demoted below so
                  there is exactly one per page. */}
              <Typography variant="h3" component="h1" sx={{ mt: 3, fontSize: { xs: "1.75rem", md: "2.5rem" }, color: "text.primary" }}>
                {blog.title}
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5, fontSize: "1.1rem", fontWeight: 500 }}>
                By {blog.author} — {new Date(blog.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </Typography>

              <Box
                className="blog-content"
                sx={{
                  mt: 3,
                  color: "text.primary",
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  lineHeight: 1.8,
                  "& h1, & h2, & h3, & h4": { fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, color: "text.primary", mt: 4, mb: 1.5 },
                  "& a": { color: "primary.main", fontWeight: 600 },
                  "& img": { maxWidth: "100%", borderRadius: "16px", my: 2 },
                  "& blockquote": { borderLeft: "4px solid", borderColor: "primary.main", pl: 2, my: 2, color: "text.secondary", fontStyle: "italic" },
                }}
                dangerouslySetInnerHTML={{ __html: demoteContentHeadings(blog.content) }}
              />
            </Box>

            {/* RIGHT SIDEBAR */}
            <Box sx={{ mt: { xs: 3, md: 0 }, position: { xs: "static", md: "sticky" }, top: { md: "100px" }, height: "fit-content" }}>
              <Typography variant="h6" sx={{ mb: 2, color: "text.primary", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700 }}>
                Latest Posts
              </Typography>

              {latestPosts.map((post) => (
                <Link key={post.id} to={`/us/blogs/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      gap: 2,
                      p: { xs: 2, md: 2.5 },
                      mb: 2,
                      borderRadius: "18px",
                      bgcolor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": { transform: "translateY(-4px)", borderColor: "primary.main", boxShadow: "0 12px 28px rgba(38,105,41,0.12)" },
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontSize: { xs: "14px", md: "15px" }, color: "text.primary", fontWeight: 600, lineHeight: 1.4, mb: 1 }}>{post.title}</Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                        {new Date(post.created_at).toDateString()}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Box>
          </Grid>
        </Box>
        <CTASection />
        <Footer />
      </Suspense>
      <ScrollToTop />
    </Box>
  );
};

export default BlogDetails;

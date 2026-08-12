import {
  Box,
  Typography,
  TextField,
  Chip,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../../api/blogs";
import BlogCard from "./BlogCard";

const categories = [
  "All",
  "SEO",
  "AI",
  "Accounting",
  "Tax",
  "Finance",
  "Digital Marketing",
];

const BLOGS_PER_PAGE = 6;

const BlogGridSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const load = async () => {
      const data = await getBlogs({ 
        table: "blogs_uk", 
        order: "created_at", 
        ascending: false 
      });
      setBlogs(data || []);
    };
    load();
  }, []);

  /* ===== FILTER ===== */
  const filtered = blogs.filter((b) => {
    const matchCategory = category === "All" || b.category === category;
    const matchSearch = b.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  /* ===== PAGINATION ===== */
  const totalPages = Math.ceil(filtered.length / BLOGS_PER_PAGE);

  const paginatedBlogs = filtered.slice(
    (page - 1) * BLOGS_PER_PAGE,
    page * BLOGS_PER_PAGE
  );

  useEffect(() => {
    setPage(1);
  }, [search, category]);

  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, md: 3 },
        pt: { xs: 5, md: 7 },
        pb: { xs: 8, md: 12 },
        maxWidth: 1240,
        mx: "auto",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* ================= SEARCH + CATEGORY ================= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "stretch", md: "center" },
          justifyContent: "space-between",
          gap: 2,
          mb: { xs: 4, md: 5 },
          pb: { xs: 3, md: 4 },
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        {/* SEARCH */}
        <Box sx={{ flex: 1, width: "100%", maxWidth: { md: 340 } }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search articles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "#fff",
                borderRadius: "50px",
                height: 44,
                "& fieldset": { borderColor: "rgba(0,0,0,0.12)" },
                "&:hover fieldset": { borderColor: "rgba(43,109,42,0.45)" },
                "&.Mui-focused fieldset": { borderColor: "#2b6d2a", borderWidth: "1px" },
              },
              "& input": {
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14.5px",
                px: 1.5,
              },
            }}
          />
        </Box>

        {/* CATEGORIES */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            gap: 1,
          }}
        >
          {categories.map((c) => (
            <Chip
              key={c}
              label={c}
              onClick={() => setCategory(c)}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                height: 34,
                px: 0.75,
                borderRadius: "50px",
                cursor: "pointer",
                transition: "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease",
                border: "1px solid",
                borderColor: category === c ? "#2b6d2a" : "rgba(0,0,0,0.10)",
                bgcolor: category === c ? "#2b6d2a" : "transparent",
                color: category === c ? "#fff" : "rgba(0,0,0,0.68)",

                "&:hover": {
                  bgcolor: category === c ? "#2b6d2a" : "rgba(43,109,42,0.06)",
                  borderColor: category === c ? "#2b6d2a" : "rgba(43,109,42,0.35)",
                  color: category === c ? "#fff" : "#2b6d2a",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ================= BLOG GRID =================
          CSS grid: equal-width columns and equal-height rows. (MUI v9 removed
          the old `<Grid item xs=... />` API, so those props were ignored.) */}
      {paginatedBlogs.length > 0 ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2.5, md: 3 },
            alignItems: "stretch",
          }}
        >
          {paginatedBlogs.map((b) => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </Box>
      ) : (
        /* ================= EMPTY STATE ================= */
        <Box
          sx={{
            py: { xs: 8, md: 10 },
            textAlign: "center",
            borderRadius: "20px",
            border: "1px dashed rgba(0,0,0,0.15)",
            bgcolor: "rgba(43,109,42,0.03)",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "18px", color: "#1a1a1a", mb: 1 }}>
            No blogs found
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}>
            Try a different search term or category.
          </Typography>
        </Box>
      )}

      {/* ================= PAGINATION ================= */}
      {totalPages > 1 && (
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  mx: 0.4,
                  minWidth: 38,
                  height: 38,
                  borderRadius: "50%",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  border: "1px solid rgba(0,0,0,0.10)",
                  color: "rgba(0,0,0,0.7)",
                  transition: "all 0.25s ease",

                  "&.Mui-selected": {
                    bgcolor: "#2b6d2a",
                    color: "#fff",
                    borderColor: "#2b6d2a",
                    "&:hover": { bgcolor: "#2b6d2a" },
                  },

                  "&:hover": {
                    bgcolor: "rgba(43,109,42,0.06)",
                    borderColor: "rgba(43,109,42,0.35)",
                    color: "#2b6d2a",
                  },
                }}
              />
            )}
          />
        </Box>
      )}

      {/* ===== ALL ARTICLES =====
          Same reasoning as the US grid: pagination is client-side and emits
          no <a href>, so any post past the first page has no internal link
          anywhere. This gives each one a real, visible link from a page that
          is prerendered. */}
      {blogs.length > 0 && (
        <Box component="nav" aria-label="All articles" sx={{ mt: { xs: 6, md: 9 } }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: "20px", md: "24px" },
              fontWeight: 700,
              mb: 2.5,
            }}
          >
            All articles
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
              columnGap: { xs: 2, md: 4 },
              rowGap: 1,
            }}
          >
            {blogs.map((b) => (
              <Box component="li" key={b.id}>
                <Typography
                  component={Link}
                  to={`/uk/blogs/${b.slug}`}
                  sx={{
                    display: "block",
                    py: 0.6,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.45,
                    color: "rgba(0,0,0,0.7)",
                    textDecoration: "none",
                    "&:hover": { color: "#2b6d2a", textDecoration: "underline" },
                  }}
                >
                  {b.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BlogGridSection;

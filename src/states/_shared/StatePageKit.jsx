import React, { useState, lazy, Suspense } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Breadcrumbs,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  NavigateNext as NavigateNextIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Navbar from "../../components/Navbar";
import ScrollToTop from "../../components/ScrollToTop";
import ConsultationButton from "../../components/ConsultationButton";

const Footer = lazy(() => import("../../components/Footer"));
const CTASection = lazy(() => import("../../components/homeComp/CTASection"));

const DARK_GRADIENT =
  "linear-gradient(145deg, #0d1f0e 0%, #163018 50%, #1a3d1c 100%)";

/* ================= MOTION ================= */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ================= PAGE SHELL ================= */
export const StatePageShell = ({ children }) => (
  <Box sx={{ minHeight: "100vh", bgcolor: "background.default", position: "relative" }}>
    <Navbar />
    {children}
    <Suspense fallback={null}>
      <CTASection />
      <Footer />
    </Suspense>
    <ScrollToTop />
  </Box>
);

/* ================= SECTION WRAPPER ================= */
const SectionShell = ({ bg = "default", dots = false, children, sx }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: `background.${bg}`, position: "relative", overflow: "hidden", ...sx }}>
      {dots && (
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: `radial-gradient(circle, ${alpha(primary, 0.05)} 1.5px, transparent 1.5px)`, backgroundSize: "28px 28px" }} />
      )}
      <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 4 }, position: "relative", zIndex: 1 }}>
        {children}
      </Container>
    </Box>
  );
};

/* ================= SECTION HEADER ================= */
export const SectionHeader = ({ overline, title, highlight, subtitle, center = true, maxWidth = 640 }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  return (
    <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: center ? "center" : "left" }}>
      {overline && (
        <motion.div {...fadeUp(0)}>
          <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: primary, fontSize: "0.75rem", mb: 2, display: "block" }}>
            {overline}
          </Typography>
        </motion.div>
      )}
      <motion.div {...fadeUp(0.1)}>
        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, lineHeight: 1.2 }}>
          {title}
          {highlight && (
            <>
              {" "}
              <Box component="span" sx={{ color: primary }}>{highlight}</Box>
            </>
          )}
        </Typography>
      </motion.div>
      {subtitle && (
        <motion.div {...fadeUp(0.18)}>
          <Typography sx={{ color: "text.secondary", fontSize: "1rem", lineHeight: 1.8, maxWidth, mx: center ? "auto" : 0, mt: 2, fontFamily: '"Outfit", sans-serif' }}>
            {subtitle}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};

/* ================= HERO ================= */
export const StateHero = ({ lead, highlight, subtitle, breadcrumb, ctaText }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box sx={{ position: "relative", minHeight: { xs: "auto", md: "62vh" }, background: DARK_GRADIENT, display: "flex", alignItems: "center", overflow: "hidden", pt: { xs: 14, md: 16 }, pb: { xs: 10, md: 12 } }}>
      <Box sx={{ position: "absolute", top: "-15%", left: "-8%", width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(primary, 0.35)} 0%, transparent 65%)`, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: "-20%", right: "-8%", width: 650, height: 650, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(primary, 0.2)} 0%, transparent 65%)`, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: { xs: 500, md: 920 }, height: { xs: 500, md: 920 }, borderRadius: "50%", border: `1px solid ${alpha("#ffffff", 0.05)}`, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: { xs: 300, md: 580 }, height: { xs: 300, md: 580 }, borderRadius: "50%", border: `1px solid ${alpha("#ffffff", 0.04)}`, pointerEvents: "none" }} />

      <Container maxWidth={false} sx={{ maxWidth: "1300px", mx: "auto", position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", py: { xs: 4, md: 0 } }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", sm: "3.2rem", md: "3.8rem", lg: "3.4rem" }, color: theme.palette.primary.contrastText, maxWidth: { xs: "100%", md: "900px" }, mx: "auto", mb: 2.5 }}>
              {lead}
              {highlight && (
                <>
                  {" "}
                  <Box component="span" sx={{ color: alpha(primary, 0.95) }}>{highlight}</Box>
                </>
              )}
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize: 18, color: alpha("#ffffff", 0.5) }} />} sx={{ mb: subtitle || ctaText ? 3.5 : 0, "& .MuiBreadcrumbs-ol": { justifyContent: "center" } }}>
              <Link href="/" sx={{ display: "flex", alignItems: "center", gap: 0.5, color: alpha("#ffffff", 0.7), textDecoration: "none", transition: "all 0.3s ease", "&:hover": { color: primary, transform: "translateY(-2px)" } }}>
                <HomeIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>Home</Typography>
              </Link>
              <Typography variant="body2" sx={{ color: alpha("#ffffff", 0.9), fontWeight: 600, letterSpacing: "0.02em" }}>
                {breadcrumb}
              </Typography>
            </Breadcrumbs>
          </motion.div>

          {subtitle && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Typography sx={{ color: alpha("#ffffff", 0.72), fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 640, mx: "auto", mb: ctaText ? 4 : 0, fontFamily: '"Outfit", sans-serif' }}>
                {subtitle}
              </Typography>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <ConsultationButton />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

/* ================= PROSE (intro text) ================= */
export const Prose = ({ overline, title, highlight, subtitle, paragraphs = [], bg = "default", ctaText, ctaTo = "/contact" }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const navigate = useNavigate();
  return (
    <SectionShell bg={bg}>
      <SectionHeader overline={overline} title={title} highlight={highlight} subtitle={subtitle} />
      <Box sx={{ maxWidth: 860, mx: "auto", textAlign: "center" }}>
        {paragraphs.map((p, i) => (
          <motion.div key={i} {...fadeUp(0.1 + i * 0.06)}>
            <Typography sx={{ color: "text.secondary", fontSize: "1.02rem", lineHeight: 1.9, fontFamily: '"Outfit", sans-serif', mb: 2.5 }}>
              {p}
            </Typography>
          </motion.div>
        ))}
        {ctaText && (
          <motion.div {...fadeUp(0.3)}>
            <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => navigate(ctaTo)} sx={{ mt: 2, px: 4, py: 1.4, bgcolor: primary, color: "#fff", fontWeight: 700, "&:hover": { bgcolor: "#1a4d1d" } }}>
              {ctaText}
            </Button>
          </motion.div>
        )}
      </Box>
    </SectionShell>
  );
};

/* ================= HIGHLIGHT STRIP (string chips) ================= */
export const HighlightStrip = ({ overline, title, highlight, subtitle, items = [], bg = "paper", footnote }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const cols = Math.min(items.length, 4);
  return (
    <SectionShell bg={bg}>
      {(title || overline) && <SectionHeader overline={overline} title={title} highlight={highlight} subtitle={subtitle} />}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: `repeat(${cols}, 1fr)` }, gap: 2.5 }}>
        {items.map((text, i) => (
          <Box key={text} component={motion.div} {...fadeUp(i * 0.08)} sx={{ p: 3.5, borderRadius: "20px", height: "100%", bgcolor: "background.default", borderLeft: `4px solid ${primary}`, boxShadow: "0 2px 10px rgba(0,0,0,0.04)", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)", "&:hover": { transform: "translateY(-8px)", boxShadow: `0 20px 48px ${alpha(primary, 0.12)}` } }}>
            <CheckCircleIcon sx={{ fontSize: 26, color: primary, mb: 1.5 }} />
            <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.98rem", lineHeight: 1.4, color: "text.primary" }}>
              {text}
            </Typography>
          </Box>
        ))}
      </Box>
      {footnote && (
        <motion.div {...fadeUp(0.2)}>
          <Typography sx={{ color: "text.secondary", fontSize: "1rem", lineHeight: 1.8, textAlign: "center", maxWidth: 720, mx: "auto", mt: 5, fontFamily: '"Outfit", sans-serif' }}>
            {footnote}
          </Typography>
        </motion.div>
      )}
    </SectionShell>
  );
};

/* ================= FEATURE CARDS (title + desc grid) ================= */
export const FeatureCards = ({ overline, title, highlight, subtitle, items = [], columns = 3, bg = "default", dark = false }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const grid = { xs: "1fr", sm: "repeat(2, 1fr)", md: `repeat(${columns}, 1fr)` };

  if (dark) {
    return (
      <Box sx={{ py: { xs: 8, md: 12 }, background: DARK_GRADIENT, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "-15%", left: "-8%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(primary, 0.28)} 0%, transparent 65%)`, pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: "-18%", right: "-8%", width: 520, height: 520, borderRadius: "50%", background: `radial-gradient(circle, ${alpha(primary, 0.18)} 0%, transparent 65%)`, pointerEvents: "none" }} />
        <Container maxWidth={false} sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 4 }, position: "relative", zIndex: 1 }}>
          <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: "center" }}>
            {overline && (
              <motion.div {...fadeUp(0)}>
                <Typography variant="overline" sx={{ fontWeight: 900, letterSpacing: 6, color: alpha(primary, 0.95), fontSize: "0.75rem", mb: 2, display: "block" }}>{overline}</Typography>
              </motion.div>
            )}
            <motion.div {...fadeUp(0.1)}>
              <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, lineHeight: 1.2, color: "#fff" }}>
                {title}{highlight && (<> <Box component="span" sx={{ color: alpha(primary, 0.9) }}>{highlight}</Box></>)}
              </Typography>
            </motion.div>
            {subtitle && (
              <motion.div {...fadeUp(0.18)}>
                <Typography sx={{ color: alpha("#fff", 0.6), fontSize: "1rem", lineHeight: 1.8, maxWidth: 640, mx: "auto", mt: 2, fontFamily: '"Outfit", sans-serif' }}>{subtitle}</Typography>
              </motion.div>
            )}
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: grid, gap: 2.5 }}>
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Box key={item.title} component={motion.div} {...fadeUp(i * 0.06)} sx={{ p: 3.5, borderRadius: "18px", height: "100%", bgcolor: alpha("#fff", 0.06), backdropFilter: "blur(12px)", border: `1px solid ${alpha("#fff", 0.12)}`, position: "relative", overflow: "hidden", transition: "all 0.32s cubic-bezier(0.4,0,0.2,1)", "&:hover": { transform: "translateY(-8px)", bgcolor: alpha("#fff", 0.1), border: `1px solid ${alpha(primary, 0.5)}`, boxShadow: `0 24px 56px ${alpha("#000", 0.4)}` } }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: "12px", bgcolor: alpha(primary, 0.25), border: `1px solid ${alpha("#fff", 0.15)}`, display: "flex", alignItems: "center", justifyContent: "center", mb: 2.5 }}>
                    {Icon ? <Icon sx={{ fontSize: 22, color: "#fff" }} /> : <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, color: "#fff", fontSize: "1.1rem" }}>{String(i + 1).padStart(2, "0")}</Typography>}
                  </Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1rem", color: "#fff", mb: 1, lineHeight: 1.35 }}>{item.title}</Typography>
                  <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.86rem", lineHeight: 1.72, color: alpha("#fff", 0.68) }}>{item.desc}</Typography>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <SectionShell bg={bg} dots>
      <SectionHeader overline={overline} title={title} highlight={highlight} subtitle={subtitle} />
      <Box sx={{ display: "grid", gridTemplateColumns: grid, gap: 2.5 }}>
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <Box key={item.title} component={motion.div} {...fadeUp(i * 0.06)} sx={{ p: 3.5, borderRadius: "20px", height: "100%", bgcolor: bg === "paper" ? "background.default" : "background.paper", border: (t) => `1px solid ${t.palette.mode === "dark" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`, boxShadow: "0 2px 10px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden", transition: "all 0.32s cubic-bezier(0.4, 0, 0.2, 1)", "&:hover": { transform: "translateY(-8px)", bgcolor: alpha(primary, 0.03), border: `1px solid ${alpha(primary, 0.3)}`, boxShadow: `0 24px 56px ${alpha(primary, 0.13)}`, "& .sweep-bar": { width: "100%" }, "& .icon-wrap": { bgcolor: primary, border: `1px solid ${primary}`, boxShadow: `0 8px 20px ${alpha(primary, 0.35)}`, transform: "scale(1.08)" }, "& .icon-svg": { color: "#fff" }, "& .num-svg": { color: "#fff" }, "& .card-title": { color: primary }, "& .card-num": { opacity: 1 } } }}>
              <Box className="sweep-bar" sx={{ position: "absolute", top: 0, left: 0, height: "3px", width: 0, background: `linear-gradient(90deg, ${primary}, ${alpha(primary, 0.5)})`, borderRadius: "0 0 3px 0", transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }} />
              <Typography className="card-num" sx={{ position: "absolute", bottom: 10, right: 14, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: "3.8rem", lineHeight: 1, color: alpha(primary, 0.07), userSelect: "none", pointerEvents: "none", opacity: 0, transition: "opacity 0.32s ease" }}>{String(i + 1).padStart(2, "0")}</Typography>
              <Box className="icon-wrap" sx={{ width: 52, height: 52, borderRadius: "14px", bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.15)}`, display: "flex", alignItems: "center", justifyContent: "center", mb: 2.5, flexShrink: 0, transition: "all 0.32s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {Icon ? <Icon className="icon-svg" sx={{ fontSize: 24, color: primary, transition: "color 0.32s ease" }} /> : <Typography className="num-svg" sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, color: primary, fontSize: "1.15rem", transition: "color 0.32s ease" }}>{String(i + 1).padStart(2, "0")}</Typography>}
              </Box>
              <Typography className="card-title" sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "0.98rem", color: "text.primary", mb: 1, lineHeight: 1.35, transition: "color 0.28s ease" }}>{item.title}</Typography>
              <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.86rem", lineHeight: 1.72, color: "text.secondary", pr: 1 }}>{item.desc}</Typography>
            </Box>
          );
        })}
      </Box>
    </SectionShell>
  );
};

/* ================= STEP GRID (numbered process) ================= */
export const StepGrid = ({ overline, title, highlight, subtitle, steps = [], columns = 2, bg = "paper" }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  return (
    <SectionShell bg={bg}>
      <SectionHeader overline={overline} title={title} highlight={highlight} subtitle={subtitle} />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: `repeat(${columns}, 1fr)` }, gap: 2.5 }}>
        {steps.map((item, i) => (
          <Box key={item.title} component={motion.div} {...fadeUp(i * 0.08)} sx={{ p: { xs: 3, md: 3.5 }, borderRadius: "20px", bgcolor: "background.default", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", display: "flex", gap: 3, alignItems: "flex-start", transition: "all 0.28s cubic-bezier(0.4,0,0.2,1)", "&:hover": { transform: "translateY(-6px)", boxShadow: `0 16px 40px ${alpha(primary, 0.12)}`, border: `1px solid ${alpha(primary, 0.22)}` } }}>
            <Box sx={{ minWidth: 52, height: 52, borderRadius: "14px", bgcolor: alpha(primary, 0.08), border: `1px solid ${alpha(primary, 0.15)}`, color: primary, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 900, fontSize: "1.15rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {item.step || String(i + 1).padStart(2, "0")}
            </Box>
            <Box>
              <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.05rem", color: "text.primary", mb: 0.75, lineHeight: 1.3 }}>{item.title}</Typography>
              <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.9rem", lineHeight: 1.75, color: "text.secondary" }}>{item.desc}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </SectionShell>
  );
};

/* ================= COMPARISON TABLE ================= */
export const ComparisonTable = ({ overline, title, highlight, subtitle, head = [], rows = [], bg = "default" }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  return (
    <SectionShell bg={bg}>
      <SectionHeader overline={overline} title={title} highlight={highlight} subtitle={subtitle} />
      <motion.div {...fadeUp(0.1)}>
        <TableContainer sx={{ borderRadius: "20px", border: "1px solid rgba(0,0,0,0.07)", boxShadow: `0 8px 32px ${alpha(primary, 0.08)}`, overflow: "hidden", bgcolor: "background.default" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: primary }}>
                {head.map((h, i) => (
                  <TableCell key={h} align={i === 0 ? "left" : "center"} sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, color: "#fff", fontSize: "0.95rem", borderBottom: "none" }}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, r) => (
                <TableRow key={r} sx={{ "&:nth-of-type(odd)": { bgcolor: alpha(primary, 0.03) }, "&:hover": { bgcolor: alpha(primary, 0.07) }, transition: "background 0.2s ease" }}>
                  {row.map((cell, c) => (
                    <TableCell key={c} align={c === 0 ? "left" : "center"} sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.92rem", color: c === 0 ? "text.primary" : primary, fontWeight: c === 0 ? 600 : 700, borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                      {cell === "✔️" ? <CheckCircleIcon sx={{ fontSize: 20, color: primary }} /> : cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>
    </SectionShell>
  );
};

/* ================= FAQ BLOCK ================= */
const FaqAnswer = ({ text, primary }) => {
  if (!text.includes("\n")) {
    return <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.92rem", lineHeight: 1.8, color: "text.secondary" }}>{text}</Typography>;
  }
  return (
    <Box>
      {text.split("\n").map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith("-")) {
          return (
            <Stack key={i} direction="row" spacing={1} alignItems="flex-start" sx={{ ml: 1, mb: 0.5 }}>
              <CheckCircleIcon sx={{ fontSize: 16, color: primary, mt: 0.3, flexShrink: 0 }} />
              <Typography sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.9rem", lineHeight: 1.7, color: "text.secondary" }}>{trimmed.replace(/^-/, "").trim()}</Typography>
            </Stack>
          );
        }
        return (
          <Typography key={i} sx={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.92rem", lineHeight: 1.8, color: "text.secondary", fontWeight: 600, mt: i ? 1.5 : 0, mb: 0.5 }}>{trimmed}</Typography>
        );
      })}
    </Box>
  );
};

export const FAQBlock = ({ overline = "FAQ", title = "Frequently Asked", highlight = "Questions", faqs = [], bg = "paper" }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_, isExpanded) => setExpanded(isExpanded ? panel : false);

  return (
    <SectionShell bg={bg} sx={{ maxWidth: undefined }}>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <SectionHeader overline={overline} title={title} highlight={highlight} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} {...fadeUp(i * 0.04)}>
              <Accordion expanded={expanded === `faq-${i}`} onChange={handleChange(`faq-${i}`)} elevation={0} sx={{ borderRadius: "14px !important", border: `1px solid ${expanded === `faq-${i}` ? alpha(primary, 0.3) : "rgba(0,0,0,0.07)"}`, bgcolor: expanded === `faq-${i}` ? alpha(primary, 0.06) : "background.default", transition: "all 0.25s ease", "&:before": { display: "none" }, overflow: "hidden" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: primary }} />} sx={{ px: 3, py: 0.5, "& .MuiAccordionSummary-content": { my: 1.5 } }}>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: { xs: "0.95rem", md: "1rem" }, color: "text.primary", lineHeight: 1.4 }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <FaqAnswer text={faq.a} primary={primary} />
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Box>
    </SectionShell>
  );
};

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { palette } from "../styles/colors";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observers = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 64; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: palette.navy,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 4 },
        py: 0,
        height: "56px",
        borderBottom: `3px solid ${palette.pink}`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo/name */}
      <Typography
        onClick={() => scrollTo("about")}
        sx={{
          fontFamily: "'myhandwriting', sans-serif",
          fontSize: "1.4rem",
          color: palette.cream,
          cursor: "pointer",
          userSelect: "none",
          "&:hover": { color: palette.pink },
          transition: "color 0.2s",
        }}
      >
        Sarah Taylor
      </Typography>

      {/* Nav links */}
      <Box sx={{ display: "flex", gap: { xs: 1.5, md: 3 } }}>
        {NAV_ITEMS.map(({ label, id }) => {
          const isActive = active === id;
          return (
            <Box
              key={id}
              onClick={() => scrollTo(id)}
              sx={{
                cursor: "pointer",
                userSelect: "none",
                fontFamily: "'Archivo Black', sans-serif",
                fontWeight: 900,
                fontSize: { xs: "0.7rem", md: "0.85rem" },
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: isActive ? palette.navy : palette.cream,
                backgroundColor: isActive ? palette.pink : "transparent",
                px: { xs: 1.2, md: 2 },
                py: 0.6,
                borderRadius: "20px",
                border: `2px solid ${isActive ? palette.pink : "transparent"}`,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: palette.navy,
                  backgroundColor: palette.pink,
                  borderColor: palette.pink,
                },
              }}
            >
              {label}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

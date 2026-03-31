import { Box } from "@mui/material";
import { palette } from "../styles/colors";

export default function SectionMarquee({ text }) {
  const repeated = Array(12).fill(`${text} ✦`);

  return (
    <Box
      sx={{
        backgroundColor: palette.navy,
        overflow: "hidden",
        py: 1.2,
        display: "flex",
        borderTop: `3px solid ${palette.pink}`,
        borderBottom: `3px solid ${palette.pink}`,
      }}
    >
      <Box className="marquee-track">
        {repeated.map((item, i) => (
          <Box
            key={i}
            component="span"
            sx={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              px: 3,
              whiteSpace: "nowrap",
              color: i % 2 === 0 ? palette.cream : palette.pink,
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

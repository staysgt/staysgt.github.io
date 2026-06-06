import { Box } from "@mui/material";
import { palette } from "../styles/colors";

export default function SectionMarquee({ text }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        px: { xs: 3, md: 8 },
        py: 4,
      }}
    >
      <Box sx={{ flex: 1, height: "1px", backgroundColor: palette.navy, opacity: 0.2 }} />
      {text && (
        <Box
          component="span"
          sx={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: palette.navy,
            opacity: 0.7,
          }}
        >
          {text}
        </Box>
      )}
      {text && (
        <Box sx={{ flex: 1, height: "1px", backgroundColor: palette.navy, opacity: 0.2 }} />
      )}
    </Box>
  );
}

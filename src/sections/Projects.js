import { Box, Typography } from "@mui/material";
import projects from "../assets/data/projects.json";
import ProjectCard from "../components/projectcard";
import { palette } from "../styles/colors";

export default function ProjectGrid() {
  return (
    <Box
      sx={{ p: "1rem", mb: { xs: 6, md: 10 } }}
      style={{
        backgroundColor: palette.softGreen,
        boxShadow: "0 4px 12px rgba(63, 46, 38, 0.12)",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'myhandwriting, sans-serif',
          fontWeight: 'bold',
          color: palette.richBrown,
          textAlign: "center",
          mb: 1.5,
        }}
      >
        PROJECTS
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: palette.darkBrown,
          textAlign: "center",
          mb: 3,
        }}
      >
        Scroll left/right for more projects!
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          py: 1,
          px: 1,
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: palette.midGreen,
            borderRadius: "999px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: palette.softBrown,
            borderRadius: "999px",
          },
        }}
      >
        {projects.map((proj, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 320px",
              scrollSnapAlign: "start",
            }}
          >
            <ProjectCard proj={proj} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

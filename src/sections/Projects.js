import { Box, Typography, Grid } from "@mui/material";
import projects from "../assets/data/projects.json";
import ProjectCard from "../components/projectcard";
import { palette } from "../styles/colors";

export default function ProjectGrid() {
  return (
    <Box
      id="projects"
      sx={{
        py: "3rem",
        px: { xs: "1rem", md: "2rem" },
        pb: { xs: "5rem", md: "6rem" },
        backgroundColor: palette.cream,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Archivo Black', sans-serif",
          fontWeight: 900,
          color: palette.navy,
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          fontSize: { xs: "1.8rem", md: "2.6rem" },
          mb: 4,
        }}
      >
        Work I'm proud of
        <Box component="span" sx={{ color: palette.pink, ml: 1 }}>✦</Box>
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {projects.map((proj, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <ProjectCard proj={proj} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

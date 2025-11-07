import { Box, Grid, Typography } from "@mui/material";
import projects from "../assets/data/projects.json";
import ProjectCard from "../components/projectcard";
import { palette } from "../styles/colors";

export default function ProjectGrid() {
  return (
    <Box
      sx={{ p: "1rem" }}
      style={{
        backgroundColor: palette.softGreen,
        boxShadow: "0 4px 12px rgba(63, 46, 38, 0.12)",
        borderTop: `3px solid ${palette.midGreen}`,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'myhandwriting, sans-serif',
          fontWeight: 'bold',
          color: palette.richBrown,
          textAlign: "center",
          mb: 2,
        }}
      >
        PROJECTS
      </Typography>
      <Grid container spacing={3} justifyContent={"center"}>
        {projects.map((proj, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ height: "100%" }}>
            <ProjectCard proj={proj} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

import { Box, Typography, Grid } from "@mui/material";
import projects from "../assets/data/projects.json";
import ProjectCard from "../components/projectcard";
import { palette } from "../styles/colors";

export default function ProjectGrid() {
  return (
    <Box
      sx={{ pt: "1rem", px: "1rem", pb: "1rem", mb: { xs: 6, md: 10 }, borderTop: `3px solid ${palette.midGreen}` }}
      style={{
        backgroundColor: palette.softGreen,
        boxShadow: "none",
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
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent={"center"} alignItems={"stretch"}>
        {projects.map((proj, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <ProjectCard proj={proj} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

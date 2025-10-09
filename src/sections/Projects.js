import { Box, Grid, Typography } from "@mui/material";
import projects from "../assets/data/projects.json";
import ProjectCard from "../components/projectcard";


export default function ProjectGrid() {
  return (
    <Box sx={{ p:"1rem" }} style={{ backgroundColor: '#fce4ec' , boxShadow: '0 4px 12px rgba(93, 64, 55, 0.15)'}}>
      <Typography variant="h3" sx={{fontFamily: 'myhandwriting, sans-serif',
          fontWeight: 'bold', color: '#5d4037'}}>PROJECTS</Typography>
          <Typography>
          <Typography>
        {/* Click on each box for more information! */}
      </Typography>
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

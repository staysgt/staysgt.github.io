import { Box, Grid, Typography } from "@mui/material";
import projects from "../json/projects.json";
import ProjectCard from "../components/projectcard";


export default function ProjectGrid() {
  return (
    <Box sx={{ p:"1rem" }} style={{ backgroundColor: '#fdd7eb' , boxShadow: '2px 2px 5px #fedeee'}}>
      <Typography variant="h3" sx={{fontFamily: 'myhandwriting, sans-serif',
          fontWeight: 'bold'}}>PROJECTS</Typography>
          <Typography>
          <Typography>
        Click on each box for more information!
      </Typography>
          </Typography>
    <Grid container spacing={3}>
      {projects.map((proj, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ height: "100%" }}>
          <ProjectCard proj={proj} />
        </Grid>
      ))}
    </Grid>
    </Box>
  );
}

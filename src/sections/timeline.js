import { Box, Typography, Paper, Chip } from "@mui/material";
import experience from "../json/experiences.json";

export default function ExperienceTimeline() {
  return (
    <Box sx={{ p: "2rem" }} style={{ backgroundColor: '#fcf5fa', boxShadow: '2px 2px 5px gray' }}>
      <Typography variant="h3" sx={{ mb: 4, textAlign: "center",  fontFamily: 'myhandwriting, sans-serif',
          fontWeight: 'bold' }}>
        EXPERIENCES
      </Typography>
      <Typography>
        Click on each box for more information!
      </Typography>
      
      <Box sx={{ 
        position: "relative", 
        overflowX: "auto",
        overflowY: "hidden",
        height: "600px",
        "&::-webkit-scrollbar": {
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f3e5f5",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#6a1b9a",
          borderRadius: "4px",
        }
      }}>
        <Box
          sx={{
            position: "absolute",
            top: "250px",
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#6a1b9a",
            zIndex: 1
          }}
        />
        
        <Box sx={{ 
          display: "flex", 
          gap: 4,
          px: 4,
          position: "relative",
          height: "100%"
        }}>
          {[...experience].map((exp, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                minWidth: "300px",
                flex: "0 0 auto",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                flexDirection: "column"
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "242px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#6a1b9a",
                  borderRadius: "50%",
                  zIndex: 2,
                  border: "3px solid #fcf5fa"
                }}
              />
              
              <Paper
                elevation={3}
                sx={{
                  width: "280px",
                  p: 3,
                  backgroundColor: "#fffafc",
                  borderRadius: 3,
                  position: "absolute",
                  top: index % 2 === 0 ? "20px" : "310px",
                  transition: "0.3s",
                  "&:hover": {
                    transform: index % 2 === 0 ? "translateY(-10px)" : "translateY(10px)",
                    boxShadow: 6,
                  },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    [index % 2 === 0 ? "bottom" : "top"]: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    [index % 2 === 0 ? "borderTop" : "borderBottom"]: "12px solid #fffafc",
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ 
                    fontWeight: 600, 
                    color: "#6a1b9a",
                    mb: 1
                  }}
                >
                  {exp.jobTitle}
                </Typography>
                
                <Typography
                  variant="subtitle1"
                  sx={{ 
                    fontWeight: 500, 
                    color: "#8e24aa", 
                    mb: 2
                  }}
                >
                  {exp.company}
                </Typography>
                
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, fontSize: 14, lineHeight: 1.5 }}
                >
                  {exp.description}
                </Typography>
                
                <Chip
                  label={exp.timeFrame}
                  size="small"
                  sx={{
                    backgroundColor: "#f3e5f5",
                    color: "#6a1b9a",
                    fontWeight: 500,
                  }}
                />
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
import { Box, Typography, Paper, Chip } from "@mui/material";
import experience from "../assets/data/experiences.json";
import { palette } from "../styles/colors";

export default function ExperienceTimeline() {
  return (
    <Box
      sx={{ p: "2rem" }}
      style={{
        backgroundColor: palette.softGreen,
        boxShadow: "0 4px 12px rgba(63, 46, 38, 0.12)",
        borderTop: `3px solid ${palette.midGreen}`,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          textAlign: "center",
          fontFamily: 'myhandwriting, sans-serif',
          fontWeight: 'bold',
          color: palette.richBrown,
        }}
      >
        EXPERIENCES
      </Typography>
      <Typography>
        {/* Click on each box for more information! */}
      </Typography>
      
      <Box sx={{ 
        position: "relative", 
        overflowX: "auto",
        overflowY: "hidden",
        height: "420px",
        "&::-webkit-scrollbar": {
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: palette.midGreen,
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: palette.deepGreen,
          borderRadius: "4px",
        }
      }}>
        <Box
          sx={{
            position: "absolute",
            top: "300px",
            left: 0,
            right: 0,
            height: "4px",
            background: palette.softBrown,
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
          {[...experience].reverse().map((exp, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                minWidth: "320px",
                flex: "0 0 auto",
                height: "320px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "292px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "16px",
                  height: "16px",
                  backgroundColor: palette.softBrown,
                  borderRadius: "50%",
                  zIndex: 2,
                  border: `3px solid ${palette.softGreen}`
                }}
              />
              
              <Paper
                elevation={3}
                sx={{
                  width: "280px",
                  p: 3,
                  backgroundColor: "#ffffff",
                  borderRadius: 3,
                  position: "absolute",
                  top: "20px",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 6,
                  },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    borderTop: "12px solid #ffffff",
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ 
                    fontWeight: 600, 
                    color: palette.darkGreen,
                    mb: 1
                  }}
                >
                  {exp.jobTitle}
                </Typography>
                
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 500,
                    color: palette.richBrown,
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
                    backgroundColor: palette.midGreen,
                    color: palette.richBrown,
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
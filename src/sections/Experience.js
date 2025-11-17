import { Box, Typography, Paper, Chip } from "@mui/material";
import experience from "../assets/data/experiences.json";
import { palette } from "../styles/colors";

export default function ExperienceTimeline() {
  return (
    <Box
      sx={{ p: "2rem", mb: 0, borderTop: `3px solid ${palette.midGreen}` }}
      style={{
        backgroundColor: palette.softGreen,
        boxShadow: "none",
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
        Experiences
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[...experience].reverse().map((exp, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                p: 2,
                backgroundColor: "#ffffff",
                borderRadius: 3,
                borderLeft: `6px solid ${palette.darkGreen}`,
                boxShadow: "0 4px 10px rgba(63, 46, 38, 0.1)",
              width: { xs: "100%", sm: "48%", md: "32%" },
              }}
            >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  textAlign: { xs: "left", sm: "left" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: palette.darkGreen,
                  }}
                >
                  {exp.jobTitle}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 500,
                    color: palette.richBrown,
                  }}
                >
                  {exp.company}
                </Typography>
              </Box>
              <Chip
                label={exp.timeFrame}
                size="small"
                sx={{
                  backgroundColor: palette.midGreen,
                  color: palette.richBrown,
                  fontWeight: 500,
                }}
              />
            </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, fontSize: 14, lineHeight: 1.6 }}
              >
                {exp.description}
              </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
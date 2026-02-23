import { 
  Box, 
  Typography, 
  Paper, 
  Chip,
  Stack
} from "@mui/material";
import experience from "../assets/data/experiences.json";
import { palette } from "../styles/colors";

export default function ExperienceTimeline() {
  // Format date to use en dash (May 2025 – Dec 2025)
  const formatDateRange = (timeFrame) => {
    return timeFrame.replace(/\s*-\s*/g, " – ");
  };

  // Parse skills string into array
  const parseSkills = (skillsString) => {
    if (!skillsString) return [];
    return skillsString
      .split(",")
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0);
  };

  const experiences = [...experience].reverse();

  return (
    <Box
      sx={{ 
        p: { xs: "2rem 1rem", sm: "2rem", md: "3rem" }, 
        mb: 0, 
        borderTop: `3px solid ${palette.midGreen}`,
        backgroundColor: palette.softGreen,
        boxShadow: "none",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: { xs: 3, md: 5 },
          textAlign: "center",
          fontFamily: 'myhandwriting, sans-serif',
          fontWeight: 'bold',
          color: palette.richBrown,
        }}
      >
        Experiences
      </Typography>
      
      {/* Vertical Timeline Container */}
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          position: "relative",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Timeline Line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "20px", sm: "40px", md: "60px" },
            top: 0,
            bottom: 0,
            width: "3px",
            backgroundColor: palette.midGreen,
            display: { xs: "none", sm: "block" },
          }}
        />

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              mb: 4,
              pl: { xs: 0, sm: "80px", md: "120px" },
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {/* Timeline Dot */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: "12px", sm: "32px", md: "52px" },
                top: "24px",
                width: { xs: "16px", sm: "20px" },
                height: { xs: "16px", sm: "20px" },
                borderRadius: "50%",
                backgroundColor: palette.darkGreen,
                border: `3px solid ${palette.softGreen}`,
                boxShadow: `0 0 0 3px ${palette.midGreen}`,
                zIndex: 1,
                display: { xs: "none", sm: "block" },
              }}
            />

            {/* Experience Card */}
            <Paper
              elevation={2}
              sx={{
                width: "100%",
                maxWidth: "700px",
                p: { xs: 2, sm: 3 },
                backgroundColor: "#ffffff",
                borderRadius: 3,
                borderLeft: `6px solid ${palette.darkGreen}`,
                boxShadow: "0 4px 10px rgba(63, 46, 38, 0.1)",
                transition: "all 0.3s ease",
                transform: "translateX(0)",
                "&:hover": {
                  transform: "translateX(8px) scale(1.02)",
                  boxShadow: "0 8px 20px rgba(63, 46, 38, 0.15)",
                  borderLeftWidth: "8px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "flex-start" },
                  justifyContent: "space-between",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: palette.darkGreen,
                      mb: 0.5,
                      fontSize: { xs: "1.25rem", sm: "1.5rem" },
                    }}
                  >
                    {exp.jobTitle}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: palette.richBrown,
                      fontSize: { xs: "0.95rem", sm: "1.1rem" },
                    }}
                  >
                    {exp.company}
                  </Typography>
                </Box>
                <Chip
                  label={formatDateRange(exp.timeFrame)}
                  size="medium"
                  sx={{
                    backgroundColor: palette.midGreen,
                    color: palette.richBrown,
                    fontWeight: 600,
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                    height: { xs: "28px", sm: "32px" },
                  }}
                />
              </Box>
              
              <Typography
                variant="body2"
                sx={{ 
                  mt: 1,
                  mb: 2,
                  fontSize: { xs: "0.875rem", sm: "0.9375rem" }, 
                  lineHeight: 1.7,
                  color: palette.softBrown,
                }}
              >
                {exp.description}
              </Typography>

              {/* Skills */}
              {exp.skills && parseSkills(exp.skills).length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      mb: 1,
                      fontWeight: 600,
                      color: palette.darkGreen,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Skills
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                  >
                    {parseSkills(exp.skills).map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: palette.deepGreen,
                          color: palette.richBrown,
                          fontWeight: 500,
                          fontSize: "0.75rem",
                          "&:hover": {
                            backgroundColor: palette.darkGreen,
                            color: "#ffffff",
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              )}
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
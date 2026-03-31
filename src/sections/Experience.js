import { Box, Typography, Chip, Stack } from "@mui/material";
import experience from "../assets/data/experiences.json";
import { palette } from "../styles/colors";

export default function ExperienceTimeline() {
  const formatDateRange = (timeFrame) => {
    return timeFrame.replace(/\s*-\s*/g, " – ");
  };

  const parseSkills = (skillsString) => {
    if (!skillsString) return [];
    return skillsString
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  };

  const experiences = [...experience].reverse();

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: "2rem", md: "2.5rem" },
        px: { xs: "1rem", sm: "2rem", md: "3rem" },
        backgroundColor: palette.cream,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: { xs: 3, md: 4 },
          textAlign: "center",
          fontFamily: "'Archivo Black', sans-serif",
          fontWeight: 900,
          color: palette.navy,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          fontSize: { xs: "1.8rem", md: "2.6rem" },
        }}
      >
        Experience
        <Box component="span" sx={{ color: palette.pink, ml: 1 }}>
          ✦
        </Box>
      </Typography>

      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: 3,
        }}
      >
        {experiences.map((exp, index) => (
          <Box
            key={index}
            sx={{
              p: { xs: 2, sm: 2.5 },
              backgroundColor: palette.white,
              borderRadius: 3,
              borderTop: `5px solid ${index % 2 === 0 ? palette.navy : palette.pink}`,
              boxShadow: `4px 4px 0px ${index % 2 === 0 ? palette.pink : palette.navy}`,
              transition: "all 0.25s ease",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                transform: "translateY(-4px) translateX(2px)",
                boxShadow: `6px 6px 0px ${index % 2 === 0 ? palette.navy : palette.pink}`,
              },
            }}
          >
            {/* Header row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 1,
                mb: 1,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontWeight: 900,
                    color: palette.navy,
                    fontSize: { xs: "1rem", sm: "1.05rem" },
                    lineHeight: 1.2,
                    mb: 0.25,
                  }}
                >
                  {exp.jobTitle}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: palette.pink,
                    fontSize: "0.875rem",
                  }}
                >
                  {exp.company}
                </Typography>
              </Box>
              <Chip
                label={formatDateRange(exp.timeFrame)}
                size="small"
                sx={{
                  backgroundColor: palette.navy,
                  color: palette.cream,
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.65rem",
                  height: "22px",
                  borderRadius: "5px",
                  flexShrink: 0,
                }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{
                fontSize: "0.85rem",
                lineHeight: 1.65,
                color: palette.softText,
                mb: 1.5,
                flex: 1,
              }}
            >
              {exp.description}
            </Typography>

            {exp.skills && parseSkills(exp.skills).length > 0 && (
              <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
                {parseSkills(exp.skills).map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    size="small"
                    sx={{
                      backgroundColor: palette.lightPink,
                      color: palette.navy,
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      border: `1px solid ${palette.pink}`,
                      borderRadius: "5px",
                      "&:hover": {
                        backgroundColor: palette.pink,
                        color: palette.white,
                      },
                    }}
                  />
                ))}
              </Stack>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

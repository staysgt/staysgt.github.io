import { Box, Typography } from "@mui/material";
import { palette } from "../styles/colors";

const categoryAccents = {
  Languages: palette.navy,
  Frameworks: palette.pink,
  "Tools/Platforms": palette.navy,
};

export default function SkillsBox() {
  const skills = {
    languages: [
      "Python", "Java", "TypeScript", "JavaScript", "C++", "C",
      "SQL", "R", "Kotlin", "HTML/CSS"
    ],
    frameworks: [
      "React.js", "Node.js", "Express.js", "Prisma ORM", "REST APIs", "Jest",
      "NumPy", "Pandas", "scikit-learn", "BeautifulSoup", "JUnit", "Qt/PyQt"
    ],
    tools: [
      "Git/GitHub", "Linux", "Docker", "VS Code", "IntelliJ", "MongoDB",
      "SQLite", "Supabase", "Postman", "MySQL", "Jupyter Notebook",
      "ThreadX", "FreeRTOS"
    ],
  };

  const renderSkillSection = (title, skillsList) => {
    const accent = categoryAccents[title] || palette.navy;
    return (
      <Box
        sx={{
          backgroundColor: palette.white,
          borderRadius: 3,
          p: 2.5,
          minHeight: "200px",
          borderTop: `5px solid ${accent}`,
          boxShadow: `4px 4px 0px ${accent === palette.navy ? palette.pink : palette.navy}`,
          transition: "0.25s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: `6px 6px 0px ${accent === palette.navy ? palette.pink : palette.navy}`,
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            color: accent,
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 900,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontSize: "1rem",
            pb: 1.5,
            borderBottom: `2px dashed ${palette.midCream}`,
          }}
        >
          {title}
        </Typography>
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            p: 0,
            m: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
          }}
        >
          {skillsList.map((skill, index) => (
            <Typography
              component="li"
              variant="body2"
              key={index}
              sx={{
                color: palette.softText,
                fontWeight: 500,
                textAlign: "center",
                px: 0.5,
                display: "flex",
                alignItems: "center",
                fontSize: "0.875rem",
                "&::after": {
                  content: index !== skillsList.length - 1 ? '"·"' : '""',
                  display: "inline-block",
                  marginLeft: "8px",
                  color: palette.pink,
                  fontWeight: 900,
                },
              }}
            >
              {skill}
            </Typography>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Box
      id="skills"
      sx={{
        py: "3rem",
        px: { xs: "1.5rem", md: "2rem" },
        backgroundColor: palette.cream,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          textAlign: "center",
          fontFamily: "'Archivo Black', sans-serif",
          fontWeight: 900,
          color: palette.navy,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          fontSize: { xs: "1.8rem", md: "2.6rem" },
        }}
      >
        Ask me anything about
        <Box component="span" sx={{ color: palette.pink, ml: 1 }}>✦</Box>
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
          maxWidth: "900px",
          mx: "auto",
        }}
      >
        {renderSkillSection("Languages", skills.languages)}
        {renderSkillSection("Frameworks", skills.frameworks)}
        {renderSkillSection("Tools/Platforms", skills.tools)}
      </Box>
    </Box>
  );
}

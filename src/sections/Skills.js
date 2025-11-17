import { Box, Typography } from "@mui/material";
import { palette } from "../styles/colors";

export default function SkillsBox() {
  const skills = {
    languages: [
      "Python",
      "Java",
      "TypeScript",
      "JavaScript",
      "C++",
      "C",
      "SQL",
      "R",
      "Kotlin",
      "HTML/CSS"
    ],
    frameworks: [
      // Fullstack - typescript/javascript
      "React.js",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "REST APIs",
      "Jest",
    
      // Python - data
      "NumPy",
      "Pandas",
      "scikit-learn",
      "BeautifulSoup",
    
      // Java
      "JUnit",
      
      // GUI
      "Qt/PyQt"
    ],
    tools: [
      "Git/GitHub",
      "Linux",
      "Docker",
      "VS Code",
      "IntelliJ",
      "MongoDB",
      "SQLite",
      "Supabase",
      "Postman",
      "MySQL",
      "Jupyter Notebook",
      "ThreadX",
      "FreeRTOS"
    ]
  };

  const categoryColors = {
    Languages: palette.darkGreen,
    Frameworks: palette.darkGreen,
    "Tools/Platforms": palette.darkGreen,
  };

  const renderSkillSection = (title, skillsList) => (
    <Box
      sx={{
        backgroundColor: palette.warmWhite,
        border: `1px solid ${categoryColors[title] || palette.midGreen}`,
        borderRadius: 2,
        p: 2,
        minHeight: "200px",
        boxShadow: `0 2px 8px rgba(0,0,0,0.04)`,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 1.5,
          color: palette.richBrown,
          fontWeight: 700,
          textAlign: "center",
          borderBottom: `2px dotted ${categoryColors[title] || palette.midGreen}`,
          pb: 1,
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
              color: palette.darkBrown,
              fontWeight: 500,
              textAlign: "center",
              px: 0.5,
              display: "flex",
              alignItems: "center",
              "&::after": {
                content: index !== skillsList.length - 1 ? '"•"' : '""',
                display: "inline-block",
                marginLeft: "8px",
                color: palette.darkBrown,
              },
            }}
          >
            {skill}
          </Typography>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box 
      sx={{ 
        p: "2rem",
        backgroundColor: palette.softGreen,
        boxShadow: "0 4px 12px rgba(63, 46, 38, 0.12)",
        borderRadius: 0,
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
          color: palette.richBrown
        }}
      >
        Ask me anything about...
      </Typography>
      
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
        }}
      >
        {renderSkillSection("Languages", skills.languages)}
        {renderSkillSection("Frameworks", skills.frameworks)}
        {renderSkillSection("Tools/Platforms", skills.tools)}
      </Box>
    </Box>
  );
}
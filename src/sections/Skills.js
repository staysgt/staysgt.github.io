import { Box, Typography, Chip, Stack } from "@mui/material";
import { useState } from "react";

export default function SkillsBox() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

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

  // Define relationships between languages and their frameworks/tools
  const skillRelations = {
    "Python": ["NumPy", "Pandas", "scikit-learn", "BeautifulSoup", "Qt/PyQt", "Jupyter Notebook"],
    "Java": ["JUnit", "IntelliJ"],
    "TypeScript": ["React.js", "Node.js", "Express.js", "Prisma ORM", "REST APIs", "Jest"],
    "JavaScript": ["React.js", "Node.js", "Express.js", "Prisma ORM", "REST APIs", "Jest"],
    "C++": ["Qt/PyQt", "ThreadX", "FreeRTOS"],
    "C": ["ThreadX", "FreeRTOS"],
    "SQL": ["MongoDB", "SQLite", "Supabase", "MySQL"],
    "HTML/CSS": ["React.js", "VS Code"]
  };
  
  const renderSkillSection = (title, skillsList) => {
    const isLanguageSection = title === "Languages";
    
    return (
      <Box sx={{ flex: 1, minWidth: "250px" }} >
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 2, 
            textAlign: "center", 
            color: "#5d4037",
            fontWeight: 600
          }}
        >
          {title}
        </Typography>
        <Stack 
          direction="row" 
          spacing={1} 
          sx={{ 
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {skillsList.map((skill, index) => {
            // Check if this skill should be highlighted
            const isRelated = hoveredSkill && skillRelations[hoveredSkill]?.includes(skill);
            const isHovered = hoveredSkill === skill;
            
            // Strawberry pink for hover, dusty rose for related
            const hoverColor = isHovered ? "#f06292" : (isRelated ? "#f48fb1" : "#ffffff");
            
            return (
              <Chip
                key={index}
                label={skill}
                onMouseEnter={() => isLanguageSection && setHoveredSkill(skill)}
                onMouseLeave={() => isLanguageSection && setHoveredSkill(null)}
                sx={{
                  backgroundColor: hoverColor,
                  color: isHovered || isRelated ? "#ffffff" : "#5d4037",
                  fontWeight: 500,
                  fontSize: "13.5px",
                  padding: "4px 8px",
                  transition: "0.3s",
                  transform: isHovered || isRelated ? "scale(1.05)" : "scale(1)",
                  boxShadow: isHovered || isRelated ? 3 : 0,
                  border: isHovered || isRelated ? "none" : "1px solid #fce4ec",
                  "&:hover": {
                    backgroundColor: "#f06292",
                    color: "#ffffff",
                    transform: "scale(1.05)",
                    boxShadow: 3,
                    border: "none",
                  },
                }}
              />
            );
          })}
        </Stack>
      </Box>
    );
  };

  return (
    <Box 
      sx={{ 
        p: "2rem",
        backgroundColor: '#fce4ec',
        boxShadow: '0 4px 12px rgba(93, 64, 55, 0.15)',
        borderRadius: 0
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          mb: 4, 
          textAlign: "center", 
          fontFamily: 'myhandwriting, sans-serif',
          fontWeight: 'bold',
          color: '#5d4037'
        }}
      >
        ASK ME ANYTHING ABOUT...
      </Typography>
      
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "space-around", 
          alignItems: "flex-start",
          gap: 3,
          flexWrap: "wrap"
        }}
      >
        {renderSkillSection("Languages", skills.languages)}
        {renderSkillSection("Frameworks", skills.frameworks)}
        {renderSkillSection("Tools/Platforms", skills.tools)}
      </Box>
    </Box>
  );
}
import { Box, Typography, Chip, Stack } from "@mui/material";

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
      "Jest",
    
      // Python - data
      "NumPy",
      "Pandas",
      "scikit-learn",
      "BeautifulSoup",
    
      // Java
      "JUnit"
    ],   tools: [
      "Git/GitHub",
      "Linux",
      "Docker",
      "VS Code",
      "IntelliJ",
      "MongoDB",
      "SQLite",
      "Postman",
      "SQLite",
      "MySQL",
      "Jupyter Notebook",
      "ThreadX",
      "FreeRTOS"
    ]
  };
  
  const renderSkillSection = (title, skillsList) => {
    return (
      <Box sx={{ flex: 1, minWidth: "250px" }} >
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 2, 
            textAlign: "center", 
            color: "#6a1b9a",
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
          {skillsList.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                backgroundColor: "#f3e5f5",
                color: "#6a1b9a",
                fontWeight: 500,
                fontSize: "13.5px",
                padding: "4px 8px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#6a1b9a",
                  color: "#ffffff",
                  transform: "scale(1.05)",
                  boxShadow: 3,
                },
              }}
            />
          ))}
        </Stack>
      </Box>
    );
  };

  return (
    <Box 
      sx={{ 
        p: "2rem",
        backgroundColor: '#fdd7eb',
        boxShadow: '2px 2px 5px gray',
        borderRadius: 2
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          mb: 4, 
          textAlign: "center", 
          fontFamily: 'myhandwriting, sans-serif',
          fontWeight: 'bold'
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
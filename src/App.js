import './App.css';
import About from './components/aboutme';
import SkillsBox from './components/skillsbox';
import ProjectGrid from './sections/projectstable';
import ExperienceTimeline from './sections/timeline';
import './fonts/fonts.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "'Baloo 2', cursive",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <About />
      <SkillsBox/>
      <ExperienceTimeline/>
      <ProjectGrid/>      
    </div>
    </ThemeProvider>
  );
}

export default App;

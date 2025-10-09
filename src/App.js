import './styles/App.css';
import About from './sections/About';
import SkillsBox from './sections/Skills';
import ProjectGrid from './sections/Projects';
import ExperienceTimeline from './sections/Experience';
import './assets/fonts/fonts.css';
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

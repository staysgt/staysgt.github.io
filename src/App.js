import './styles/App.css';
import About from './sections/About';
import SkillsBox from './sections/Skills';
import ProjectGrid from './sections/Projects';
import ExperienceTimeline from './sections/Experience';
import './assets/fonts/fonts.css';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { palette } from './styles/colors';

const theme = createTheme({
  typography: {
    fontFamily: "'Baloo 2', cursive",
  },
  palette: {
    primary: {
      main: palette.deepGreen,
    },
    secondary: {
      main: palette.richBrown,
    },
    background: {
      default: palette.softGreen,
    },
    text: {
      primary: palette.richBrown,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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

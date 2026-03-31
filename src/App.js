import './styles/App.css';
import About from './sections/About';
import SkillsBox from './sections/Skills';
import ProjectGrid from './sections/Projects';
import ExperienceTimeline from './sections/Experience';
import SectionMarquee from './components/Marquee';
import Navbar from './components/Navbar';
import './assets/fonts/fonts.css';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { palette } from './styles/colors';

const theme = createTheme({
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
  },
  palette: {
    primary: {
      main: palette.navy,
    },
    secondary: {
      main: palette.pink,
    },
    background: {
      default: palette.cream,
    },
    text: {
      primary: palette.darkText,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <About />
        <SectionMarquee text="Skills" />
        <SkillsBox />
        <SectionMarquee text="Experience" />
        <ExperienceTimeline />
        <SectionMarquee text="Projects" />
        <ProjectGrid />
      </div>
    </ThemeProvider>
  );
}

export default App;

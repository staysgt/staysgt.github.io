import './App.css';
import About from './components/aboutme';
import SkillsBox from './components/skillsbox';
import ProjectGrid from './sections/projectstable';
import ExperienceTimeline from './sections/timeline';
import './fonts/fonts.css';


function App() {
  return (
    <div className="App">
      <About />
      <SkillsBox/>
      <ExperienceTimeline/>
      <ProjectGrid/>      
    </div>
  );
}

export default App;

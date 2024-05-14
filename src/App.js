// import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Intern from './Components/Intern';

import Main from './Components/Main';
import Project from './Components/Project';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Main />
      <Skills />
      <Education/>
      <Intern/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;

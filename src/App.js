import './App.css';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Header></Header>
     <Skills></Skills>
     <Projects></Projects>
     <GetInTouch></GetInTouch>
    </div>
  );
}

export default App;

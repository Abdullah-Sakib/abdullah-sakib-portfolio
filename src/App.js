import './App.css';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Header></Header>
     <Skills></Skills>
     <GetInTouch></GetInTouch>
    </div>
  );
}

export default App;

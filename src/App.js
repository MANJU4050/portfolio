import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    // <Router>
    //   <Routes>


    <div className="App">
       <Navbar/>
       <Home/>
       <About/>
       <Projects/>
       <Skills/>
       <Contact/>
    </div>
    // </Routes>

    // </Router>

  );
}

export default App;

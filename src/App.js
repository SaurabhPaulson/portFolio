import NavBar from "./components/NavBar/navBar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Footer from "./components/Footer/footer";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Experience from "./components/Experience/experience";


function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-left" />
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Resume/>
      <Experience/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;

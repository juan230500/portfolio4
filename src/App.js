import "./App.css";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
// import Projects from "./components/Projects/Projects";
import Projects2 from "./components/Projects2/Projects2";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Projects2 />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;

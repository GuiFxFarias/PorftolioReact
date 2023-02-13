import { Element } from "react-scroll";
import "./App.css";
import Navbar from "./components/layout/NavBar";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Qualitys from "./components/pages/Qualitys";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Qualitys />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

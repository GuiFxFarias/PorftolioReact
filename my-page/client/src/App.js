import React from "react";
import Navbar from "./components/layout/NavBar";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Qualitys from "./components/pages/Qualitys";

import "./App.css";

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

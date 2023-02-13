import React, { Component } from "react";
import Navbar from "./components/layout/NavBar";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Qualitys from "./components/pages/Qualitys";


import "./App.css";

class App extends Component {
  state = {
    response: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/mensagem");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
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
}

export default App;

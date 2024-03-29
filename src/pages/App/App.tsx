import React from "react";

import logo from "../../assets/logo.svg";
import "./App.scss";

import Nav from "../../components/Nav/Nav";

const App: React.FC = () => (
  <div className="App">
    <Nav></Nav>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
)

export default App;

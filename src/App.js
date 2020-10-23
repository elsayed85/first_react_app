import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>First App Here</p>
        <div>
          <ul className="posts"></ul>
        </div>
      </header>
    </div>
  );
}

export default App;

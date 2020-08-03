import React, { Component } from "react";
import "./App.css";
import AddComp from "./components/AddComp";

class App extends Component {
  render() {
    return (
      <div className="app-main">
        <h1>Hello Webpack World!</h1>

        <p>This was not created using Create React App</p>
      </div>
    );
  }
}

export default App;

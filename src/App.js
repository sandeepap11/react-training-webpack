import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-main">
        <h1>Hello Webpack World!</h1>
        <p>This was not created using Create React App</p>
        <p style={{ color: "maroon", fontSize: "32px" }}>
          The environment is {process.env.ENVIRONMENT}
        </p>
        <p>The API URL is {process.env.API_URL}</p>
      </div>
    );
  }
}

export default App;

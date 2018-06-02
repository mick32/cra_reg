import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import News from "./News";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <News />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import News from "./News";
import Login from "./Login";
import Main from "./Main";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/news" exact component={News} />
            <Route path="/login" exact component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

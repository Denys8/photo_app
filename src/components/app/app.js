import React, { Component } from "react";
import Menu from "../Menu";
import Photos from "../Photos";
import Favorites from "../Favorites";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Photos />
        <Favorites />
      </div>
    );
  }
}

export default App;

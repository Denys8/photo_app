import React from "react";
import { BrowserRouter } from "react-router-dom";

import Menu from "../Menu";
import Router from "../Router";

import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Router />
      </div>
    </BrowserRouter>
  );
};

export default App;

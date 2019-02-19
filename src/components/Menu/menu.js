import React from "react";
import { NavLink } from "react-router-dom";
import data from "./menu.json";

import "./menu.scss";

const Menu = () => {
  return (
    <ul className="menu">
      {data.map(({ name, link }) => {
        return (
          <li key={link}>
            <NavLink to={link} exact>
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;

import React from "react";
import data from "./menu.json";

import "./menu.scss";

const Menu = () => {
  return (
    <ul className="menu">
      {data.map(({ name, link }) => {
        return (
          <li key={link}>
            <a href={link}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;

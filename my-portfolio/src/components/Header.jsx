import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav-list">
        <li><NavLink to="/about" activeclassname="active">Про мене</NavLink></li>
        <li><NavLink to="/my-city" activeclassname="active">Моє місто</NavLink></li>
        <li><NavLink to="/my-future" activeclassname="active">Мій розвиток</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;

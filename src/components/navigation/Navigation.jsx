import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to={"/movies"}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;

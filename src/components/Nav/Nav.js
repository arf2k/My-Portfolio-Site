import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Nav.styles.scss"

const Nav = () => {
  return (
    <div className="nav-container">
      <Link className="name-container" to="/">ALEX FOREMAN</Link>
      <div className="page-options-container">
        <Link className="page-option" to="/about">
          ABOUT
        </Link>
        <Link className="page-option" to="/projects">
          PROJECTS
        </Link>
        <Link className="page-option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    // width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  return (
    <div>
      <NavLink to='/' style={linkStyles}>
        HOME
      </NavLink>
      <NavLink to='/movies' style={linkStyles}>
        MOVIES
      </NavLink>
      <NavLink to='/actors' style={linkStyles}>
        ACTORS
      </NavLink>
      <NavLink to='/directors' style={linkStyles}>
        DIRECTORS
      </NavLink>
    </div>
  )
}

export default NavBar;

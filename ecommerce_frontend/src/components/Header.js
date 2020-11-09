import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/dashboard" activeStyle={activeStyle} exact>
        Dashboard
      </NavLink>
      {" | "}
      <NavLink to="/create" activeStyle={activeStyle} exact>
        Create
      </NavLink>
      {" | "}
      <NavLink to="/check" activeStyle={activeStyle} exact>
        Checkorder
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle} exact>
        About
      </NavLink>
    </nav>
  );
};

export default Header;

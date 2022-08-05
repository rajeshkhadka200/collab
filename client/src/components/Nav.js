import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="logo">Collab</div>
      <div className="links">
        <NavLink className={"editor_btn"} to={"/"}>
          Editor
        </NavLink>
        <span className="login_signup">Login</span>
      </div>
    </nav>
  );
};

export default Nav;

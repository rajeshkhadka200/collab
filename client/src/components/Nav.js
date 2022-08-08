import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <NavLink to={"/"}>
          <img src="/assets/logo.png" alt="" srcset="" />
        </NavLink>
        <NavLink to={"/"}>Collab</NavLink>
      </div>
      <div className="links">
        {/* <NavLink className={"editor_btn"} to={"/"}>
          Editor
        </NavLink> */}
        <span className="login_signup">Login</span>
      </div>
    </nav>
  );
};

export default Nav;

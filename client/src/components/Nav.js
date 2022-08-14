import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <NavLink to={"/"}>
          <img src="/assets/logo.png" />
        </NavLink>
        <NavLink to={"/"}>Collab</NavLink>
      </div>
      <div className="links">
        {/* <NavLink className={"editor_btn"} to={"/"}>
          Editor
        </NavLink> */}
        <span className="login_signup">Login</span>
        <img
          src="https://scontent.fbwa3-1.fna.fbcdn.net/v/t39.30808-6/270849698_636049147586954_6512254458201320833_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=x81A54eax2IAX9rLCnB&tn=M3JB9Wl9TKF3xrkY&_nc_ht=scontent.fbwa3-1.fna&oh=00_AT-k8XtX6wB3ATanrDXl97S7ykgcxO0Kruk_JPEOICh_iA&oe=62FC1D6D"
          alt="hello"
        />
      </div>
    </nav>
  );
};

export default Nav;

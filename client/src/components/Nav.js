import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "../css/nav.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//materail ui icons imports
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// login imports
import { useGoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import Cookies from "js-cookie";
import { ContexStore } from "../utils/Context";

const Nav = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token_collab");
  const contextData = useContext(ContexStore);
  const [userData, setUserData] = contextData.userInfo;

  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  };
  // auth
  const url = process.env.REACT_APP_BACKEND_URL;
  // const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientId =
    "540851545535-j672khl5mugioirkffn6gajlf3tobjno.apps.googleusercontent.com";

  // onsuccess
  const onSuccess = async (data) => {
    const { profileObj } = data;
    try {
      const res = await axios.post(`${url}/user`, profileObj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        Cookies.set("token_collab", res.data.token, { expires: 7 });
        window.location.reload();
      }
      if (res.status === 201) {
        Cookies.set("token_collab", res.data.token, { expires: 7 });
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // onfaliure
  const onFailure = (err) => {
    if (err.details == "Cookies are not enabled in current environment.") {
      toast.error("Auth doesnot currently works in Privite windows !");
    }
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId,
    onFailure,
  });
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const logOut = () => {
    Cookies.remove("token_collab");
    window.location.reload();
  };
  return (
    <nav>
      <div className="logo">
        <NavLink to={"/"}>
          <img src="/assets/logo.png" />
        </NavLink>
        <NavLink to={"/"}>Collab</NavLink>
      </div>
      <div className="links">
        {!token && (
          <span onClick={signIn} className="login_signup">
            Login
          </span>
        )}
        {token && (
          <span onClick={menuToggle} to={"/profile"}>
            <img src={userData[0]?.user_profile} />
          </span>
        )}
        <div className="menu">
          <ul>
            <li>
              <AccountCircleOutlinedIcon
                fontSize="small"
                className="navbar_link"
              />
              <Link to="/profile" className="navbar_a">
                My Profile
              </Link>
            </li>
            <li onClick={logOut}>
              <LogoutIcon fontSize="small" className="navbar_link" />
              <p className="navbar_a">Sign Out</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

//this file is the upper header of the profile section

import React, { useContext } from "react";
import "../css/user_details.css";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import { ContexStore } from "../utils/Context";
import Cookies from "js-cookie";
const UserDetails = ({ codeNum }) => {
  const contextData = useContext(ContexStore);
  const [userData] = contextData.userInfo;
  const logOut = () => {
    Cookies.remove("token_collab");
    window.location.reload();
  };
  return (
    <>
      <div className="header_con">
        <div className="img_con">
          <h2>
            I write <span>code</span>
          </h2>
        </div>

        <div className="detail_left">
          <div className="profile_img">
            <img src={userData[0]?.user_profile} />
          </div>
          <div className="header_basic_info">
            <h2>{userData[0]?.user_name}</h2>
            <span>{codeNum} snippts</span>
            <p>{userData[0]?.user_email}</p>
          </div>
        </div>
        <div className="detail_right">
          <button className="add_snipit">
            <AddIcon /> Open Editor
          </button>
          <button onClick={logOut} className="log_out">
            <LogoutIcon fontSize="small" />
            Sign out
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default UserDetails;

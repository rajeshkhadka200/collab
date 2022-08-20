//this file is the upper header of the profile section

import React from "react";
import "../css/user_details.css";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
const UserDetails = () => {
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
            <img src="https://scontent.fbwa3-1.fna.fbcdn.net/v/t39.30808-6/270849698_636049147586954_6512254458201320833_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZNi5JV7XWKMAX8dlXM3&_nc_ht=scontent.fbwa3-1.fna&oh=00_AT_z4u0an90iQIuLiT_UUEOAzQu7gnkTTQSug7WTU8Y_OQ&oe=63020C2D" />
          </div>
          <div className="header_basic_info">
            <h2>Rajesh Khadka</h2>
            <span>5 snippts</span>
            <p>rajeshkhadkaofficial45@gmail.com</p>
          </div>
        </div>
        <div className="detail_right">
          <button className="add_snipit">
            <AddIcon /> Go to Editor
          </button>
          <button className="log_out">
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

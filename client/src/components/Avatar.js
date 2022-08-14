import React from "react";
import Avatar, { ConfigProvider } from "react-avatar";
import "../css/avatar.css";
const UserAvatar = () => {
  return (
    <>
      <div className="avatar_con">
        <div className="avatar">
          <Avatar name={"Rajesh Khadka"} className="avatar_user" round="10px"  />
          <span>Rajesh Khadka</span>
        </div>
      </div>
    </>
  );
};

export default UserAvatar;

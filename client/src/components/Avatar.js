import React from "react";
import Avatar, { ConfigProvider } from "react-avatar";
import "../css/avatar.css";
const UserAvatar = ({ username }) => {
  return (
    <>
      <div className="client">
        <Avatar name={username} size={70} className="usr_icon" round="14px" />
        <span className="userName">
          {username?.substring(0, 8)}
          {username.length > 8 && "..."}
        </span>
      </div>
    </>
  );
};

export default UserAvatar;

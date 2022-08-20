import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserAvatar from "./Avatar";

const EditorSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room_id, username } = location.state.details;
  const copyRoom = () => {
    const el = document.createElement("input");
    el.value = "hellooooo";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  const redirect = () => {
    navigate(`/`);
  };
  return (
    <div className="editor_left">
      <div onClick={redirect} className="editor_header">
        <img src="/assets/logo.png" alt="no img found" />
        <div className="editor_header_desc">
          <h3>Collab</h3>
          <span>Real time code collobration </span>
        </div>
      </div>
      <div className="editor_left_user_section">
        {/* this t */}
        <span>Connected Users</span>
        <div className="all_users">
          {/* <UserAvatar /> */}
        </div>
      </div>
      <div className="editor_left_footer">
        <button className="white_btn">Copy Room Id</button>
        <button onClick={copyRoom} className="theme_btn">
          Leave Room
        </button>
      </div>
    </div>
  );
};

export default EditorSidebar;

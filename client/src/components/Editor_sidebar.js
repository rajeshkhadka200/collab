import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserAvatar from "./Avatar";
import { toast } from "react-toastify";

const EditorSidebar = ({ users }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room_id } = location.state.details;
  const copyRoom = async () => {
    try {
      toast.success("Link copied to clipboard.");
      await navigator.clipboard.writeText(room_id);
    } catch (error) {
      console.log("err while copy");
    }
  };
  const redirect = () => {
    navigate(`/`);
  };
  // leave the current room
  const leaveRoom = () => {
    navigate("/");
    toast.success("You Left the room !");
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
          {users.map(({ username }) => {
            return <div key={username}>{username}</div>;
          })}
        </div>
      </div>
      <div className="editor_left_footer">
        <button className="white_btn" onClick={copyRoom}>
          Copy Room Id
        </button>
        <button onClick={leaveRoom} className="theme_btn">
          Leave Room
        </button>
      </div>
    </div>
  );
};

export default EditorSidebar;

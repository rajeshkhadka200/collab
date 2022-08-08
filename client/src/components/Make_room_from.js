import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/room_gen_form.css";
import { v4 as uuidv4 } from "uuid";

const RoomForm = () => {
  // handle states for inputs
  // const [details, setuseDetails] = useState({
  //   room_id,
  //   username,
  // });
  // generate room new
  const generateID = () => {
    const roomId = uuidv4();
  };

  return (
    <>
      <section className="form_container">
        <div className="form">
          <div className="form_header">
            <img src="/assets/logo.png" alt="no img found" />
            <div className="header_desc">
              <h3>Collab</h3>
              <span>Real time code collobration </span>
            </div>
          </div>
          <div className="form_body">
            <h4>Paste invitation ROOM ID</h4>
            <input required type="text" placeholder="Room id" />
            <input required type="text" placeholder="username" />
          </div>
          <div className="form_btn_grp">
            <NavLink to={"/goto"}>JOIN ROOM</NavLink>
          </div>
          <div className="card_footer">
            If you don't have an invite then create{" "}
            <span onClick={generateID}>new room </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomForm;

import React, { useState } from "react";
import "../css/room_gen_form.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const RoomForm = () => {
  const navigate = useNavigate();
  // handle states for inputs
  const [details, setDetails] = useState({
    room_id: "",
    username: "",
  });

  // generate room new
  const generateID = () => {
    let id = uuidv4();
    setDetails({
      ...details,
      room_id: id,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };
  // redirect to editor

  const redirect = () => {
    if (details.room_id === "" || details.username === "") {
      return toast.error("Credintials are required !!");
    }

    navigate(`/editor/${details?.room_id}`, {
      state: {
        details,
      },
    });
  };
  return (
    <>
      <section className="form_container">
        <div className="form">
          <div className="form_header">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1534/1534959.png"
              alt="no img found"
            />
            <div className="header_desc">
              <h3>Collab</h3>
              <span>Real time code collobration </span>
            </div>
          </div>
          <div className="form_body">
            <h4>Paste invitation ROOM ID</h4>
            <form>
              <input
                name="room_id"
                value={details.room_id}
                required
                type="text"
                onChange={handleChange}
                placeholder="Room id"
              />
              <input
                name="username"
                value={details.username}
                required
                type="text"
                onChange={handleChange}
                placeholder="username"
              />
            </form>
          </div>
          <div className="form_btn_grp">
            <span onClick={redirect}>JOIN ROOM</span>
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

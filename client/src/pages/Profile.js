import React, { useContext, useEffect } from "react";
import UserDetails from "../components/User_details";
import Nav from "../components/Nav.js";
import MyCode from "../components/My_code";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ContexStore } from "../utils/Context";
const Profile = () => {
  const contextData = useContext(ContexStore);
  const [minePost, setMinePost] = contextData.post;
  const navigate = useNavigate();
  const token = Cookies.get("token_collab");
  const url = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    const fetchMyCode = async () => {
      const res = await axios.get(`${url}/code/${token}`);
      setMinePost(res.data);
    };
    fetchMyCode();
  }, []);

  return (
    <>
      {token && (
        <>
          <Nav />
          <UserDetails codeNum={minePost?.length} />
          <MyCode code={minePost} />
          {minePost.length === 0 && (
            <div className="no_code">Yo haven't saved any codes yet ! 🙂</div>
          )}
        </>
      )}
    </>
  );
};

export default Profile;

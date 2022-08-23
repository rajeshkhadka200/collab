import React, { useEffect, useState } from "react";
import UserDetails from "../components/User_details";
import Nav from "../components/Nav.js";
import MyCode from "../components/My_code";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Profile = () => {
  const [minePost, setMinePost] = useState([]);
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
        </>
      )}
    </>
  );
};

export default Profile;

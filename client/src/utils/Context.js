import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const ContexStore = createContext();

const Context = (props) => {
  const token = Cookies.get("token_collab");
  const [isModel, setisModel] = useState(false);
  const [userData, setUserData] = useState([]);
  const [minePost, setMinePost] = useState([]);
  const handleModel = () => {
    if (token) {
      setisModel(!isModel);
    } else {
      toast.info("Login to save code !!");
    }
  };

  const url = process.env.REACT_APP_BACKEND_URL;

  // get userr data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await axios.get(`${url}/user/${token}`);
        setUserData(user.data);
      } catch (error) {
        console.log(error);
        alert("Error fetching user");
      }
    };
    if (token) {
      fetchUser();
    }
  }, [token]);

  return (
    <>
      <ContexStore.Provider
        value={{
          modelData: [isModel, setisModel, handleModel],
          userInfo: [userData, setUserData],
          post: [minePost, setMinePost],
        }}
      >
        {props.children}
      </ContexStore.Provider>
    </>
  );
};

export default Context;

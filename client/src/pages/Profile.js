import React from "react";
import UserDetails from "../components/User_details";
import Nav from "../components/Nav.js";
import MyCode from "../components/My_code";
const Profile = () => {
  return (
    <>
      <Nav />
      <UserDetails />
      <MyCode />
    </>
  );
};

export default Profile;

import React from "react";

import HeroSection from "../components/Hero_section";
import PostModel from "../components/Modal";
import Nav from "../components/Nav";
import Service from "../components/Service";

const Home = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <Service />
    </>
  );
};

export default Home;

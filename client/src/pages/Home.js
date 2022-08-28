import React, { useContext } from "react";
import HeroSection from "../components/Hero_section";
import Nav from "../components/Nav";
import VideoModal from "../components/VideoModal";
import { ContexStore } from "../utils/Context";

const Home = () => {
  const contextData = useContext(ContexStore);
  const [videoModal] = contextData.vdoModal;
  return (
    <>
      <Nav />
      <HeroSection />
      {videoModal && <VideoModal />}
    </>
  );
};

export default Home;

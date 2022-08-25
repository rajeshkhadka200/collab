import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero_section";
import PostModel from "../components/Modal";
import Nav from "../components/Nav";
import Service from "../components/Service";
import "../css/services.css";
const Home = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <div className="video">
        <iframe
          width="600"
          height="315"
          src="https://www.youtube.com/embed/WMolA7QMP5w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Service />
      {/* <Footer /> */}
    </>
  );
};

export default Home;

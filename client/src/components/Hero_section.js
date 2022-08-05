import React from "react";
import "../css/hero_section.css";
const HeroSection = () => {
  return (
    <section className="home_hero_section">
      <h1 className="hero_title">
        Introducing <span>Collab</span>
      </h1>
      <p className="hero_desc">
        A realtime code-sync tool, Collab is the platform for any developer or a
        code enthusiasts who wants to collobrate with other developer around the
        globe.
      </p>
      <div className="hero_btn_grp">
        <button className="get_started">Get started</button>
        <button className="src_code">View on github</button>
      </div>
    </section>
  );
};

export default HeroSection;

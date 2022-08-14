import React from "react";
import { NavLink } from "react-router-dom";
import "../css/hero_section.css";

// icons import
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

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
        <NavLink className="get_started btn" to="/generare-room-id">
          Get started
        </NavLink>
        <a
          className="src_code btn"
          target={"_blank"}
          href="https://github.com/rajeshkhadka200/collab"
        >
          View on github
        </a>
      </div>
      {/* <div className="arrow_hero_con">
        <ArrowBackIosRoundedIcon className="down_arrow" />
      </div> */}
    </section>
  );
};

export default HeroSection;

import React from "react";
import "../css/my_code.css";
import SingleCode from "./Single_code";
const MyCode = () => {
  return (
    <>
      <section className="my_code_wrapper">
        <div className="search_header">
          <header>Your Codes</header>
          <input type="text" placeholder="serch code title" />
        </div>
        <SingleCode />
        <SingleCode />
        <SingleCode />
      </section>
    </>
  );
};

export default MyCode;

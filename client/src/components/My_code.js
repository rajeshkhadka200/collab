import React from "react";
import "../css/my_code.css";
import SingleCode from "./Single_code";
const MyCode = ({ code }) => {
  return (
    <>
      <section className="my_code_wrapper">
        <div className="search_header">
          <header>Your Codes</header>
          <input type="text" placeholder="serch code title" />
        </div>
        {code?.map((data) => {
          return <SingleCode data={data} />;
        })}
      </section>
    </>
  );
};

export default MyCode;

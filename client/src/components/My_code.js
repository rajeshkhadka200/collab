import React, { useState } from "react";
import "../css/my_code.css";
import SingleCode from "./Single_code";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
const MyCode = ({ code }) => {
  const [input, setinput] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const url = process.env.REACT_APP_BACKEND_URL;

  const search = async () => {
    const res = await axios.get(`${url}/code/search/${input}`);
    console.log(res);
    // if (res.status === 200) {
    setsearchResult(res.data);
    // }
  };
  console.log(searchResult);
  return (
    <>
      <section className="my_code_wrapper">
        <div className="search_header">
          <header>Your Codes</header>
          <div className="search">
            <input
              onChange={(e) => {
                setinput(e.target.value);
              }}
              type="text"
              placeholder="serch code title"
            />
            <button>
              <SearchIcon onClick={search} className="search_icon" />
            </button>
          </div>
        </div>
        {code?.map((data) => {
          return <SingleCode data={data} />;
        })}
      </section>
    </>
  );
};

export default MyCode;

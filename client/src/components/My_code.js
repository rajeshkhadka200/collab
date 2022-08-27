import React, { useEffect, useState } from "react";
import "../css/my_code.css";
import SingleCode from "./Single_code";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { toast } from "react-toastify";
const MyCode = ({ code }) => {
  const [input, setinput] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const url = process.env.REACT_APP_BACKEND_URL;

  const search = async () => {
    if (input == "") {
      toast.error(`Search cannot be empty`);
      return;
    }
    const res = await axios.get(`${url}/code/search/${input}`);

    if (res.status === 204) {
      return toast.info("No code found");
    }
    setsearchResult(res.data);
    toast.success(` Result found`);
  };
  useEffect(() => {
    if (input === "") {
      setsearchResult([]);
    }
  }, [input]);

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
            <button onClick={search}>
              <SearchIcon className="search_icon" />
            </button>
          </div>
        </div>

        {searchResult.length === 0 &&
          code?.map((data) => {
            return <SingleCode data={data} />;
          })}

        {searchResult.length > 0 &&
          searchResult?.map((data) => {
            return <SingleCode tag={input} data={data} />;
          })}
      </section>
    </>
  );
};

export default MyCode;

import React, { useContext, useState } from "react";
import "../css/post_model.css";
import CloseIcon from "@mui/icons-material/Close";
import { ContexStore } from "../utils/Context";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
const PostModel = ({ code }) => {
  const token = Cookies.get("token_collab");
  const contextData = useContext(ContexStore);
  const [isModel, setisModel, handleModel] = contextData.modelData;

  // post code to database
  const [title, settitle] = useState("");

  const postCode = async (e) => {
    e.preventDefault();
    if (code === null) {
      toast.info("Nothing to Save !!");
      return;
    }
    if (title === "") {
      toast.info("Please add some title.");
      return;
    }
    const url = process.env.REACT_APP_BACKEND_URL;
    // post
    try {
      const res = await axios.post(
        `${url}/code/`,
        {
          code_title: title,
          code,
          code_doc: 2078,
          user_id: token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 201) {
        setisModel(!isModel);
        toast.success("Code saved to your Profile !");
      } else {
        toast.error("Somethng went wong !");
      }
    } catch (error) {
      console.log("Error !!");
    }
  };
  return (
    <>
      <section className="model_big_wrappper">
        <div className="post_model">
          <div className="model_header">
            <h3>Create Code Snippits</h3>
            <CloseIcon className="cross" onClick={handleModel} />
          </div>
          <div className="divider_post"></div>

          <form className="model_body">
            <input
              type="text"
              onChange={(e) => {
                settitle(e.target.value);
              }}
              placeholder="Enter the code title"
            />
            <button onClick={postCode}>Post</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PostModel;

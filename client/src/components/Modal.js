import React, { useContext, useState } from "react";
import "../css/post_model.css";
import CloseIcon from "@mui/icons-material/Close";
import { ContexStore } from "../utils/Context";
const PostModel = () => {
  const contextData = useContext(ContexStore);
  const [isModel, setisModel, handleModel] = contextData.modelData;

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
            <input type="text" placeholder="Enter the code title" required />
            <button>Save</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PostModel;

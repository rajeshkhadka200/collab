import React, { useContext } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { ContexStore } from "../utils/Context";
const SingleCode = (props) => {
  const contextData = useContext(ContexStore);
  const [minePost, setMinePost] = contextData.post;
  const url = process.env.REACT_APP_BACKEND_URL;
  const deleteCode = async (id) => {
    const res = await axios.delete(`${url}/code/${id}`);
    console.log(res);
    if (res.status === 200) {
      setMinePost((prev) => {
        return prev.filter((post) => {
          return post.code_id !== id;
        });
      });
    }
  };
  return (
    <>
      <div className="single_code_wrapper">
        <div className="single_code">
          <div className="code_title">
            <h3>{props.data.code_title}</h3>
          </div>
          <div className="code_body">
            <Tooltip title="Delete">
              <DeleteForeverOutlinedIcon
                onClick={() => {
                  deleteCode(props.data.code_id);
                }}
                fontSize={"small"}
                className="dlt_icon"
              />
            </Tooltip>
            <CopyBlock
              text={props.data.code}
              language={"javascript"}
              showLineNumbers={true}
              theme={dracula}
              codeBlock
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCode;

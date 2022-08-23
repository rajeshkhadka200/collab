import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
const SingleCode = (props) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const deleteCode = async (id) => {
    const res = await axios.delete(`${url}/code/${id}`);
    
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

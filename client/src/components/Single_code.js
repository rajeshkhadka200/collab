import React, { useContext } from "react";
import { CopyBlock, dracula, codepen, atomOneDark } from "react-code-blocks";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { ContexStore } from "../utils/Context";
import { toast } from "react-toastify";
const SingleCode = (props) => {
  const contextData = useContext(ContexStore);
  const [minePost, setMinePost] = contextData.post;
  const url = process.env.REACT_APP_BACKEND_URL;
  const { tag } = props;
  const deleteCode = async (id) => {
    const res = await axios.delete(`${url}/code/${id}`);
    if (res.status === 200) {
      setMinePost((prev) => {
        return prev.filter((post) => {
          return post.code_id !== id;
        });
      });
      toast.success("Code deleted ");
    }
  };
  return (
    <>
      <div className="single_code_wrapper">
        <div className="single_code">
          <div className="code_title">
            <h3 className={tag ? "hilight" : null}>{props.data.code_title}</h3>
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

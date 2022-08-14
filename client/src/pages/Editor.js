import React, { useEffect, useRef } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UserAvatar from "../components/Avatar";
import "../css/editor.css";
import { AiFillSave } from "react-icons/ai";

import Codemirror from "codemirror";
//imports fadons
import "codemirror/lib/codemirror.css";
import "codemirror/theme/abbott.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/wrap/hardwrap.js";
import "codemirror/addon/hint/javascript-hint";

import EditorSidebar from "../components/Editor_sidebar";
import { initSocketClient } from "../socket/socket";
const Editor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room_id, username } = location.state.details;
  // console.log({ username, room_id });
  // hello
  const socketRef = useRef(null);
  useEffect(() => {
    async function init() {
      socketRef.current = await initSocketClient();
      // error handalling
      socketRef.current.on("connect_error", (err) => {
        handleError(err);
      });
      socketRef.current.on("connect_failed", (err) => {
        handleError(err);
      });

      const handleError = (err) => {
        console.log("the err", err);
        alert("Failed to conntect");
      };
      socketRef.current.emit("join", {
        room_id,
        username,
      });
    }
    init();
  }, []);

  useEffect(() => {
    async function init() {
      const editor = Codemirror.fromTextArea(
        document.getElementById("editor"),
        {
          mode: { name: "javascript", json: true },
          theme: "abbott",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
          lineWrapping: true,
        }
      );
      // editor.getDoc().setValue("// your javascript code goes here");
    }
    init();
  }, []);

  if (!location.state) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <section className="editor_wrapper">
        <EditorSidebar />
        <div className="editor_right">
          <button className="btn_save">
            Save <AiFillSave className="icons_save" />{" "}
          </button>
          {/* editor body starts */}
          <textarea id="editor" wrap="hard" />
        </div>
      </section>
    </>
  );
};

export default Editor;

import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import "../css/editor.css";
import { AiFillSave } from "react-icons/ai";
import { toast } from "react-toastify";

import Codemirror from "codemirror";
//imports fadons
import "codemirror/lib/codemirror.css";
import "codemirror/theme/abbott.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";

import EditorSidebar from "../components/Editor_sidebar";
import { initSocketClient } from "../utils/socket";
import PostModel from "../components/Modal";
import { ContexStore } from "../utils/Context";
import { disconnecting, join, joined } from "../utils/libs";
const Editor = (params) => {
  const p = useParams();

  // handle model
  const [users, setusers] = useState([]);
  const contextData = useContext(ContexStore);
  const [isModel, setisModel, handleModel] = contextData.modelData;

  const location = useLocation();
  const navigate = useNavigate();
  const { room_id, username } = location.state.details;
  const socketRef = useRef(null);
  const actualCodeRef = useRef(null);
  useEffect(() => {
    if (!username) {
      return <Navigate to="/" />;
    }
  }, []);

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
        toast.error("Failed to connect, Please try again ");
        navigate("/");
      };

      // sockets functions
      join(socketRef, room_id, username); // req for joining to the room
      joined(socketRef, username, setusers, actualCodeRef, toast); // listening for joined event
      disconnecting(socketRef, setusers, toast); // listening for disconnected action
    }
    init();
    return () => {
      socketRef.current.disconnect();
      socketRef.current.off("joined");
      socketRef.current.off("disconnected");
    };
  }, []);

  const codeRef = useRef(null);
  useEffect(() => {
    async function Editorinit() {
      codeRef.current = Codemirror.fromTextArea(
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
      codeRef.current.on("change", (ins, changes) => {
        const { origin } = changes;
        const code = ins.getValue();
        actualCodeRef.current = code;
        if (origin !== "setValue") {
          socketRef.current.emit("code-change", {
            room_id,
            code: actualCodeRef.current,
          });
        }

        // informing all clients if user pasted something into editor
        if (origin === "paste") {
          socketRef.current.emit("pasted", {
            room_id,
            username,
          });
        }
        socketRef.current.on("pasted-res", (data) => {
          console.log(data);
        });
      });
    }
    Editorinit();
  }, []);

  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on("code-change", ({ code }) => {
        if (code !== null) {
          codeRef.current.setValue(code);
        }
      });
    }

    return () => {
      socketRef.current.off("code-change");
    };
  }, [socketRef.current]);

  return (
    <>
      <section className="editor_wrapper">
        <EditorSidebar users={users} socketRef={socketRef} />
        <div className="editor_right">
          <button onClick={handleModel} className="btn_save">
            Save <AiFillSave className="icons_save" />{" "}
          </button>
          {/* editor body starts */}
          <textarea id="editor" wrap="hard" />
        </div>
      </section>

      {isModel && <PostModel code={actualCodeRef.current} />}
    </>
  );
};

export default Editor;

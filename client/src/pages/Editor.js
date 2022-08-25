import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

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
import "codemirror/addon/wrap/hardwrap.js";
import "codemirror/addon/hint/javascript-hint";

import EditorSidebar from "../components/Editor_sidebar";
import { initSocketClient } from "../utils/socket";
import PostModel from "../components/Modal";
import { ContexStore } from "../utils/Context";
const Editor = () => {
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

      // req for joining to the room
      socketRef.current.emit("join", {
        room_id,
        username,
      });

      // listening for joined event
      socketRef.current.on(
        "joined",
        ({ username: name, socketId, allClients }) => {
          if (name !== username) {
            toast.success(`${name} Joined the room !!`);
          }
          setusers(allClients);
          socketRef.current.emit("sync-code", {
            code: actualCodeRef.current,
            socketId,
          });
        }
      );

      // listening for disconnected action
      socketRef.current.on("disconnected", ({ username, socketId }) => {
        toast.info(`${username} got disconnected !`);
        setusers((prev) => {
          return prev.filter((data) => {
            return data.socketId !== socketId;
          });
        });
      });
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
      // codeRef.current.setValue('var msg = "Hi";');
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

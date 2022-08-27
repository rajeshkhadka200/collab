import React, { useContext } from "react";
import "../css/video_modal.css";
import { ContexStore } from "../utils/Context";

const VideoModal = () => {
  const contextData = useContext(ContexStore);
  const [videoModal, setvideoModal] = contextData.vdoModal;

  const handleClick = () => {
    setvideoModal(!videoModal);
  };

  return (
    <div onClick={handleClick} className="wrap">
      <div className="video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/PSfT7IA-jB0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;

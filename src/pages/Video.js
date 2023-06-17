import React, { useRef, useState } from "react";
import "./video.css";
import VideFooter from "./components/footer/VideoFooter"
import VideoSidebar from "./components/sidebar/VideoSidebar"

function  Video({likes, messenges, shares, name, description, music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      
      <video
        className="video_player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>

      <VideoSidebar
        likes={likes}
        messenges={messenges}
        shares={shares}
      />
      <VideFooter 
        name={name}
        description={description}
        music={music}
      />

    </div>
  );
}

export default Video;
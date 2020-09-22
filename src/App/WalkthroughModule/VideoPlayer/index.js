import React from "react";
import "./index.css";

function VideoPlayer(props) {
  return (
    <div className="video-player">
      <video
        controls
        poster={props.video.thumb}
        key={props.video.url}
        autoPlay
        onEnded
        className="video-component"
      >
        <source src={props.video.url} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;

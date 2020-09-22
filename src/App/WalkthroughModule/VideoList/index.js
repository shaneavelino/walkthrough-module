import React, { useState } from "react";
import "./index.css";

function VideoList(props) {
  const [videoInfo, setVideoInfo] = useState(props.videos[0]);
  const [selected, setSelected] = useState(false);

  const selectedVideoStyle = {
    backgroundColor: selected ? "#d4e2fe" : "white",
  };

  return (
    <div className="video-list">
      <h1>ThankView Walkthrough</h1>
      <h2>Total:</h2>
      <div>
        <ol>
          {props.videos.map((video) => (
            <li
              style={selectedVideoStyle}
              key={video.title}
              onClick={() => {
                props.onChange(video);
                setVideoInfo(video);
              }}
            >
              {video.title + " "}
              {video.minutes + "m " + video.seconds + "s"}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default VideoList;

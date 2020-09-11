import React from 'react';
import './index.css';

function VideoList(props) {
  return (
    <ol className='video-list'>
      {props.videos.map((video) => (
        <li className='video-item'>
          <div className="video-title">{video.title}</div>
          <div className="video-length">{video.minutes + 'm ' + video.seconds + 's'}</div>
        </li>
      ))}
    </ol>
  );
}

export default VideoList;

import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const data = video.snippet;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={data.thumbnails.medium.url} alt="" />
      <div className="content">
        <p className="header">{data.title}</p>
      </div>
    </div>
  );
}

export default VideoItem;
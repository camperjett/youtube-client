import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const RenderedList = videos.map(video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />);
  return (
    <div className="">
      <p>Search Results: {videos.length}</p>
      <div className="ui middle aligned divided list">
        {RenderedList}
      </div>
    </div>
  )
}
export default VideoList;
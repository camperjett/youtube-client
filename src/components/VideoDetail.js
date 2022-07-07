import React from "react";

const VideoDetail = ({ video, key }) => {
  if (!video) return (
    <div className="">
      <div className="ui embed" data-source="youtube" data-id="O6Xo21L0ybE" data-placeholder="/images/image-16by9.png">
        <iframe width="250" height="250" src={`https://www.youtube.com/embed/${video ? video.id.videoId : "dQw4w9WgXcQ"}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="ui container segment">
        <h4 className="ui header">Try Searching for a video</h4>
        <p>or watch this awesome music video!</p>
      </div>
    </div>
  )
  return (
    <div className="">
      <div className="ui embed" data-source="youtube" data-id="O6Xo21L0ybE" data-placeholder="/images/image-16by9.png">
        <iframe width="250" height="250" src={`https://www.youtube.com/embed/${video ? video.id.videoId : "dQw4w9WgXcQ"}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="ui container segment">
        <h4 className="ui header">{video && video.snippet.title}</h4>
        <p>{video && video.snippet.description}</p>
      </div>
    </div>
  );
}
export default VideoDetail;
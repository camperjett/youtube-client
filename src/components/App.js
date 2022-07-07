import React from "react";
import YouTube from "../api/YouTube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], loadingVideos: false, selectedVideo: null };

  onSubmit = async term => {
    // console.log(term);
    this.setState({ loadingVideos: true });
    const response = await YouTube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ loadingVideos: false });
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: this.state.videos[0] })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    // console.log(video);
  }
  render() {
    return (
      <div >
        < SearchBar onSubmit={this.onSubmit} loadingVideos={this.state.loadingVideos} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
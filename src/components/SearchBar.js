import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
  state = {
    term: ""
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={e => this.onSubmit(e)}>
          <div className={`ui fluid category ${this.props.loadingVideos ? "loading" : ""} search`}>
            <div className="ui fluid icon input">
              <input className="prompt" placeholder="Search..." value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
              <i className="search icon"></i>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default SearchBar;
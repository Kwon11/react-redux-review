import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.jsx';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList.jsx';
import VideoDetail from './components/VideoDetail.jsx';
import _ from 'lodash';

const API_KEY = "AIzaSyCa8F6JRMT1ObKRwQB8o8KkUN4C-tgDic4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('React.js');
  }

  videoSearch = (term) => {
    YTSearch({key: "AIzaSyCa8F6JRMT1ObKRwQB8o8KkUN4C-tgDic4", term: term}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]})
    })
  }

  render () {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={(term) => videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})  }
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


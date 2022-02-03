import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCb-0MR7-2IO8txrMjtA71rOp8WQQ35964';


// Create a new component . this component should produce some HTML

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [] ,
      selectedVideo: null

    };
    this.videoSearch('perros');

  }

  videoSearch(term){
    YTSearch( { key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]

      });
    });
  }

  render() {
    //Call the function every 300ms ...we can delay the calls with lodash library
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}



//Take this components Generate an HTML and put it on the DOM (PAGE)
ReactDOM.render(<App />, document.querySelector('.container'));

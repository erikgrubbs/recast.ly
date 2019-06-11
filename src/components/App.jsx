import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
      // index: indexof props.video;
    };
  }

  // onVideoClick(videoId) {
  //   this.setState( {
  //     currentVideo: videoId
  //   })
  // }

  render() {
    return (  
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div id="videoPlayer" className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div id="videoList" className="col-md-5">
            <VideoList appState={this.state} videos={exampleVideoData} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
// import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],  
      currentVideo: //exampleVideoData[0],
      {
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: ''
            },
          }
        }
      }, 
      search: 'diy'
    };
    this.onVideoClick = this.onVideoClick.bind(this);
    this.onType = this.onType.bind(this);
  }

  onVideoClick(event) {
    var newVid = this.state.videos.find((video) => {
      return video.snippet.title === event.target.textContent;
    });

    this.setState({
      currentVideo: newVid
    });
  }
 
  onType(event) {
    console.log(event.target.value);
    this.setState({
      search: event.target.value
    }); 
    
    var options = {
      query: this.state.search,
      max: 5,
      key: YOUTUBE_API_KEY
    };

    searchYouTube(options, (data) => {
      this.setState({ 
        videos: data.items,
        currentVideo: data.items[0]
      });  
    });
  }

  render() {
    return (  
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchFunc={this.onType}/>
          </div>
        </nav>
        <div className="row">
          <div id="videoPlayer" className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div id="videoList" className="col-md-5">
            <VideoList clickFunc={this.onVideoClick} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var options = {
      query: this.state.search,
      max: 5,
      key: YOUTUBE_API_KEY
    };

    searchYouTube(options, (data) => {
      this.setState({ 
        videos: data.items,
        currentVideo: data.items[0]
      });  
    });
  }


}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

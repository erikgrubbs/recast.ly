import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],  
      currentVideo:
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
    };
    this.onVideoClick = this.onVideoClick.bind(this);
    this.getVideos = this.getVideos.bind(this);
  }


 

  render() {
    return (  
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchFunc={this.getVideos}/>
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
    this.getVideos('bananas');
  }

  getVideos(query) {
    var options = {
      query: query,
      max: 5,
      key: this.props.YOUTUBE_API_KEY
    };

    this.props.searchYouTube(options, (data) => {
      this.setState({ 
        videos: data.items,
        currentVideo: data.items[0]
      });  
    });
  }

  onVideoClick(event) {
    var newVid = this.state.videos.find((video) => {
      return video.snippet.title === event.target.textContent;
    });

    this.setState({
      currentVideo: newVid
    });
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

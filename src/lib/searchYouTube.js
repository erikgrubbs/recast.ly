var searchYouTube = (options, callback) => {
  // TODO
  var result;

  $.get('https://www.googleapis.com/youtube/v3/search', {
    videoEmbeddable: true,
    type: 'video',
    key: options.key,
    maxResults: options.max,
    q: options.query,
    part: 'snippet',
  }, callback );
};

export default searchYouTube;

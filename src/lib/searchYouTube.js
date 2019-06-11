var searchYouTube = (options, callback) => {
  // TODO

  $.get('https://www.googleapis.com/youtube/v3/search', {
    videoEmbeddable: true,
    type: 'video',
    key: options.key,
    max: options.max,
    query: options.query,
    part: 'snippet',
  }, (result) => { console.log(result); });

};


// id
//   videoId
// snippet
//   title
//   description
//   thumbnails



export default searchYouTube;

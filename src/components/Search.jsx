var Search = ({searchFunc}) => {
  searchFunc = _.debounce(searchFunc, 500);
  
  return (
    <div className="search-bar form-inline">
      <input onChange={(event) => searchFunc(event.target.value)} className="form-control" type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

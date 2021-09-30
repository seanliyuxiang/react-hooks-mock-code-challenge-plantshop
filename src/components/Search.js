import React from "react";

function Search({ searchText, searchPlantsHandler }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={searchPlantsHandler}
        value={searchText}
      />
    </div>
  );
}

export default Search;

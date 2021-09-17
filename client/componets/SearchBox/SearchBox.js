import React from 'react';


const SearchBox = ({handleSearch}) => (
  <input
    placeholder="Find your fun"
    className="SearchField"
    onChange={handleSearch}
  />
)
export default SearchBox;
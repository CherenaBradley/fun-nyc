import React from 'react';
import './SearchBox.scss'


const SearchBox = ({handleSearch}) => (
  <input
    placeholder="Find your fun"
    className="searchField"
    onChange={handleSearch}
  />
)
export default SearchBox;
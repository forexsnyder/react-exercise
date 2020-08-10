import React, { useState, useEffect } from "react";
import "./SearchBar.css"

function SearchBar({ searchText, updateSearchText }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '40px',
        paddingTop: '100px',
      }}
    >
      <form>
        <label htmlFor="searchBar"></label>
        <input
          type="search"
          id="searchBar"
          name="searchBar"
          placeholder="Search"
          onChange={(e) => updateSearchText(e.target.value)}
          value={searchText}
        />
      </form>
    </div>
  );
}

export default SearchBar;

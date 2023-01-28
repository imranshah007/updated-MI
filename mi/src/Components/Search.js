import React from "react";
import "../App.css";
const Search = ({ onInputChange }) => {
  return (
    <div className="search">
      <input
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Search Domain"
        className="Text"
      />
    </div>
  );
};

export default Search;

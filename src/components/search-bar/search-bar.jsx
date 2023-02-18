import React from "react";
import "../../styles/main.scss";

export function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="search-input">
        <input type="text" placeholder={placeholder} />
        <div className="search-icon"></div>
      </div>
      <div className="data-result"></div>
    </div>
  );
}

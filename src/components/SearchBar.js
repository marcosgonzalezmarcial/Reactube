import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(searchTerm);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <div className="searchBar">
      <SearchIcon onClick={handleClick} className="searchBar__Button" />
      <input
        placeholder="Buscar..."
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default SearchBar;

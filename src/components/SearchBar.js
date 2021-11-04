import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
import { useHistory } from "react-router";
import StateContext from "../context/StateContext";

const SearchBar = () => {
  const { handleSubmit } = useContext(StateContext);
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (searchTerm === "") {
        alert("El campo buscar no puede quedar vacío");
      } else {
        handleSubmit(searchTerm);
        history.push("/search");
        history.push({ search: `q=${searchTerm}` });
        // history.push(`/search/${searchTerm}`);
      }
    }
  };
  const handleClick = (e) => {
    if (searchTerm === "") {
      alert("El campo buscar no puede quedar vacío");
    } else {
      handleSubmit(searchTerm);
      history.push(`/search/${searchTerm}`);
    }
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

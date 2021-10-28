import React from "react";
import "./Header.css";
import { SearchBar } from "..";

const Header = ({ onSubmit }) => {
  return (
    <header className="header">
      <SearchBar onSubmit={onSubmit} className="header__input" />
    </header>
  );
};

export default Header;

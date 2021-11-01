import React, { useContext } from "react";
import { VideoList } from "../components";
import StateContext from "../context/StateContext";
import "./SearchPage.css";

const SearchPage = () => {
  const { state, dispatch } = useContext(StateContext);
  return (
    <main className="searchPage">
      <section className="searchPage__videoResults">
        <VideoList
          className="searchPage__videoResults__items"
          videos={state.searchResults}
          handleVideoSelect={dispatch}
        />
      </section>
    </main>
  );
};

export default SearchPage;

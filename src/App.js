import React, { useEffect } from "react";
import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import SearchPage from "./pages/SearchPage";
import { Route, Switch } from "react-router";
import { SearchBar } from "./components";
import Home from "./pages/Home";
import History from "./pages/History";
import Favourites from "./pages/Favourites";
import VideoDetailPage from "./pages/VideoDetailPage";
import { useAppContext } from "./context/StateContext";

const App = () => {
  const { state } = useAppContext();

  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <SearchBar className="searchBar" />
        <Switch>
          <Route exact path="/home/videoDetail">
            <VideoDetailPage />
          </Route>
          <Route exact path="/home/search">
            <SearchPage />
          </Route>
          <Route exact path="/historial">
            <History />
          </Route>
          <Route exact path="/favoritos">
            <Favourites />
          </Route>
          <Route path={"/home"} exact>
            <Home />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;

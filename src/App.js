import React, { useEffect, useReducer } from "react";
import "./App.css";
import youtubeFetch from "./api/youtubeFetch";
import { appReducer, initialState } from "./reducers/appReducer";
import { TYPES } from "./actions/appActions";
import Sidebar from "./components/sidebar/Sidebar";
import SearchPage from "./pages/SearchPage";
import { Route, Switch } from "react-router";
import { SearchBar } from "./components";
import Home from "./pages/Home";
import History from "./pages/History";
import Favourites from "./pages/Favourites";
import VideoDetailPage from "./pages/VideoDetailPage";
import StateContext from "./context/StateContext";

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  localStorage.setItem("searchHistory", JSON.stringify(state.searchHistory));
  localStorage.setItem(
    "favouriteVideos",
    JSON.stringify(state.favouriteVideos)
  );

  useEffect(() => {
    const fetchRecommendedVideos = async () => {
      const {
        data: { items: videos },
      } = await youtubeFetch.get("search", {
        params: {
          chart: "mostPopular",
          maxResults: 4,
        },
      });
      dispatch({ type: TYPES.RETRIEVE_POPULARVIDEOS, payload: videos });
    };
    fetchRecommendedVideos();
  }, []);

  const handleSubmit = async (searchTerm) => {
    const searchDate = Date.now();
    const {
      data: { items: videos },
    } = await youtubeFetch.get("search", {
      params: {
        q: searchTerm,
        maxResults: 12,
      },
    });
    dispatch({
      type: TYPES.SAVE_SEARCHTERMS,
      payload: {
        searchTerm: searchTerm,
        url: videos[0].snippet.thumbnails.default.url,
        searchDate: searchDate,
      },
    });

    dispatch({ type: TYPES.SERCH_VIDEOS, payload: videos });
    dispatch({
      type: TYPES.SELECT_VIDEO,
      payload: videos[0],
    });
  };

  return (
    <>
      <StateContext.Provider
        value={{ state: state, dispatch: dispatch, handleSubmit: handleSubmit }}
      >
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
      </StateContext.Provider>
    </>
  );
};

export default App;

import React, { useReducer } from "react";
import "./App.css";
import { Grid } from "@mui/material";
// import { VideoList, VideoDetail } from "./components";
import youtubeFetch from "./api/youtubeFetch";
import { appReducer, initialState } from "./reducers/appReducer";
import { TYPES } from "./actions/appActions";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleSubmit = async (searchTerm) => {
    const {
      data: { items: videos },
    } = await youtubeFetch.get("search", {
      params: {
        q: searchTerm,
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
      <div className="app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <main className="main">
          <Header onSubmit={handleSubmit} />
          <section className="main__videos">
            <Grid style={{ justifyContent: "center" }} container spacing={10}>
              <Grid item xs={11.5}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <VideoList
                      videos={state.videos}
                      handleVideoSelect={dispatch}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <VideoDetail video={state.selectedVideo} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;

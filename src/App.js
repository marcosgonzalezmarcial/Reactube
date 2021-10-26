import React, { useReducer } from "react";
import { Grid } from "@mui/material";
import { SearchBar, VideoList, VideoDetail } from "./components";
import youtubeFetch from "./api/youtubeFetch";
import { appReducer, initialState } from "./reducers/appReducer";
import { TYPES } from "./actions/appActions";
import Header from "./components/header/Header";

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
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={state.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={state.videos} handleVideoSelect={dispatch} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;

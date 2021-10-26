import React, { useReducer } from "react";
import { Grid } from "@mui/material";
import { SearchBar, VideoList, VideoDetail } from "./components";
import youtubeFetch from "./api/youtubeFetch";
import { videosInitialState, videosReducer } from "./reducers/videosReducer";
import { VIDEO_TYPES } from "./actions/videosActions";
import {
  selectedVideoInitialState,
  selectedVideoReducer,
} from "./reducers/selectedVideoReducer";
import { TYPES_SELECTED_VIDEO } from "./actions/selectedVideoActions";

const App = () => {
  const [videoSelectedState, dispatchVideoSelected] = useReducer(
    selectedVideoReducer,
    selectedVideoInitialState
  );
  const [videosState, dispatchVideos] = useReducer(
    videosReducer,
    videosInitialState
  );

  const handleSubmit = async (searchTerm) => {
    const {
      data: { items: videos },
    } = await youtubeFetch.get("search", {
      params: {
        q: searchTerm,
      },
    });

    dispatchVideos({ type: VIDEO_TYPES.SERCH_VIDEOS, payload: videos });
    dispatchVideoSelected({
      type: TYPES_SELECTED_VIDEO.SELECT_VIDEO,
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
            <VideoDetail video={videoSelectedState} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              videos={videosState}
              handleVideoSelect={dispatchVideoSelected}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;

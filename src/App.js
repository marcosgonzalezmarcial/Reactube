import React, { useState } from "react";
import { Grid } from "@mui/material";
import { SearchBar, VideoList, VideoDetail } from "./components";
import youtubeFetch from "./api/youtubeFetch";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  const handleSubmit = async (searchTerm) => {
    const {
      data: { items: videos },
    } = await youtubeFetch.get("search", {
      params: {
        q: searchTerm,
      },
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  };

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} handleVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;

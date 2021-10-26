import React from "react";
import { Grid } from "@mui/material";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  const videosToRender = videos.videos;

  const renderedVideos = videosToRender.map((video) => (
    <VideoItem
      handleVideoSelect={handleVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {renderedVideos}
    </Grid>
  );
};

export default VideoList;

import React from "react";
import { Paper, Typography } from "@mui/material";

const VideoDetail = ({
  video: {
    id: { videoId },
    snippet: { title, channelTitle, description },
  },
}) => {
  if (!videoId) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {title} - {channelTitle}
        </Typography>
        <Typography variant="subtitle1">{channelTitle}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;

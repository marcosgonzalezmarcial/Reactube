import React from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import "./VideoDetail.css";
import FavButton from "./FavButton";

const VideoDetail = ({
  video /*: {
    id: { videoId },
    snippet: { title, description },
  },*/,
}) => {
  if (!video.id.videoId) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div className="videoDetail">
        <Card className="videoDetail__card">
          <iframe
            frameBorder="0"
            height="100%"
            width="75%"
            title="Video Player"
            src={videoSrc}
          />
          <CardContent className="videoDetail__cardContent">
            <Typography gutterBottom variant="h5" component="div">
              {video.snippet.title}
            </Typography>
            <div className="videoDetail__cardContent__description">
              <Typography
                className="videoDetail__cardContent__description__text"
                variant="body2"
                color="text.secondary"
              >
                {video.snippet.description}
              </Typography>
            </div>
            <CardActions className="videoDetail__cardActions">
              <FavButton video={video} />
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default VideoDetail;

import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./VideoDetail.css";

const VideoDetail = ({
  video: {
    id: { videoId },
    snippet: { title, description },
  },
}) => {
  if (!videoId) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

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
              {title}
            </Typography>
            <div className="videoDetail__cardContent__description">
              <Typography
                className="videoDetail__cardContent__description__text"
                variant="body2"
                color="text.secondary"
              >
                {description}
              </Typography>
            </div>
            <CardActions className="videoDetail__cardActions">
              <Button>
                <FavoriteBorderIcon className="videoDetail__cardActions__button" />
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default VideoDetail;

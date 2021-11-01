import React from "react";
// import { Grid, Paper, Typography } from "@mui/material";
import "./VideoItem.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { TYPES } from "../actions/appActions";
import { useHistory } from "react-router";
import moment from "moment";

const VideoItem = ({ video, handleVideoSelect }) => {
  const history = useHistory();
  return (
    <>
      <Card className="videoItem">
        <CardMedia
          component="img"
          image={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
          height="180px"
          width="300px"
          src={video.snippet.thumbnails.medium.url}
          onClick={() => {
            handleVideoSelect({
              type: TYPES.SELECT_VIDEO,
              payload: video,
            });
            history.push("/home/videoDetail");
          }}
          className="videoItem__cardMedia"
        />
        <CardContent className="videoItem__info">
          <Typography
            className="videoitem__title"
            gutterBottom
            variant="h6"
            component="div"
          >
            {video.snippet.title}
          </Typography>
          <div className="videoItem__cardActions">
            <Typography
              className="videoItem__cardActions__text"
              variant="h6"
              color="text.secondary"
            >
              {moment(video.snippet.publishTime).fromNow()}
            </Typography>
            <CardActions className="videoItem__cardActions__buttonContainer">
              <Button>
                <FavoriteBorderIcon className="videoItem__cardActions__button" />
              </Button>
            </CardActions>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoItem;

import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useContext, useEffect, useState } from "react";
import "./FavButton.css";
import StateContext from "../context/StateContext";
import { TYPES } from "../actions/appActions";

const FavButton = ({ video }) => {
  const [selected, setSelected] = useState(false);
  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    if (state.favouriteVideos.length > 0) {
      const containVideo = state.favouriteVideos.find(
        (item) => item.id.videoId === video.id.videoId
      );
      containVideo && setSelected(true);
    }
  }, []);

  const handleClick = async () => {
    setSelected(!selected);
    dispatch({ type: TYPES.MANAGE_FAVOURITES, payload: video });
  };

  return (
    <div>
      <Button onClick={handleClick}>
        {selected ? (
          <FavoriteIcon className="favButtonIcon" />
        ) : (
          <FavoriteBorderIcon className="favButtonIcon" />
        )}
      </Button>
    </div>
  );
};

export default FavButton;

// LEO GONZALEZ SOLA

//WDGHJKL´+                  HZXVWJKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXZZZZZZZZZZZZZZZZZZZZZZZZZZ

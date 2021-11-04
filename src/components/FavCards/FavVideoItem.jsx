import React from "react";
import { useHistory } from "react-router";
import { useAppContext } from "../../context/StateContext";
import FavButton from "../FavButton";
import "./FavVideoItem.css";
import { TYPES } from "../../actions/appActions";

const FavVideoItem = ({ video, imgSrc }) => {
  const { dispatch } = useAppContext();

  const history = useHistory();
  return (
    <div className="favVideoItem">
      <div className="favVideoItem__overlay">
        <FavButton className="favVideoItem__favButton" video={video} />
      </div>
      <img
        onClick={() => {
          dispatch({
            type: TYPES.SELECT_VIDEO,
            payload: video,
          });
          dispatch({
            type: TYPES.SAVE_LASTWATCHED,
            payload: video,
          });
          history.push("/videoDetail");
        }}
        src={imgSrc}
        alt="video thumnail"
      />
    </div>
  );
};

export default FavVideoItem;

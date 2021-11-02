import React from "react";
import FavButton from "../FavButton";
import "./FavVideoItem.css";

const FavVideoItem = ({ video, imgSrc }) => {
  return (
    // <div className="favVideoItemOverlay">
    <div className="favVideoItem">
      <div class="favVideoItem__overlay">
        <FavButton className="favVideoItem__favButton" video={video} />
      </div>
      <img src={imgSrc} alt="video thumnail" />
    </div>
    // </div>
  );
};

export default FavVideoItem;

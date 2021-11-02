import React from "react";
import { useAppContext } from "../../context/StateContext";
import FavVideoItem from "./FavVideoItem";
import "./FavVideos.css";

const FavVideos = () => {
  const { state } = useAppContext();
  console.log(state);
  const favVideos = state.favouriteVideos;
  const lastFavVideos = favVideos.reverse().slice(0, 4);
  console.log(lastFavVideos);

  const renderItems = lastFavVideos.map(
    (item) => (
      <div className="favVideos__item">
        <FavVideoItem
          video={item}
          imgSrc={item.snippet.thumbnails.medium.url}
        />
      </div>
    )
    // console.log(item.snippet.thumbnails.default.url)
  );

  return <div className="favVideos">{renderItems}</div>;
};

export default FavVideos;

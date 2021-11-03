import React from "react";
import { useAppContext } from "../../context/StateContext";
import FavVideoItem from "./FavVideoItem";
import "./FavVideos.css";

const FavVideos = () => {
  const { state } = useAppContext();
  const favVideos = state.favouriteVideos;
  const lastFavVideos = favVideos.reverse().slice(0, 4);

  const renderItems = lastFavVideos.map((item) => (
    <div className="favVideos__item">
      <FavVideoItem video={item} imgSrc={item.snippet.thumbnails.medium.url} />
    </div>
  ));

  return (
    <>
      <h1 className="favVideos__title">Videos favoritos</h1>
      <div className="favVideos">
        {state.favouriteVideos.length > 0 ? (
          renderItems
        ) : (
          <div className="favVideos__message">
            <p>Aún no has guardado ningún video en favoritos</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FavVideos;

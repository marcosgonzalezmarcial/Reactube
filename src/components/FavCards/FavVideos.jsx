import React from "react";
import { useAppContext } from "../../context/StateContext";
import FavVideoItem from "./FavVideoItem";
import "./FavVideos.css";

const FavVideos = () => {
  const { state } = useAppContext();
  const favVideos = state.favouriteVideos;
  // const lastFavVideos = favVideos.slice(-4);

  const renderItems = favVideos.map((item) => (
    <div className="favVideos__item">
      <FavVideoItem video={item} imgSrc={item.snippet.thumbnails.medium.url} />
    </div>
  ));

  return (
    <>
      <h1 className="favVideos__title">{`Videos favoritos · ${favVideos.length}`}</h1>
      <div className="favVideos">
        {state.favouriteVideos.length > 0 ? (
          renderItems
        ) : (
          <div className="favVideos__message">
            <p style={{ paddingLeft: "1rem" }}>
              No tienes videos guardados en favoritos
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FavVideos;

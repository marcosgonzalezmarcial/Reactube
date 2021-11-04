import React from "react";
import { useLocation } from "react-router";
import { useAppContext } from "../context/StateContext";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = ({ videos }) => {
  const { dispatch } = useAppContext();
  const location = useLocation();
  function style() {
    if (location.pathname === "/home/search") {
      return { display: "flex", flexWrap: "wrap", justifyContent: "center" };
    } else if (location.pathname === "/historial") {
      return { display: "flex", flexWrap: "wrap", justifyContent: "flexStart" };
    } else if (location.pathname === "/favoritos") {
      return { display: "flex", flexWrap: "wrap", justifyContent: "flexStart" };
    } else return { display: "flex", flexWrap: "nowrap" };
  }
  const checkedVideos = videos.filter((video) => video.snippet);
  const renderedVideos = checkedVideos.map((video) => (
    <VideoItem
      handleVideoSelect={dispatch}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <div className="videoList">
      <div style={style()} className="videoList__items">
        {renderedVideos}
      </div>
    </div>
  );
};

export default VideoList;

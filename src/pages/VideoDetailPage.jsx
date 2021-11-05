import React, { useContext, useEffect, useState } from "react";
import youtubeFetch from "../api/youtubeFetch";
import { VideoDetail, VideoList } from "../components";
import StateContext from "../context/StateContext";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./VideoDetailPage.css";

const VideoDetailPage = () => {
  const { state, dispatch } = useContext(StateContext);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchVideos = async () => {
  //     const {
  //       data: { items: relatedVideos },
  //     } = await youtubeFetch.get("search", {
  //       params: {
  //         relatedToVideoId: state.selectedVideo.id.videoId,
  //         maxResults: 5,
  //         type: "video",
  //       },
  //     });
  //     console.log(relatedVideos);
  //     setRelatedVideos(relatedVideos);
  //   };
  //   fetchVideos();
  //   setLoading(false);
  // }, [state.selectedVideo]);

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchVideos = async () => {
        const {
          data: { items: relatedVideos },
        } = await youtubeFetch.get("search", {
          params: {
            relatedToVideoId: state.selectedVideo.id.videoId,
            maxResults: 5,
            type: "video",
          },
        });
        setRelatedVideos(relatedVideos);
      };
      fetchVideos();
      setLoading(false);
    }, 1000);
    return () => clearInterval(interval);
  }, [state.selectedVideo]);
  return (
    <main className="videoDetailPage">
      <section className="videoDetailPage__app">
        <VideoDetail video={state.selectedVideo} />
        <h2 className="videoDetailPage__app__title">Videos relacionados</h2>
        {loading ? (
          <div className="videoDetailPage__loaderContainer">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={2000}
            />
          </div>
        ) : (
          <VideoList videos={relatedVideos} handleVideoSelect={dispatch} />
        )}
      </section>
    </main>
  );
};

export default VideoDetailPage;

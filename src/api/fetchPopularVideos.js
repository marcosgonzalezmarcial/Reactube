import youtubeFetch from "./youtubeFetch";

const fetchPopularVideos = async () => {
  const {
    data: { items: videos },
  } = await youtubeFetch.get("search", {
    params: {
      chart: "mostPopular",
      maxResults: 4,
      q: "islands docu",
    },
  });
  return videos;
};

export { fetchPopularVideos };

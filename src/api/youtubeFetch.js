import axios from "axios";

const youtubeApiKey = "test";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: youtubeApiKey,
  },
});

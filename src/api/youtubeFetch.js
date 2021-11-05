import axios from "axios";

const youtubeApiKey = "AIzaSyDaYiHASLDqMlOjy8R2Kq-eo8swLf9_NkQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: youtubeApiKey,
  },
});

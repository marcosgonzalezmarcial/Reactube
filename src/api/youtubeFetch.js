import axios from "axios";

const youtubeApiKey = "AIzaSyBSOp2FNNB-3ozoQjkYjq6Cehjj7iacLXM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: youtubeApiKey,
  },
});

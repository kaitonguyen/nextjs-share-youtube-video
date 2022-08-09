import axios from "axios";

export const getVideoInfo = async (videoUrl) => {
  // https://www.googleapis.com/youtube/v3/videos?part=snippet&id=IPX0OswHoxg&key=AIzaSyAJdOgvzNyKqvn1BGKyeqh9y0fgydSk3Z0
  const url = new URL(videoUrl);
  const videoId = url.searchParams.get("v");
  const api = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyAJdOgvzNyKqvn1BGKyeqh9y0fgydSk3Z0`;

  const videoInfo = null;

  await axios
    .get(api)
    .then((res) => {
      videoInfo = res.data.items[0];
    })
    .catch((err) => {
      alert(err);
    });

  return videoInfo;
};

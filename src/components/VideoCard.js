import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Videos from "./Videos";
import { Link } from "react-router";

const VideoCard = () => {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className = "flex flex-wrap gap-3">
      {videos.map((video) => {
        return (
          <div key = {video?.id}>
            <Link to = {"/watch?v=" + video?.id}>
            <Videos  info={video} />
            </Link>
          </div>
        )
      })}
      
    </div>
  );
};

export default VideoCard;

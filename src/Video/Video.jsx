import { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoHeader from "./VideoHeader";

const Video = ({ channel, likes, url, avatarSrc, song, shares }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoClick = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        onClick={onVideoClick}
        ref={videoRef}
        className="videoCard__player"
        src={url}
        loop
      />
      <VideoFooter
        channel={channel}
        song={song}
        avatarSrc={avatarSrc}
        likes={likes}
        shares={shares}
      />
    </div>
  );
};

export default Video;

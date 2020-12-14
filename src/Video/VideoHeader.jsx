import { ArrowBackIos, CameraAltOutlined } from "@material-ui/icons";
import "./VideoHeader.css";

const VideoHeader = () => {
  return (
    <div className="videoHeader">
      <ArrowBackIos />
      <h3>Reels</h3>
      <CameraAltOutlined />
    </div>
  );
};

export default VideoHeader;

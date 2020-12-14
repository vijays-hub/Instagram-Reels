import { Avatar } from "@material-ui/core";
import {
  Favorite,
  ModeComment,
  MoreHoriz,
  MusicNote,
  Send,
} from "@material-ui/icons";
import Ticker from "react-ticker";
import "./VideoFooter.css";

const VideoFooter = ({ channel, likes, avatarSrc, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        {/* TIP: TO GET THE DOT: Press ALT and type 250 */}
        <h3>
          {channel} · &nbsp; <span>Follow</span>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNote className="videoFooter__icon" />
        <Ticker mode="smooth">
          {/* Index tells how many times ticker ran! */}
          {({ index }) => (
            <>
              <h5>{song}</h5>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <Favorite fontSize="small" />
          <ModeComment fontSize="small" />
          <Send fontSize="small" />
          <MoreHoriz fontSize="small" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <Favorite />
            <p>{likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;

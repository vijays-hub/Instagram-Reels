import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video/Video.jsx";
import { db } from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
          alt=""
        />
        <h2>Reels</h2>
        <p>Tap to Play/Pause. Scroll for More!</p>
      </div>
      <div className="app__conatiner">
        {/* With Destructuring */}
        {reels?.map(({ channel, avatarSrc, song, url, likes }) => {
          return (
            <Video
              channel={channel}
              avatarSrc={avatarSrc}
              song={song}
              url={url}
              likes={likes}
            />
          );
        })}
        {/* Without Destructing */}
        {/* {reels?.map((reel) => {
          return (
            <Video
              channel={reel.channel}
              avatarSrc={reel.avatarSrc}
              song={reel.song}
              url={reel.url}
              likes={reel.likes}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default App;

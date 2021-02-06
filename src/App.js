import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import chillHop from "./data";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const song = chillHop()[0];
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Nav />
      <Song song={song} isPlaying={isPlaying} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <audio src={song.audio} ref={audioRef}></audio>
    </div>
  );
};

export default App;

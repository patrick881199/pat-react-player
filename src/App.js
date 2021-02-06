import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import chillHop from "./data";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const songs = chillHop();
  const currentSong = songs[0];
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLibraryList, setHasLibraryList] = useState(false);

  return (
    <div className="App">
      <Nav
        hasLibraryList={hasLibraryList}
        setHasLibraryList={setHasLibraryList}
      />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} hasLibraryList={hasLibraryList} />
      <audio src={currentSong.audio} ref={audioRef}></audio>
    </div>
  );
};

export default App;

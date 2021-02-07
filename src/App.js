import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import chillHop from "./data";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const audioRef = useRef();

  const [songs, setSongs] = useState(chillHop());
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLibraryList, setHasLibraryList] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [currentSongRangerInfo, setCurrentSongRangerInfo] = useState({
    currentTime: 0,
    duration: "0:00",
  });

  const timeUpdateHandler = (e) => {
    setCurrentSongRangerInfo({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  return (
    <div className="App">
      <Nav
        hasLibraryList={hasLibraryList}
        setHasLibraryList={setHasLibraryList}
      />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        currentSongRangerInfo={currentSongRangerInfo}
        setCurrentSongRangerInfo={setCurrentSongRangerInfo}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        songs={songs}
        hasLibraryList={hasLibraryList}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
      ></audio>
    </div>
  );
};

export default App;

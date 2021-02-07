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

  const playNext = async () => {
    const index = songs.findIndex((song) => {
      return song.id === currentSong.id;
    });
    if (index < songs.length - 1) {
      await setCurrentSong(songs[index + 1]);
    } else {
      await setCurrentSong(songs[0]);
    }
    audioRef.current.play();
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
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        hasLibraryList={hasLibraryList}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onEnded={playNext}
      ></audio>
    </div>
  );
};

export default App;

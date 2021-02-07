import React from "react";

const Library = ({
  songs,
  hasLibraryList,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
}) => {
  const librarySongClickHandler = async (song) => {
    await setCurrentSong(song);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  const songList = songs.map((song) => {
    const highlight = song.id === currentSong.id;

    return (
      <li
        key={song.id}
        className={highlight ? "highlight" : ""}
        onClick={() => librarySongClickHandler(song)}
      >
        <img src={song.cover} alt="cover image" />
        <div className="song-info">
          <h5>{song.name}</h5>
          <p>{song.artist}</p>
        </div>
      </li>
    );
  });

  return (
    <div
      className={`library-list ${hasLibraryList ? "library-list-appear" : ""}`}
    >
      <h4>Library</h4>
      <ul>{songList}</ul>
    </div>
  );
};

export default Library;

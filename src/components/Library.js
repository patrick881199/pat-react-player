import React from "react";

const Library = ({ songs, hasLibraryList, currentSong, setCurrentSong }) => {
  const librarySongClickHandler = (song) => {
    setCurrentSong(song);
  };
  const songList = songs.map((song) => {
    const highlight = song.id === currentSong.id;

    return (
      <li
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

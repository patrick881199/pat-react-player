import React from "react";

const Library = ({ songs, hasLibraryList }) => {
  const songList = songs.map((song) => {
    return (
      <li>
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

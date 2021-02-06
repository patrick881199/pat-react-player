import React from "react";

const Song = ({ song, isPlaying }) => {
  return (
    <div className="song">
      <img
        src={song.cover}
        alt="cover image"
        id={isPlaying ? "animate" : " "}
      />
      <h4>{song.name}</h4>
      <p>{song.artist}</p>
    </div>
  );
};

export default Song;

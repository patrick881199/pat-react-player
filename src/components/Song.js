import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="currentSong">
      <img
        src={currentSong.cover}
        alt="cover image"
        id={isPlaying ? "animate" : " "}
      />
      <h4>{currentSong.name}</h4>
      <p>{currentSong.artist}</p>
    </div>
  );
};

export default Song;

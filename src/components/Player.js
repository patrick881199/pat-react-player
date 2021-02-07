import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faForward,
  faBackward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  currentSongRangerInfo,
  setCurrentSongRangerInfo,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const durationConverter = (duration) => {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  };

  return (
    <div className="player">
      <div className="ranger">
        <p>{durationConverter(currentSongRangerInfo.currentTime)}</p>
        <input
          value={currentSongRangerInfo.currentTime}
          type="range"
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
          max={currentSongRangerInfo.duration}
        />
        <p>{durationConverter(currentSongRangerInfo.duration)}</p>
      </div>

      <div className="controler">
        <FontAwesomeIcon icon={faBackward} />
        {isPlaying ? (
          <FontAwesomeIcon onClick={playHandler} icon={faPause} />
        ) : (
          <FontAwesomeIcon onClick={playHandler} icon={faPlay} />
        )}

        <FontAwesomeIcon icon={faForward} />
      </div>
    </div>
  );
};

export default Player;

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
  isPlaying,
  setIsPlaying,
  audioRef,
  songs,
  currentSong,
  setCurrentSong,
}) => {
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeSongHandler = async (direction) => {
    const index = songs.findIndex((song) => {
      return song.id === currentSong.id;
    });
    if (direction === "forward") {
      if (index < songs.length - 1) {
        await setCurrentSong(songs[index + 1]);
      } else {
        await setCurrentSong(songs[0]);
      }
    } else {
      if (index > 0) {
        await setCurrentSong(songs[index - 1]);
      } else {
        await setCurrentSong(songs[songs.length - 1]);
      }
    }
    if (isPlaying) {
      audioRef.current.play();
    }
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
        <FontAwesomeIcon
          icon={faBackward}
          onClick={() => changeSongHandler("backward")}
        />
        {isPlaying ? (
          <FontAwesomeIcon onClick={playHandler} icon={faPause} />
        ) : (
          <FontAwesomeIcon onClick={playHandler} icon={faPlay} />
        )}

        <FontAwesomeIcon
          icon={faForward}
          onClick={() => changeSongHandler("forward")}
        />
      </div>
    </div>
  );
};

export default Player;

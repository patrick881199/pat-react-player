import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faForward,
  faBackward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({ audioRef, isPlaying, setIsPlaying }) => {
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    setDuration(audioRef.current.duration);
  }, [audioRef]);

  return (
    <div className="player">
      <div className="ranger">
        <p>0:03</p>
        <input type="range" />
        <p>{duration}</p>
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

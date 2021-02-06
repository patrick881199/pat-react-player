import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ hasLibraryList, setHasLibraryList }) => {
  const libraryListhandler = () => {
    setHasLibraryList(!hasLibraryList);
  };

  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={libraryListhandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;

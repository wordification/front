"use client";

import { useState } from "react";

const Player = ({ files }: { files: string[] }) => {
  const [currentFileIndex, setCurrentFileIndex] = useState(0);

  const goToNextFile = () => {
    if (currentFileIndex < files.length - 1) {
      setCurrentFileIndex(currentFileIndex + 1);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio src={files[currentFileIndex]} onEnded={goToNextFile} autoPlay />
  );
};

export default Player;

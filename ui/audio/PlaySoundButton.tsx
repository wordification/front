"use client";

import { useState } from "react";

const PlaySoundButton = ({ files }: { files: string[] }) => {
  const [currentFileIndex, setCurrentFileIndex] = useState(0);

  const handleFinish = () => {
    if (currentFileIndex < files.length - 1) {
      setCurrentFileIndex(currentFileIndex + 1);
    }
  };

  const handleRestart = () => {
    setCurrentFileIndex(0);
  };

  return (
    <>
      <button className="btn btn-accent" type="button" onClick={handleRestart}>
        Play Sound Again
      </button>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio src={files[currentFileIndex]} onEnded={handleFinish} autoPlay />
    </>
  );
};

export default PlaySoundButton;

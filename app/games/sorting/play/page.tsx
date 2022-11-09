"use client";

import { useState } from "react";

const Page = () => {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <>
      <h2 className="text-2xl font-bold pb-4">Sorting Game</h2>
      <div className="card w-full bg-base-300 shadow-xl">
        <div className="card-body">
          <h3 className="card-title">Click on the correct vowel sound.</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="btn btn-secondary rounded" type="button">
              Long I
            </button>
            <button className="btn btn-secondary rounded" type="button">
              Short I
            </button>
            <button className="btn btn-accent rounded" type="button">
              Long O
            </button>
            <button className="btn btn-accent rounded" type="button">
              Short O
            </button>
          </div>
        </div>
        <div className="card-actions justify-end p-4">
          <button className="btn btn-primary" type="button">
            Play Sound Again
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;

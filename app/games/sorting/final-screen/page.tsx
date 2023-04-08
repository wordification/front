"use client";

import React, { useState } from "react";

function ProgressBar({progress}) {
  return (
    <progress className="progress progress-info" value={progress} max="100"></progress>
  )
}

const Page = () => {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <>
      <ProgressBar progress="90" />
      <div className="card w-full bg-base-300 shadow-xl">
        <div className="card-body">
          <div className="grid grid-cols-2 gap-4 mt-6">
            <form className="flex justify-end" action="/send-data-here" method="post">
              <input className="rounded p-4" type="text" id="first" name="first" placeholder="Type your answer here."/> 
            </form>
            <div className="card-actions flex justify-start"> 
                <button className="btn btn-primary" type="button">
                  Check Spelling
                </button>
              </div>
          </div>
          <div className="card-actions justify-center mt-2">
            <button className="btn btn-secondary" type="button">
              Play Sound Again
            </button>
          </div>
      </div>
    </div>
    </>
  );
};

export default Page;

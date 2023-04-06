"use client";

import type { ButtonProps } from "@/lib/games/sorting/types";

const VowelButtons = ({ options }: { options: readonly ButtonProps[] }) => (
  <div className="card w-full bg-base-300 shadow-xl">
    <div className="card-body">
      <h3 className="card-title">Click on the correct vowel sound.</h3>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <button className={`btn btn-${option.color} rounded`} type="button">
            {option.label}
          </button>
        ))}
      </div>
    </div>
    <div className="card-actions justify-end p-4">
      <button className="btn btn-primary" type="button">
        Play Sound Again
      </button>
    </div>
  </div>
);

export default VowelButtons;

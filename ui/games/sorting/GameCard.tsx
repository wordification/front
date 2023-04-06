"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import type { ButtonProps } from "@/lib/games/sorting/types";

const GameCard = ({
  options,
  columns,
  onSelect,
}: {
  options: readonly ButtonProps[];
  columns: number;
  onSelect: (value: string) => Promise<"correct" | "incorrect">;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) => {
    e.preventDefault();
    setIsFetching(true);
    const status = await onSelect(value);
    setIsFetching(false);
    if (status !== "correct") return;

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  };

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  return (
    <div className="card w-full bg-base-300 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">Click on the correct vowel sound.</h3>
        <div className={`grid grid-cols-${columns} gap-4`}>
          {options.map((option) => (
            <button
              className={`btn btn-${option.color} normal-case`}
              onClick={(e) => void handleClick(e, option.id)}
              type="button"
              disabled={isMutating}
              key={option.id}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="card-actions justify-end p-4">
        <button className="btn btn-accent" type="button">
          Play Sound Again
        </button>
      </div>
    </div>
  );
};

export default GameCard;

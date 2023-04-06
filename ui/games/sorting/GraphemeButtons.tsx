"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import type { ButtonProps } from "@/lib/games/sorting/types";

import fetchClient from "@/lib/fetch/fetchClient";

const checkGrapheme = async (gameId: string, grapheme: string) => {
  const res = await fetchClient<{ status: "correct" | "incorrect" }>(
    `/sorting_game/${gameId}/grade_screen_two/`,
    {
      method: "POST",
      body: new URLSearchParams({ grapheme }),
    }
  );
  const { status } = await res.json();
  console.log(status);
  return status;
};

const GraphemeButtons = ({
  gameId,
  options,
}: {
  gameId: string;
  options: readonly ButtonProps[];
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
    grapheme: string
  ) => {
    e.preventDefault();
    setIsFetching(true);
    const status = await checkGrapheme(gameId, grapheme);
    setIsFetching(false);
    startTransition(() => {
      if (status === "correct") {
        // Refresh the current route and fetch new data from the server without
        // losing client-side browser or React state.
        router.refresh();
      }
    });
  };

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  return (
    <div className="card w-full bg-base-300 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">Click on the correct spelling pattern.</h3>
        <div className="grid grid-cols-6 gap-4">
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
        <button className="btn btn-primary" type="button">
          Play Sound Again
        </button>
      </div>
    </div>
  );
};

export default GraphemeButtons;

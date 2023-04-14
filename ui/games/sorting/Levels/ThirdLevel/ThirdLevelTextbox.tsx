"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import toaster from "react-hot-toast";

import fetchClient from "@/lib/fetch/fetchClient";

const checkSpelling = async (gameId: string, entry: string) => {
  const res = await fetchClient<{ status: "correct" | "incorrect" }>(
    `/sorting_game/${gameId}/grade_screen_three/`,
    {
      method: "POST",
      body: new URLSearchParams({ entry }),
    }
  );
  const { status } = await res.json();
  return status;
};

const ThirdLevelTextbox = ({ gameId }: { gameId: string }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [entry, setEntry] = useState("");

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFetching(true);
    const status = await checkSpelling(gameId, entry);
    setIsFetching(false);
    if (status !== "correct") {
      toaster.error("Incorrect, please try again.");
      return;
    }
    toaster.success("Correct!");

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  };

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          className="input input-bordered"
          id="entry"
          name="entry"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Type your answer here."
          disabled={isMutating}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={(e) => void handleClick(e)}
          disabled={isMutating}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ThirdLevelTextbox;

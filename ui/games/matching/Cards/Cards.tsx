"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import toaster from "react-hot-toast";

import Board from "./Board";

import type { ButtonProps } from "@/lib/games/matching/types";

const Cards = ({
    words,
    columns,
    rows,
    onSelect,
    title,
}: {
    words: readonly ButtonProps[];
    columns: number;
    rows: number;
    onSelect: (value: string) => Promise<"correct" | "incorrect" | "start">;
    title: string;
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
    if (status === "incorrect") {
        toaster.error("Different phonemes, please try again.");
    } else if (status == "correct") {
        toaster.success("Match!");
    }

    startTransition(() => {
        // Refresh the current route and fetch new data from the server without
        // losing client-side browser or React state.
        router.refresh();
    });
  };

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  return (
    <Board title={title}> 
      <div style={{
        display: "grid",
        gridTemplateRows: "repeat(4, 1fr)", // TODO: Don't hard-code these
        gridTemplateColumns: "repeat(6, 1fr)",
         // spacing between grid items
        width: "600px"
      }}>
        {words.map((word) => (
          <button
          style={{ backgroundColor: word.flipped ? "lightyellow" : "lightgreen", 
            borderRadius: "5px",
            margin: "5px",
            width:"100px",
            height:"80px",
            padding:"0px",
            lineHeight: "80px" }}
            onClick={(e) => void handleClick(e, word.text)}
            type="button"
            disabled={isMutating}
            key={word.id}
          >
            {word.flipped ? word.text : ""}
          </button>
        ))}
      </div>
    </Board>
  );
};

export default Cards;
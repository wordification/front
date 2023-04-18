"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import toaster from "react-hot-toast";

import type { ButtonProps } from "@/lib/games/sorting/types";

const ButtonCardContents = ({
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
  );
};

export default ButtonCardContents;

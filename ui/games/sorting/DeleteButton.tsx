"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";

import fetchClient from "@/lib/fetch/fetchClient";

const DeleteButton = ({ gameId }: { gameId: number }) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFetching(true);

    await fetchClient(`/sorting_game/${gameId}/`, {
      method: "DELETE",
    });
    setIsFetching(false);
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  };

  const clickInfo = (e: React.MouseEvent) =>
    toast.promise(handleClick(e), {
      loading: "Deleting...",
      success: "Deleted!",
      error: "error when fetching",
    });

  return (
    <button
      type="button"
      className={`btn btn-xs btn-outline hover:btn-error ${
        isFetching ? "loading" : ""
      }`}
      disabled={isMutating}
      onClick={(e) => void clickInfo(e)}
    >
      Delete
    </button>
  );
};

export default DeleteButton;

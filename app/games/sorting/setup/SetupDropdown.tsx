"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import createGame from "@/lib/games/sorting/createGame";

const SetupDropdown = ({
  phonemeOptions,
}: {
  phonemeOptions: { id: number; name: string }[];
}) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [firstPhonemeId, setFirstPhonemeId] = useState(53);
  const [secondPhonemeId, setSecondPhonemeId] = useState(49);

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFetching(true);

    const data = await createGame(firstPhonemeId, secondPhonemeId).then((res) =>
      res.json()
    );
    setIsFetching(false);
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.push(`/games/sorting/${data.id}`);
    });
  };

  return (
    <>
      <div className="flex py-4">
        <div className="flex pr-4">
          <label htmlFor="option1">
            Select first option:
            <select
              id="option1"
              className="select select-bordered w-full max-w-xs"
              value={firstPhonemeId}
              disabled={isMutating}
              onChange={(e) => {
                e.preventDefault();

                const newPhoneme = phonemeOptions.find(
                  (option) => option.id === Number(e.target.value)
                );

                if (newPhoneme) {
                  setFirstPhonemeId(newPhoneme.id);
                  if (newPhoneme.id === secondPhonemeId) {
                    setSecondPhonemeId(firstPhonemeId);
                  }
                }
              }}
            >
              {phonemeOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex">
          <label htmlFor="option2">
            Select second option:
            <select
              id="option2"
              className="select select-bordered w-full max-w-xs"
              value={secondPhonemeId}
              disabled={isMutating}
              onChange={(e) => {
                e.preventDefault();
                const newPhoneme = phonemeOptions.find(
                  (option) => option.id === Number(e.target.value)
                );

                if (newPhoneme) {
                  setSecondPhonemeId(newPhoneme.id);
                }
              }}
            >
              {phonemeOptions.map((option) => (
                <option
                  key={option.id}
                  value={option.id}
                  disabled={option.id === firstPhonemeId}
                >
                  {option.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <button
        className={`btn btn-primary ${isMutating ? "loading" : ""}`}
        type="submit"
        disabled={isMutating}
        onClick={(e) => void handleSubmit(e)}
      >
        Start
      </button>
    </>
  );
};

export default SetupDropdown;

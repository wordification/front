"use client";

import type { ButtonProps } from "@/lib/games/matching/types"

import fetchClient from "@/lib/fetch/fetchClient";
import Cards from "@/ui/games/matching/Cards/Cards"

const attemptMatch = async (gameId: string, wordText: string) => {
    const res = await fetchClient<{ status: "correct" | "incorrect" | "start" }>(
        `/matching_game/${gameId}/update_attempted_match/`,
        {
          method: "POST",
          body: new URLSearchParams({ wordText }),
        }
      );
    const { status } = await res.json();
    return status;
};

const FirstLevelButtons = ({
    gameId,
    words,
}: {
    gameId: string;
    words: readonly ButtonProps[];
}) => (
    <Cards
        title="Pick a pair of cards and see if the phonemes match."
        words={words}
        columns={6}
        rows={4}
        onSelect={(wordText) => attemptMatch(gameId, wordText)}
    />
);

export default FirstLevelButtons;
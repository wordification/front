"use client";

import type { ButtonProps } from "@/lib/games/sorting/types";

import fetchClient from "@/lib/fetch/fetchClient";
import GameCard from "@/ui/games/sorting/GameCard";

const checkPhoneme = async (gameId: string, phoneme: string) => {
  const res = await fetchClient<{ status: "correct" | "incorrect" }>(
    `/sorting_game/${gameId}/grade_screen_one/`,
    {
      method: "POST",
      body: new URLSearchParams({ phoneme }),
    }
  );
  const { status } = await res.json();
  return status;
};

const VowelButtons = ({
  gameId,
  options,
}: {
  gameId: string;
  options: readonly ButtonProps[];
}) => (
  <GameCard
    options={options}
    columns={2}
    onSelect={(phoneme) => checkPhoneme(gameId, phoneme)}
  />
);

export default VowelButtons;

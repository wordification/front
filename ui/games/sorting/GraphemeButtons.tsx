"use client";

import type { ButtonProps } from "@/lib/games/sorting/types";

import fetchClient from "@/lib/fetch/fetchClient";
import ButtonCard from "@/ui/games/sorting/Cards/ButtonCard";

const checkGrapheme = async (gameId: string, grapheme: string) => {
  const res = await fetchClient<{ status: "correct" | "incorrect" }>(
    `/sorting_game/${gameId}/grade_screen_two/`,
    {
      method: "POST",
      body: new URLSearchParams({ grapheme }),
    }
  );
  const { status } = await res.json();
  return status;
};

const GraphemeButtons = ({
  gameId,
  options,
}: {
  gameId: string;
  options: readonly ButtonProps[];
}) => (
  <ButtonCard
    title="Click on the correct spelling pattern."
    options={options}
    columns={6}
    onSelect={(grapheme) => checkGrapheme(gameId, grapheme)}
  />
);

export default GraphemeButtons;

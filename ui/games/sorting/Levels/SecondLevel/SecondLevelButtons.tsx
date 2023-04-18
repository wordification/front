"use client";

import type { ButtonProps } from "@/lib/games/sorting/types";

import fetchClient from "@/lib/fetch/fetchClient";
import ButtonCardContents from "@/ui/games/sorting/Cards/ButtonCardContents";

const checkGrapheme = async (gameId: string, grapheme: string) => {
  const res = await fetchClient<WordificationApi.GradingResponse>(
    `/sorting_game/${gameId}/grade_screen_two/`,
    {
      method: "POST",
      body: new URLSearchParams({ grapheme }),
    }
  );
  return res.json();
};

const GraphemeButtons = ({
  gameId,
  options,
}: {
  gameId: string;
  options: readonly ButtonProps[];
}) => (
  <ButtonCardContents
    options={options}
    columns={6}
    onSelect={(grapheme) => checkGrapheme(gameId, grapheme)}
  />
);

export default GraphemeButtons;

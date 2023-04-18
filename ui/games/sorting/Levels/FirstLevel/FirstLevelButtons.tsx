"use client";

import type { ButtonProps } from "@/lib/games/sorting/types";

import fetchClient from "@/lib/fetch/fetchClient";
import ButtonCardContents from "@/ui/games/sorting/Cards/ButtonCardContents";

const checkPhoneme = async (gameId: string, phoneme: string) => {
  const res = await fetchClient<WordificationApi.GradingResponse>(
    `/sorting_game/${gameId}/grade_screen_one/`,
    {
      method: "POST",
      body: new URLSearchParams({ phoneme }),
    }
  );
  return res.json();
};

const FirstLevelButtons = ({
  gameId,
  options,
}: {
  gameId: string;
  options: readonly ButtonProps[];
}) => (
  <ButtonCardContents
    options={options}
    columns={2}
    onSelect={(phoneme) => checkPhoneme(gameId, phoneme)}
  />
);

export default FirstLevelButtons;

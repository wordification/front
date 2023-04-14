import "client-only";

import type { PhonemeId } from "./getPhonemes";
import type { SortingGame } from "./types";

import fetchClient from "@/lib/fetch/fetchClient";

const createGame = async (phoneme1: PhonemeId, phoneme2: PhonemeId) => {
  const res = await fetchClient<SortingGame>(
    "http://127.0.0.1:8000/api/sorting_game/",
    {
      method: "POST",
      body: new URLSearchParams({
        phoneme1: phoneme1.toString(),
        phoneme2: phoneme2.toString(),
      }),
    }
  );

  return res;
};

export default createGame;

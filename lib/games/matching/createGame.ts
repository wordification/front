import "client-only";

import type { PhonemeId } from "./getPhonemes";
import type { MatchingGame } from "./types";

import fetchClient from "@/lib/fetch/fetchClient";

const createGame = async (intPhonemeOne: PhonemeId, intPhonemeTwo: PhonemeId, intNumWordsForEachPhoneme: number) => {
  const res = await fetchClient<MatchingGame>(
    "http://127.0.0.1:8000/api/matching_game/",
    {
      method: "POST",
      body: new URLSearchParams({
        intPhonemeOne: intPhonemeOne.toString(),
        intPhonemeTwo: intPhonemeTwo.toString(),
        intNumWordsForEachPhoneme: intNumWordsForEachPhoneme.toString()
      }),
    }
  );

  return res;
};

export default createGame;

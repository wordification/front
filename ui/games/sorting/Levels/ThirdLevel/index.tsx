import ThirdLevelTextbox from "./ThirdLevelTextbox";

import type { WordElement } from "@/lib/games/sorting/types";

import fetchServer from "@/lib/fetch/fetchServer";
import GameCard from "@/ui/games/sorting/Cards/GameCard";

const getData = async (gameId: string) => {
  const testedWord = await fetchServer<WordElement>(
    `/sorting_game/${gameId}/tested_word/`
  ).then((res) => res.json());

  return { testedWord };
};

const ThirdLevel = async ({ gameId }: { gameId: string }) => {
  const data = await getData(gameId);
  const audio = { files: [] };

  return (
    <GameCard title="Spell the word." files={audio.files}>
      <ThirdLevelTextbox gameId={gameId} />
      <p className="text-sm">Current word: {data.testedWord.word.str_word}</p>
    </GameCard>
  );
};

export default ThirdLevel;

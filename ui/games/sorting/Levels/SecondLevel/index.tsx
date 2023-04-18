import SecondLevelButtons from "./SecondLevelButtons";

import type { WordElement } from "@/lib/games/sorting/types";

import fetchServer from "@/lib/fetch/fetchServer";
import GameCard from "@/ui/games/sorting/Cards/GameCard";

const getData = async (gameId: string) => {
  const graphemes = await fetchServer<Record<number, readonly string[]>>(
    `/sorting_game/${gameId}/graphemes/`
  ).then((res) => res.json());

  const testedWord = await fetchServer<WordElement>(
    `/sorting_game/${gameId}/tested_word/`
  ).then((res) => res.json());

  return { graphemes, testedWord };
};

const SecondLevel = async ({ gameId }: { gameId: string }) => {
  const data = await getData(gameId);
  const audio = { files: [] };

  // loop through the grapheme object and create an array of options
  const options = Object.values(data.graphemes)
    .flat()
    .map(
      (grapheme) =>
        ({
          id: grapheme,
          label: grapheme,
          color: "primary",
        } as const)
    );

  return (
    <>
      <GameCard
        title="Click on the correct spelling pattern."
        files={audio.files}
      >
        <SecondLevelButtons gameId={gameId} options={options} />
      </GameCard>
      <p className="text-sm">Current word: {data.testedWord.word.str_word}</p>
    </>
  );
};

export default SecondLevel;

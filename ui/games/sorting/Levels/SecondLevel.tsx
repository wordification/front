import type { WordElement } from "@/lib/games/sorting/types";

import fetchServer from "@/lib/fetch/fetchServer";
import GraphemeButtons from "@/ui/games/sorting/GraphemeButtons";

const getData = async (gameId: string) => {
  const graphemes = await fetchServer<Record<number, string[]>>(
    `/sorting_game/${gameId}/graphemes/`
  ).then((res) => res.json());

  const testedWord = await fetchServer<WordElement>(
    `/sorting_game/${gameId}/tested_word/`
  ).then((res) => res.json());

  return { graphemes, testedWord };
};

const SecondLevel = async ({ gameId }: { gameId: string }) => {
  const data = await getData(gameId);
  // const options = data.graphemes.map((grapheme) => ({
  //   label: grapheme,
  //   color: "secondary" as const,
  // }));

  // loop through the grapheme object and create an array of options

  const options = Object.values(data.graphemes)
    .flat()
    .map((grapheme) => ({
      id: grapheme,
      label: grapheme,
      color: "secondary" as const,
    }));

  return (
    <>
      <GraphemeButtons gameId={gameId} options={options} />
      <p className="text-sm">Current word: {data.testedWord.word.str_word}</p>
    </>
  );
};

export default SecondLevel;

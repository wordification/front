import Link from "next/link";

import type { WordElement } from "@/lib/games/sorting/types";

import fetchServer from "@/lib/fetch/fetchServer";

const getData = async (gameId: string) => {
  const testedWords = await fetchServer<WordElement[]>(
    `/sorting_game/${gameId}/words/`
  ).then((res) => res.json());

  return { testedWords };
};

const ResultsLevel = async ({ gameId }: { gameId: string }) => {
  const data = await getData(gameId);

  return (
    <>
      <h2>Game complete!</h2>
      <p>Here are the words you tested:</p>
      <ol className="list-decimal list-inside">
        {data.testedWords.map((word) => (
          <li key={word.id}>{word.word.str_word}</li>
        ))}
      </ol>
      <Link href="/games/sorting/setup" className="btn btn-primary">
        Play again
      </Link>
    </>
  );
};

export default ResultsLevel;

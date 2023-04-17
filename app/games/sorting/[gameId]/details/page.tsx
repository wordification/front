import getGameDetails from "@/lib/games/sorting/getGameDetails";
import getProgress from "@/lib/games/sorting/getProgress";

const Page = async ({ params }: { params: { gameId: string } }) => {
  const data = await getGameDetails(params.gameId);
  const { progress, max } = await getProgress(params.gameId);
  const percentComplete = Math.round((progress / max) * 100);

  return (
    <>
      <h3 className="pt-4 font-extrabold text-xl">Game Details</h3>
      <p>{percentComplete}% complete</p>
      <h3 className="py-4 font-bold text-lg">Words Tested</h3>
      <ul className="grid grid-cols-3 gap-4">
        {data.words.map((word) => (
          <li key={word.id} className="card bg-base-300 shadow-xl card-compact">
            <div className="card-body">
              <h4 className="card-title">{word.word.str_word}</h4>
              <ul>
                <li>
                  Grapheme:{" "}
                  <span className="font-bold">{word.tested_grapheme}</span>
                </li>
                <li>
                  Grade Level:{" "}
                  <span className="font-bold">{word.word.int_grade_level}</span>
                </li>
                <li>
                  Syllables:{" "}
                  <span className="font-bold">
                    {word.word.int_num_syllables}
                  </span>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;

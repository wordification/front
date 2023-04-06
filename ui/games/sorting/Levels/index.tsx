import FirstLevel from "./FirstLevel";
import ResultsLevel from "./ResultsLevel";
import SecondLevel from "./SecondLevel";
import ThirdLevel from "./ThirdLevel";

const CurrentLevel = ({ gameId, level }: { gameId: string; level: number }) => {
  switch (level) {
    case 1:
      // @ts-expect-error Next 13 async component
      return <FirstLevel gameId={gameId} />;
    case 2:
      // @ts-expect-error Next 13 async component
      return <SecondLevel gameId={gameId} />;
    case 3:
      // @ts-expect-error Next 13 async component
      return <ThirdLevel gameId={gameId} />;
    case 4:
      // @ts-expect-error Next 13 async component
      return <ResultsLevel gameId={gameId} />;
    default:
      return <p>Invalid level!</p>;
  }
};

export default CurrentLevel;

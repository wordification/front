import FirstLevel from "./FirstLevel";
import SecondLevel from "./SecondLevel";

const CurrentLevel = ({ gameId, level }: { gameId: string; level: number }) => {
  switch (level) {
    case 1:
      // @ts-expect-error Next 13 async component
      return <FirstLevel gameId={gameId} />;
    case 2:
      // @ts-expect-error Next 13 async component
      return <SecondLevel gameId={gameId} />;
    case 3:
      return <p>Coming soon... (3)</p>;
    case 4:
      return <p>Coming soon... (4)</p>;
    default:
      return <p>Invalid level!</p>;
  }
};

export default CurrentLevel;

import FirstLevel from "./FirstLevel";

const CurrentLevel = ({ gameId, level }: { gameId: string; level: number }) => {
  switch (level) {
    case 1:
      // @ts-expect-error Next 13 async component
      return <FirstLevel gameId={gameId} />;
    case 2:
      return <b>Congratulations, you win!</b>;
    default:
      return <p>Invalid level!</p>;
  }
};

export default CurrentLevel;
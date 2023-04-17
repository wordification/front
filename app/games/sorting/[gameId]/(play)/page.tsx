import getCurrentLevel from "@/lib/games/sorting/getCurrentLevel";
import {
  FirstLevel,
  ResultsLevel,
  SecondLevel,
  ThirdLevel,
} from "@/ui/games/sorting/Levels";

const Page = async ({ params }: { params: { gameId: string } }) => {
  const level = await getCurrentLevel(params.gameId);

  switch (level) {
    case 1:
      // @ts-expect-error Next 13 async component
      return <FirstLevel gameId={params.gameId} />;
    case 2:
      // @ts-expect-error Next 13 async component
      return <SecondLevel gameId={params.gameId} />;
    case 3:
      // @ts-expect-error Next 13 async component
      return <ThirdLevel gameId={params.gameId} />;
    case 4:
      // @ts-expect-error Next 13 async component
      return <ResultsLevel gameId={params.gameId} />;
    default:
      throw new Error(`Invalid level: ${level}`);
  }
};

export default Page;

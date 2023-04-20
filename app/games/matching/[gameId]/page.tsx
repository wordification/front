import getCurrentLevel from "@/lib/games/matching/getCurrentLevel";
import CurrentLevel from "@/ui/games/matching/Levels";

const Page = async ({ params }: { params: { gameId: string } }) => {
  const data = await getCurrentLevel(params.gameId);

  return <CurrentLevel gameId={params.gameId} level={data.level} />;
};

export default Page;
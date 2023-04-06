import getGameDetails from "@/lib/games/sorting/getGameDetails";
import CurrentLevel from "@/ui/games/sorting/Levels";

const Page = async ({ params }: { params: { gameId: string } }) => {
  const data = await getGameDetails(params.gameId);

  return <CurrentLevel gameId={params.gameId} level={data.level} />;
};

export default Page;

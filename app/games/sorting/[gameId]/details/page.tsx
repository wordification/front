import getGameDetails from "@/lib/games/sorting/getGameDetails";

const Page = async ({ params }: { params: { gameId: string } }) => {
  const data = await getGameDetails(params.gameId);

  return (
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
};

export default Page;

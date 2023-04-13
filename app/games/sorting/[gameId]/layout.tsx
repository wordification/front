import fetchServer from "@/lib/fetch/fetchServer";

const getProgress = (gameId: string) =>
  fetchServer<{ progress: number; max: number }>(
    `/sorting_game/${gameId}/progress/`,
    {
      cache: "no-cache",
    }
  ).then((response) => response.json());

const Layout = async ({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { gameId: string };
}) => {
  const data = await getProgress(params.gameId);

  return (
    <>
      <div className="pb-2">
        <progress
          className="progress progress-primary"
          value={data.progress}
          max={data.max}
        />
      </div>
      {children}
    </>
  );
};

export default Layout;

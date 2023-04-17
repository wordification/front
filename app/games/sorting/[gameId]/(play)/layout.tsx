import getProgress from "@/lib/games/sorting/getProgress";

const Layout = async ({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { gameId: string };
}) => {
  const { progress, max } = await getProgress(params.gameId);

  return (
    <>
      <div className="pb-2">
        <progress
          className="progress progress-primary"
          value={progress}
          max={max}
        />
      </div>
      {children}
    </>
  );
};

export default Layout;

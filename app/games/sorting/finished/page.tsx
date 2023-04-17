import type { SortingGame } from "@/lib/games/sorting/types";

import fetchServer from "@/lib/fetch/fetchServer";
import getCurrentUser from "@/lib/user/getCurrentUser";
import GameTable from "@/ui/games/sorting/GameTable";

const getData = async () =>
  fetchServer<SortingGame[]>("/sorting_game/finished/").then((res) =>
    res.json()
  );

const Page = async () => {
  const data = (await getData()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const { canManageStudents } = await getCurrentUser();

  return (
    <>
      <h3 className="py-4 font-extrabold text-xl">Completed Games</h3>
      <GameTable showDelete={canManageStudents} showResume games={data} />
    </>
  );
};

export default Page;

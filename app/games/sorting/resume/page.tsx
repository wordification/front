import Link from "next/link";

import type { SortingGame } from "@/lib/games/sorting/types";

import DeleteButton from "@/app/games/sorting/resume/DeleteButton";
import fetchServer from "@/lib/fetch/fetchServer";
import getCurrentUser from "@/lib/user/getCurrentUser";

const getData = async () =>
  fetchServer<SortingGame[]>("/sorting_game/unfinished/").then((res) =>
    res.json()
  );

const Page = async () => {
  const data = (await getData()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const { canManageStudents } = await getCurrentUser();

  return (
    <>
      <h3 className="py-4">Unfinished Games</h3>
      <table className="table table-compact">
        <thead>
          <tr>
            <th>Game Number</th>
            <th>Started At</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((game) => (
            <tr key={game.id}>
              <td>{game.id}</td>
              <td>
                {new Date(game.date).toLocaleString(undefined, {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </td>
              <td className="text-right btn-group">
                <Link
                  className="btn btn-xs btn-outline"
                  href={`/games/sorting/${game.id}`}
                >
                  Resume
                </Link>
                {canManageStudents && <DeleteButton gameId={game.id} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Page;

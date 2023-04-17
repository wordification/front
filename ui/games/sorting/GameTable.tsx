import Link from "next/link";

import DeleteButton from "./DeleteButton";

import type { SortingGame } from "@/lib/games/sorting/types";

const GameTable = ({
  games,
  showDelete,
  showResume,
}: {
  games: SortingGame[];
  showDelete?: boolean;
  showResume?: boolean;
}) => (
  <table className="table table-compact">
    <thead>
      <tr>
        <th>Game Number</th>
        <th>Started At</th>
        <th className="text-right">Actions</th>
      </tr>
    </thead>
    <tbody>
      {games.map((game) => (
        <tr key={game.id}>
          <td>{game.id}</td>
          <td>
            {new Date(game.date).toLocaleString(undefined, {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </td>
          <td className="text-right btn-group">
            {showResume && (
              <Link
                className="btn btn-xs btn-outline"
                href={`/games/sorting/${game.id}`}
              >
                Resume
              </Link>
            )}
            <Link
              className="btn btn-xs btn-outline"
              href={`/games/sorting/${game.id}/details`}
            >
              View
            </Link>
            {showDelete && <DeleteButton gameId={game.id} />}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default GameTable;

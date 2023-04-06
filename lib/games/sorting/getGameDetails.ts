import type { SortingGame } from "@/lib/games/sorting/types";

import fetchServer from "@/lib/fetch/fetchServer";

const getGameDetails = (gameId: string) =>
  fetchServer<SortingGame>(`/sorting_game/${gameId}/`).then((res) =>
    res.json()
  );

export default getGameDetails;

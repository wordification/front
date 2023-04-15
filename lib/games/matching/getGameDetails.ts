import type { MatchingGame } from "@/lib/games/matching/types";

import fetchServer from "@/lib/fetch/fetchServer";

const getGameDetails = (gameId: string) =>
  fetchServer<MatchingGame>(`/matching_game/${gameId}/`).then((res) =>
    res.json()
  );

export default getGameDetails;

import fetchServer from "@/lib/fetch/fetchServer";

const getCurrentLevel = (gameId: string) =>
  fetchServer<{ level: number }>(`/sorting_game/${gameId}/level/`, {
    cache: "no-cache",
  }).then((res) => res.json());

export default getCurrentLevel;
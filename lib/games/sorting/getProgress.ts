import fetchServer from "@/lib/fetch/fetchServer";

const getProgress = (gameId: string) =>
  fetchServer<{ progress: number; max: number }>(
    `/sorting_game/${gameId}/progress/`,
    {
      cache: "no-cache",
    }
  ).then((response) => response.json());

export default getProgress;

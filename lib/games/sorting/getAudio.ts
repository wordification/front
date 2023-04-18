import fetchServer from "@/lib/fetch/fetchServer";

const getAudio = async (gameId: string) =>
  fetchServer<{ files: string[] }>(`/sorting_game/${gameId}/audio/`, {
    cache: "no-cache",
  }).then((res) => res.json());

export default getAudio;

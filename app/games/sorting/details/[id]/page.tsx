import type { SortingGame } from "@/lib/games/sorting/types";

import fetchServer from "@/lib/fetch/fetchServer";

const getData = (id: string) =>
  fetchServer<SortingGame>(`/sorting_game/${id}/`).then((res) => res.json());

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  return (
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
};

export default Page;

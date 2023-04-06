import Link from "next/link";

const GamesPage = ({
  games,
}: {
  games: readonly {
    title: string;
    content: string;
    url: string;
  }[];
}) => (
  <>
    <h2 className="text-2xl font-bold">Games</h2>
    <ul className="grid sm:grid-cols-2 gap-4">
      {games.map((game) => (
        <Link
          href={game.url}
          key={game.url}
          className="card shadow-lg hover:shadow-xl"
        >
          <li className="card-body">
            <h3 className="card-title">{game.title}</h3>
            <p>{game.content}</p>
          </li>
        </Link>
      ))}
    </ul>
  </>
);

export default GamesPage;

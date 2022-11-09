import Link from "next/link";

const GamesPage = ({
  games,
}: {
  games: {
    title: string;
    content: string;
    url: string;
  }[];
}) => (
  <>
    <h2 className="text-2xl font-bold">Games</h2>
    <div className="grid sm:grid-cols-2 gap-4">
      {games.map((game) => (
        <Link
          href={game.url}
          key={game.url}
          className="card shadow-lg hover:shadow-xl"
        >
          <div className="card-body">
            <h3 className="card-title">{game.title}</h3>
            <p>{game.content}</p>
          </div>
        </Link>
      ))}
    </div>
  </>
);

export default GamesPage;

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
    <h2>Games</h2>
    <ul>
      {games.map((game) => (
        <li key={game.url}>
          <Link href={game.url}>{game.title}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default GamesPage;

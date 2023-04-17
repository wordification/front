import Link from "next/link";

const SortingGameMenu = () => {
  const items = [
    {
      title: "New Game",
      content: "Start a new game",
      url: "/games/sorting/setup",
    },
    {
      title: "Resume Game",
      content: "Resume a game in progress",
      url: "/games/sorting/unfinished",
    },
    {
      title: "Completed Games",
      content: "View completed games",
      url: "/games/sorting/finished",
    },
  ];

  return (
    <ul className="grid sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <Link
          href={item.url}
          key={item.url}
          className="card shadow-lg hover:shadow-xl"
        >
          <li className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <p>{item.content}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SortingGameMenu;

import GamesPage from "./GamesPage";

const Page = () => {
  const games = [
    {
      title: "Sorting",
      content: "Sort the cards to win!",
      url: "/games/sorting",
    },
    {
      title: "Matching",
      content: "Match the cards to win!",
      url: "/games/matching",
    },
  ];

  return <GamesPage games={games} />;
};

export default Page;

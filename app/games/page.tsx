import GamesPage from "./GamesPage";

const GAME_CHOICES = [
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
] as const;

const Page = () => <GamesPage games={GAME_CHOICES} />;

export default Page;

import HomePage from "./HomePage";

const Page = () => {
  const updates = [
    {
      title: "New Game: Matching",
      date: "2022-10-23",
      content:
        "We've added a new game to the site: Matching. In this game, you'll be given a list of words and you'll have to match them to their sounds.",
    },
    {
      title: "New Game: Sorting",
      date: "2022-08-23",
      content:
        "We've added a new game to the site: Sorting. In this game, you'll be given a list of words and you'll have to sort them into their correct categories.",
    },
  ];
  return <HomePage updates={updates} />;
};

export default Page;

import SetupDropdown from "./SetupDropdown";

import getPhonemes from "@/lib/games/sorting/getPhonemes";

const Page = async () => {
  const phonemeOptions = await getPhonemes();

  return <SetupDropdown phonemeOptions={phonemeOptions} />;
};

export default Page;

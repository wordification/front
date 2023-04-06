import getGameDetails from "@/lib/games/sorting/getGameDetails";
import { getSpecificPhonemes } from "@/lib/games/sorting/getPhonemes";
import VowelButtons from "@/ui/games/sorting/VowelButtons";

const FirstLevel = async ({ gameId }: { gameId: string }) => {
  const data = await getGameDetails(gameId);
  const phonemes = getSpecificPhonemes([
    data.intPhonemeOne,
    data.intPhonemeTwo,
  ]);
  const options = phonemes.map((phoneme) => ({
    id: phoneme.id.toString(),
    label: phoneme.name,
    color: "secondary" as const,
  }));
  return <VowelButtons options={options} gameId={gameId} />;
};

export default FirstLevel;

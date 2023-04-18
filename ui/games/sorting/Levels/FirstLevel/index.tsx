import FirstLevelButtons from "./FirstLevelButtons";

import getAudio from "@/lib/games/sorting/getAudio";
import getGameDetails from "@/lib/games/sorting/getGameDetails";
import { getSpecificPhonemes } from "@/lib/games/sorting/getPhonemes";
import GameCard from "@/ui/games/sorting/Cards/GameCard";

const FirstLevel = async ({ gameId }: { gameId: string }) => {
  const data = await getGameDetails(gameId);
  const audio = await getAudio(gameId);
  const phonemes = await getSpecificPhonemes([
    data.intPhonemeOne,
    data.intPhonemeTwo,
  ]);
  const options = phonemes.map((phoneme) => ({
    id: phoneme.id.toString(),
    label: phoneme.name,
    color: "secondary" as const,
  }));
  return (
    <GameCard title="Click on the correct vowel sound." files={audio.files}>
      <FirstLevelButtons options={options} gameId={gameId} />
    </GameCard>
  );
};

export default FirstLevel;

import FirstLevelButtons from "./FirstLevelButtons"

import getGameDetails from "@/lib/games/matching/getGameDetails";

const FirstLevel = async({ gameId }: {gameId: string }) => {
    const data = await getGameDetails(gameId);
    const list_words = data.words;
    const words = list_words.map((word) => ({
        id: word.id,
        text: word.word.str_word,
        flipped: word.boolChosenFirst || word.boolComplete
    }));
    return <FirstLevelButtons words={words} gameId={gameId} />
};

export default FirstLevel;
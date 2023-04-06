const MOCK_PHONEMES = [
  {
    id: 40,
    name: "Short I",
  },
  {
    id: 49,
    name: "Long I",
  },
  {
    id: 55,
    name: "Short O",
  },
  {
    id: 53,
    name: "Long O",
  },
] as const;

export type PhonemeId = typeof MOCK_PHONEMES[number]["id"];

const getPhonemes = () => MOCK_PHONEMES;
export const getSpecificPhonemes = (phonemeIds: number[]) =>
  MOCK_PHONEMES.filter((phoneme) => phonemeIds.includes(phoneme.id));

export default getPhonemes;

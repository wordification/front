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

export default getPhonemes;

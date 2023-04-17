import fetchServer from "@/lib/fetch/fetchServer";

const getPhonemes = () =>
  fetchServer<{ id: number; name: string }[]>(
    "/sorting_game/phoneme_options/"
  ).then((res) => res.json());

export const getSpecificPhonemes = (phonemeIds: readonly number[]) =>
  getPhonemes().then((phonemes) =>
    phonemes.filter((phoneme) => phonemeIds.includes(phoneme.id))
  );

export default getPhonemes;

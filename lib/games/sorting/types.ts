type Word = {
  id: number;
  str_word: string;
  int_grade_level: number;
  arrint_phonemes: string[];
  arrstr_graphemes: string[];
  int_num_syllables: number;
  arrstr_syllables: string[];
  arrstr_sentences: string[];
};

type WordElement = {
  id: number;
  word: Word;
  boolBeingTested: boolean;
  tested_grapheme: string;
  boolComplete: boolean;
  game: number;
};

export type SortingGame = {
  id: number;
  words: WordElement[];
  date: Date;
  level: number;
  intPhonemeOne: number;
  intPhonemeTwo: number;
  intNumWordsForEachPhoneme: number;
  player: number;
};

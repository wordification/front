export type Word = Readonly<{
  id: number;
  str_word: string;
  int_grade_level: number;
  arrint_phonemes: string[];
  arrstr_graphemes: string[];
  int_num_syllables: number;
  arrstr_syllables: string[];
  arrstr_sentences: string[];
}>;

export type WordElement = Readonly<{
  id: number;
  word: Word;
  boolBeingTested: boolean;
  tested_grapheme: string;
  boolComplete: boolean;
  game: number;
}>;

export type SortingGame = Readonly<{
  id: number;
  words: WordElement[];
  date: Date;
  level: number;
  intPhonemeOne: number;
  intPhonemeTwo: number;
  intNumWordsForEachPhoneme: number;
  player: number;
}>;

export type ButtonProps = Readonly<{
  id: string;
  label: string;
  color: "primary" | "secondary" | "accent";
}>;

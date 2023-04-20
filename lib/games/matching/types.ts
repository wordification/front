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
    boolChosenFirst: boolean;
    strTestedPhoneme: string;
    boolComplete: boolean;
    game: number;
  }>;
  
  export type MatchingGame = Readonly<{
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
    id: number;
    text: string;
    flipped: boolean;
  }>;
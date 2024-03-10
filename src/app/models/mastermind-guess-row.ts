import { MastermindColor } from "./mastermind-color";

export interface MastermindGuessRow {
  colors: [MastermindColor, MastermindColor, MastermindColor, MastermindColor];
  hints: {
    correct: number;
    correctColorButWrongPosition: number;
  };
}

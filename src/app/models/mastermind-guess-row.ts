import { MastermindColor } from "./mastermind-color";
import { MastermindRow } from "./mastermind-row";

export interface MastermindGuessRow extends MastermindRow {
  hints: {
    correct: number;
    correctColorButWrongPosition: number;
  };
}

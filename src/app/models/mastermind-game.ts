import { MastermindGuessRow } from "./mastermind-guess-row";
import { MastermindRow } from "./mastermind-row";

export interface MastermindGame {
  actualPattern?: MastermindRow;
  guesses: MastermindGuessRow[];
}

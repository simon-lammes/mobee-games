import { MastermindGuessRow } from "./mastermind-guess-row";
import { MastermindRow } from "./mastermind-row";
import { MastermindColor } from "./mastermind-color";

export interface MastermindGame {
  allowedColors: MastermindColor[];
  actualPattern?: MastermindRow;
  guesses: MastermindGuessRow[];
  state: "playing" | "complete";
}

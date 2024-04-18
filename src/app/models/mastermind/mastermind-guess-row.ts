import { MastermindColor } from "./mastermind-color";
import { MastermindRow } from "./mastermind-row";
import { MastermindHints } from "./mastermind-hints";

export interface MastermindGuessRow extends MastermindRow {
  hints: MastermindHints;
}

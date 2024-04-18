import { MastermindGame } from "./mastermind-game";
import { MastermindRow } from "./mastermind-row";

export interface MastermindWorkerInterface {
  determineNextGuess: (game: MastermindGame) => MastermindRow;
}

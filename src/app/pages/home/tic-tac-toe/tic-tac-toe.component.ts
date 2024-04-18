import { Component, signal } from "@angular/core";
import { TicTacToeGame } from "../../../models/games/tic-tac-toe/tic-tac-toe-game";
import { JsonPipe } from "@angular/common";

/**
 * Generates a new default tic-tac-toe game.
 * This is a factory instead of a variable
 * because we want every caller of this factory
 * to get a new separate object that cannot be mutated by others to prevent bugs.
 */
const getDefaultTicTacToeGame = () =>
  ({
    fields: [
      ["BLANK", "BLANK", "BLANK"],
      ["BLANK", "BLANK", "BLANK"],
      ["BLANK", "BLANK", "BLANK"],
    ],
  }) satisfies TicTacToeGame;

@Component({
  selector: "app-tic-tac-toe",
  standalone: true,
  imports: [JsonPipe],
  template: `
    <p>tic-tac-toe works!</p>
    <div>{{ game() | json }}</div>
  `,
  styles: ``,
})
export class TicTacToeComponent {
  game = signal<TicTacToeGame>(getDefaultTicTacToeGame());
}

import { TicTacToeFieldStatus } from "./tic-tac-toe-field-status";

export interface TicTacToeGame {
  /**
   * An array of rows. Each row consists of three fields.
   * [0][0] should be the field in the top left corner.
   * [2][2] should be the field in the bottom right corner.
   */
  fields: [
    [TicTacToeFieldStatus, TicTacToeFieldStatus, TicTacToeFieldStatus],
    [TicTacToeFieldStatus, TicTacToeFieldStatus, TicTacToeFieldStatus],
    [TicTacToeFieldStatus, TicTacToeFieldStatus, TicTacToeFieldStatus],
  ];
}

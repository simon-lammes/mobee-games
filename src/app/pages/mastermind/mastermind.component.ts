import { Component, signal } from "@angular/core";
import { MastermindGuessRowComponent } from "./mastermind-guess-row/mastermind-guess-row.component";
import { MastermindGame } from "../../models/mastermind-game";
import { MastermindRowFormComponent } from "./mastermind-row-form/mastermind-row-form.component";
import { MastermindRow } from "../../models/mastermind-row";
import { MastermindSolutionRowComponent } from "./mastermind-solution-row/mastermind-solution-row.component";
import { MastermindRowSeparatorComponent } from "./mastermind-row-separator/mastermind-row-separator.component";
import { MastermindColor } from "../../models/mastermind-color";
import { MastermindHints } from "../../models/mastermind-hints";

@Component({
  selector: "app-mastermind",
  standalone: true,
  imports: [
    MastermindGuessRowComponent,
    MastermindRowFormComponent,
    MastermindSolutionRowComponent,
    MastermindRowSeparatorComponent,
  ],
  template: `
    <div class="grid grid-cols-6 max-w-xl m-auto p-8 gap-y-2 items-center">
      @if (game().actualPattern; as pattern) {
        <app-mastermind-solution-row [row]="pattern" [hidden]="true" />
        <app-mastermind-row-separator />
        @for (guess of game().guesses; track $index) {
          <app-mastermind-guess-row [row]="guess" [index]="$index" />
        }
        @if (game().guesses.length) {
          <app-mastermind-row-separator />
        }
        <app-mastermind-row-form
          label="Next guess"
          (rowSubmitted)="onGuessSubmitted($event)"
        />
      } @else {
        <app-mastermind-row-form
          label="Solution"
          (rowSubmitted)="onActualPatternSubmitted($event)"
        />
      }
    </div>
  `,
  styles: ``,
})
export class MastermindComponent {
  game = signal<MastermindGame>({
    guesses: [],
  });

  onActualPatternSubmitted(pattern: MastermindRow) {
    this.game.update((game) => ({ ...game, actualPattern: pattern }));
  }

  onGuessSubmitted(guess: MastermindRow) {
    this.game.update((game) => ({
      ...game,
      guesses: [
        ...game.guesses,
        {
          ...guess,
          hints: this.determineHints(game.actualPattern!, guess),
        },
      ],
    }));
  }

  determineHints(
    { colors: solutionColors }: MastermindRow,
    { colors: guessColors }: MastermindRow,
  ) {
    const notGuessedPinColors: MastermindColor[] = [];
    const incorrectSolutionColors: MastermindColor[] = [];
    let correct = 0;
    for (let i = 0; i < 4; i++) {
      if (solutionColors[i] === guessColors[i]) {
        correct++;
      } else {
        notGuessedPinColors.push(solutionColors[i]);
        incorrectSolutionColors.push(guessColors[i]);
      }
    }
    let correctColorButWrongPosition = 0;
    for (const notGuessedPinColor of notGuessedPinColors) {
      const solutionIndex = incorrectSolutionColors.indexOf(notGuessedPinColor);
      if (solutionIndex > -1) {
        incorrectSolutionColors.splice(solutionIndex, 1);
        correctColorButWrongPosition++;
      }
    }
    return {
      correct,
      correctColorButWrongPosition,
      incorrectCount: 4 - correct - correctColorButWrongPosition,
    } satisfies MastermindHints;
  }
}

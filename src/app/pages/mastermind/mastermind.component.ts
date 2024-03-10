import { Component, signal } from "@angular/core";
import { MastermindGuessRowComponent } from "./mastermind-guess-row/mastermind-guess-row.component";
import { MastermindGame } from "../../models/mastermind-game";
import { MastermindRowFormComponent } from "./mastermind-row-form/mastermind-row-form.component";
import { MastermindRow } from "../../models/mastermind-row";
import { MastermindSolutionRowComponent } from "./mastermind-solution-row/mastermind-solution-row.component";

@Component({
  selector: "app-mastermind",
  standalone: true,
  imports: [
    MastermindGuessRowComponent,
    MastermindRowFormComponent,
    MastermindSolutionRowComponent,
  ],
  template: `
    <div class="grid grid-cols-4 max-w-md m-auto p-8">
      @if (game().actualPattern) {
        <app-mastermind-solution-row
          [row]="game().actualPattern"
          [hidden]="true"
        />
        @for (guess of game().guesses; track $index) {
          <app-mastermind-guess-row [row]="guess" />
        }
        <h2 class="col-span-4">Make your guess:</h2>
        <app-mastermind-row-form (rowSubmitted)="onGuessSubmitted($event)" />
      } @else {
        <app-mastermind-row-form
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
        { ...guess, hints: { correct: 1, correctColorButWrongPosition: 1 } },
      ],
    }));
  }
}

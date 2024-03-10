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
    <div class="grid grid-cols-6 max-w-xl m-auto p-8">
      @if (game().actualPattern; as pattern) {
        <app-mastermind-solution-row [row]="pattern" [hidden]="true" />
        @for (guess of game().guesses; track $index) {
          <app-mastermind-guess-row [row]="guess" [index]="$index" />
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
        { ...guess, hints: { correct: 1, correctColorButWrongPosition: 1 } },
      ],
    }));
  }
}

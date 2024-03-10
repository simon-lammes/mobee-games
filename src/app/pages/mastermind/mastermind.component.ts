import { Component, signal } from "@angular/core";
import { MastermindGuessRowComponent } from "./mastermind-guess-row/mastermind-guess-row.component";
import { MastermindGame } from "../../models/mastermind-game";
import { MastermindRowFormComponent } from "./mastermind-row-form/mastermind-row-form.component";

@Component({
  selector: "app-mastermind",
  standalone: true,
  imports: [MastermindGuessRowComponent, MastermindRowFormComponent],
  template: `
    @if (game().actualPattern) {
      @for (guess of game().guesses; track $index) {
        <app-mastermind-guess-row />
      }
    } @else {
      <app-mastermind-row-form />
    }
  `,
  styles: ``,
})
export class MastermindComponent {
  game = signal<MastermindGame>({
    guesses: [],
  });
}

import { Component, signal } from "@angular/core";
import { MastermindGuessRowComponent } from "./mastermind-guess-row/mastermind-guess-row.component";
import { MastermindGame } from "../../models/mastermind-game";

@Component({
  selector: "app-mastermind",
  standalone: true,
  imports: [MastermindGuessRowComponent],
  template: `
    @for (guess of game().guesses; track $index) {
      <app-mastermind-guess-row />
    }
  `,
  styles: ``,
})
export class MastermindComponent {
  game = signal<MastermindGame>({ guesses: [] });
}

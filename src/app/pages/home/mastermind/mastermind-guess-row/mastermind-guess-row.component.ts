import { Component, input } from "@angular/core";
import { MastermindGuessRow } from "../../../../models/mastermind/mastermind-guess-row";
import { MastermindColorComponent } from "../mastermind-color/mastermind-color.component";
import { MastermindHintsComponent } from "../mastermind-hint/mastermind-hints.component";

@Component({
  selector: "app-mastermind-guess-row",
  standalone: true,
  imports: [MastermindColorComponent, MastermindHintsComponent],
  template: `
    <b class="font-bold">Guess {{ index() + 1 }}</b>
    @for (color of row().colors; track $index) {
      <app-mastermind-color [color]="color" [disabled]="true" />
    }
    <app-mastermind-hints [hints]="row().hints" />
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class MastermindGuessRowComponent {
  row = input.required<MastermindGuessRow>();

  index = input.required<number>();
}

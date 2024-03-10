import { Component, input } from "@angular/core";
import { MastermindGuessRow } from "../../../models/mastermind-guess-row";
import { MastermindColorComponent } from "../mastermind-color/mastermind-color.component";

@Component({
  selector: "app-mastermind-guess-row",
  standalone: true,
  imports: [MastermindColorComponent],
  template: `
    <b class="font-bold">Guess {{ index() + 1 }}</b>
    @for (color of row().colors; track $index) {
      <app-mastermind-color [color]="color" [disabled]="true" />
    }
    <div></div>
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

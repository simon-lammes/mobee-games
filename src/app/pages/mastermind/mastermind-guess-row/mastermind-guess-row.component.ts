import { Component, input } from "@angular/core";
import { MastermindGuessRow } from "../../../models/mastermind-guess-row";
import { MastermindColorComponent } from "../mastermind-color/mastermind-color.component";

@Component({
  selector: "app-mastermind-guess-row",
  standalone: true,
  imports: [MastermindColorComponent],
  template: `
    @for (color of row().colors; track $index) {
      <app-mastermind-color [color]="color" [disabled]="true" />
    }
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
}

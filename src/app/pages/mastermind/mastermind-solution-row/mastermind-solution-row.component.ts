import { Component, input } from "@angular/core";
import { MastermindColorComponent } from "../mastermind-color/mastermind-color.component";
import { MastermindGuessRow } from "../../../models/mastermind-guess-row";
import { MastermindRow } from "../../../models/mastermind-row";

@Component({
  selector: "app-mastermind-solution-row",
  standalone: true,
  imports: [MastermindColorComponent],
  template: `
    @for (color of row().colors; track $index) {
      <app-mastermind-color
        [color]="hidden() ? undefined : color"
        [disabled]="true"
      />
    }
    <div class="h-0.5 rounded-full bg-neutral-100 col-span-4"></div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class MastermindSolutionRowComponent {
  row = input.required<MastermindRow>();

  hidden = input.required<boolean>();
}

import { Component, input } from "@angular/core";
import { MastermindColorComponent } from "../mastermind-color/mastermind-color.component";
import { MastermindRow } from "../../../../models/mastermind/mastermind-row";

@Component({
  selector: "app-mastermind-solution-row",
  standalone: true,
  imports: [MastermindColorComponent],
  template: `
    <b class="font-bold">Solution</b>
    @for (color of row().colors; track $index) {
      <app-mastermind-color
        [color]="hidden() ? undefined : color"
        [disabled]="true"
      />
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
export class MastermindSolutionRowComponent {
  row = input.required<MastermindRow>();

  hidden = input.required<boolean>();
}

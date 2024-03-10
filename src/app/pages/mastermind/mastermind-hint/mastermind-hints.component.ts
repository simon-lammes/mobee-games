import { Component, input } from "@angular/core";
import { MastermindHints } from "../../../models/mastermind-hints";

@Component({
  selector: "app-mastermind-hints",
  standalone: true,
  imports: [],
  template: `
    <div class="flex gap-3">
      <div>{{ hints().correct }}</div>
      <div>{{ hints().correctColorButWrongPosition }}</div>
    </div>
  `,
  styles: ``,
})
export class MastermindHintsComponent {
  hints = input.required<MastermindHints>();
}

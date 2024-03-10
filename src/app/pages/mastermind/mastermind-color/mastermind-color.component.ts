import { Component, input } from "@angular/core";
import { MastermindColor } from "../../../models/mastermind-color";

@Component({
  selector: "app-mastermind-color",
  standalone: true,
  imports: [],
  template: `
    <div style="height: 1rem; width: 1rem; background-color: red"></div>
  `,
  styles: ``,
})
export class MastermindColorComponent {
  color = input.required<MastermindColor>();
}

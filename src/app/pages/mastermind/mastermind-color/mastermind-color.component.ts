import { Component, input } from "@angular/core";
import { MastermindColor } from "../../../models/mastermind-color";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-mastermind-color",
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="h-4 w-4 rounded-full"
      [ngClass]="{
        'bg-red-500': color() === 'red',
        'bg-yellow-500': color() === 'yellow'
      }"
    ></div>
  `,
  styles: ``,
})
export class MastermindColorComponent {
  color = input.required<MastermindColor>();
}

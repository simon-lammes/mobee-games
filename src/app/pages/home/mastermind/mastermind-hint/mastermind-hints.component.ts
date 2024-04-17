import { Component, computed, input } from "@angular/core";
import { MastermindHints } from "../../../../models/mastermind-hints";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-mastermind-hints",
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="grid bg-neutral-600 rounded-md p-2 gap-2 w-fit"
      style="grid-template-columns: repeat(2, auto)"
    >
      @for (color of colors(); track $index) {
        <div
          class="h-3 w-3 rounded-full"
          [ngClass]="{
            'bg-white': color === 'white',
            'bg-red-400': color === 'red'
          }"
        ></div>
      }
    </div>
  `,
  styles: ``,
})
export class MastermindHintsComponent {
  hints = input.required<MastermindHints>();

  colors = computed(() => {
    const colors: ("red" | "white" | undefined)[] = [];
    for (let i = 0; i < 4; i++) {
      if (this.hints().correct > i) {
        colors.push("red");
      } else if (
        this.hints().correct + this.hints().correctColorButWrongPosition >
        i
      ) {
        colors.push("white");
      } else {
        colors.push(undefined);
      }
    }
    return colors;
  });
}

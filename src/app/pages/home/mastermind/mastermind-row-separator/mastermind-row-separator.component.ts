import { Component } from "@angular/core";

@Component({
  selector: "app-mastermind-row-separator",
  standalone: true,
  imports: [],
  template: `
    <div class="h-0.5 rounded-full bg-neutral-100 col-span-6"></div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class MastermindRowSeparatorComponent {}

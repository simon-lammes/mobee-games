import { Component, EventEmitter, input, Output } from "@angular/core";
import { MastermindColor } from "../../../../models/games/mastermind/mastermind-color";
import { NgClass } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";

@Component({
  selector: "app-mastermind-color",
  standalone: true,
  imports: [NgClass, OverlayModule],
  template: `
    <button
      class="h-6 w-6 rounded-full m-auto"
      [disabled]="disabled()"
      [ngClass]="{
        'bg-red-500': color() === 'red',
        'bg-blue-500': color() === 'blue',
        'bg-green-500': color() === 'green',
        'bg-yellow-500': color() === 'yellow',
        'bg-orange-500': color() === 'orange',
        'bg-purple-500': color() === 'purple',
        'bg-neutral-500': !color(),
        'ring-blue-300 ring-4': isOpen()
      }"
      (click)="clicked.emit($event)"
      type="button"
      cdkOverlayOrigin
      #trigger
    ></button>
  `,
  styles: [
    `
      :host {
        text-align: center;
        line-height: 1;
      }
    `,
  ],
})
export class MastermindColorComponent {
  color = input.required<MastermindColor | undefined>();

  disabled = input(false);

  isOpen = input(false);

  @Output()
  clicked = new EventEmitter();
}

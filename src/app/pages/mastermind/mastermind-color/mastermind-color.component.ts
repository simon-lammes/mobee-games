import { Component, EventEmitter, input, Output, signal } from "@angular/core";
import { allColors, MastermindColor } from "../../../models/mastermind-color";
import { NgClass } from "@angular/common";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  OverlayModule,
} from "@angular/cdk/overlay";

@Component({
  selector: "app-mastermind-color",
  standalone: true,
  imports: [NgClass, OverlayModule],
  template: `
    <button
      class="h-6 w-6 rounded-full m-auto"
      [ngClass]="{
        'bg-red-500': color() === 'red',
        'bg-yellow-500': color() === 'yellow',
        'bg-neutral-500': !color(),
        ring: isOpen()
      }"
      [disabled]="disabled()"
      (click)="clicked.emit()"
      type="button"
      cdkOverlayOrigin
      #trigger
    ></button>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="trigger"
      [cdkConnectedOverlayOpen]="isOpen()"
      (overlayOutsideClick)="dismissed.emit()"
      [cdkConnectedOverlayWidth]="200"
      [cdkConnectedOverlayPanelClass]="'absolute'"
      [cdkConnectedOverlayOffsetY]="8"
    >
      <div
        class="shadow-sm border rounded-sm bg-neutral-50 px-3 py-2 flex gap-3"
      >
        @for (color of allColors; track color) {
          <button
            class="h-6 w-6 rounded-full"
            [ngClass]="{
              'bg-red-500': color === 'red',
              'bg-yellow-500': color === 'yellow'
            }"
            (click)="selectColor(color)"
          ></button>
        }
      </div>
    </ng-template>
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

  @Output()
  dismissed = new EventEmitter();

  @Output()
  colorSelected = new EventEmitter<MastermindColor>();

  allColors = allColors;

  selectColor(color: MastermindColor) {
    this.colorSelected.emit(color);
  }
}

import { Component, EventEmitter, input, Output, signal } from "@angular/core";
import { allColors, MastermindColor } from "../../../models/mastermind-color";
import { NgClass } from "@angular/common";
import { CdkConnectedOverlay, CdkOverlayOrigin } from "@angular/cdk/overlay";

@Component({
  selector: "app-mastermind-color",
  standalone: true,
  imports: [NgClass, CdkOverlayOrigin, CdkConnectedOverlay],
  template: `
    <button
      class="h-4 w-4 rounded-full m-auto"
      [ngClass]="{
        'bg-red-500': color() === 'red',
        'bg-yellow-500': color() === 'yellow',
        'bg-neutral-500': !color(),
        ring: isOpen()
      }"
      [disabled]="disabled()"
      (click)="isOpen.set(!isOpen())"
      type="button"
      cdkOverlayOrigin
      #trigger="cdkOverlayOrigin"
    ></button>
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="trigger"
      [cdkConnectedOverlayOpen]="isOpen()"
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayBackdropClass]="'cdk-overlay-transparent-backdrop'"
      [cdkConnectedOverlayOffsetX]="16"
      [cdkConnectedOverlayOffsetY]="4"
      (overlayOutsideClick)="isOpen.set(false)"
    >
      <div class="shadow-sm border rounded-sm w-32">
        @for (color of allColors; track color) {
          <button
            class="h-4 w-4 rounded-full"
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
  styles: ``,
})
export class MastermindColorComponent {
  color = input.required<MastermindColor | undefined>();

  disabled = input(false);

  isOpen = signal(false);

  @Output()
  colorSelected = new EventEmitter<MastermindColor>();

  allColors = allColors;

  selectColor(color: MastermindColor) {
    this.isOpen.set(false);
    this.colorSelected.emit(color);
  }
}

import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  signal,
} from "@angular/core";
import { MastermindRow } from "../../../models/mastermind-row";
import { MastermindColorComponent } from "../mastermind-color/mastermind-color.component";
import { MastermindColor } from "../../../models/mastermind-color";

@Component({
  selector: "app-mastermind-row-form",
  standalone: true,
  imports: [MastermindColorComponent],
  template: `
    <b class="font-bold">{{ label() }}</b>
    @for (color of colors(); track $index) {
      <app-mastermind-color
        [color]="color"
        (colorSelected)="onColorSelected($event, $index)"
        [isOpen]="openColorIndex() === $index"
        (clicked)="onColorClicked($index)"
        (dismissed)="openColorIndex.set(undefined)"
      />
    }
    <div>
      <button [disabled]="disabled()" (click)="submit()">confirm</button>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class MastermindRowFormComponent {
  label = input.required<string>();

  colors = signal<(MastermindColor | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  disabled = computed(() => this.colors().some((x) => !x));

  openColorIndex = signal<number | undefined>(0);

  @Output()
  rowSubmitted = new EventEmitter<MastermindRow>();

  onColorSelected(selectedColor: MastermindColor, i: number) {
    this.colors.update((colors) =>
      colors.map((color, colorIndex) =>
        colorIndex === i ? selectedColor : color,
      ),
    );
    this.openColorIndex.update((openIndex) =>
      openIndex != null && openIndex < 3 ? openIndex + 1 : undefined,
    );
  }

  submit() {
    this.rowSubmitted.emit({
      colors: this.colors() as any,
    });
    this.colors.set([undefined, undefined, undefined, undefined]);
  }

  onColorClicked(i: number) {
    this.openColorIndex.update((openIndex) =>
      openIndex === i ? undefined : i,
    );
  }
}

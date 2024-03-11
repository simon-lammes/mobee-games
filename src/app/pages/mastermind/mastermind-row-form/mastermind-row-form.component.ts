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
import { allColors, MastermindColor } from "../../../models/mastermind-color";

@Component({
  selector: "app-mastermind-row-form",
  standalone: true,
  imports: [MastermindColorComponent],
  template: `
    <b class="font-bold">{{ label() }}</b>
    @for (color of colors(); track $index) {
      <app-mastermind-color
        [color]="color"
        [isOpen]="openColorIndex() === $index"
        [disabled]="false"
        (clicked)="onColorClicked($index)"
      />
    }
    <div>
      <button class="text-2xl" [disabled]="disabled()" (click)="submit()">
        {{ disabled() ? "✔️" : "✅" }}
      </button>
    </div>
    @if (openColorIndex() != null) {
      <div
        class="flex gap-3 col-span-6 border-2 border-blue-300 rounded-md px-3 py-2"
      >
        @for (color of allColors; track $index) {
          <app-mastermind-color
            [disabled]="false"
            [isOpen]="false"
            [color]="color"
            (clicked)="onColorSelected(color)"
          />
        }
      </div>
      <div></div>
    }
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

  readonly allColors = allColors;

  onColorSelected(selectedColor: MastermindColor) {
    const i = this.openColorIndex();
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
    this.openColorIndex.set(0);
  }

  onColorClicked(i: number) {
    console.log("hi", i);
    this.openColorIndex.update((openIndex) =>
      openIndex === i ? undefined : i,
    );
  }
}

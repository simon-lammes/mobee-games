import { Component, EventEmitter, input, Output, signal } from "@angular/core";
import { MastermindRow } from "../../../models/mastermind-row";
import { MastermindColorComponent } from "../mastermind-color/mastermind-color.component";
import { MastermindColor } from "../../../models/mastermind-color";

@Component({
  selector: "app-mastermind-row-form",
  standalone: true,
  imports: [MastermindColorComponent],
  template: `
    @for (color of row().colors; track $index) {
      <app-mastermind-color
        [color]="color"
        (colorSelected)="onColorSelected($event, $index)"
      />
    }
    <div>
      <button (click)="rowSubmitted.emit(row())">confirm</button>
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
  row = signal<MastermindRow>({ colors: ["red", "red", "red", "yellow"] });

  @Output()
  rowSubmitted = new EventEmitter<MastermindRow>();

  onColorSelected(selectedColor: MastermindColor, i: number) {
    this.row.update(
      (row) =>
        ({
          ...row,
          colors: row.colors.map((color, colorIndex) =>
            colorIndex === i ? selectedColor : color,
          ),
        }) as MastermindRow,
    );
  }
}

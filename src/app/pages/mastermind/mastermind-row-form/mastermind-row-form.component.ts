import { Component, input, signal } from "@angular/core";
import { MastermindRow } from "../../../models/mastermind-row";
import { MastermindColorComponent } from "../mastermind-color/mastermind-color.component";

@Component({
  selector: "app-mastermind-row-form",
  standalone: true,
  imports: [MastermindColorComponent],
  template: ` @for (color of row().colors; track $index) {
    <app-mastermind-color [color]="color" />
  }`,
  styles: ``,
})
export class MastermindRowFormComponent {
  row = signal<MastermindRow>({ colors: ["red", "red", "red", "red"] });
}

import { Component, input, output } from "@angular/core";

@Component({
  selector: "app-input-field",
  standalone: true,
  imports: [],
  template: `<input
    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    [value]="value()"
    [placeholder]="placeholder()"
    (input)="onInput($any($event))"
  /> `,
  styles: ``,
})
export class InputFieldComponent {
  value = input.required<string | null | undefined>();

  placeholder = input<string>();

  valueChange = output<string>();

  onInput(event: InputEvent) {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }
}

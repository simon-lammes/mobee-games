import { Component, input } from "@angular/core";

@Component({
  selector: "app-outline-button",
  standalone: true,
  imports: [],
  template: `
    <button
      [type]="type()"
      class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      <ng-content />
    </button>
  `,
  styles: ``,
})
export class OutlineButtonComponent {
  type = input<"submit" | "reset" | "button">("button");
}

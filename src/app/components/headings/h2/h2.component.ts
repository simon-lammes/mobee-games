import { Component } from "@angular/core";

@Component({
  selector: "app-h2",
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-xl font-semibold">
      <ng-content />
    </h2>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class H2Component {}

import { Component } from "@angular/core";

@Component({
  selector: "app-h1",
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-2xl font-bold">
      <ng-content />
    </h1>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class H1Component {}

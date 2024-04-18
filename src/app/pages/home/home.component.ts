import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  template: `
    <app-toolbar />
    <div class="max-w-screen-xl m-auto px-2 sm:px-6 lg:px-8 py-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}

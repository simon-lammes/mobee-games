import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  template: `
    <app-toolbar />
    <div class="p-4 max-w-screen-xl m-auto">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}

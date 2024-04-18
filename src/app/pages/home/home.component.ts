import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  template: `
    <app-toolbar />
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class HomeComponent {}

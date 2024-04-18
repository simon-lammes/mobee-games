import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="['mastermind']">Mastermind</a>
    <a [routerLink]="['tic-tac-toe']">Tic-tac-toe</a>
  `,
  styles: ``,
})
export class ToolbarComponent {}

import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "mastermind",
    loadComponent: () =>
      import("./pages/mastermind/mastermind.component").then(
        (x) => x.MastermindComponent,
      ),
  },
  {
    path: "**",
    redirectTo: "mastermind",
  },
];

import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "mastermind",
    loadComponent: () =>
      import("./mastermind/mastermind.component").then(
        (x) => x.MastermindComponent,
      ),
  },
];

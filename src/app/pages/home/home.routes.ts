import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'mastermind',
        loadComponent: () =>
          import("./mastermind/mastermind.component").then(
            (x) => x.MastermindComponent,
          ),
      },
      {
        path: '**',
        redirectTo: "mastermind",
      }
    ]
  }

]

export default routes;
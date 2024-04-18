import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { CircleUserRound, LucideAngularModule, Plus } from "lucide-angular";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      // todo: remove this as soon as lucide properly supports Angular standalone components.
      LucideAngularModule.pick({ CircleUserRound, Plus }),
    ),
  ],
};

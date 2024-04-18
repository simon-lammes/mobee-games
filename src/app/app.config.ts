import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  CircleUserRound,
  LucideAngularModule,
  Pause,
  Play,
  Plus,
  X,
} from "lucide-angular";
import { DEFAULT_DIALOG_CONFIG } from "@angular/cdk/dialog";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      // todo: remove this as soon as lucide properly supports Angular standalone components.
      LucideAngularModule.pick({ CircleUserRound, Plus, X, Play, Pause }),
    ),
    { provide: DEFAULT_DIALOG_CONFIG, useValue: { hasBackdrop: true } },
  ],
};

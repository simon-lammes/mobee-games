import { Component, computed, signal } from "@angular/core";
import {
  ActivatedRoute,
  IsActiveMatchOptions,
  Router,
  RouterLink,
} from "@angular/router";
import { NgClass } from "@angular/common";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [RouterLink, NgClass],
  template: `
    <nav class="bg-white shadow">
      <div class="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 justify-between">
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex flex-shrink-0 items-center">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              @for (link of links(); track link.routerLink) {
                <a
                  [routerLink]="link.routerLink"
                  class="inline-flex items-center border-b-2 text-sm font-medium px-1 pt-1 "
                  [ngClass]="{
                    'border-indigo-500 text-gray-900': link.active,
                    'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
                      !link.active
                  }"
                  >{{ link.label }}</a
                >
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: ``,
})
export class ToolbarComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  readonly routerEvents = toSignal(this.router.events);

  readonly links = computed(() => {
    // Call routerEvents signal so that this computed signal is recomputed whenever
    // the user navigates. This way, the active link will be re-calculated whenever necessary.
    this.routerEvents();

    // Create closure for code-reuse.
    const createLink = (label: string, routerLink: any[]) => ({
      routerLink: routerLink,
      label: label,
      active: this.router.isActive(
        this.router.createUrlTree(routerLink, { relativeTo: this.route }),
        {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "ignored",
        } satisfies IsActiveMatchOptions,
      ),
    });

    return [
      createLink("Settings", ["settings"]),
      createLink("Players", ["players"]),
      createLink("Mastermind", ["mastermind"]),
      createLink("Tic-tac-toe", ["tic-tac-toe"]),
      createLink("War of balls", ["war-of-balls"]),
    ];
  });
}

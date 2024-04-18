import { Component } from "@angular/core";
import { H1Component } from "../../../components/headings/h1/h1.component";
import { H2Component } from "../../../components/headings/h2/h2.component";

@Component({
  selector: "app-settings",
  standalone: true,
  imports: [H1Component, H2Component],
  template: `
    <app-h1>Settings</app-h1>
    <app-h2 class="pt-1">IndexedDB Storage</app-h2>
    <p>
      Here we could make cool use of the
      <a
        class="underline"
        href="https://developer.mozilla.org/en-US/docs/Web/API/Storage_API"
        >StorageManager API.</a
      >
      Dexie offers a nice
      <a class="underline" href="https://dexie.org/docs/StorageManager"
        >hand's on guide.</a
      >
    </p>
    <div>
      Ideas:
      <ul class="list-disc">
        <li>Show whether storage is persisted</li>
        <li>Allow user to persist the DB.</li>
        <li>Allow user to delete/recreate the DB if that is possible.</li>
        <li>
          Show a nice estimation of how much storage is used, and how much is
          still available.
        </li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class SettingsComponent {}

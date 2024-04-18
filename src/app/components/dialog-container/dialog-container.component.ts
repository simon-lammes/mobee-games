import { Component, input } from "@angular/core";
import { DialogRef } from "@angular/cdk/dialog";
import { LucideAngularModule } from "lucide-angular";
import { H2Component } from "../headings/h2/h2.component";

@Component({
  selector: "app-dialog-container",
  standalone: true,
  imports: [LucideAngularModule, H2Component],
  template: `
    <div class="p-4 space-y-4">
      <app-h2>
        {{ title() }}
      </app-h2>
      <div>
        <ng-content />
      </div>
    </div>
    <button
      type="button"
      class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      (click)="dialogRef.close()"
    >
      <lucide-icon class="h-4 w-4" name="x"></lucide-icon>
      <span class="sr-only">Close</span>
    </button>
  `,
  styles: `
    :host {
      display: block;
      position: relative;
      background: #fff;
      border-radius: 8px;
    }
  `,
})
export class DialogContainerComponent {
  title = input.required<string>();

  constructor(protected dialogRef: DialogRef) {}
}

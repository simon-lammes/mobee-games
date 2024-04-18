import { Component } from "@angular/core";
import { DialogContainerComponent } from "../../../../components/dialog-container/dialog-container.component";
import { DialogRef } from "@angular/cdk/dialog";

@Component({
  selector: "app-add-player-dialog",
  standalone: true,
  imports: [DialogContainerComponent],
  template: `
    <app-dialog-container title="Add player">
      <p>A cool (Angular reactive) form will go here!</p>
    </app-dialog-container>
  `,
})
export class AddPlayerDialogComponent {
  constructor() {}
}

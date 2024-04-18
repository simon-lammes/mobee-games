import { Component } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";
import { OutlineButtonComponent } from "../../../../../components/outline-button/outline-button.component";
import { PlayerService } from "../../../../../services/player.service";
import { Dialog } from "@angular/cdk/dialog";
import { AddPlayerDialogComponent } from "../../add-player-dialog/add-player-dialog.component";

@Component({
  selector: "app-add-player-button",
  standalone: true,
  imports: [LucideAngularModule, OutlineButtonComponent],
  template: `
    <app-outline-button (click)="openDialog()">
      <span class="flex items-center gap-1">
        <lucide-icon class="w-4 h-4" name="plus"></lucide-icon>
        Add player
      </span>
    </app-outline-button>
  `,
  styles: ``,
})
export class AddPlayerButtonComponent {
  constructor(private readonly dialog: Dialog) {}

  openDialog() {
    this.dialog.open(AddPlayerDialogComponent);
  }
}

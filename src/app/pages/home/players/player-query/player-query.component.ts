import { Component, input, output } from "@angular/core";
import { Observable, startWith } from "rxjs";
import { PlayerQuery } from "../../../../models/player-query";
import { FormBuilder } from "@angular/forms";
import { PlayerService } from "../../../../services/player.service";
import { InputFieldComponent } from "../../../../components/input-field/input-field.component";
import { OutlineButtonComponent } from "../../../../components/outline-button/outline-button.component";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-player-query",
  standalone: true,
  imports: [InputFieldComponent, OutlineButtonComponent, LucideAngularModule],
  template: `
    <div class="flex gap-3">
      <app-input-field
        [value]="playerQuery().search"
        placeholder="Search players..."
        (valueChange)="onSearchChange($event)"
      />
      <app-outline-button>
        <span class="flex items-center gap-1">
          <lucide-icon class="w-4 h-4" name="plus"></lucide-icon>
          Add player
        </span>
      </app-outline-button>
    </div>
  `,
  styles: ``,
})
export class PlayerQueryComponent {
  playerQuery = input.required<PlayerQuery>();

  playerQueryChanged = output<PlayerQuery>();

  onSearchChange(newSearch: string) {
    this.playerQueryChanged.emit({ ...this.playerQuery(), search: newSearch });
  }
}

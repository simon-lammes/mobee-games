import { Component, input, output } from "@angular/core";
import { Observable, startWith } from "rxjs";
import { PlayerQuery } from "../../../../models/player-query";
import { FormBuilder } from "@angular/forms";
import { PlayerService } from "../../../../services/player.service";
import { InputFieldComponent } from "../../../../components/input-field/input-field.component";

@Component({
  selector: "app-player-query",
  standalone: true,
  imports: [InputFieldComponent],
  template: `
    <div>
      <app-input-field
        [value]="playerQuery().search"
        placeholder="Search players..."
        (valueChange)="onSearchChange($event)"
      />
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

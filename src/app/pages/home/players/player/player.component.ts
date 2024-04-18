import { Component, input } from "@angular/core";
import { Player } from "../../../../models/player";

@Component({
  selector: "app-player",
  standalone: true,
  imports: [],
  template: `
    <div class="flex gap-4">
      <img [src]="player().profileImage" alt="profile picture" />
      <div>{{ player().firstName }} {{ player().lastName }}</div>
    </div>
  `,
  styles: ``,
})
export class PlayerComponent {
  player = input.required<Player>();
}

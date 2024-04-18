import { Component, computed, effect, signal } from "@angular/core";
import { Ticker } from "../../../lib/ticker";
import { WarOfBallsGame } from "../../../models/games/war-of-balls/war-of-balls-game";
import { OutlineButtonComponent } from "../../../components/outline-button/outline-button.component";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-war-of-balls",
  standalone: true,
  imports: [OutlineButtonComponent, LucideAngularModule],
  template: `
    <app-outline-button (click)="ticker.playPause()">
      <lucide-icon [name]="ticker.isRunning() ? 'pause' : 'play'"></lucide-icon>
    </app-outline-button>
    <p>{{ ticker.timePassedMillis() }}</p>
    <svg
      class="border-2 border-blue-500"
      [attr.height]="game.height"
      [attr.width]="game.width"
    >
      @for (player of game.players; track $index) {
        <circle
          r="8"
          [attr.cx]="player.position.x"
          [attr.cy]="player.position.y"
        />
      }
    </svg>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class WarOfBallsComponent {
  readonly ticker = new Ticker();

  /**
   * The game state object is just a raw, mutable variable.
   * Even though it is more error-prone than signals holding
   * objects that are only modified through copies,
   * I went with this approach.
   * It is easier to work with, considering that such a complex game has a ton
   * of changes happening every few milliseconds.
   */
  game: WarOfBallsGame = {
    width: 800,
    height: 600,
    players: [{ position: { x: 0, y: 0 }, velocity: { x: 100, y: 100 } }],
  };

  constructor() {
    this.ticker.registerUpdateCallback((millisecondsPassed) => {
      const secondsPassed = millisecondsPassed / 1000;
      this.game.players.forEach((player) => {
        player.position.x =
          player.position.x + player.velocity.x * secondsPassed;
        player.position.y =
          player.position.y + player.velocity.y * secondsPassed;
      });
    });
  }
}

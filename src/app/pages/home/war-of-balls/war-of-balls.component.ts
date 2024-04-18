import { Component, computed, effect, signal } from "@angular/core";
import { Ticker } from "../../../lib/ticker";
import { WarOfBallsGame } from "../../../models/war-of-balls/war-of-balls-game";

@Component({
  selector: "app-war-of-balls",
  standalone: true,
  imports: [],
  template: `
    <button class="font-bold text-2xl" (click)="ticker.playPause()">
      play/pause
    </button>
    <p>{{ ticker.timePassedMillis() }}</p>
    <svg>
      @for (player of players(); track $index) {
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

  readonly game = signal<WarOfBallsGame>({
    players: [{ position: { x: 0, y: 0 }, velocity: { x: 1, y: 1 } }],
  });

  readonly players = computed(() => this.game().players);

  constructor() {
    this.ticker.registerUpdateCallback((x) => {
      this.game.update((previousGame) => {
        const newGame = { ...previousGame };
        newGame.players = previousGame.players.map((player) => {
          const newPosition = {
            x: player.position.x + player.velocity.x,
            y: player.position.y + player.velocity.y,
          };
          return { ...player, position: newPosition };
        });
        return newGame;
      });
    });
  }
}

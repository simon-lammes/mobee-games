import { Component, signal } from "@angular/core";
import { PlayerService } from "../../../services/player.service";
import { Form, FormBuilder } from "@angular/forms";
import { PlayerQuery } from "../../../models/player-query";
import { Observable, startWith, switchMap } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { Player } from "../../../models/player";
import { PlayerComponent } from "./player/player.component";
import { toObservable } from "@angular/core/rxjs-interop";
import { PlayerQueryComponent } from "./player-query/player-query.component";

@Component({
  selector: "app-players",
  standalone: true,
  imports: [AsyncPipe, PlayerComponent, PlayerQueryComponent],
  template: `
    <app-player-query
      [playerQuery]="playerQuery()"
      (playerQueryChanged)="playerQuery.set($event)"
    />

    @if (players$ | async; as players) {
      @for (player of players; track player.id) {
        <app-player [player]="player" />
      }
    }
  `,
  styles: ``,
})
export class PlayersComponent {
  readonly playerQuery = signal<PlayerQuery>({ search: "" });

  readonly playerQuery$ = toObservable(this.playerQuery);

  readonly players$: Observable<Player[]> = this.playerQuery$.pipe(
    switchMap((query) => this.playerService.queryPlayers(query)),
  );

  constructor(private playerService: PlayerService) {}
}

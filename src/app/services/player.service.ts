import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { Player } from "../models/player";
import { PlayerQuery } from "../models/player-query";
import { liveQuery } from "dexie";
import { DbService } from "./db.service";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  constructor(private dbService: DbService) {}

  queryPlayers(query: PlayerQuery): Observable<Player[]> {
    if (!query.search?.length) {
      return from(liveQuery(() => this.dbService.players.toArray()));
    }
    const words = query.search?.toLowerCase().split(" ") ?? [];
    return from(
      liveQuery(() =>
        this.dbService.players
          .filter((player) =>
            words.every(
              (word) =>
                player.firstName.toLowerCase().includes(word) ||
                player.lastName.toLowerCase().includes(word),
            ),
          )
          .toArray(),
      ),
    );
  }
}

import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { Player } from "../models/player";
import { PlayerQuery } from "../models/player-query";
import { db } from "../lib/db";
import { liveQuery } from "dexie";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  constructor() {}

  queryPlayers(query: PlayerQuery): Observable<Player[]> {
    return from(liveQuery(() => db.players.toArray()));
  }
}

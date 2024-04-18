import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Player } from "../models/player";
import { PlayerQuery } from "../models/player-query";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  constructor() {}

  queryPlayers(query: PlayerQuery): Observable<Player[]> {
    return of([
      {
        id: "72561ac4-2eb2-463a-9ffd-a772aa5987b5",
        firstName: "Max",
        lastName: "Mustermann",
      },
    ]);
  }
}

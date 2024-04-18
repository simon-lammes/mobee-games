import Dexie, { Table } from "dexie";
import { Player } from "../models/player";

/**
 * Our IndexedDB client using [Dexie](https://dexie.org/docs/Tutorial/Angular).
 * I would recommend not putting business logic like querying inside this class
 * because then it could become bloated. For example, a queryPlayers method
 * could go to a player service which just makes use of this db class.
 */
class Db extends Dexie {
  readonly players!: Table<Player, string>;

  constructor() {
    super("mobeeGamesDb");

    // Define schema.
    this.version(1).stores({
      players: "id",
    });

    // Populate with example data.
    this.on("populate", () => {
      this.players.add({
        id: "567798a6-fff7-4dde-b5a5-607f0dadecef",
        firstName: "John",
        lastName: "Doe",
      });
    });
  }
}

/**
 * Singleton IndexedDB client.
 */
export const db = new Db();

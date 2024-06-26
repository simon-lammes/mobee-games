import { Injectable } from "@angular/core";
import * as Comlink from "comlink";
import { MastermindWorkerInterface } from "../models/games/mastermind/mastermind-worker-interface";
import { MastermindGame } from "../models/games/mastermind/mastermind-game";

const worker = new Worker(
  new URL("../workers/mastermind.worker", import.meta.url),
);
const mastermindWorker = Comlink.wrap<MastermindWorkerInterface>(worker);

@Injectable({
  providedIn: "root",
})
export class MastermindService {
  constructor() {}

  determineNextGuess(game: MastermindGame) {
    return mastermindWorker.determineNextGuess(game);
  }
}

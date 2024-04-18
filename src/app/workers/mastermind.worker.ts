/// <reference lib="webworker" />
import * as Comlink from "comlink";
import { MastermindWorkerInterface } from "../models/mastermind/mastermind-worker-interface";

const workerInterface: MastermindWorkerInterface = {
  determineNextGuess: (game) => {
    console.log("game provided to worker", game);
    return {
      colors: ["red", "red", "green", "red"],
    };
  },
};

Comlink.expose(workerInterface);

import { WarOfBallsPlayer } from "./war-of-balls-player";
import { Pixels } from "../pixels";

export interface WarOfBallsGame {
  width: Pixels;
  height: Pixels;
  players: WarOfBallsPlayer[];
}

import { WarOfBallsPosition } from "./war-of-balls-position";
import { WarOfBallsVelocity } from "./war-of-balls-velocity";

export interface WarOfBallsPlayer {
  position: WarOfBallsPosition;
  velocity: WarOfBallsVelocity;
}

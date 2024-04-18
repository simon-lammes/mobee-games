import { effect, signal } from "@angular/core";

/**
 * This object can be used to manage time for you, which can be useful for games
 * and manual animations created with JavaScript.
 * It is basically a convenient wrapper around the (requestAnimationFrame API)[https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame]
 */
export class Ticker {
  readonly timePassedMillis = signal(0);

  private readonly previousTimestamp = signal(performance.now());

  private readonly isRunning = signal(false);

  private readonly updateTimePassedMillisEffect = effect(() => {
    this.previousTimestamp();
    requestAnimationFrame((timestamp) => {
      if (this.isRunning()) {
        const timePassedSinceLastFrame = timestamp - this.previousTimestamp();
        this.timePassedMillis.update(
          (timePassed) => timePassed + timePassedSinceLastFrame,
        );
        this.updateCallbacks.forEach((cb) => cb(timePassedSinceLastFrame));
      }
      this.previousTimestamp.set(timestamp);
    });
  });

  private readonly updateCallbacks: UpdateCallback[] = [];

  playPause() {
    this.isRunning.update((previous) => !previous);
  }

  /**
   * Registers a callback for your animation or game logic
   * which can update state depending on how much time has passed since the last frame.
   */
  registerUpdateCallback(updateCallback: UpdateCallback) {
    this.updateCallbacks.push(updateCallback);
  }
}

export type UpdateCallback = (timePassedSinceLastFrame: number) => void;

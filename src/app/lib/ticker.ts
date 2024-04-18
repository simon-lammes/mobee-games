import { effect, signal } from "@angular/core";

/**
 * This object can be used to manage time for you, which can be useful for games
 * and manual animations created with JavaScript.
 * It is basically a convenient wrapper around the [requestAnimationFrame API](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
 */
export class Ticker {
  /**
   * The time that has passed **while the ticker has been in a 'running' state**.
   */
  readonly timePassedMillis = signal(0);

  /**
   * The timestamp of the most recent "requestAnimationFrame" execution.
   */
  private readonly previousTimestamp = signal(performance.now());

  readonly isRunning = signal(false);

  constructor() {
    this.update();
  }

  /**
   * Requests an animation frame.
   * In the callback, our timing state is updated accordingly.
   * Then, this method calls itself, thereby making sure that we keep requesting animation frames infinitely.
   * As soon as we finish handling an animation frame, the recursive call of this method will call requestAnimationFrame again.
   * This approach is inspired by [Mozilla's documentation.](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
   */
  private update() {
    requestAnimationFrame((timestamp) => {
      if (this.isRunning()) {
        const timePassedSinceLastFrame = timestamp - this.previousTimestamp();
        this.timePassedMillis.update(
          (timePassed) => timePassed + timePassedSinceLastFrame,
        );
        this.updateCallbacks.forEach((cb) => cb(timePassedSinceLastFrame));
      }
      this.previousTimestamp.set(timestamp);
      this.update();
    });
  }

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

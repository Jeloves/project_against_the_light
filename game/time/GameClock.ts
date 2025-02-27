import { seconds_per_day } from "@/constants";
import { GameSpeed, TickRate } from "./GameSpeed";
import { getEpochTimestamp, getTimestampBySecondsFromEpoch, Timestamp } from "./timestamp";
import { formatSecondsFromEpoch } from "@/utils/format";
import { Dispatch, SetStateAction } from "react";
import { MapAction } from "@/context/MapContext";

export class GameClock {
    private epoch: Timestamp = getEpochTimestamp();                     // Custom epoch timestamp (milliseconds)
    private elapsedSeconds: number = 0;                                 // Time elapsed since epoch
    private updateCount: number = 0;                                    // Determines if a second has passed
    private lastUpdateTime: number | null = null;                       // Last frame time (in ms)
    private intervalId: ReturnType<typeof setInterval> | null = null;
    private animationFrameId: number | null = null;                     // Stores the animation frame ID
    private tickRate: number = TickRate.real;                                    // Tick rate in ms
    private _isPaused: boolean = true;
    private dispatch: () => void | null = null;

    constructor(clone: GameClock | null = null) {
        if (clone) {
            this.epoch = clone.epoch;
            this.elapsedSeconds = clone.elapsedSeconds;
            this.updateCount = clone.updateCount;
            this.lastUpdateTime = clone.lastUpdateTime;
            this.intervalId = clone.intervalId;
            this.animationFrameId = clone.animationFrameId;
            this.tickRate = clone.tickRate;
            this._isPaused = clone._isPaused;
            this.dispatch = clone.dispatch;
        }
    }

    isPaused(): boolean {
        return this._isPaused;
    }

    start() {
        if (!this._isPaused) return; // Prevent multiple starts
        this._isPaused = false;
        this.lastUpdateTime = performance.now(); // Capture initial time
        this.updateClock(); // Start animation loop
    }

    private updateClock = (currentTime: number = performance.now()) => {
        if (this._isPaused) return;

        if (this.lastUpdateTime !== null) {
            // Calculate time elapsed (in seconds) since last frame
            const realElapsedSeconds = (currentTime - this.lastUpdateTime) / 1000;
            this.updateCount += realElapsedSeconds * this.tickRate;

            // Checks if a real second has passed
            if (this.updateCount >= 1) {
                this.updateCount = 0;
                this.elapsedSeconds += this.tickRate;

                if (this.dispatch !== null) {
                    this.dispatch();
                }
                console.log("Tick: ", this.elapsedSeconds)
            }
        }

        this.lastUpdateTime = currentTime; // Update last frame time

        // Schedule the next animation frame
        this.animationFrameId = requestAnimationFrame(this.updateClock);
    };

    pause() {
        if (this._isPaused) return;
        this._isPaused = true;

        // Stop the animation loop
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    getElapsedSeconds(): number {
        return this.elapsedSeconds;
    }

    setTickRate(gameSpeed: GameSpeed) {
        switch (gameSpeed) {
            case GameSpeed.real:
                this.tickRate = TickRate.real;
                break;
            case GameSpeed.slow:
                this.tickRate = TickRate.slow;
                break;
            case GameSpeed.default:
                this.tickRate = TickRate.default;
                break;
            case GameSpeed.fast:
                this.tickRate = TickRate.fast;
                break;
            default:
                throw new Error("Unhandled case: Failed to set tick rate.");
        }
    }

    readData(): { epoch: Timestamp, elapsedSeconds: number, lastUpdateCount: number, lastUpdateTime: number, intervalId: ReturnType<typeof setInterval> | null, animationFrameId: number | null, tickRate: number, _isPaused: boolean } {
        return {
            epoch: this.epoch,
            elapsedSeconds: this.elapsedSeconds,
            lastUpdateCount: this.updateCount,
            lastUpdateTime: this.lastUpdateTime,
            intervalId: this.intervalId,
            animationFrameId: this.animationFrameId,
            tickRate: this.tickRate,
            _isPaused: this._isPaused
        }
    }
    writeData(data: { epoch: Timestamp, elapsedSeconds: number, lastUpdateCount: number, lastUpdateTime: number, intervalId: ReturnType<typeof setInterval> | null, animationFrameId: number | null, tickRate: number, _isPaused: boolean }) {
        this.epoch = data.epoch;
        this.elapsedSeconds = data.elapsedSeconds;
        this.updateCount = data.lastUpdateCount;
        this.lastUpdateTime = data.lastUpdateTime;
        this.intervalId = data.intervalId;
        this.animationFrameId = data.animationFrameId;
        this.tickRate = data.tickRate;
        this._isPaused = data._isPaused;
    }

    readDate(): { date: string, time: string, standardTime: string } {
        return formatSecondsFromEpoch(this.elapsedSeconds);
    }

    setDispatchAction(dispatch: () => void | null) {
        this.dispatch = dispatch;
    }
    hasDispatchAction(): boolean {
        return this.dispatch !== null;
    }
}

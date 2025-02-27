export enum GameSpeed {
    real = "real",
    slow = "slow",
    default = "default",
    fast = "fast"
}

const baseTickRate = 1;
export enum TickRate {
    real = baseTickRate,
    slow = baseTickRate * 2,
    default = baseTickRate * 5,
    fast = baseTickRate * 10
}


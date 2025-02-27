export enum GameSpeed {
    real = "real",
    slow = "slow",
    default = "default",
    fast = "fast"
}

const baseTickRate = 1;
export enum TickRate {
    real = baseTickRate,
    slow = baseTickRate * 225,
    default = baseTickRate * 450,
    fast = baseTickRate * 600
}


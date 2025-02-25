export function formatSecondsIntoHours(seconds: number): string {
    let secondsTimesBillion = seconds * 1000000000;
    return (secondsTimesBillion / 3600 / 1000000000).toFixed(2);
};
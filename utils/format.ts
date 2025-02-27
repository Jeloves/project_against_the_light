import { createTimestamp, Timestamp } from "@/game/time/timestamp";

export function formatSecondsIntoHours(seconds: number): string {
    let secondsTimesBillion = seconds * 1000000000;
    return (secondsTimesBillion / 3600 / 1000000000).toFixed(2);
};

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
function padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}
export function formatTimestamp(timestamp: Timestamp): { date: string, time: string } {
    // Get the month abbreviation based on the month number (1-indexed, so subtract 1 for 0-indexed array)
    const monthAbbreviation = months[timestamp.month - 1];
    const date = `${monthAbbreviation} ${timestamp.day}, ${timestamp.year}`;

    // Convert string to date object
    const dateObject = new Date(timestamp.secondsFromEpoch * 1000);
    const time = `${padNumber(dateObject.getHours())}:${padNumber(dateObject.getMinutes())}:${padNumber(dateObject.getSeconds())}`;

    // Format and return the date string
    return {
        date: date,
        time: time
    }
}
export function formatSecondsFromEpoch(secondsFromEpoch: number): { date: string, time: string } {
    const timestamp = createTimestamp(secondsFromEpoch);
    // Get the month abbreviation based on the month number (1-indexed, so subtract 1 for 0-indexed array)
    const monthAbbreviation = months[timestamp.month - 1];
    const date = `${monthAbbreviation} ${timestamp.day}, ${timestamp.year}`;

    // Convert string to date object
    const dateObject = new Date(timestamp.secondsFromEpoch * 1000);
    const time = `${padNumber(dateObject.getHours())}:${padNumber(dateObject.getMinutes())}:${padNumber(dateObject.getSeconds())}`;

    // Format and return the date string
    return {
        date: date,
        time: time
    }
}

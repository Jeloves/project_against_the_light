import { dateExists } from "@/utils/calendar";

const epochYear = 2025;
const epochMonth = 1;  // January (0-11)
const epochDay = 1;
const epochHour = 0;   // 00:00 AM
const epochMinute = 0;
const epochSeconds = 0;

export type Timestamp = {
    year: number;
    month: number;
    day: number;
    second: number;
}


function getSecondsSinceEpoch(year: number, month: number, day: number, hour: number, minute: number, second: number): number {
    // Create Date object for the epoch date (2025-01-01 00:00)
    const epochDate = new Date(epochYear, epochMonth - 1, epochDay, epochHour, epochMinute, epochSeconds);

    // Create Date object for the input date
    const inputDate = new Date(year, month - 1, day, hour, minute, second);

    // Calculate the difference in milliseconds
    const timeDifferenceInMilliseconds = inputDate.getTime() - epochDate.getTime();

    // Convert milliseconds to seconds
    const timeDifferenceInSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);

    return timeDifferenceInSeconds;
}

export function createTimestamp(year: number, month: number, day: number, hour: number, minute: number, second: number): Timestamp {
    // Ensure valid input
    if (!dateExists(year, month, day, hour, minute, second)) {
        throw new Error("Invalid timestamp args. Date does not exist.");
    }

    return {
        year: year,
        month: month,
        day: day,
        second: getSecondsSinceEpoch(year, month, day, hour, minute, second)
    }
}

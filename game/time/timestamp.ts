import { monthDays, seconds_per_day, seconds_per_non_leap_year } from "@/constants";
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
    secondsFromEpoch: number;
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

export function createTimestamp(second: number, year: number = 0, month: number = 0, day: number = 0, hour: number = 0, minute: number = 0): Timestamp {
    // If only a single arg, it is considered the seconds from epoch
    if (year === 0 && month === 0 && day === 0 && hour === 0 && minute === 0) {
        if (second < 0) {
            throw new Error("Invalid timestamp args. Must be on or after epoch.");
        } else {
            return getTimestampBySecondsFromEpoch(second);
        }
    } else {
        if (!dateExists(year, month, day, hour, minute, second)) {
            throw new Error("Invalid timestamp args. Date does not exist.");
        }

        return {
            year: year,
            month: month,
            day: day,
            secondsFromEpoch: getSecondsSinceEpoch(year, month, day, hour, minute, second)
        }
    }
}

export function getTimestampBySecondsFromEpoch(secondsFromEpoch: number): Timestamp {
    let year = epochYear;
    let remainingSeconds = secondsFromEpoch;

    // Determine the year
    while (remainingSeconds >= seconds_per_non_leap_year) {
        let isLeap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
        let yearSeconds = isLeap ? seconds_per_non_leap_year + seconds_per_day : seconds_per_non_leap_year;

        if (remainingSeconds >= yearSeconds) {
            remainingSeconds -= yearSeconds;
            year++;
        } else {
            break;
        }
    }

    // Adjust February for leap years
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        monthDays[1] = 29;
    }

    // Determine the month
    let month = 1;
    for (let i = 0; i < 12; i++) {
        let monthSeconds = monthDays[i] * seconds_per_day;
        if (remainingSeconds >= monthSeconds) {
            remainingSeconds -= monthSeconds;
            month++;
        } else {
            break;
        }
    }

    // Determine the day
    let day = Math.floor(remainingSeconds / seconds_per_day) + 1;

    return { year: year, month: month, day: day, secondsFromEpoch: secondsFromEpoch };
}

export function getEpochTimestamp(): Timestamp {
    return {
        year: epochYear,
        month: epochMinute,
        day: epochDay,
        secondsFromEpoch: 0
    }
}

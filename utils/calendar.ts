export function dateExists(year: number, month: number, day: number, hour: number, minute: number, second: number): boolean {
    // Check if the month is valid (0 to 11)
    if (month < 1 || month > 12) {
        return false;
    }

    // Array of days in each month for a non-leap year (index 0 = January, index 11 = December)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Handle leap years
    if (month === 1 && isLeapYear(year)) {
        daysInMonth[1] = 29; // Set February days to 29 for leap year
    }

    if (day < 1 || day > daysInMonth[month]) {
        return false;
    }

    if (hour < 0 || hour > 23) {
        return false;
    }

    if (minute < 0 || minute > 59) {
        return false;
    }

    if (second < 0 || second > 59) {
        return false;
    }

    return true;
}

// Check if a year is a leap year
function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
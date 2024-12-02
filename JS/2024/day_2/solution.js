let fs = require("fs");
var input = fs.readFileSync('./input.txt','utf8');

function isSafeReport(report) {
    const levels = report.split(' ').map(Number);

    const isIncreasing = levels.every((_, i, arr) => i === 0 || arr[i] > arr[i - 1]);
    const isDecreasing = levels.every((_, i, arr) => i === 0 || arr[i] < arr[i - 1]);

    if (!isIncreasing && !isDecreasing) {
        return false;
    }

    return levels.every((_, i, arr) => i === 0 || Math.abs(arr[i] - arr[i - 1]) >= 1 && Math.abs(arr[i] - arr[i - 1]) <= 3);
}

function countSafeReports(data) {
    const reports = data.trim().split('\n');
    return reports.filter(isSafeReport).length;
}

//part 2

function isSafeReport2(report) {
    const levels = report.split(' ').map(Number);

    if (checkSafety(levels)) {
        return true;
    }

    for (let i = 0; i < levels.length; i++) {
        const modifiedLevels = levels.slice(0, i).concat(levels.slice(i + 1));
        if (checkSafety(modifiedLevels)) {
            return true;
        }
    }

    return false;
}

function checkSafety(levels) {
    const isIncreasing = levels.every((_, i, arr) => i === 0 || arr[i] > arr[i - 1]);
    const isDecreasing = levels.every((_, i, arr) => i === 0 || arr[i] < arr[i - 1]);

    if (!isIncreasing && !isDecreasing) {
        return false;
    }

    return levels.every((_, i, arr) => i === 0 || Math.abs(arr[i] - arr[i - 1]) >= 1 && Math.abs(arr[i] - arr[i - 1]) <= 3);
}

function countSafeReports2(data) {
    const reports = data.trim().split('\n');
    return reports.filter(isSafeReport2).length;
}

console.log(countSafeReports(input));
console.log(countSafeReports2(input));

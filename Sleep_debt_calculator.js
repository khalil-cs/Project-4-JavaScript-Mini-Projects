function getSleepHours(day) {
    switch (day) {
        case 'Monday':
            return 8;
        case 'Tuesday':
            return 7;
        case 'Wednesday':
            return 8;
        case 'Thursday':
            return 7;
        case 'Friday':
            return 8;
        case 'Saturday':
            return 9;
        case 'Sunday':
            return 10;
        default:
            return 0;
    }
}

function getActualSleepHours() {
    return (getSleepHours('Monday') +
        getSleepHours('Tuesday') +
        getSleepHours('Wednesday') +
        getSleepHours('Thursday') +
        getSleepHours('Friday') +
        getSleepHours('Saturday') +
        getSleepHours('Sunday'));
}

function getIdealSleepHours() {
    const idealHours = 8;
    return idealHours * 7;
}

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours < idealSleepHours) {
        return idealSleepHours - actualSleepHours;
    } else {
        return 0;
    }
}

function displaySleepDebt() {
    const sleepDebt = calculateSleepDebt();
    console.log(`You have a sleep debt of ${sleepDebt} hours.`);
}
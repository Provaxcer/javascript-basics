function leapyear(YEAR) {
    if (YEAR % 4 === 0) {
        if (YEAR % 100 === 0) {
            if (YEAR % 400 === 0) {
                console.log("Leap year");
            }
        } else {
            console.log("Leap year");
        }
    } else {
        console.log("Not a leap year");
    }
}
leapyear(2026)


function leapyear(year) {
    if (year % 400 === 0) {
        console.log("Leap year");
    } else if (year % 100 === 0) {
        console.log("Not a leap year");
    } else if (year % 4 === 0) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}
var guestname = prompt ("Type your name");

var sanu = ["Santanu", "Nami", "Zoro", "Ace", "Luffy"]

var final = sanu.includes(guestname)

if (final === true) {
    console.log("Welcome!" + guestname);
} else {
    console.log("Sorry! Next time");
}
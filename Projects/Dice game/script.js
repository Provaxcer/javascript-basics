var randomnum1 = Math.floor(Math.random() * 6 + 1);

var randomimg1 = "Images/dice" + randomnum1 + ".png"

document.querySelector(".img1").setAttribute("src", randomimg1)

var randomnum2 = Math.floor(Math.random() * 6 + 1);

var randomimg2 = "Images/dice" + randomnum2 + ".png"

document.querySelector(".img2").setAttribute("src", randomimg2)

if (randomnum1 > randomnum2) {
    document.querySelector("h1").textContent = "Player 1 Win";
}

else if (randomnum1 < randomnum2) {
    document.querySelector("h1").textContent = "Player 2 Win";
}

else {
    document.querySelector("h1").textContent = "Draw!";
}
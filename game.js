var randomNumber1 = Math.floor(Math.random() * (6)) + 1 ;
var randomNumber2 = Math.floor(Math.random() * (6)) + 1 ;

if (randomNumber1 === 1) {
    document.querySelector("#player-1").setAttribute("src", "assets/images/dice1.png");
} else if (randomNumber1 === 2) {
    document.querySelector("#player-1").setAttribute("src", "assets/images/dice2.png");
} else if (randomNumber1 === 3) {
    document.querySelector("#player-1").setAttribute("src", "assets/images/dice3.png");
} else if (randomNumber1 === 4) {
    document.querySelector("#player-1").setAttribute("src", "assets/images/dice4.png");
} else if (randomNumber1 === 5) {
    document.querySelector("#player-1").setAttribute("src", "assets/images/dice5.png");
} else {
    document.querySelector("#player-1").setAttribute("src", "assets/images/dice6.png");
}


if (randomNumber2 === 1) {
    document.querySelector("#player-2").setAttribute("src", "assets/images/dice1.png");
} else if (randomNumber2 === 2) {
    document.querySelector("#player-2").setAttribute("src", "assets/images/dice2.png");
} else if (randomNumber2 === 3) {
    document.querySelector("#player-2").setAttribute("src", "assets/images/dice3.png");
} else if (randomNumber2 === 4) {
    document.querySelector("#player-2").setAttribute("src", "assets/images/dice4.png");
} else if (randomNumber2 === 5) {
    document.querySelector("#player-2").setAttribute("src", "assets/images/dice5.png");
} else {
    document.querySelector("#player-2").setAttribute("src", "assets/images/dice6.png");
};


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥇 Player 1 Wins! 🥈"; 
} else if ( randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🥈 Player 2 Wins! 🥇";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
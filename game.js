var randomNumber1 = Math.floor(Math.random() * (6)) + 1 ;

var player1Die = (function randomNumPlayer1() {
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
})();


var player2Die = (function randomNumPlayer2() {
    if (randomNumber1 === 1) {
        document.querySelector("#player-2").setAttribute("src", "assets/images/dice1.png");
    } else if (randomNumber1 === 2) {
        document.querySelector("#player-2").setAttribute("src", "assets/images/dice2.png");
    } else if (randomNumber1 === 3) {
        document.querySelector("#player-2").setAttribute("src", "assets/images/dice3.png");
    } else if (randomNumber1 === 4) {
        document.querySelector("#player-2").setAttribute("src", "assets/images/dice4.png");
    } else if (randomNumber1 === 5) {
        document.querySelector("#player-2").setAttribute("src", "assets/images/dice5.png");
    } else {
        document.querySelector("#player-2").setAttribute("src", "assets/images/dice6.png");
    };
})();




// if (playerOneDie > playerTwoDie) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!";
// } else {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!";
// } 
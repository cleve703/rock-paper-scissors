var computerSelection;
var playerSelection;
var outcome;
var countTie;
var countWin;
var countLoss;

playGame()

function playGame() {
    var i;
    countTie = 0
    countWin = 0
    countLoss = 0
    for (i = 0; i < 5; i++) {
    playRound()
    console.log(`You played ${playerSelection} and the computer played ${computerSelection}.`)
    whoWon()
    if (outcome == "tie") {
        countTie++
        console.log("You tied.")
    }
    else if (outcome == "win") {
        countWin++
        console.log("You won!")
    }
    else if (outcome == "loss") {
        countLoss++
        console.log("You lost.")
    }
    }
    console.log(`Your total wins is: ${countWin}.\nYour total losses is ${countLoss}.\nYour total games tied is ${countTie}.`)
};

    function playRound() {
            playerSelection = prompt("Choose paper, rock, or scissors:")
            playerSelection = playerSelection.toLowerCase()
            // console.log(playerSelection)
            computerPlay()
            // console.log(computerSelection)
    }

    function computerPlay() {
        var min = 1;
        var max = 4;
        var numericSelection = (Math.floor(Math.random() * (+max - +min)) + +min);
            if (numericSelection == 1) {computerSelection = "rock"}
            else if (numericSelection == 2) {computerSelection = "paper"}
            else if (numericSelection == 3) {computerSelection = "scissors"};
        return computerSelection
    }

function whoWon() {
    if (playerSelection == computerSelection) {outcome = "tie"} 
    else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {outcome = "win"}
    else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {outcome = "loss"}
    else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {outcome = "win"}
    else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {outcome = "loss"}
    else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {outcome = "loss"}
    else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {outcome = "win"}
};
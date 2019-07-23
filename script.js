var computerSelection;
var playerSelection;

playRound()

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

if (playerSelection == computerSelection) console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.  Tie!`)
else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.  You win.`)
else if ((playerSelection == 'rock') && (computerSelection == 'paper')) console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.  You lose.`)
else if ((playerSelection == 'paper') && (computerSelection == 'rock')) console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.  You win.`)
else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.  You lose.`)
else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.  You lose.`)
else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.  You win.`)
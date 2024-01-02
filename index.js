console.log("js-rock-paper-scissors V1.0.0\n\nCopyright © Gabriel Drouin 2023\n")

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
};

function playRound(p, c) {
    if (p === c) {
        console.log('No points! Player\'s move was ' + p + ' and CPU\'s move was ' + c)
        return 0;
    }

    if ((p === 'rock' && c === 'paper') || (p === 'paper' && c === 'scissors') || (p === 'scissors' && c === 'rock')) {
        console.log('Point for CPU! Player\'s move was ' + p + ' and CPU\'s move was ' + c)
        return 1;
    } 

    if ((c === 'rock' && p === 'paper') || (c === 'paper' && p === 'scissors') || (c === 'scissors' && p === 'rock')) {
        console.log('Point for player! Player\'s move was ' + p + ' and CPU\'s move was ' + c)
        return 2;
    } 

};

function game() {

    // Getting the player's choice

    let playerSelection = null;

    do {
        if (playerSelection !== null) {
            playerSelection = prompt("Please try again : ")
        }
        else {
            playerSelection = prompt("Choose between rock, paper or scissors : ");
        }
        if (playerSelection === null) {
            console.error('Game aborted');
        }
        playerSelection = playerSelection.toLowerCase()
    } while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors');

    // Getting the computer's choice

    let computerSelection = getComputerChoice();

    switch(computerSelection) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2:
            computerSelection = 'scissors';
            break;
    };

    // Playing a round

    return playRound(playerSelection, computerSelection);
}

let pointsToWin;

do {
    pointsToWin = prompt("Choose how many points to win : ");
    if (!((pointsToWin) >= 0)) {
        pointsToWin = prompt("Please try again : ")
    }
} while (!((pointsToWin) >= 0));

if (!((pointsToWin) >= 0)) {
    console.error('Game aborted')
};
let playerWins = 0;
let computerWins = 0;
let round = 0;
let result;

while (playerWins < pointsToWin && computerWins < pointsToWin) {
    console.log('Round ' + ++round)

    result = game()

    if (result === 1) {
        computerWins++;
    };
    if (result === 2) {
        playerWins++;
    };
    console.log('Score : ' + playerWins + ' point(s) for player and ' + computerWins + ' point(s) for CPU.')

    if (playerWins == pointsToWin) {
        console.log('Player has won!');
    };

    if (computerWins == pointsToWin) {
        console.log('CPU has won!');
    };
};

console.log("js-rock-paper-scissors V1.0.0\n\nCopyright © Gabriel Drouin 2023\n")

const results = {
    'rock': { 'rock': null, 'paper': 1, 'scissor': 2 },
    'scissor': { 'rock': 1, 'paper': 2, 'scissor': null },
    'paper': { 'rock': 2, 'paper': null, 'scissor': 1 } 
  };
  
  const choices = Object.keys(results);
  
  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  function playRound(players_move, computers_move) {
    const result = results[players_move][computers_move];
    if (result === null)   console.log('No points! Player\'s move was ' + players_move + ' and CPU\'s move was ' + computers_move);
    else if (result === 1) console.log('Point for CPU! Player\'s move was ' + players_move + ' and CPU\'s move was ' + computers_move);
    else if (result === 2) console.log('Point for player! Player\'s move was ' + players_move + ' and CPU\'s move was ' + computers_move);
    
    return result;
  }

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

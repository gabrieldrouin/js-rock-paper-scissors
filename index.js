console.log("js-rock-paper-scissors V1.1.0\n\nCopyright © Gabriel Drouin 2023-2024\n")


const results = {
    'rock': { 'rock': null, 'paper': 'cpu', 'scissors': 'player' },
    'scissors': { 'rock': 'cpu', 'paper': 'player', 'scissors': null },
    'paper': { 'rock': 'player', 'paper': null, 'scissors': 'cpu' }
};

const choices = Object.keys(results);

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScores() {
    playerScore.textContent = 'Player score : ' + playerWins;
    computerScore.textContent = 'Computer score : ' + computerWins;
}

function playRound(players_move, computers_move) {
    const result = results[players_move][computers_move];
    if (result === null) console.log('No points! Player\'s move was ' + players_move + ' and CPU\'s move was ' + computers_move);
    else if (result === 'cpu') {
        console.log('Point for CPU! Player\'s move was ' + players_move + ' and CPU\'s move was ' + computers_move);
        ++computerWins;
        updateScores();
    }
    else if (result === 'player') {
        console.log('Point for player! Player\'s move was ' + players_move + ' and CPU\'s move was ' + computers_move);
        ++playerWins;
        updateScores();
    }
    return;
}

function checkWin() {
    if (playerWins == pointsToWin) {
        console.log('Player has won!');
    };

    if (computerWins == pointsToWin) {
        console.log('CPU has won!');
    };
}

var playerWins = 0;
var computerWins = 0;

let round = 0;
let result;

// Delay the prompt by 50 milliseconds to allow time for DOM rendering
setTimeout(() => {
    let pointsToWin;
    do {
        pointsToWin = prompt("Choose how many points to win : ");
        if (!((pointsToWin) >= 0)) {
            pointsToWin = prompt("Please try again : ")
        }
    } while (!((pointsToWin) >= 0));
}, 50);




//DOM Rendering
const body = document.querySelector('body');

let testScore = 3;

//Score div
const scoreDiv = document.createElement('div');
scoreDiv.style.display = 'flex';
scoreDiv.style.gap = '40px';
scoreDiv.style.padding = '10px';
body.appendChild(scoreDiv);

const h1ScoreDiv = document.createElement('h1');
h1ScoreDiv.textContent = 'Score:';
scoreDiv.appendChild(h1ScoreDiv);

const numbersScoreDiv = document.createElement('div');
scoreDiv.appendChild(numbersScoreDiv);

const playerScore = document.createElement('p');
playerScore.textContent = `Player score : ${playerWins}`;
numbersScoreDiv.appendChild(playerScore);


const computerScore = document.createElement('p');
computerScore.textContent = `Computer score : ${computerWins}`;
numbersScoreDiv.appendChild(computerScore);


//Buttons div
const buttonsDiv = document.createElement('div');
buttonsDiv.style.padding = '30px';
buttonsDiv.style.paddingTop = '10px';
buttonsDiv.style.display = 'flex';
buttonsDiv.style.gap = '5px';
body.appendChild(buttonsDiv);


const btnRock = document.createElement('button');
btnRock.textContent = 'Rock';
buttonsDiv.appendChild(btnRock);
btnRock.addEventListener('click', function() {
    playRound(btnRock.textContent.toLowerCase(), getComputerChoice());
});

const btnPaper = document.createElement('button');
btnPaper.textContent = 'Paper';
buttonsDiv.appendChild(btnPaper);
btnPaper.addEventListener('click', function() {
    playRound(btnPaper.textContent.toLowerCase(), getComputerChoice());
});

const btnScissors = document.createElement('button');
btnScissors.textContent = 'Scissors';
buttonsDiv.appendChild(btnScissors);
btnScissors.addEventListener('click', function() {
    playRound(btnScissors.textContent.toLowerCase(), getComputerChoice());
});
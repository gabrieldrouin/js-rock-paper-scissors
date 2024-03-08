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

function createRefreshButton() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;

    const btnRefresh = document.createElement('button');
    btnRefresh.textContent = 'New game';
    endOfGameDiv.appendChild(btnRefresh);
    btnRefresh.addEventListener('click', function() {
        location.reload();
    });
}

function updateScores() {
    playerScore.textContent = `Player score : ${playerWins}`;
    computerScore.textContent = `Computer score : ${computerWins}`;

    if (playerWins === pointsToWin) {
        endOfGameText.textContent = 'You won!';
        createRefreshButton();
    }

    if (computerWins === pointsToWin) {
        endOfGameText.textContent = 'CPU won!';
        createRefreshButton();
    }
}

function playRound(players_move, computers_move) {
    if (playerWins === pointsToWin || computerWins === pointsToWin) {
        return;
    }
    const result = results[players_move][computers_move];
    if (result === null) {
        resultsText.innerHTML = `No points!<br><br>
        Your move was ${players_move}<br>
        CPU\'s move was ${computers_move}`;
    }
    if (result === 'cpu') {
        ++computerWins;
        resultsText.innerHTML = `Point for CPU!<br><br>
        Your move was ${players_move}<br>
        CPU\'s move was ${computers_move}`;
        updateScores();
    }
    if (result === 'player') {
        resultsText.innerHTML = `Point for you!<br><br>
        Your move was ${players_move}<br>
        CPU\'s move was ${computers_move}`;
        ++playerWins;
        updateScores();
    }
    return;
}

function checkWin() {
    if (playerWins == pointsToWin) {
        console.log('Player has won!');
    }
    if (computerWins == pointsToWin) {
        console.log('CPU has won!');
    }
}

var pointsToWin;
var playerWins = 0;
var computerWins = 0;

let round = 0;
let result;

//DOM Rendering
const body = document.querySelector('body');

//Score div
const scoreDiv = document.createElement('div');
scoreDiv.style.display = 'flex';
scoreDiv.style.gap = '40px';
scoreDiv.style.padding = '10px';
body.appendChild(scoreDiv);

const h1ScoreDiv = document.createElement('h1');
h1ScoreDiv.textContent = 'Score:';
scoreDiv.appendChild(h1ScoreDiv);

//Buttons div
const buttonsDiv = document.createElement('div');
buttonsDiv.style.padding = '10px 30px';
buttonsDiv.style.display = 'flex';
buttonsDiv.style.gap = '5px';
body.appendChild(buttonsDiv);

//Results div
const resultsDiv = document.createElement('div');
resultsDiv.style.paddingLeft = '10px';
body.appendChild(resultsDiv);

//End of game div
const endOfGameDiv = document.createElement('div');
endOfGameDiv.style.paddingLeft = '10px';
body.appendChild(endOfGameDiv);

const numbersScoreDiv = document.createElement('div');
scoreDiv.appendChild(numbersScoreDiv);

const playerScore = document.createElement('p');
playerScore.textContent = `Player score : ${playerWins}`;
numbersScoreDiv.appendChild(playerScore);

const computerScore = document.createElement('p');
computerScore.textContent = `Computer score : ${computerWins}`;
numbersScoreDiv.appendChild(computerScore);

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

const resultsText = document.createElement('p');
resultsDiv.appendChild(resultsText);

const endOfGameText = document.createElement('p');
endOfGameText.style.fontSize = "140%";
endOfGameDiv.appendChild(endOfGameText);

setTimeout(() => {
    do {
        pointsToWin = Number(prompt("Choose how many points to win : "));
        if (!((pointsToWin) >= 0)) {
            pointsToWin = prompt("Please try again : ")
        }
    } while (!((pointsToWin) >= 0));
}, 20);


let playerScore = 0;
let computerScore = 0;
let winningScore = 5;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll("button");

const resultText = document.getElementById("resultText");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const finalText = document.getElementById("finalText");

const disableButtons = () => {
    buttons.forEach(button => {
        button.disabled = true;
    })
};

const getComputerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "ROCK";
        break;

        case 1:
            return "PAPER";
        break;

        case 2:
            return "SCISSORS";
        break;
    };
};

const computerSelection = getComputerChoice();

const playRound = (playerSelection, computerSelection) => {
    const win = 
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER");
    
    if(playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if(win) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
};

rock.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
    const result = playRound("ROCK", computerSelection);
    
    resultText.textContent = `${result} You chose ROCK and the computer chose ${computerSelection}.`;
    finalScore();
    checkGameResult();
});

paper.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
    const result = playRound("PAPER", computerSelection);
    
    resultText.textContent = `${result} You chose PAPER and the computer chose ${computerSelection}.`;
    finalScore();
    checkGameResult();
});

scissors.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
    const result = playRound("SCISSORS", computerSelection);
    
    resultText.textContent = `${result} You chose SCISSORS and the computer chose ${computerSelection}.`;
    finalScore();
    checkGameResult();
});

const finalScore = () => {
    score1.textContent = `Your Score: ${playerScore}`;
    score2.textContent = `Computer's Score: ${computerScore}`;
};

const checkGameResult = () => {
    if (playerScore === winningScore) {
        finalText.textContent = "Congratulations, you won the game! Refresh page to play again.";
        disableButtons();
    } else if (computerScore === winningScore) {
        finalText.textContent = "Sorry, you lost the game! Refresh page to try again.";
        disableButtons();
    }
};
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const computerChoice = ["ROCK", "PAPER", "SCISSORS"];

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
}

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
}

rock.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
    playRound("ROCK", computerSelection);
    console.log(`You chose ROCK and the computer chose ${computerSelection}.`);
    // finalScore();
});
paper.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
    playRound("PAPER", computerSelection);
    console.log(`You chose PAPER and the computer chose ${computerSelection}.`);
    // finalScore();
});
scissors.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
    playRound("SCISSORS", computerSelection);
    console.log(`You chose SCISSORS and the computer chose ${computerSelection}.`);
    // finalScore();
});

// const finalScore = () => {
//     console.log(`Your Score: ${playerScore}`);
//     console.log(`Computer's Score: ${computerScore}`);

//     if(playerScore > computerScore) {
//         alert(`Congratulations, you won the game! Your score was ${playerScore} and the computer's score was ${computerScore}`);
//     } else if(playerScore === computerScore) {
//         alert(`It's a tied game! Both scores were ${playerScore}`);
//     } else {
//         alert(`You lost the game! Your score was ${playerScore} and the computer's score was ${computerScore}`);
//     }
// };
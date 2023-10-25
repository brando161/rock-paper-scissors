let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const computerChoice = ["ROCK", "PAPER", "SCISSORS"];

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    return computerChoice[randomChoice];
}

const playRound = (playerSelection) => {
    const computerSelection = getComputerChoice();
    
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
    const result = playRound("ROCK");
    console.log(result);
    finalScore();
});
paper.addEventListener("click", function() {
    const result = playRound("PAPER");
    console.log(result);
    finalScore();
});
scissors.addEventListener("click", function() {
    const result = playRound("SCISSORS");
    console.log(result);
    finalScore();
});

const finalScore = () => {
    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer's Score: ${computerScore}`);

    if(playerScore > computerScore) {
        alert(`Congratulations, you won the game! Your score was ${playerScore} and the computer's score was ${computerScore}`);
    } else if(playerScore === computerScore) {
        alert(`It's a tied game! Both scores were ${playerScore}`);
    } else {
        alert(`You lost the game! Your score was ${playerScore} and the computer's score was ${computerScore}`);
    }
};
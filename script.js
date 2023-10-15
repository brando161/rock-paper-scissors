let playerScore = 0;
let computerScore = 0;

const game = () => {
    for(i = 1; i < 6; i++) {
        const getComputerChoice = () => {
            let randomNumber = Math.floor(Math.random() *3);
            switch(randomNumber) {
            case 0:
                return "Rock";
            break;
        
            case 1:
                return "Paper";
            break;
        
            case 2:
                return "Scissors";
            break;
            };
        }
    
        const playRound = (playerSelection, computerSelection) => {
            const win = (playerSelection === "ROCK" && computerSelection === "SCISSORS") || 
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

        const playerChoice = prompt(`Round ${i}: Choose Rock, Paper, or Scissors.`, "");
        const playerSelection = playerChoice.toUpperCase();
        const computerSelection = getComputerChoice().toUpperCase();
    
        console.log(playRound(playerSelection, computerSelection));
    
        console.log(`You chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);
    }
}

game();

const finalScore = () => {
    if(playerScore > computerScore) {
        alert(`Congratulations, you won the game! Your score was ${playerScore} and the computer's score was ${computerScore}`);
    } else if(playerScore === computerScore) {
        alert(`It's a tied game! Both scores were ${playerScore}`);
    } else {
        alert(`You lost the game! Your score was ${playerScore} and the computer's score was ${computerScore}`);
    }
}

finalScore();

console.log(`Your Score: ${playerScore}`);
console.log(`Computer's Score: ${computerScore}`);
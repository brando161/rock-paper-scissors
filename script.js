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
    
    let playerScore = 0;
    let computerScore = 0;

    const playRound = (playerSelection, computerSelection) => {
        if (playerSelection === "ROCK" && computerSelection === "ROCK") {
            return "It's a tie!";
        } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
            return "You lose!";
        } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
            return "You win!";
        } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            return "You win!";
        } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
            return "It's a tie!";
        } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
            return "You lose!";
        } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            return "You lose!";
        } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            return "You win!";
        } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
            return "It's a tie!";
        } else {
            return "Error";
        }
    }

    const playerChoice = prompt(`Round ${i}: Choose Rock, Paper, or Scissors.`, "");
    const playerSelection = playerChoice.toUpperCase();
    const computerSelection = getComputerChoice().toUpperCase();

    console.log(playRound(playerSelection, computerSelection));

    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);

    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer's Score: ${computerScore}`);
}
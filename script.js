for(i = 0; i < 5; i++) {
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
        if (playerSelection === "Rock" && computerSelection === "Rock") {
            return "It's a tie!"
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            return "You lose! Paper beats Rock."
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return "You win! Rock beats Scissors."
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            return "You win! Paper beats Rock."
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            return "It's a tie!"
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper."
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            return "You lose! Rock beats Scissors."
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            return "You win! Scissors beats Paper."
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            return "It's a tie!"
        } else {
            return "Error"
        }
    }
    
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

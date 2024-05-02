function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);

    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Type Rock, Paper or Scissors: ").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        alert("You must enter one of the giving values!");
        return 0;
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let playRound = function (humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("You won! Rock beats Scissors");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You won! Scissors beats Paper");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You won! Paper beats Rock");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("You lost! Scissors beats Paper");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("You lost! Paper beats Rock");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("You lost! Rock beats Scissors");
        } else if (humanChoice === computerChoice) {
            console.log("Draw!");
        }
    }

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Results: Human Score: ${humanScore} || Computer Score: ${computerScore}`);
}

playGame();




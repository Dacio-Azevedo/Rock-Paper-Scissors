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

function getHumanChoice(id) {
    if (id === "rock") {
        return "rock";
    } else if (id === "paper") {
        return "paper";
    } else if (id === "scissors") {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(event) {
    let results = document.querySelector("#results");
    let matchResult = document.querySelector("#matchResult");
    const buttonId = event.target.id;

    const humanChoice = getHumanChoice(buttonId);
    const computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        matchResult.textContent = "You won! Rock beats Scissors";
        console.log("You won! Rock beats Scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        matchResult.textContent = "You won! Scissors beats Paper";
        console.log("You won! Scissors beats Paper");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        matchResult.textContent = "You won! Paper beats Rock";
        console.log("You won! Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        matchResult.textContent = "You lost! Scissors beats Paper";
        console.log("You lost! Scissors beats Paper");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        matchResult.textContent = "You lost! Paper beats Rock";
        console.log("You lost! Paper beats Rock");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        matchResult.textContent = "You lost! Rock beats Scissors";
        console.log("You lost! Rock beats Scissors");
    } else if (humanChoice === computerChoice) {
        matchResult.textContent = "Draw!";
        console.log("Draw!");
    }

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            results.innerText = `Congratulations!! You've won`;
            results.innerText += `\nFinal Results: Human Score: ${humanScore} || Computer Score: ${computerScore}`
        } else {
            results.innerText = `The computer has won`;
            results.innerText += `\nFinal Results: Human Score: ${humanScore} || Computer Score: ${computerScore}`
        }
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);


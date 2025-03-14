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

function showScore(human, computer) {
    return `Human Score: ${human} | Computer Score: ${computer}`;
}

let humanScore = 0;
let computerScore = 0;

function playGame(event) {
    let results = document.querySelector("#results");
    let currentScores = document.querySelector("#scores");
    let matchResult = document.querySelector("#matchResult");
    const buttonId = event.target.id;

    const humanChoice = getHumanChoice(buttonId);
    const computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        matchResult.innerText += `\nYou won! Rock beats Scissors`;
        currentScores.textContent = showScore(humanScore, computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        matchResult.innerText += `\nYou won! Scissors beats Paper`;
        currentScores.textContent = showScore(humanScore, computerScore);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        matchResult.innerText += `\nYou won! Paper beats Rock`;
        currentScores.textContent = showScore(humanScore, computerScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        matchResult.innerText += `\nYou lost! Scissors beats Paper`;
        currentScores.textContent = showScore(humanScore, computerScore);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        matchResult.innerText += `\nYou lost! Paper beats Rock`;
        currentScores.textContent = showScore(humanScore, computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        matchResult.innerText += `\nYou lost! Rock beats Scissors`;
        currentScores.textContent = showScore(humanScore, computerScore);
    } else if (humanChoice === computerChoice) {
        matchResult.innerText += `\nDraw!`;
        currentScores.textContent = showScore(humanScore, computerScore);
    }

    if (humanScore === 5 || computerScore === 5) {
        rockBtn.removeEventListener("click", playGame);
        paperBtn.removeEventListener("click", playGame);
        scissorsBtn.removeEventListener("click", playGame);

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


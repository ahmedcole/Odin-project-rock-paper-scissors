// get our html button and tags for outputting scores

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// computer logic move

function getComputerChoice() {
  let generateMove = Math.floor(Math.random() * 3);
  let computerMove = undefined;
  if (generateMove === 0) {
    computerMove = "rock";
  } else if (generateMove === 1) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  return computerMove;
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;
let playFiveRound = 0;

rockBtn.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  let humanChoice = "rock";
  playGame(computerChoice, humanChoice);
});

paperBtn.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  let humanChoice = "paper";
  playGame(computerChoice, humanChoice);
});

scissorsBtn.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  let humanChoice = "scissors";
  playGame(computerChoice, humanChoice);
});

function playRound(computerChoice, humanChoice) {
  if (humanChoice === computerChoice) {
    document.querySelector(
      ".player-move-result"
    ).innerHTML = `<span>Your Move</span><img src="/img-file/${humanChoice}.png" /><span
            >Computer Move</span
          ><img src="/img-file/${computerChoice}.png" alt="" />`;
    document.querySelector(".win-lose").textContent = "IT'S A TIE!";

    draw += 1;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    document.querySelector(
      ".player-move-result"
    ).innerHTML = `<span>Your Move</span><img src="/img-file/${humanChoice}.png" /><span
            >Computer Move</span
          ><img src="/img-file/${computerChoice}.png" alt="" />`;
    document.querySelector(".win-lose").textContent = "YOU LOSE!";

    computerScore += 1;
  } else {
    document.querySelector(
      ".player-move-result"
    ).innerHTML = `<span>Your Move</span><img src="/img-file/${humanChoice}.png" /><span
            >Computer Move</span
          ><img src="/img-file/${computerChoice}.png" alt="" />`;
    document.querySelector(".win-lose").textContent = "YOU WIN!";

    humanScore += 1;
  }
}

function playGame(computerChoice, humanChoice) {
  playFiveRound++;
  const humanSelection = humanChoice;
  const computerSelection = computerChoice;
  playRound(computerChoice, humanChoice);

  if (playFiveRound === 5) {
    if (humanScore > computerScore) {
      document.querySelector(
        ".fiveRound"
      ).textContent = `5 rounds complete you win!`;
    } else if (humanScore < computerScore) {
      document.querySelector(
        ".fiveRound"
      ).textContent = `5 rounds complete you lose!`;
    } else {
      document.querySelector(
        ".fiveRound"
      ).textContent = `5 rounds complete you tie!`;
    }
  } else if (playFiveRound >= 5) {
    playFiveRound = 0;
    humanScore = 0;
    computerScore = 0;
    draw = 0;
  }
  document.querySelector(
    ".result-text"
  ).textContent = `Round Play : ${playFiveRound}`;

  document.querySelector(
    ".score"
  ).textContent = `human score ${humanScore} - computer score ${computerScore} - draw ${draw}`;
  console.log(`Play round ${playFiveRound}`);
}

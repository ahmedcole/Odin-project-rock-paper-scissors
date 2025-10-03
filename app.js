// computer choice logic

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

// human input choice logic
function getHumanChoice() {
  let userInput = prompt("Please enter your move! ");
  if (userInput === null || userInput === "") {
    userInput = prompt("input your move!");
  } else {
    userInput.toLowerCase();
  }
  return userInput;
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;
let playFiveRound = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie");
    draw += 1;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("you lose!, computer win!");
    computerScore += 1;
  } else {
    console.log("you win!, computer lose!");
    humanScore += 1;
  }
}

let btn = document.querySelector("button");
btn.addEventListener("click", playGame);

function playGame() {
  playFiveRound++;
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(
    `human score ${humanScore} - computer score ${computerScore} - draw ${draw}`
  );
  console.log(`Play round ${playFiveRound}`);
  if (playFiveRound === 5) {
    if (humanScore > computerScore) {
      console.log("5 rounds complete you win!");
    } else if (humanScore < computerScore) {
      console.log("5 rounds complete you lose!");
    } else {
      console.log("5 rounds compete it's a tie");
    }
  } else if (playFiveRound > 5) {
    playFiveRound = 0;
  }
}

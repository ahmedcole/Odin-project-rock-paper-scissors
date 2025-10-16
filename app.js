const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// // computer choice logic

// function getComputerChoice() {
//   let generateMove = Math.floor(Math.random() * 3);
//   let computerMove = undefined;
//   if (generateMove === 0) {
//     computerMove = "rock";
//   } else if (generateMove === 1) {
//     computerMove = "paper";
//   } else {
//     computerMove = "scissors";
//   }

//   return computerMove;
// }

// // human input choice logic
// rockBtn.addEventListener("click", () => {
//   getHumanChoice("rock");
//   playGame();
// });
// paperBtn.addEventListener("click", () => {
//   getHumanChoice("paper");
//   playGame();
// });
// scissorsBtn.addEventListener("click", () => {
//   getHumanChoice("scissors");
//   playGame();
// });


// function getHumanChoice(playerMove) {
//   console.log(playerMove);
//   return playerMove;
// }

let humanScore = 0;
let computerScore = 0;
let draw = 0;
let playFiveRound = 0;

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === computerChoice) {
//     console.log(
//       `Tie you pick ${humanChoice} and computer pick ${computerChoice}`
//     );
//     draw += 1;
//   } else if (
//     (humanChoice === "rock" && computerChoice === "paper") ||
//     (humanChoice === "paper" && computerChoice === "scissors") ||
//     (humanChoice === "scissors" && computerChoice === "rock")
//   ) {
//     console.log(
//       `you lose!, computer win! you pick ${humanChoice} and computer pick ${computerChoice} `
//     );
//     computerScore += 1;
//   } else {
//     console.log(
//       `you win!, computer lose! you pick ${humanChoice} and computer pick ${computerChoice}`
//     );
//     humanScore += 1;
//   }
// }



// function playGame() {
//   playFiveRound++;
//   const humanSelection = getHumanChoice();
//   console.log(`${humanSelection} humanSelection line 72 playGame()`);
//   const computerSelection = getComputerChoice();
//   playRound(humanSelection, computerSelection);

//   if (playFiveRound === 5) {
//     if (humanScore > computerScore) {
//       console.log("5 rounds complete you win!");
//     } else if (humanScore < computerScore) {
//       console.log("5 rounds complete you lose!");
//     } else {
//       console.log("5 rounds compete it's a tie");
//     }
//   } else if (playFiveRound > 5) {
//     playFiveRound = 0;
//     humanScore = 0;
//     computerScore = 0;
//     draw = 0;
//   }
//   console.log(
//     `human score ${humanScore} - computer score ${computerScore} - draw ${draw}`
//   );
//   console.log(`Play round ${playFiveRound}`);
// }
